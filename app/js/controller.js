//redpacket
;(function(){
    'use strict';
    var controller = function(){
        this.curPage = 0;
        this.selectedColor = '';
        this.isShake = false;
        //if submitted and record user msg, hasLogged is true
        this.hasLogged = false;
    };
    controller.prototype = {
        init:function(){
            //loading all the resourse, such as css,js,image
            var self = this;
            //    loading first
            //$('.loading-wrap').addClass('show');
            var baseurl = ''+'/app';
            var imagesArray = [
                baseurl + '/images/tips.png',
            ];
            var i = 0;
            new preLoader(imagesArray, {
                onProgress: function(){

                },
                onComplete: function(){

                    //bind all dom element
                    self.bindEvent();

                    //start
                    gotoPin(2);

                }
            })
        },
        //bind all element event,such as click, touchstart
        bindEvent:function(){
            var self = this;
            //age above 18, click yes, start game
            var btnYes = document.getElementsByClassName('btn-tips-yes')[0];
            btnYes.addEventListener('touchstart', function(){
                Common.addClass(btnYes.parentElement.parentElement,'hide');
                gotoPin(0);
                Api.isLogin(function(data){
                    if(data.status==1){
                        gotoPin(0)
                    }else{
                        gotoPin(2);
                    }
                });
            });

            //age below 18, click no, stop game, quit wechat
            var btnNo = document.getElementsByClassName('btn-tips-no')[0];
            btnNo.addEventListener('touchstart', function(){
                WeixinJSBridge.call('closeWindow');
            });

            //   start shake
            //listen to shake event
            self.isShake = true;
            var shakeEvent = new Shake({threshold: 15});
            shakeEvent.start();
            window.addEventListener('shake', function(){
                if(!self.isShake) return;
                self.shake();
                self.isShake = false;
            }, false);

            //check if shake is supported or not.
            if(!("ondevicemotion" in window)){alert("Not Supported");}

            //click get keycode button
            self.SubmitKeycodeForm();

            //    getRedpacket
            var btnGetRedpacket = document.getElementById('btn-getredpacket');
            var enableGetPacket = true;
            btnGetRedpacket.addEventListener('touchstart', function(){
                if(!enableGetPacket) return;
                enableGetPacket = false;
                self.getRedpacket();
            });

        },

        //shake function
        shake:function(){
            var self = this;
            //if shake success, go form page
            var mobileInput = document.getElementById('input-phone');
            Api.isLogin(function(data){
                if(data.msg.mobile){
                    self.hasLogged = true;
                    //hide keycode box, disable mobile input
                    document.getElementById('input-keycode').parentNode.style.display = 'none';
                    mobileInput.value = data.msg.mobile;
                    mobileInput.disabled = true;
                }else{
                    // never submit mobile
                    self.hasLogged = true;
                }
            });
            gotoPin(1);
        },

        //form function
        MobileValidate:function(){
            var validate = true,
                inputMobile = document.getElementById('input-phone');
            if(!inputMobile.value){
                Common.errorMsg.add(inputMobile.parentElement,'手机号码不能为空');
                validate = false;
            }else{
                var reg=/^1\d{10}$/;
                if(!(reg.test(inputMobile.value))){
                    validate = false;
                    Common.errorMsg.add(inputMobile.parentElement,'手机号格式错误，请重新输入');
                }else{
                    Common.errorMsg.remove(inputMobile.parentElement);
                }
            }
            if(validate){
                return true;
            }
            return false;
        },
        FormKeycodeValidate:function(){
            var self = this;
            var validate = true,
                inputMobile = document.getElementById('input-phone'),
                inputKeyCode = document.getElementById('input-keycode'),
                inputCoupon = document.getElementById('input-coupon');
            if(!inputMobile.value){
                Common.errorMsg.add(inputMobile.parentElement,'手机号码不能为空');
                validate = false;
            }else{
                var reg=/^1\d{10}$/;
                if(!(reg.test(inputMobile.value))){
                    validate = false;
                    Common.errorMsg.add(inputMobile.parentElement,'手机号格式错误，请重新输入');
                }else{
                    Common.errorMsg.remove(inputMobile.parentElement);
                }
            }
            //for keycode
            if(!self.hasLogged){
                if(!inputKeyCode.value){
                    Common.errorMsg.add(inputKeyCode.parentElement,'验证码不能为空');
                    validate = false;
                }else{
                    Common.errorMsg.remove(inputKeyCode.parentElement);
                }
            }

            //for coupon
            if(!inputCoupon.value){
                Common.errorMsg.add(inputCoupon.parentElement,'兑换码不能为空');
                validate = false;
            }else{
                Common.errorMsg.remove(inputCoupon.parentElement);
            }

            if(validate){
                return true;
            }
            return false;
        },
        SubmitKeycodeForm:function(){
            var self = this;

            /*
             *click get keycode button, validate mobile first and then connect api to sent user message
             */
            var enableClick = true;
            var btnGetKeycode = document.getElementsByClassName('btn-getkeycode')[0],
                inpueMobile = document.getElementById('input-phone');
            btnGetKeycode.addEventListener('touchstart',function(e){
                e.preventDefault();
                if(self.MobileValidate()){
                    //    start to get keycode
                    //$('.btn-getkeycode').addClass('disabled');
                    if(!enableClick) return;
                    enableClick = false;
                    var mobile = inpueMobile.value;
                    if(!Common.hasClass(btnGetKeycode,'countdown')){
                        self.countDown();
                        Api.getKeycode({
                            mobile:mobile
                        },function(data){
                            console.log(data);
                            enableClick = true;
                        });
                    }

                };
            });

            /*
             * Submit the Form, so we need FormKeycodeValidate first and then api
             */
            var btnSubmit = document.getElementsByClassName('btn-submit')[0];
            var enableSubmit = true;
            btnSubmit.addEventListener('touchstart',function(){
                if(self.FormKeycodeValidate()){
                    if(!enableSubmit) return;
                    enableSubmit = false;
                    //    start to get keycode
                    var phonenumber = document.getElementById('input-phone').value,
                        keyCode = document.getElementById('input-keycode').value,
                        coponCode = document.getElementById('input-coupon').value;
                    if(self.hasLogged){
                        //submitted before
                        Api.submitWithoutChecknum({
                            mobile:phonenumber,
                            code:coponCode
                        },function(data){
                            enableSubmit = true;
                            console.log('submitWithoutChecknum');
                            gotoPin(2);
                        });
                    }else{
                        // never submitted
                        Api.submitAll({
                            mobile:phonenumber,
                            checknum:keyCode,
                            code:coponCode
                        },function(data){
                            enableSubmit = true;
                            console.log('submitAll');
                            gotoPin(2);
                        });

                    }

                };
            });
            //show the privacy pop
            //$('.privacy-term').on('click',function(){
            //    $('.term-pop').removeClass('hide').addClass('animate fade');
            //});

            //    close the pop
            //    self.closePop();
        },
        //倒计时
        countDown:function(){
            var countdownTime = 59,
                btnGetKeycode = document.getElementsByClassName('btn-getkeycode')[0];
            var countdownline = setInterval(function(){
                countdownTime--;
                Common.addClass(btnGetKeycode,'countdown');
                btnGetKeycode.innerHTML = countdownTime;
                if(countdownTime<=0){
                    clearInterval(countdownline);
                    Common.removeClass(btnGetKeycode,'countdown');
                    btnGetKeycode.innerHTML = '';
                }
            },1000);

        },
        /*
        * get redpacket
        * */
        getRedpacket:function(){
            Api.getRedpacket({},function(data){
                console.log(getRedpacket);
                if(data.msg.code == 1){
                    //followed, money go ahead

                }else if(data.msg.code ==2){
                    // not follow, qrcode first
                    Common.removeClass(document.getElementsByClassName('qrcode-pop')[0],'hide');
                }
            });
        },

        //

        compareCommand:function(commandline){
            /*
            * If the input command is right, then upload the command to server.
            * Show different message according input command.
            * The commandline is input value
            * */
            var self = this;
        },


    };

    if (typeof define === 'function' && define.amd){
        // we have an AMD loader.
        define(function(){
            return controller;
        });
    }
    else {
        this.controller = controller;
    }


}).call(this);

window.onload = function(){
    var redpacket= new controller();
    redpacket.init();
};