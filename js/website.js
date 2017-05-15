var websitecf = [{"id":"0","url":"http://mail.163.com/","imgurl":"./img/163.svg","name":"163 Mail"},
				{"id":"1","url":"http://www.iqiyi.com/","imgurl":"./img/aiqiyi.svg","name":"爱奇艺"},
				{"id":"2","url":"https://github.com/","imgurl":"./img/github.svg","name":"github"},
				{"id":"3","url":"https://www.jd.com","imgurl":"./img/jingdong.svg","name":"京东"},
				{"id":"4","url":"http://www.le.com/","imgurl":"./img/leshi.svg","name":"乐视视频"},
				{"id":"5","url":"http://qzone.qq.com/","imgurl":"./img/qqkongjian.svg","name":"qq空间"},
				{"id":"6","url":"http://tv.sohu.com/","imgurl":"./img/souhu.svg","name":"搜狐视频"},
				{"id":"7","url":"http://stackoverflow.com/","imgurl":"./img/stackoverflow.svg","name":"stack<br>overflow"},
				{"id":"8","url":"https://www.taobao.com/","imgurl":"./img/taobao.svg","name":"淘宝"},
				{"id":"9","url":"https://v.qq.com/","imgurl":"./img/tengxun.svg","name":"腾讯视频"},
				{"id":"10","url":"http://weibo.com/","imgurl":"./img/weibo.svg","name":"微博"},
				{"id":"11","url":"http://www.youku.com/","imgurl":"./img/youku.svg","name":"优酷"},
				{"id":"11","url":"http://www.panda.tv/","imgurl":"./img/youku.svg","name":"优酷"}]
$(function(){

	$.each(websitecf,function(){
/*				$('.uwebsite1').append('<li><a href='+this.url+' target="_blank"><img src='+this.imgurl+'><br><span>'+this.name+'</span></a></li>')
*/
		$('.uwebsite').append('<li><a href='+this.url+' target="_blank"><img src='+this.imgurl+'><br><span>'+this.name+'</span></a></li>')
	})
	$('.uwebsite').find("li").each(function(){
		/*$(this).hover(function(){
			$('.uwebsite').css("transform","rotateX("+($(this).index()+1)*5+"deg)")
		},function(){
			$('.uwebsite').css("transform","")
		})*/
	})
	fourmove(40,true)
	$("#abottom").click(function(){
		fourmove(10,true)
		setTimeout(function(){
			window.location.href="app.html"
		},300)
		
	})
	$('#aleft').click(function(){
		fourmove(10,true)
		setTimeout(function(){
			window.location.href="index.html";
		},300)
	})
	/*$('.uwebsite').click(function(){
		$('.uwebsite').css("animation","change 1s")
		setTimeout(function(){
			$('.uwebsite').css("display","none")
			
			$('.bookmarks').css("display","block")
			$('.bookmarks').css("animation","change 1s reverse")
			setTimeout(function(){
			$('.bookmarks').css("animation","")
			$('.uwebsite').css("animation","")
		},900)
		},900)
		
	})*/
	$('.bookmarks').click(function(){
		$('.bookmarks').css("animation","change 1s")
		setTimeout(function(){
			$('.bookmarks').css("display","none")
			$('.bookmarks').css("animation","")
			$('.uwebsite').css("display","block")
			$('.uwebsite').css("animation","change 1s reverse")
			setTimeout(function(){
			$('.bookmarks').css("animation","")
			$('.uwebsite').css("animation","")
		},900)
		},900)
		
	})
	dumpBookmarks()
	
})
function dumpBookmarks(){
	chrome.bookmarks.getTree(
    	function(bookmarkTreeNodes) {
    		  for (var i = 0; i < bookmarkTreeNodes.length; i++) {
    			dumpTreeNodes(bookmarkTreeNodes[i].id)
    		} 		
    });

}

function dumpTreeNodes(bookmarkTreeNode){
	chrome.bookmarks.getChildren(bookmarkTreeNode,function(bookmarkTreeNodes){
		for (var i = 0; i < bookmarkTreeNodes.length; i++) {
			
    			dumpNodes(bookmarkTreeNodes[i].id)
    		} 
	})
	
}
function dumpNodes(bookmarkTreeNode){
	chrome.bookmarks.getChildren(bookmarkTreeNode,function(bookmarkTreeNodes){
		for (var i = 0; i < bookmarkTreeNodes.length; i++) {
			console.log(bookmarkTreeNodes[i]);
    			dumpNodes(bookmarkTreeNodes[i].id)
    		} 
	})
	
}