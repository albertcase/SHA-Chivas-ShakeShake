/*All the api collection*/
Api = {
    isLogin:function(callback){
        Common.ajax({
            url:'/api/islogin',
            type:'POST'
        },function(data){
            return callback(data);
        });
    },
    getKeycode:function(obj,callback){
        Common.ajax({
            url:'/api/check',
            type:'POST',
            data:obj
        },function(data){
            return callback(data);
        });
    },
    //mobile checknum  code
    submitAll:function(obj,callback){
        Common.ajax({
            url:'/api/submit',
            type:'POST',
            data:obj
        },function(data){
            return callback(data);
        });
    },
    //mobile code
    submitWithoutChecknum:function(obj,callback){
        Common.ajax({
            url:'/api/submit2',
            type:'POST',
            data:obj
        },function(data){
            return callback(data);
        });
    },
    //    api/getredpacket
    //返回 code 为1 已关注用户红包直接到账
    //返回 code 为2 未关注用户弹出二维码
    getRedpacket:function(obj,callback){
        Common.ajax({
            url:'/api/getredpacket',
            type:'POST',
            data:obj
        },function(data){
            return callback(data);
        });
    },



};