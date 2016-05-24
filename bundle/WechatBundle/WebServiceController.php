<?php
namespace WechatBundle;

use Core\Controller;

class WebServiceController extends Controller {

	public function __construct() {
		// $this->addListener('on.request', new WechatListener(), 'afterRecieved');
		// $this->addListener('on.request', new WechatListener(), 'afterRecieved');
		// $this->addListener('on.request', new WechatListener(), 'afterRecieved');
	}

	public function oauth() {
		$request = $this->Request();
		$fields = array(
			'redirect_uri' => array('notnull', '110'),
			'scope' => array('notnull', '111'),
		);
		$request->validation($fields);
		$redirect_uri = $request->query->get('redirect_uri');
		$scope = $request->query->get('scope');
		$wechatUserAPI = new \Lib\UserAPI();
		$param['redirect_uri'] = $redirect_uri;
		$param['scope'] = $scope;
		$callback = BASE_URL . CALLBACK . '?' . http_build_query($param);
		$url = $wechatUserAPI->getAuthorizeUrl(APPID, $callback, $scope);
		$this->redirect($url);	
	}

	public function callback() {
		$request = $this->Request();
		$fields = array(
			'redirect_uri' => array('notnull', '120'),
			'code' => array('notnull', '121'),
		);
		$request->validation($fields);
		$redirect_uri = $request->query->get('redirect_uri');
		$code = $request->query->get('code');
		$url = urldecode($redirect_uri);
		//valid
		$this->hostValid($url);
		$wechatUserAPI = new \Lib\UserAPI();
  		$access_token = $wechatUserAPI->getSnsAccessToken($code, APPID, APPSECRET);
		if(isset($access_token->openid)) {
			$param = array();
			if($access_token->scope == 'snsapi_base') {
				$param['openid'] = $access_token->openid;
			} 
			if($access_token->scope == 'snsapi_userinfo') {
				$param['openid'] = $access_token->openid;
				$param['access_token'] = $access_token->access_token;
			}
			$rediect_uri = $this->generateRedirectUrl($url, $param);
			$this->redirect($rediect_uri);
		}
	}

	/**
	 * Generate redirect uri
	 */
	public function generateRedirectUrl($url, $param) {
		$query = http_build_query($param);
		$question = "?{$query}&";
		$url = preg_replace('/\?/', $question, $url, 1, $count);
		if($count) {
			return $url;
		} 
		$hastag = "?{$query}#";
		$url = preg_replace('/\#/', $hastag, $url, 1, $count);
		if($count) {
			return $url;
		}
		$default = "?{$query}";
		return $url . $default;
	}

	/**
	 * JSSDK Webservice
	 */
	public function jssdkConfigWebService() {
		$request = $this->Request();
		$fields = array(
		    'url' => array('notnull', '120'),
	    );
		$request->validation($fields);
		$url = urldecode($request->query->get('url'));
	  	$this->hostValid($url);
	  	$config = $this->jssdkConfig($url);
	  	$this->dataPrint(array('status' => '1', 'data' => $config));
	}

	/**
	 * JSSDK JS
	 */
	public function jssdkConfigJs() {
		$request = $this->Request();
		$fields = array(
		    'url' => array('notnull', '120'),
	    );
		$request->validation($fields);
		$url = urldecode($request->query->get('url'));
	  	$this->hostValid($url);
	  	$config = $this->jssdkConfig($url);
	  	$json = json_encode(array('status' => '1', 'data' => $config));
	  	print "SignWeiXinJs({$json})";
	  	exit;
	}

	public function jssdkConfig($url) {
		$RedisAPI = new \Lib\RedisAPI();
		$jsapi_ticket = $RedisAPI->getJSApiTicket();
		$wechatJSSDKAPI = new \Lib\JSSDKAPI();
		return $wechatJSSDKAPI->getJSSDKConfig(APPID, $jsapi_ticket, $url);
	}

	public function hostValid($url, $type = OAUTH_ACCESS) {
		$parse_url = parse_url($url);
		if(!isset($parse_url['host']) || !in_array($parse_url['host'], (array)json_decode($type))) {
			$this->statusPrint('101', 'the host is invalid');
		}		
	}
}
