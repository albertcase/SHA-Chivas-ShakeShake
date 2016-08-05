/*All the api collection*/
Api = {
//{
//    msg:{
//        mobile:’’,
//        money:''
//    },
//    status:1
//}
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
    getKeycode:function(obj,callback){
        $.ajax({
            url:'/api/check',
            type:'POST',
            dataType:'json',
            data:obj,
            success:function(data){
                return callback(data);
            }
        });
    },
    //mobile checknum  code
    submitAll:function(obj,callback){
        Common.msgBox('loading...');
        $.ajax({
            url:'/api/submit',
            type:'POST',
            dataType:'json',
            data:obj,
            success:function(data){
                $('.msgbox').remove();
                return callback(data);
            }
        });
    },
    //mobile code
    submitWithoutChecknum:function(obj,callback){
        Common.msgBox('loading...');
        $.ajax({
            url:'/api/submit2',
            type:'POST',
            dataType:'json',
            data:obj,
            success:function(data){
                $('.msgbox').remove();
                return callback(data);
            }
        });
    },
    //    api/getredpacket
    //返回 code 为1 已关注用户红包直接到账
    //返回 code 为2 未关注用户弹出二维码
    getRedpacket:function(obj,callback){
        $.ajax({
            url:'/api/getredpacket',
            type:'POST',
            dataType:'json',
            data:obj,
            success:function(data){
                return callback(data);
            }
        });
    },



};