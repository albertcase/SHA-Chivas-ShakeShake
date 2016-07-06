<?php
namespace ChivasBundle;

use Core\Controller;


class ApiController extends Controller {

	public function testAction() {
		//$databaseAPI = new \Lib\DatabaseAPI();
		//echo $number = $databaseAPI->runCode(75620);
		$RedisAPI = new \Lib\AcxiomAPI();
		echo "<pre>";
		$rs = $RedisAPI->sendLog('0461efd4bb1fa3ccc72b96cbd8eccfd4', '123', '15121038676', '上海', '20015', 'SH01');
		var_dump($rs);
		$rs = $RedisAPI->sendLog('13518913f848630550294752ea784b24', '456', '15121038676', '上海', '20015', 'SH02');
		var_dump($rs);
		$rs = $RedisAPI->sendLog('268b040fe2e264e089b0f905a23d448d', '789', '15121038676', '上海', '20016', 'SH03');
		var_dump($rs);
		exit;
	}

	public function flushAction() {
		 $RedisAPI = new \Lib\RedisAPI();
		 $RedisAPI->flushAll();
		exit;
	}

	public function isloginAction() {
		$UserAPI = new \Lib\UserAPI();
		$user = $UserAPI->userLoad(true);
		if (!$user) {
			return $this->statusPrint(0, '未登录');
		}
		$DatabaseAPI = new \Lib\DatabaseAPI();
		$data = $DatabaseAPI->loadStatusAndMoneyByUid($user->uid);
		if (!$data) {
			return $this->statusPrint(1, array("money" => 0, "mobile" => $user->mobile));
		}
		return $this->statusPrint(1, array("money" => $data->money, "mobile" => $user->mobile));
	}

	public function checkAction() {
		$UserAPI = new \Lib\UserAPI();
		$user = $UserAPI->userLoad(true);
		if (!$user) {
			return $this->statusPrint(0, '未登录');
		}

		if (isset($_SESSION['msg_time']) && NOWTIME - $_SESSION['msg_time'] <= 60) {
			return $this->statusPrint(3, '短信已经发出');
		}
		$request = $this->Request();
		$fields = array(
			'mobile' => array('mobile', '2'),
		);
		$request->validation($fields);
		$mobile = $request->request->get('mobile');
		$sms = new \Lib\SmsAPI();
		$code = $sms->sendMessage($user->uid, $mobile);
		$_SESSION['msg_time'] = NOWTIME;
		$_SESSION['msg_code'] = $code;
		return $this->statusPrint(1, '提交成功');
	}


	public function submitAction() {
		$UserAPI = new \Lib\UserAPI();
		$user = $UserAPI->userLoad(true);
		if (!$user) {
			return $this->statusPrint(0, '未登录');
		}

		if (!isset($_SESSION['msg_code'])) {
			return $this->statusPrint(3, '请先请求验证码');
		}
		$request = $this->Request();
		$fields = array(
			'mobile' => array('mobile', '3'),
			'checknum' => array('notnull', '3'),
			'code' => array('notnull', '3'),
		);
		$request->validation($fields);
		$mobile = $request->request->get('mobile');
		$checknum = $request->request->get('checknum');
		$code = $request->request->get('code');
		if ($checknum != $_SESSION['msg_code']) {
			return $this->statusPrint(4, '验证码不正确');
		}

		$DatabaseAPI = new \Lib\DatabaseAPI();

		$codeInfo = $DatabaseAPI->checkCode($code);
		if (!$codeInfo) {
			return $this->statusPrint(5, '兑换码不存在');
		}
		if ($codeInfo->uid != 0) {
			return $this->statusPrint(6, '兑换码已被使用');
		}
		//销毁验证码
		unset($_SESSION['msg_time']);
		unset($_SESSION['msg_code']);
		//纪录手机号
		$DatabaseAPI->saveMobile($user->uid, $mobile);
		$user->mobile = $mobile;
		$_SESSION['user'] = $user;
		
		if ( $codeInfo->id <= 26560 ) {
			//bar
			$rand = rand(1 , 26560);
			if ( $rand <= 70 ) {
				$money = 10000;
				$count = $DatabaseAPI->loadMoneyCount($codeInfo->id, 10000);
				if ($count >= 70) {
					$money = 500;
				}
			} else if ( $rand > 70 && $rand <= 180 ) {
				$money = 1000;
				$count = $DatabaseAPI->loadMoneyCount($codeInfo->id, 1000);
				if ($count >= 110) {
					$money = 500;
				}
			} else {
				$money = 500;
			}

		} else {
			//ktv
			$rand = rand(1 , 49060);
			if ( $rand <= 1000 ) {
				$money = 10000;
				$count = $DatabaseAPI->loadMoneyCount($codeInfo->id, 10000);
				if ($count >= 1000) {
					$money = 500;
				}
			} else if ( $rand > 1000 && $rand <= 3000 ) {
				$money = 5000;
				$count = $DatabaseAPI->loadMoneyCount($codeInfo->id, 5000);
				if ($count >= 2000) {
					$money = 500;
				}
			} else if ( $rand > 3000 && $rand <= 8000 ) {
				$money = 2000;
				$count = $DatabaseAPI->loadMoneyCount($codeInfo->id, 2000);
				if ($count >= 5000) {
					$money = 500;
				}
			} else {
				$money = 1000;
			}
		}
		
		$DatabaseAPI->saveMoney($codeInfo->id, $user->uid, $money, 0);
		return $this->statusPrint(1, $money);
	
	}

	public function submit2Action() {
		$UserAPI = new \Lib\UserAPI();
		$user = $UserAPI->userLoad(true);
		if (!$user) {
			return $this->statusPrint(0, '未登录');
		}
		$request = $this->Request();
		$fields = array(
			'mobile' => array('mobile', '3'),
			'code' => array('notnull', '3'),
		);
		$request->validation($fields);
		$mobile = $request->request->get('mobile');
		$code = $request->request->get('code');
		$DatabaseAPI = new \Lib\DatabaseAPI();

		$codeInfo = $DatabaseAPI->checkCode($code);
		if (!$codeInfo) {
			return $this->statusPrint(5, '兑换码不存在');
		}
		if ($codeInfo->uid != 0) {
			return $this->statusPrint(6, '兑换码已被使用');
		}
		//销毁验证码
		unset($_SESSION['msg_time']);
		unset($_SESSION['msg_code']);
		if ( $codeInfo->id <= 26560 ) {
			//bar
			$rand = rand(1 , 26560);
			if ( $rand <= 70 ) {
				$money = 10000;
				$count = $DatabaseAPI->loadMoneyCount($codeInfo->id, 10000);
				if ($count >= 70) {
					$money = 500;
				}
			} else if ( $rand > 70 && $rand <= 180 ) {
				$money = 1000;
				$count = $DatabaseAPI->loadMoneyCount($codeInfo->id, 1000);
				if ($count >= 110) {
					$money = 500;
				}
			} else {
				$money = 500;
			}

		} else {
			//ktv
			$rand = rand(1 , 49060);
			if ( $rand <= 1000 ) {
				$money = 5000;
				$count = $DatabaseAPI->loadMoneyCount($codeInfo->id, 5000);
				if ($count >= 1000) {
					$money = 600;
				}
			} else if ( $rand > 1000 && $rand <= 3000 ) {
				$money = 2000;
				$count = $DatabaseAPI->loadMoneyCount($codeInfo->id, 2000);
				if ($count >= 2000) {
					$money = 600;
				}
			} else if ( $rand > 3000 && $rand <= 7000 ) {
				$money = 1000;
				$count = $DatabaseAPI->loadMoneyCount($codeInfo->id, 1000);
				if ($count >= 4000) {
					$money = 600;
				}
			} else {
				$money = 600;
			}
		}
		$DatabaseAPI->saveMoney($codeInfo->id, $user->uid, $money, 0);
		return $this->statusPrint(1, $money);
	}

	public function getredpacketAction() {
		$UserAPI = new \Lib\UserAPI();
		$user = $UserAPI->userLoad(true);
		if (!$user) {
			return $this->statusPrint(0, '未登录');
		}
		$wechatapi = new \Lib\WechatAPI();
		$subscribe = $wechatapi->isUserSubscribed($user->openid);
		if ($subscribe) {
			//已关注 直接发红包
			$DatabaseAPI = new \Lib\DatabaseAPI();
			$data = $DatabaseAPI->loadStatusAndMoneyByUid($user->uid);
			if (!$data) {
				return $this->statusPrint(2, '非法请求');
			}
			$DatabaseAPI->updateStatusByUid($data->id);
			$redpacket = new \Lib\RedpacketAPI();
			$redpacket->sendredpack($user->uid, $user->openid, $data->money);
			return $this->statusPrint(1, '已领取');
		}
		//未关注
		return $this->statusPrint(1, '未领取');
	}
}
