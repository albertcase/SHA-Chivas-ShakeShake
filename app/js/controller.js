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
            $('.loading-wrap').addClass('show');
            var baseurl = ''+'/app';
            var imagesArray = [
                baseurl + '/images/coach-avatar.png',
                baseurl + '/images/coupon.png',
                baseurl + '/images/redpacket-2.png',
                baseurl + '/images/got-redpacket.png',
                baseurl + '/images/input-wx-bg.png',
                baseurl + '/images/link-terms.png',
                baseurl + '/images/loading-logo.png',
                baseurl + '/images/logo-2.png',
                baseurl + '/images/no-redpacket.png',
                baseurl + '/images/qrcode-follow-text.png',
                baseurl + '/images/qrcode-follow.png',
                baseurl + '/images/qrcode-share-text.png',
                baseurl + '/images/qrcode-share.png',
                baseurl + '/images/redpacket-bg.png',
                baseurl + '/images/wx-share.jpg',
                baseurl + '/images/share-guide.png'
            ];
            var i = 0;
            new preLoader(imagesArray, {
                onProgress: function(){

                },
                onComplete: function(){
                    //remove the loading and show the first pin
                    $('.preloading').remove(1000)
                    _hmt.push(['_trackEvent', 'page', 'load', '页面PV - 1']);
                    Common.goHomepage();

                    //input and click enter
                    $('#input-tocoach').keypress(function (e) {
                        if(e.keyCode=='13'){
                            _hmt.push(['_trackEvent', 'button', 'click', 'Submit']);
                        //    enter keyboard
                            var inputMsg = $(this).val();
                            if(inputMsg.length){
                                self.outputMsg(1,headimgurl,inputMsg,'delay0','delay0','delay0');
                                self.compareCommand(inputMsg);
                                $(this).val('');
                                $('.pin-inner').scrollTop($('.conversation-list').height()-$('.pin-inner').height());
                            }

                        }
                    });

                    $('#input-tocoach').on('focusout',function(){
                        //    enter keyboard
                        var inputMsg = $(this).val();
                        if(inputMsg.length){
                            _hmt.push(['_trackEvent', 'button', 'click', 'Submit']);
                            self.outputMsg(1,headimgurl,inputMsg,'delay0','delay0','delay0');
                            self.compareCommand(inputMsg);
                            $(this).val('');
                            $('.pin-inner').scrollTop($('.conversation-list').height()-$('.pin-inner').height());
                        }
                    });

                    //click share link
                    $('.wrapper').on('click','.item-redpacket', function(){
                        _hmt.push(['_trackEvent', 'button', 'click', 'Share']);
                        $('.popup').addClass('hide');
                        $('.share-pop').removeClass('hide');
                        self.showShareQrcode();
                    });

                    //click coupon button
                    $('.wrapper').on('click','.item-coupon',function(){
                        _hmt.push(['_trackEvent', 'button', 'click', 'Redeem']);
                        self.addCouppon(1);
                    });

                    //close all pop
                    self.closePop();

                    //    link-terms
                    $('.qrcode-share-pop .link-terms').on('click',function(){
                        _hmt.push(['_trackEvent', 'button', 'click', 'Terms1']);
                        $('.details-pop').removeClass('hide');
                    });
                }
            })
        },
        compareCommand:function(commandline){
            /*
            * If the input command is right, then upload the command to server.
            * Show different message according input command.
            * The commandline is input value
            * */
            var self = this;
            //prejudication
            var rightCommand = ['520','1314','5201314'];
            for(var i=0;i<rightCommand.length;i++){
                if(commandline==rightCommand[i]){
                    self.outputMsg(2,'/app/images/coach-avatar.png','么么哒~COACH收到你的真情告白啦，马上为你送上专属的520优惠券，爱你哟！','delay1','delay1','delay1');
                    self.outputMsg(3,'/app/images/coach-avatar.png','么么哒~COACH收到你的真情告白啦，马上为你送上专属的520优惠券，爱你哟！','delay1','delay1','delay2');
                    self.outputMsg(4,'/app/images/coach-avatar.png','','delay1','delay1','delay3');

                    return;
                }else{
                    if(i==rightCommand.length-1){
                        self.outputMsg(2,'/app/images/coach-avatar.png','爱的信号有误，COACH无法回复你的爱意，请重新输入哦！','delay1','delay1','delay1');
                    }
                }
            }
        },
        outputMsg:function(type,avatar,inputvalue,delayclass1,delayclass2,delayclass3){
            /*
            * the type is represent the message type,such as 1 is user message,2 is system message,3 is coupon,4 is redpacket
            * inputvalue is the message
            * */
            var newMsgHtml='';
            if(type==1){
                newMsgHtml = '<li class="item item-right animate fade '+delayclass1+'">'+
                    '<div class="avatar">'+
                    '<img src="'+avatar+'" alt=""/>'+
                    '</div>'+
                    '<div class="words">'+inputvalue+
                    '</div>'+
                    '</li>';

            }else if(type==2){
                newMsgHtml = '<li class="item item-left animate fade '+delayclass2+'">'+
                    '<div class="avatar">'+
                    '<img src="'+avatar+'" alt=""/>'+
                    '</div>'+
                    '<div class="words">'+inputvalue+
                    '</div>'+
                    '</li>';
            }else if(type==3){
                newMsgHtml = '<li class="item item-left item-coupon animate fade '+delayclass3+'"><img src="/app/images/coupon.png" style="display: block" alt=""/>'+
                    '</li>';
            }else if(type==4){
                newMsgHtml = '<li class="item item-left item-redpacket animate fade '+delayclass3+'">'+
                    '<div class="avatar">'+
                    '<img src="'+avatar+'" alt=""/>'+
                    '</div>'+
                    '<div class="words"><img src="/app/images/redpacket-2.png">'+
                    '</div>'+
                    '</li>';
            };
            $('.conversation-list').append(newMsgHtml);

        },
        showShareQrcode:function(){
            var self = this;
            //just visit the api
            //override share
            wx.ready(function() {
                wx.onMenuShareTimeline({
                    title: 'Coach520|速速来表白，狠狠抢红包',
                    link: window.location.href,
                    imgUrl: window.location.origin+'/app/images/wx-share.jpg',
                    success: function () {
                        _hmt.push(['_trackEvent', 'button', 'click', 'Share to Moments']);
                        self.shareApi();
                    },
                    cancel: function () {
                    }
                });
                wx.onMenuShareAppMessage({
                    title: 'Coach520|速速来表白，狠狠抢红包',
                    desc: '520没有被发红包？没关系，快来Coach微信告白，现金红包抢抢抢！',
                    link: window.location.href,
                    imgUrl: window.location.origin+'/app/images/wx-share.jpg',
                    type: '',
                    dataUrl: '',
                    success: function () {
                        _hmt.push(['_trackEvent', 'button', 'click', 'Share to friend']);
                        self.shareApi();
                    },
                    cancel: function () {
                    }
                });

            });
        },
        shareApi:function(){
            //share success then call share api
            Api.ifShared(function(data){
                if(data.status==1){
                    //    未领取红包，去扫一扫二维码
                    _hmt.push(['_trackEvent', 'page', 'load', '页面PV - 6']);
                    $('.popup').addClass('hide');
                    $('.qrcode-share-pop').removeClass('hide');

                }else if(data.status==2){
                    //红包发完
                    _hmt.push(['_trackEvent', 'page', 'load', '页面PV - 10']);
                    $('.popup').addClass('hide');
                    $('.redpacket-pop').removeClass('hide');
                    $('.got-redpacket').addClass('hide');
                    $('.no-redpacket').removeClass('hide');


                }else if(data.status==4){
                    //红包已经领过
                    _hmt.push(['_trackEvent', 'page', 'load', '页面PV - 11']);
                    $('.popup').addClass('hide');
                    $('.redpacket-pop').removeClass('hide');
                    $('.no-redpacket').addClass('hide');
                    $('.got-redpacket').removeClass('hide');

                }else{
                    //
                    //    alert(data.msg);
                }

            });
        },
        closePop:function(){
            $('.btn-close').on('click', function(){
                if($(this).parent().hasClass('inner')){
                    $(this).parent().parent().addClass('hide');
                }else{
                    $(this).parent().addClass('hide');
                }

            })
        },
        addCouppon:function(i){
            Api.coupon(function(data){
                if(data.status){
                    var cardListJSON = data.msg;
                    wx.addCard({
                        cardList: [{
                            cardId: cardListJSON[i-1].cardId,
                            cardExt: '{"timestamp":"'+cardListJSON[i-1].cardExt.timestamp+'","signature":"'+cardListJSON[i-1].cardExt.signature+'"}'
                        }],
                        success: function(res) {
                            var cardList = res.cardList;
                            //alert(JSON.stringfiy(res));
                        },
                        fail: function(res) {
                            //alert(JSON.stringfiy(res));
                        },
                        complete: function(res) {
                            //alert(JSON.stringfiy(res));
                        },
                        cancel: function(res) {
                            //alert(JSON.stringfiy(res));
                        },
                        trigger: function(res) {
                            //alert(JSON.stringfiy(res));
                        }
                    });
                }

            });

        }


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

$(document).ready(function($){
    //load for home page
    var redpacket = new controller();
    redpacket.init();
});