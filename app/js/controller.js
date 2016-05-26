//redpacket
;(function(){
    'use strict';
    var controller = function(){
        this.curPage = 0;
        this.selectedColor = '';
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

        },

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