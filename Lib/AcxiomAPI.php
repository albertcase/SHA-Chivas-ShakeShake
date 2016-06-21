<?php
namespace Lib;

class AcxiomAPI extends Base {

	//public $apiUrl = 'https://uat10.acxiom.com.cn';
    public $apiUrl = 'https://uat01.acxiom.com.cn/PRC/rest/customer/dataCollect';
    public function sendLog(){
        //$start = $this->getMillisecond();
        $ws = $this->apiUrl;
        echo $ts = time();
        echo "<br>";
        echo $sign = md5(md5("PRC".$ts).$ts);
        echo "<br>";
        $data = array(
            'ts' => $ts,
            'sign' => $sign,
            'source_name' => '0461efd4bb1fa3ccc72b96cbd8eccfd4', 
            'openId' => '123',
            'cellphone' => '15000000000',
            'city' => '上海',
            'preferredDrinkingPlace' => '20015',
            'storeCode' => 'SH01'
        );
        //$result = $this->postAcxiomData($ws, json_encode($data));
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $ws);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_POST, 1);
        curl_setopt($ch, CURLOPT_HTTPHEADER, array("Content-Type: application/json; charset=utf-8"));
        curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
        $result = curl_exec($ch);
        curl_close($ch);
        var_dump($result);
        echo "<pre>";
        print_r($data);
        exit;
    }

    public function getMillisecond() {
        list($t1, $t2) = explode(' ', microtime());
        return (float)sprintf('%.0f',(floatval($t1)+floatval($t2))*1000);
    }
}
