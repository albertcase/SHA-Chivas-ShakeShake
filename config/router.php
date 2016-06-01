<?php

$routers = array();
$routers['/'] = array('ChivasBundle\Site', 'index');
$routers['/api/test'] = array('ChivasBundle\Api', 'test');
$routers['/api/islogin'] = array('ChivasBundle\Api', 'islogin');
$routers['/api/check'] = array('ChivasBundle\Api', 'check');
$routers['/api/submit'] = array('ChivasBundle\Api', 'submit');
$routers['/qrcode'] = array('ChivasBundle\Curio', 'qrcode');
$routers['/curio/regscan'] = array('ChivasBundle\Curio', 'regscan');
$routers['/curio/scan'] = array('ChivasBundle\Curio', 'scan');
$routers['/callback'] = array('ChivasBundle\Curio', 'callback');
$routers['/savedata'] = array('ChivasBundle\Curio', 'savedata');
