<?php
namespace ChivasBundle;

use Core\Controller;


class ApiController extends Controller {

	public function testAction() {
		 $redpacket = new \Lib\RedpacketAPI();
		 $redpacket->sendredpack('o3vWouHPZ73bIf5jyIZ9xea9fEfg');
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
		$money = rand(100 , 500);
		$DatabaseAPI->saveMoney($codeInfo->id, $uid, $money, 0);
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
		$money = rand(100 , 500);
		$DatabaseAPI->saveMoney($codeInfo->id, $uid, $money, 0);
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
			return $this->statusPrint(1, 1);
		}
		//未关注
		return $this->statusPrint(1, 0);
	}
}
