<?php

$routers = array();
$routers['/'] = array('ChivasBundle\Site', 'index');
$routers['/coupon'] = array('ChivasBundle\Site', 'coupon');
$routers['/api/test'] = array('ChivasBundle\Api', 'test');
$routers['/api/status'] = array('ChivasBundle\Api', 'status');
$routers['/api/check'] = array('ChivasBundle\Api', 'check');
$routers['/api/submit'] = array('ChivasBundle\Api', 'submit');
$routers['/curio/app'] = array('ChivasBundle\Curio', 'index');
$routers['/curio/oauth'] = array('ChivasBundle\Curio', 'oauth');
$routers['/curio/regoauth'] = array('ChivasBundle\Curio', 'regoauth');
$routers['/curio/regjs'] = array('ChivasBundle\Curio', 'regjs');
$routers['/curio/regqrcode'] = array('ChivasBundle\Curio', 'regqrcode');
$routers['/curio/qrcode'] = array('ChivasBundle\Curio', 'qrcode');
$routers['/curio/regscan'] = array('ChivasBundle\Curio', 'regscan');
$routers['/curio/scan'] = array('ChivasBundle\Curio', 'scan');
$routers['/curio/callback'] = array('ChivasBundle\Curio', 'callback');
$routers['/curio/redirect'] = array('ChivasBundle\Curio', 'redirect');
