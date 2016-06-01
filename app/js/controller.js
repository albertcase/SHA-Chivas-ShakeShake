//redpacket
;(function(){
    'use strict';
    var controller = function(){
        this.curPage = 0;
        this.selectedColor = '';
        this.isShake = false;
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
                    gotoPin(1);

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
            //var btnGetKeyCode = document.getElementsByClassName('btn-getkeycode')[0];
            //self.MobileValidate();
            //btnGetKeyCode.addEventListener('touchstart',function(e){
            //    e.preventDefault();
            //    self.MobileValidate();
            //});

            //var xml = docum;

        },

        //shake function
        shake:function(){
            //if shake success, go form page
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
            var validate = true,
                inputMobile = $('.form-validate .input-phone'),
                inputKeyCode = $('.form-validate .input-keycode');
            if(!inputMobile.val()){
                Common.errorMsg.add(inputMobile.parent(),'手机号码不能为空');
                validate = false;
            }else{
                var reg=/^1\d{10}$/;
                if(!(reg.test(inputMobile.val()))){
                    validate = false;
                    Common.errorMsg.add(inputMobile.parent(),'手机号格式错误，请重新输入');
                }else{
                    Common.errorMsg.remove(inputMobile.parent());
                }
            }
            //for keycode
            if(!inputKeyCode.val()){
                Common.errorMsg.add(inputKeyCode.parent(),'验证码不能为空');
                validate = false;
            }else{
                Common.errorMsg.remove(inputKeyCode.parent());
            }

            if(validate){
                return true;
            }else{
                return false;
            }
        },
        SubmitKeycodeForm:function(){
            var self = this;

            /*
             *click get keycode button, validate mobile first and then connect api to sent user message
             */
            var enableClick = true;
            var btnGetKeycode = document.getElementsByClassName('btn-getkeycode')[0],
                inpueMobile = document.getElementById('input-phone');
            btnGetKeycode.addEventListener('click',function(e){
                e.preventDefault();
                if(self.MobileValidate()){
                    //    start to get keycode
                    //$('.btn-getkeycode').addClass('disabled');
                    if(!enableClick) return;
                    enableClick = false;
                    var mobile = inpueMobile.value;

                    Api.isFollow(function(data){
                        console.log(data);
                    });
                    //Api.sendVerifycode({
                    //    mobile:mobile
                    //},function(data){
                    //    setTimeout(function(){
                    //        enableClick = true;
                    //        $('.btn-getkeycode').removeClass('disabled');
                    //        if(data.status==1){
                    //
                    //        }else if(data.status==0){
                    //            //not login
                    //            Common.goIndexpage();
                    //        }else{
                    //            Common.alertBox.add(data.msg);
                    //        }
                    //    },30000);
                    //});

                };
            });

            /*
             * Submit the Form, so we need FormKeycodeValidate first and then api
             */
            //var enableSubmit = true;
            //$('.form-validate .form-btn-submit').on('click',function(){
            //    _hmt.push(['_trackEvent', 'buttons', 'click', 'submit2']);
            //    if(self.FormKeycodeValidate()){
            //        //if(!enableSubmit) return;
            //        //enableSubmit = false;
            //        //    start to get keycode
            //        var phonenumber = $('.input-phone').val();
            //        var keycode = $('.input-keycode').val();
            //        Api.customerBind({
            //            mobile:phonenumber,
            //            verifycode:keycode
            //        },function(data){
            //            //enableSubmit = true;
            //            if(data.status==1){
            //                if(data.msg != "新用户"){
            //                    Common.goCouponPage();
            //                }else{
            //                    //update info page
            //                    $('.input-mobile').val(phonenumber);
            //                    Common.goInfoPage();
            //                }
            //
            //            }else if(data.status==0){
            //                //not login
            //                Common.goIndexpage();
            //            }else{
            //                Common.alertBox.add(data.msg);
            //            }
            //        });
            //    };
            //});
            //show the privacy pop
            //$('.privacy-term').on('click',function(){
            //    $('.term-pop').removeClass('hide').addClass('animate fade');
            //});

            //    close the pop
            //    self.closePop();
        },
        SubmitInformationForm:function(){
            /*
             * Submit the register information form
             * */
            var self = this;
            var enableSubmit = true;
            $('.form-info .form-btn-submit').on('click',function(){
                _hmt.push(['_trackEvent', 'buttons', 'click', 'submit3']);
                if(self.FormInforValidate()){
                    if(!enableSubmit) return;
                    enableSubmit = false;
                    Api.customerRegister({
                            firstname:$('.input-surname').val(),
                            lastname:$('.input-name').val(),
                            mobile :$('.input-mobile').val(),
                            email:$('.input-email-pre').val()+'@'+$('.input-email-after').val(),
                            gender:$('input[name="gender"]:checked').val(),
                            openid:self.openid,
                        },
                        function(data){
                            enableSubmit = true;
                            if(data.status==1){
                                //update info page
                                //go coupon page
                                Common.goCouponPage();
                            }else if(data.status==0){
                                //not login
                                Common.goIndexpage();
                            }else{
                                Common.alertBox.add(data.msg);
                            }
                        });
                }
            });

        },

        moneyPage:function(){

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