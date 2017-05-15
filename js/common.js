var newstypes = [{"id":"0","name":"top"},
				 {"id":"1","name":"shehui"},
				 {"id":"2","name":"guonei"},
				 {"id":"3","name":"guoji"},
				 {"id":"4","name":"yule"},
				 {"id":"5","name":"tiyu"},
				 {"id":"6","name":"junshi"},
				 {"id":"7","name":"keji"},
				 {"id":"8","name":"caijing"}
				]
var storage = window.localStorage
function fourmove(mborder,mctorf,mctype){
	if (mborder) {
		$('.top a').css("transform","translate(0px,"+mborder+"px)");
		$('.bottom a').css("transform","translate(0px,-"+mborder+"px)")
		$('.left a').css("transform","translate("+mborder+"px,0px) rotate(90deg)")
		$('.right a').css("transform","translate(-"+mborder+"px,0px) rotate(-90deg)")
	}
	if (mctorf==true) {
		switch(mctype){
			case "top":$('.content').css("transform","translate(0px,-100%)");break;
			case "left":$('.content').css("transform","translate(100%,0px)");break;
			case "right":$('.content').css("transform","translate(-100%,0px)");break;
			case "bottom":$('.content').css("transform","translate(0,100%)");break;
		}
		
	}
	
}
function getalltype(mykey){
	$.each(newstypes,function(){
		getonetype(this.name,mykey)
	})

}
function getonetype(type,mykey){
	var key,value
		$.ajax({
			url:"http://v.juhe.cn/toutiao/index?type="+type+"&key="+mykey+"",
			datatype:"json",
			type:"get",
			success:function(data){
				storage[type]=JSON.stringify(data.result.data)
			}
		})
}