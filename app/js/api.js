/*All the api collection*/
Api = {
    //api/status
    isFollow:function(callback){
        $.ajax({
            url:'/api/status',
            type:'POST',
            dataType:'json',
            success:function(data){
                return callback(data);
            }
        });
    }
    ,
    //{"status":1,"msg":{"id":"1","openid":"oKCDxjivJ92ky4dxLT8dt1jcXtn4","nickname":"nickname","headimgurl":"headimgurl","greeting":false,"background":false,"ballot":"1”}}
    isLogin:function(callback){
        $.ajax({
            url:'/api/islogin',
            type:'POST',
            dataType:'json',
            success:function(data){
                return callback(data);
            }
        });
    },
    ifShared:function(callback){
        $.ajax({
            url:'/api/share',
            type:'POST',
            dataType:'json',
            success:function(data){
                return callback(data);
            }
        });
    },
    coupon:function(callback){
        $.ajax({
            url:'/api/card',
            type:'POST',
            dataType:'json',
            success:function(data){
                return callback(data);
            }
        });
    },


};