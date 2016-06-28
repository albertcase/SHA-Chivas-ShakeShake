<?php
namespace Lib;

class AcxiomAPI extends Base {

	//public $apiUrl = 'https://uat10.acxiom.com.cn';
    public $apiUrl = 'https://uat01.acxiom.com.cn/PRC/rest/customer/dataCollect';
    //public $apiUrl = 'https://prcws.acxiom.com.cn/PRC/rest/customer/dataCollect';
    public function sendLog($source_name, $openid, $cellphone, $city, $preferredDrinkingPlace, $storeCode){
        //$start = $this->getMillisecond();
        $ws = $this->apiUrl;
        $ts = date("Y-m-d H:i:s");
        $sign = md5(md5("PRC".$ts).$ts);
        $data = array(
            'ts' => $ts,
            'sign' => $sign,
            'source_name' => $source_name, 
            'openId' => $openid,
            'cellphone' => $cellphone,
            'city' => $city,
            'preferredDrinkingPlace' => $preferredDrinkingPlace,
            'storeCode' =>  $storeCode
        );
        $result = $this->postAcxiomData($ws, json_encode($data));
        return $result;
    }

    public function getMillisecond() {
        list($t1, $t2) = explode(' ', microtime());
        return (float)sprintf('%.0f',(floatval($t1)+floatval($t2))*1000);
    }
}
