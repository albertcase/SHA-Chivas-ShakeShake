<?php
namespace Lib;

class Base {

	public $_access_token;

	public function __construct($access_token = '') {
		$this->_access_token = $access_token;
	}	

	protected function postData($url, $post_json) {
		// post data to wechat
		$ch = curl_init();
		curl_setopt($ch, CURLOPT_URL, $url);
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
		curl_setopt($ch, CURLOPT_POST, 1);
		curl_setopt($ch, CURLOPT_HTTPHEADER, array("Content-Type: application/json; charset=utf-8"));
		curl_setopt($ch, CURLOPT_POSTFIELDS, $post_json);
		$data = curl_exec($ch);
		curl_close($ch);
		return json_decode($data);
	}	

	protected function postAcxiomData($url, $post_json) {
		$ch = curl_init();
		curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);
        curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, FALSE);
		curl_setopt($ch, CURLOPT_URL, $url);
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
		curl_setopt($ch, CURLOPT_POST, 1);
		curl_setopt($ch, CURLOPT_SSL_CIPHER_LIST, 'TLSv1');
		//curl_setopt($ch, CURLOPT_SSLCERT,'/data/webown/sites/cert/acxiom.crt');
		curl_setopt($ch, CURLOPT_HTTPHEADER, array("Content-Type: application/json; charset=utf-8"));
		curl_setopt($ch, CURLOPT_POSTFIELDS, $post_json);
		$data = curl_exec($ch);
		curl_close($ch);
		return $data;
	}

	protected function postSSLData($url, $postData) {
		$ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_POST, 1);
        curl_setopt($ch, CURLOPT_HEADER, 0);
        curl_setopt($ch, CURLOPT_SSLCERT,'/data/webown/cert/apiclient_cert.pem');
        curl_setopt($ch, CURLOPT_SSLKEY,'/data/webown/cert/apiclient_key.pem'); 
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $postData);
        $data = curl_exec($ch);
        curl_close($ch);
        return $data;
	}	
}