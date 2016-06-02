<!DOCTYPE html>
<html>
<head lang="en">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <title>芝华士Chivas</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui" >
    <meta name="msapplication-tap-highlight" content="no">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <!-- inject:css -->
    <link rel="stylesheet" href="/app/css/style.css">
    <!-- endinject -->

    <script type="text/javascript" src="http://wechatjs.curio.im/api/v1/js/a2353045-eddf-4f9c-8dd0-c69005be2e87/wechat.js"></script>

    <!-- inject:js -->
    <script src="/app/js/widget/widget_index.js"></script>
    <!-- endinject -->
</head>
<body>
<div class="preloading">
    <div class="inner">
        <div class="l-logo">
            <img src="/app/images/logo.png" alt=""/>
        </div>
        <div class="icon-loading">
            <span></span>
            <span></span>
            <span></span>
        </div>
        <p class="des-loading">
            目前涌入的小伙伴过多<br>
            页面正在跳转中，请耐心等待。
        </p>
    </div>
</div>
<div class="wrapper">
    <!-- 摇一摇领取红包 -->
    <section class="pin pin-1">
       <div class="p1-inner">
            <div class="logo">
                <img src="/app/images/logo.png" alt=""/>
            </div>
           <div class="btn-open fade animate delay1">
               <img src="/app/images/p1-3.png" alt=""/>
           </div>
           <div class="p1-t1 fade animate delay2">
               <img src="/app/images/shake-text.png" alt=""/>
           </div>
       </div>
    </section>

    <!-- 手机兑换码验证 -->
    <section class="pin pin-2">
        <div class="logo">
            <img src="/app/images/logo.png" alt=""/>
        </div>
        <form action="" class="form-validate">
            <div class="input-box input-box-phone">
                <input type="tel" class="input-phone" id="input-phone" name="phone" maxlength="11" placeholder="输入手机号"/>
            </div>
            <div class="input-box input-box-keycode">
                <input type="text" class="input-keycode" id="input-keycode" placeholder="输入验证码"/>
                <button class="btn-getkeycode"></button>
            </div>
            <div class="input-box input-box-coupon">
                <input type="text" class="input-coupon" id="input-coupon" placeholder="输入刮刮卡兑换码"/>
            </div>
        </form>
        <div class="p2-footer">
            <div class="btn-submit">
                <img src="/app/images/button-ok.png" alt=""/>
            </div>
            <div class="privacy-term">
                <img src="/app/images/link-privacy.png" alt=""/>
            </div>
        </div>
        <div class="term-pop hide">
            <div class="term-text">
                <img src="/app/images/p2-pop-text.png" alt=""/>
            </div>
            <div class="btn-close"></div>
            <div class="tips">
                <img src="/app/images/tips-text.png" alt=""/>
            </div>
        </div>
    </section>

    <!-- 验证成功后看到获得金额 -->
    <section class="pin pin-3">
        <div class="p3-t1">
            <span id="money-value"></span>
        </div>
        <div class="btn btn-get" id="btn-getredpacket">
            <img src="/app/images/btn-getmoney.png" alt=""/>
        </div>
    </section>
</div>
<div class="qrcode-pop popup hide">
    <div class="qrcode">
        <img src="/app/images/qrcode-follow.png" alt=""/>
    </div>
    <div class="qrcode-text qt-yes">
        <img src="/app/images/follow-text.png" alt=""/>
    </div>
</div>
<!--age pop-->
<div class="popup tips-pop hide">
    <div class="inner">
        <div class="tips-1"></div>
        <div class="btn-tips btn-tips-yes"></div>
        <div class="btn-tips btn-tips-no"></div>
    </div>
    <div class="tips-text">
        <img src="/app/images/tips-text.png" alt=""/>
    </div>
</div>
</body>
</html>