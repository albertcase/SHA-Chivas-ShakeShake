<?php
namespace Lib;

class AcxiomAPI extends Base {

	//public $apiUrl = 'https://uat10.acxiom.com.cn';
    //public $apiUrl = 'https://uat01.acxiom.com.cn/PRC/rest/customer/dataCollect';
    public $apiUrl = 'http://www.baidu.com';
    public function sendLog(){
        //$start = $this->getMillisecond();
        $ws = $this->apiUrl;
        $ts = time();
        $sign = md5(md5("PRC".$ts).$ts);
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
        $result = $this->postAcxiomData($ws, json_encode($data));
        var_dump($result);
        echo 1;exit;
        //$end = $this->getMillisecond();
        //$usetime = $end - $start;
        $rs = json_decode($result, true);
        //$RedisAPI = new \Lib\RedisAPI();
        //$RedisAPI->saveAcxiomLog('sendverifycode', json_encode($data), $rs['responseCode'], $rs['responseDesc'], $result, $start, $end, $usetime);
        if ( $rs['responseCode'] == "200" ) {
        	return array('code' => '1' , 'msg' => $rs['data']['status'], 'verifycode' => $rs['data']['verifycode']);
        }
        return array('code' => '2' , 'msg' => $rs['responseDesc']);
    }

    public function getMillisecond() {
        list($t1, $t2) = explode(' ', microtime());
        return (float)sprintf('%.0f',(floatval($t1)+floatval($t2))*1000);
    }
}
