function gotoPin(i) {
	var $pin = document.getElementsByClassName('pin');
	console.log($pin);
	//$pin[i].addClass('current');
	Common.addClass($pin[i],'current');
}
;(function(){
	var ua = navigator.userAgent.toLowerCase();
	var Common = {
		hasClass:function(ele,newclass){
			//var arryClass = ele.className.split(' ');
			//for(var i=0;i<arryClass.length;i++){
			//	if(arryClass[i]==newclass){
			//		return true;
			//	}else{
			//		return false;
			//	}
			//};
			newclass = newclass || '';
			if (newclass.replace(/\s/g, '').length == 0) return false; //当cls没有参数时，返回false
			return new RegExp(' ' + newclass + ' ').test(' ' + ele.className + ' ');
		},
		addClass:function(ele,newclass){
			var self = this;
			//if(!self.hasClass(ele,newclass)){
			//	ele.className = ele.className + ' '+newclass;
			//}
			if (!self.hasClass(ele, newclass)) {
				ele.className = ele.className == '' ? newclass : ele.className + ' ' + newclass;
			}
		},
		removeClass:function(ele,newclass){
			var self = this;
			if (self.hasClass(ele, newclass)) {
				var newClass = ' ' + ele.className.replace(/[\t\r\n]/g, '') + ' ';
				while (newClass.indexOf(' ' + newclass + ' ') >= 0) {
					newClass = newClass.replace(' ' + newclass + ' ', ' ');
				}
				ele.className = newClass.replace(/^\s+|\s+$/g, '');
			}
		},
		goHomepage:function(){
			gotoPin(0);
		},
		msgBox:function(msg,long){
			if(long){
				$('body').append('<div class="ajaxpop msgbox minwidthbox"><div class="loading">'+msg+'</div></div>');
			}else{
				$('body').append('<div class="ajaxpop msgbox"><div class="loading"><div class="icon-loading"></div>'+msg+'</div></div>');
			}
		},
		errorMsg : {
			add:function(ele,msg){
				if(!ele.find('.error').length){
					ele.append('<div class="error">'+msg+'</div>');
				}else{
					ele.find('.error').html(msg);
				}
			},
			remove:function(ele){
				if(ele.find('.error').length){
					ele.find('.error').remove();
				}
			}
		},


	};

	this.Common = Common;

}).call(this);
