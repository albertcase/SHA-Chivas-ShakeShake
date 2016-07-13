<?php
namespace Lib;

class DatabaseAPI extends Base {

	private $db;

	public function __construct() {
		$connect = new \mysqli(DBHOST, DBUSER, DBPASS, DBNAME);
		$this->db = $connect;
		$this->db->query('SET NAMES UTF8');
	}

	public function insertCurio($result) {
		$sql = "INSERT INTO `curio_result` SET `result` = ?";
		$res = $this->db->prepare($sql); 
		$res->bind_param("s", $result);
		if ($res->execute()) {
			return TRUE;
		} else {
			return FALSE;
		}
	}

	public function insertUser($openid) {
		$user = $this->findUserByOpenid($openid);
		if ($user) {
			return $user;
		}
		$sql = "INSERT INTO `chivas_info` SET `openid` = ?";
		$res = $this->db->prepare($sql); 
		$res->bind_param("s", $openid);
		if ($res->execute()) {
			return $this->findUserByOpenid($openid);
		} else {
			return FALSE;
		}
	}

	public function regUser($openid, $nickname, $headimgurl) {
		if ($this->findUserByOauth($openid)) {
			return TRUE;
		}
		$sql = "INSERT INTO `chivas_oauth` SET `openid` = ?, nickname = ?, headimgurl = ?";
		$res = $this->db->prepare($sql); 
		$res->bind_param("sss", $openid, $nickname, $headimgurl);
		if ($res->execute()) {
			return TRUE;
		} else {
			return FALSE;
		}
	}

	public function findUserByOauth($openid) {
		$sql = "SELECT id  FROM `chivas_oauth` WHERE `openid` = ?"; 
		$res = $this->db->prepare($sql);
		$res->bind_param("s", $openid);
		$res->execute();
		$res->bind_result($uid);
		if($res->fetch()) {
			return TRUE;
		}
		return FALSE;
	}

	public function findUserByOpenid($openid) {
		if (isset($_SESSION['user'])) {
			return $_SESSION['user'];
		}
		$sql = "SELECT `id`, `openid`, `mobile` FROM `chivas_info` WHERE `openid` = ?"; 
		$res = $this->db->prepare($sql);
		$res->bind_param("s", $openid);
		$res->execute();
		$res->bind_result($uid, $openid, $mobile);
		if($res->fetch()) {
			$user = new \stdClass();
			$user->uid = $uid;
			$user->openid = $openid;
			$user->mobile = $mobile;
			$_SESSION['user'] = $user;
			return $user;
		}
		return NULL;
	}

	public function saveSmsLog($uid, $mobile, $code, $lindid, $msg, $send_rs) {
		$sql = "INSERT INTO `chivas_mobile` SET `uid` = ?, `mobile` = ?, code = ?, lindid = ?, msg = ?, send_rs = ?";
		$res = $this->db->prepare($sql); 
		$res->bind_param("ssssss", $uid, $mobile, $code, $lindid, $msg, $send_rs);
		if ($res->execute()) {
			return TRUE;
		} else {
			return FALSE;
		}
	}

	public function saveScan($data, $type) {
		$sql = "INSERT INTO `chivas_scan` SET `result` = ?, `type` = ?";
		$res = $this->db->prepare($sql); 
		$res->bind_param("ss", $data, $type);
		if ($res->execute()) {
			return TRUE;
		} else {
			return FALSE;
		}
	}

	public function loadMoney() {
		$sql = "SELECT sum(`money`) FROM `chivas_info`"; 
		$res = $this->db->prepare($sql);
		$res->execute();
		$res->bind_result($num);
		if($res->fetch()) {
			return $num;
		}
		return 0;
	}

	public function loadMoneyCount($id, $money) {
		if ( $id <= 26560 ) {
			$where = "id <= 26560";
		} else {
			$where = "id > 26560";
		}
		$sql = "SELECT count(id) FROM `chivas_info` where money = $money and $where"; 
		$res = $this->db->prepare($sql);
		$res->execute();
		$res->bind_result($num);
		if($res->fetch()) {
			return $num;
		}
		return 0;
	}

	public function saveMoney($id, $uid, $money, $status) {
		$sql = "UPDATE `chivas_code` SET `uid` = ?, `money` = ?, `status` = ? WHERE `id` = ?";
		$res = $this->db->prepare($sql); 
		$res->bind_param("ssss", $uid, $money, $status, $id);
		if ($res->execute()) {
			return TRUE;
		} else {
			return FALSE;
		}
	}

	public function loadStatusByUid($uid) {
		$sql = "SELECT status  FROM `chivas_info` WHERE `id` = ?"; 
		$res = $this->db->prepare($sql);
		$res->bind_param("s", $uid);
		$res->execute();
		$res->bind_result($status);
		if($res->fetch()) {
			return $status;
		}
		return FALSE;
	}

	public function loadStatusAndMoneyByUid($uid) {
		$sql = "SELECT id, city, storenum, money FROM `chivas_code` WHERE `uid` = ? and status = 0"; 
		$res = $this->db->prepare($sql);
		$res->bind_param("s", $uid);
		$res->execute();
		$res->bind_result($id, $city, $storenum, $money);
		if($res->fetch()) {
			$data = new \stdClass();
			$data->id = $id;
			$data->city = $city;
			$data->storenum = $storenum;
			$data->money = $money;
			return $data;
		}
		return FALSE;
	}

	public function updateStatusByUid($id) {
		$sql = "UPDATE `chivas_code` SET status=1,usetime='".date("Y-m-d H:i:s")."' WHERE `id` = ?"; 
		$res = $this->db->prepare($sql);
		$res->bind_param("s", $id);
		if ($res->execute()) {
			return TRUE;
		} else {
			return FALSE;
		}
	}

	public function redpacketLog($uid, $openid, $money, $orderid, $result) {
		$postObj = simplexml_load_string($result, 'SimpleXMLElement', LIBXML_NOCDATA);
		$msg = $postObj->result_code;
		if ($msg != 'SUCCESS')
			$msg = $postObj->err_code;
		$sql = "INSERT INTO `chivas_redpacket_log` SET `uid` = ?, `openid` = ?, `money` = ?, `orderid` = ?, `result` = ?, `msg` = ?";
		$res = $this->db->prepare($sql); 

		$res->bind_param("ssssss", $uid, $openid, $money, $orderid, $result, $msg);

		if ($res->execute()) {
			return TRUE;
		} else {
			return FALSE;
		}
	}

	public function findUserForWechat($openid) {
		$sql = "SELECT `id`, `openid`, `mobile`, `money`, `timeint`, `status` FROM `chivas_info` WHERE `openid` = ?"; 
		$res = $this->db->prepare($sql);
		$res->bind_param("s", $openid);
		$res->execute();
		$res->bind_result($uid, $openid, $mobile, $money, $timeint, $status);
		if($res->fetch()) {
			$user = new \stdClass();
			$user->uid = $uid;
			$user->openid = $openid;
			$user->mobile = $mobile;
			$user->money = $money;
			$user->timeint = $timeint;
			$user->status = $status;
			return $user;
		}
		return NULL;
	}

	public function findLog($openid) {
		$sql = "SELECT id FROM `chivas_redpacket_log` WHERE `openid` = ? and `msg` = 'SUCCESS'"; 
		$res = $this->db->prepare($sql);
		$res->bind_param("s", $openid);
		$res->execute();
		$res->bind_result($id);
		if($res->fetch()) {
			return $id;
		}
		return NULL;
	}

	public function checkCode($code) {
		$sql = "SELECT `id`, `uid`, `code`, `money`, `status` FROM `chivas_code` WHERE `code` = ?"; 
		$res = $this->db->prepare($sql);
		$res->bind_param("s", $code);
		$res->execute();
		$res->bind_result($id, $uid, $code, $money, $status);
		if($res->fetch()) {
			$user = new \stdClass();
			$user->id = $id;
			$user->uid = $uid;
			$user->code = $code;
			$user->money = $money;
			$user->status = $status;
			return $user;
		}
		return NULL;
	}

	public function saveMobile($uid, $mobile) {
		$sql = "UPDATE `chivas_info` SET `mobile` = ? WHERE `id` = ?"; 
		$res = $this->db->prepare($sql);
		$res->bind_param("ss", $mobile, $uid);
		if ($res->execute()) {
			return TRUE;
		} else {
			return FALSE;
		}
	}

	public function runCode($number) {
		$str = '346789ABCDEFGHJKLMNPQRTUVWXY';
		for( $j = 0; $j < $number; $j++ ){
			$pb = '';
			for( $i = 0; $i < 5; $i++ ){
				$randval = mt_rand(0, 27);
				$pb .= $str[$randval];
			}
			$sql = "INSERT INTO chivas_code_copy (code) VALUES (?)";
			$res = $this->db->prepare($sql);
			$res->bind_param("s", $pb);
			if (!$res->execute()) {
				$j--;
			}
		}
		return $j;
	}
	

}
