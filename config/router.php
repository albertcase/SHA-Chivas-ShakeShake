<?php

$routers = array();
$routers['/'] = array('ChivasBundle\Site', 'index');
$routers['/api/test'] = array('ChivasBundle\Api', 'test');
$routers['/api/flush'] = array('ChivasBundle\Api', 'flush');
$routers['/api/islogin'] = array('ChivasBundle\Api', 'islogin');
$routers['/api/check'] = array('ChivasBundle\Api', 'check');
$routers['/api/submit'] = array('ChivasBundle\Api', 'submit');
$routers['/api/submit2'] = array('ChivasBundle\Api', 'submit2');
$routers['/api/getredpacket'] = array('ChivasBundle\Api', 'getredpacket');
$routers['/qrcode'] = array('ChivasBundle\Curio', 'qrcode');
$routers['/callback'] = array('ChivasBundle\Curio', 'callback');
$routers['/savedata'] = array('ChivasBundle\Curio', 'savedata');
