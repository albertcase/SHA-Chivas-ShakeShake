<?php
namespace ChivasBundle;

use Core\Controller;


class CurioController extends Controller {

	public function indexAction() {	
	    exit;	
		$client_id = 'de840778-be0a-47d2-a0a1-0334f7b85577';
		$client_secret = '49228f94-f293-4a0f-a3bb-a981e15885cf';
		$oauth_url = 'http://extra.chivas.com.cn/curio/oauth';
		$redirectUrl= 'http://curio.im/oapi/authorize?redirect_uri='. $oauth_url. '&client_id='. $client_id.
			'&response_type=code';
		$this->redirect($redirectUrl);
		exit;
	}

	public function oauthAction() {	
		exit;		
		$client_id = 'de840778-be0a-47d2-a0a1-0334f7b85577';
		$client_secret = '49228f94-f293-4a0f-a3bb-a981e15885cf';
		$oauth_url = 'http://extra.chivas.com.cn/curio/oauth';

		$request = $this->Request();
		$fields = array(
			'code' => array('notnull', '110'),
		);
		$request->validation($fields);
		$code = $request->query->get('code');
		$requestUrl = 'http://curio.im/oapi/access_token?client_id='. $client_id. '&client_secret='. $client_secret.
			'&redirect_uri='. $oauth_url. '&grant_type=authorization_code&code='. $code;
		echo $result = file_get_contents($requestUrl);
		$databaseAPI = new \Lib\DatabaseAPI();
		var_dump($databaseAPI->insertCurio($result));
		exit;
	}

	public function regoauthAction() {
		exit;	
		$weixin_id = 'b9e97f4c56673870c597a13a5ef6e87e';
		$access_token = 'ff722b49-b508-4922-9541-60efe20a05f8';
		$api_url = 'http://oauth.curio.im/v1/wx/web/register?access_token='. $access_token;
		// 参数数组
		$data = array(
		        'callback_url' => 'http://extra.chivas.com.cn/curio/callback',
				'redirect_url' => 'http://extra.chivas.com.cn/curio/redirect',
				'scope' => 'base'
		);	 
		$ch = curl_init ();
		// print_r($ch);
		curl_setopt ( $ch, CURLOPT_URL, $api_url );
		curl_setopt ( $ch, CURLOPT_POST, 1 );
		curl_setopt ( $ch, CURLOPT_HEADER, 0 );
		curl_setopt ( $ch, CURLOPT_RETURNTRANSFER, 1 );
		curl_setopt ( $ch, CURLOPT_POSTFIELDS, json_encode($data) );
		$return = curl_exec ( $ch );
		curl_close ( $ch );
		echo $return;
		exit;
	}

	public function regjsAction() {
		exit;	
		$weixin_id = 'b9e97f4c56673870c597a13a5ef6e87e';
		$access_token = 'ff722b49-b508-4922-9541-60efe20a05f8';
		$api_url = 'http://wechatjs.curio.im/api/v1/register?access_token='. $access_token;
		// 参数数组
		$data = array(
		        'name' => '芝华士红包分享',
				'domain' => 'http://extra.chivas.com.cn'
		);
		 
		$ch = curl_init ();
		// print_r($ch);
		curl_setopt ( $ch, CURLOPT_URL, $api_url );
		curl_setopt ( $ch, CURLOPT_POST, 1 );
		curl_setopt ( $ch, CURLOPT_HEADER, 0 );
		curl_setopt ( $ch, CURLOPT_RETURNTRANSFER, 1 );
		curl_setopt ( $ch, CURLOPT_POSTFIELDS, json_encode($data) );
		$return = curl_exec ( $ch );
		curl_close ( $ch );
		echo $return;
		exit;
	}

	public function regqrcodeAction() {
		exit;	
		$weixin_id = 'b9e97f4c56673870c597a13a5ef6e87e';
		$access_token = 'ff722b49-b508-4922-9541-60efe20a05f8';
		$api_url = 'http://api.curio.im/v2/wx/pubsub/subscribe?access_token='. $access_token;
		// 参数数组
		$data = array(
		        'url' => 'http://extra.chivas.com.cn/curio/qrcode',
				'type' => 'request',
				'scope' => 'event:qrsubscribe'
		);
		 
		$ch = curl_init ();
		// print_r($ch);
		curl_setopt ( $ch, CURLOPT_URL, $api_url );
		curl_setopt ( $ch, CURLOPT_POST, 1 );
		curl_setopt ( $ch, CURLOPT_HEADER, 0 );
		curl_setopt ( $ch, CURLOPT_RETURNTRANSFER, 1 );
		curl_setopt ( $ch, CURLOPT_POSTFIELDS, json_encode($data) );
		$return = curl_exec ( $ch );
		curl_close ( $ch );
		echo $return;
		exit;
	}

	public function regscanAction() {
		exit;	
		$weixin_id = 'b9e97f4c56673870c597a13a5ef6e87e';
		$access_token = 'ff722b49-b508-4922-9541-60efe20a05f8';
		$api_url = 'http://api.curio.im/v2/wx/pubsub/subscribe?access_token='. $access_token;
		// 参数数组
		$data = array(
		        'url' => 'http://extra.chivas.com.cn/curio/scan',
				'type' => 'request',
				'scope' => 'event:SCAN'
		);
		 
		$ch = curl_init ();
		// print_r($ch);
		curl_setopt ( $ch, CURLOPT_URL, $api_url );
		curl_setopt ( $ch, CURLOPT_POST, 1 );
		curl_setopt ( $ch, CURLOPT_HEADER, 0 );
		curl_setopt ( $ch, CURLOPT_RETURNTRANSFER, 1 );
		curl_setopt ( $ch, CURLOPT_POSTFIELDS, json_encode($data) );
		$return = curl_exec ( $ch );
		curl_close ( $ch );
		echo $return;
		exit;
	}

	public function qrcodeAction() {
		//exit;
		if (isset($GLOBALS['HTTP_RAW_POST_DATA'])) {
			$data = $GLOBALS['HTTP_RAW_POST_DATA'];
			$postObj = simplexml_load_string($data, 'SimpleXMLElement', LIBXML_NOCDATA);
			if ($postObj->EventKey == 'qrscene_76123') {
				$DatabaseAPI = new \Lib\DatabaseAPI();
				$DatabaseAPI->saveScan($data, 1);
				
				$openid = $postObj->FromUserName;
				$user = $DatabaseAPI->findUserByOpenid($openid);
				if (!$user) {
					return $this->statusPrint(5, '无该用户信息');
				}
				$data = $DatabaseAPI->loadStatusAndMoneyByUid($user->uid);
				if (!$data) {
					return $this->statusPrint(2, '无领取纪录');
				}
				$DatabaseAPI->updateStatusByUid($data->id);
				$redpacket = new \Lib\RedpacketAPI();
				$redpacket->sendredpack($user->uid, $user->openid, $data->money);
				if ($data->id <= 26560) {
					$source_name = '0461efd4bb1fa3ccc72b96cbd8eccfd4';
				} else {
					$source_name = '13518913f848630550294752ea784b24';
				}
				$RedisAPI = new \Lib\AcxiomAPI();
				$RedisAPI->sendLog($source_name, $user->openid, $user->mobile, $data->city, '20015', $data->storenum);
				return $this->statusPrint(1, '已领取');
			}
			if ($postObj->EventKey == '76123') {
				$DatabaseAPI = new \Lib\DatabaseAPI();
				$DatabaseAPI->saveScan($data, 2);

				$openid = $postObj->FromUserName;
				$user = $DatabaseAPI->findUserByOpenid($openid);
				if (!$user) {
					return $this->statusPrint(5, '无该用户信息');
				}
				$data = $DatabaseAPI->loadStatusAndMoneyByUid($user->uid);
				if (!$data) {
					return $this->statusPrint(2, '无领取纪录');
				}
				$DatabaseAPI->updateStatusByUid($data->id);
				$redpacket = new \Lib\RedpacketAPI();
				$redpacket->sendredpack($user->uid, $user->openid, $data->money);
				if ($data->id <= 26560) {
					$source_name = '0461efd4bb1fa3ccc72b96cbd8eccfd4';
				} else {
					$source_name = '13518913f848630550294752ea784b24';
				}
				$RedisAPI = new \Lib\AcxiomAPI();
				$RedisAPI->sendLog($source_name, $user->openid, $user->mobile, $data->city, '20015', $data->storenum);
				return $this->statusPrint(1, '已领取');
			}
			return $this->statusPrint(4, '二维码场景值不正确');
		}
		return $this->statusPrint(3, '无请求信息');
	}

	public function scanAction() {
		//exit;	
		$data = $GLOBALS['HTTP_RAW_POST_DATA'];
		$postObj = simplexml_load_string($data, 'SimpleXMLElement', LIBXML_NOCDATA);
		if ($postObj->EventKey == '76123') {
			$DatabaseAPI = new \Lib\DatabaseAPI();
			$DatabaseAPI->saveScan($data, 2);

			$openid = $postObj->FromUserName;
			$user = $DatabaseAPI->findUserByOpenid($openid);
			$data = $DatabaseAPI->loadStatusAndMoneyByUid($user->uid);
			if (!$data) {
				return $this->statusPrint(2, '非法请求');
			}
			$DatabaseAPI->updateStatusByUid($data->id);
			$redpacket = new \Lib\RedpacketAPI();
			$redpacket->sendredpack($user->uid, $user->openid, $data->money);
			return $this->statusPrint(1, '已领取');
		}
		exit;
	}

	public function callbackAction() {		
		
		$openid = $_GET['openid'];
		$user = new \Lib\UserAPI();
		$user->userLogin($openid);
		if (isset($_SESSION['redirect_url'])) {
			$this->redirect($_SESSION['redirect_url']);
			exit;
		}
		$this->redirect('/');
		exit;
	}

	public function savedataAction() {		
		$data = $GLOBALS['HTTP_RAW_POST_DATA'];
		
		// $data = json_decode($data, true);
		// $DatabaseAPI = new \Lib\DatabaseAPI();
		// $DatabaseAPI->regUser($data['data']['openid'], $data['data']['nickname'], $data['data']['headimgurl']);
		exit;
	}


}
