<?php
namespace Lib;

class DatabaseAPI extends Base {

	private $db;

	public function __construct() {
		$connect = new \mysqli(DBHOST, DBUSER, DBPASS, DBNAME);
		$this->db = $connect;
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
		$sql = "SELECT `id`, `openid`, `mobile`, `money`, `timeint` FROM `chivas_info` WHERE `openid` = ?"; 
		$res = $this->db->prepare($sql);
		$res->bind_param("s", $openid);
		$res->execute();
		$res->bind_result($uid, $openid, $mobile, $money, $timeint);
		if($res->fetch()) {
			$user = new \stdClass();
			$user->uid = $uid;
			$user->openid = $openid;
			$user->mobile = $mobile;
			$user->money = $money;
			$user->timeint = $timeint;
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

	public function saveMoney($uid, $mobile, $money, $timeint) {
		$sql = "UPDATE `chivas_info` SET `mobile` = ?, `money` = ?, `timeint` = ? WHERE `id` = ?";
		$res = $this->db->prepare($sql); 
		$res->bind_param("ssss", $mobile, $money, $timeint, $uid);
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
		$sql = "SELECT status,money  FROM `chivas_info` WHERE `id` = ?"; 
		$res = $this->db->prepare($sql);
		$res->bind_param("s", $uid);
		$res->execute();
		$res->bind_result($status, $money);
		if($res->fetch()) {
			$data = new \stdClass();
			$data->status = $status;
			$data->money = $money;
			return $data;
		}
		return FALSE;
	}

	public function updateStatusByUid($uid) {
		$sql = "UPDATE `chivas_info` SET status=1 WHERE `id` = ?"; 
		$res = $this->db->prepare($sql);
		$res->bind_param("s", $uid);
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

	

}
