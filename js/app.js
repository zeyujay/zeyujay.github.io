var appconfig=[
		{"id":"0","bg":"url('./img/app1.jpg') no-repeat center","appname":"SINA WEIBO","url":"https://m.weibo.cn"},
		{"id":"1","bg":"url('./img/app2.jpg') no-repeat center","appname":"BAIDU","url":"https://m.baidu.com"},
		{"id":"2","bg":"url('./img/app3.jpg') no-repeat center","appname":"YOUTUBE","url":"https://www.youtube.com/?hl=zh-cn"},
		{"id":"3","bg":"url('./img/app4.jpg') no-repeat center","appname":"ZHI HU","url":"https://www.zhihu.com"},
		{"id":"4","bg":"url('./img/app5.jpg') no-repeat center","appname":"TWITTER","url":"https://mobile.twitter.com/"}
	]
$(function(){
	fourmove(40)
	$('.hiddenmenu').css("z-index","-1")
	$.each(appconfig,function(){
		/*alert(this.id);*/
		$('.ulhm').append('<li value="'+this.id+'"><a href="javascript:;"><span>'+this.appname+'</span></a></li>')
	})
	$('.ulhm').find('li').each(function(){

		$(this).bind('click',function(){
			alert($(this))
			var id=parseInt($(this).attr("value")) 
			alert(id)
			closemenu()
			$('#appid').attr("value",appconfig[id].id)
			$('#appname').text(appconfig[id].appname)
			$('.center').css("background",appconfig[id].bg)
			$('#appsrc').attr("src",appconfig[id].url)	
		})
	})
	bordernone()
	mborder()
	$('#appid').attr("value",appconfig[0].id+"")
	$('#appname').text(appconfig[0].appname)
	$('.center').css("background",appconfig[0].bg)
	$('#appsrc').attr("src",appconfig[0].url)

	$("#abottom").click(function(){
		fourmove(10,true)
		setTimeout(function(){
			window.location.href="index.html"
		},500)
	})
	$('#aleft').click(function(){	
		fourmove(10,true)
		setTimeout(function(){
			window.location.href="website.html";
		},500)
	})
	$('#anext').click(function(){
		changeapp(true)
	})
	$('#apres').click(function(){
		changeapp(false)
	})	
	$('#amenu').click(function(){
		$('#amenu').css("animation","xuan 1.5s")
		setTimeout(function(){
			$('.hiddenmenu').css("display","block")
			$('#amenu').css("display","none")
			$('#amenu').css("animation","")		
			$('.hiddenmenu').css("animation","hiddenmenu 1.5s")
			$('.hiddenmenu').css("z-index","5")
			$('#aclose').css("display","block")
			$('#aclose').css("animation","xuan 1.5s")
			setTimeout(function(){		
				$('#aclose').css("animation","")
				$('.hiddenmenu').css("animation","")
			},1500)
		},1500)		
	})
	$('#aclose').click(function(){
		closemenu()
	})
	$('#aappbig').hover(function(){
		fourmove(1)
		setTimeout(function(){
			$('.top,.left,.right,.bottom').css("z-index","-1")
		},100)
		$('.center').css("left","0")
		$('.center').css("right","0")
		$('.center').css("top","0")
		$('.center').css("bottom","0")	
	},function(){
		$('.center').css("left","60px")
		$('.center').css("right","60px")
		$('.center').css("top","60px")
		$('.center').css("bottom","60px")
		setTimeout(function(){
			$('.top,.left,.right,.bottom').css("z-index","")
			fourmove(40)
		},200)
			
		
	})
})
function closemenu(){
	$('#aclose').css("animation","xuan 2s")
		$('#amenu').css("display","block")
		$('.hiddenmenu').css("animation","hiddenmenu 1.5s reverse")
		setTimeout(function(){
			$('#amenu').css("animation","xuan 1.5s")			
			$('.hiddenmenu').css("z-index","-1")
			$('.hiddenmenu').css("display","none")
			$('.hiddenmenu').css("animation","")
			setTimeout(function(){
				$('#amenu').css("animation","")	
			},1500)
		},1500)	
}
function changeapp(preornext){
	var nowid=parseInt($('#appid').val())
	var applenth=appconfig.length
	bordernone()
	mborder()
	if (preornext) {
		if (nowid>=applenth-1) {
			id=0
		} else {
			id=nowid+1
		}
	} else {
		if (nowid<=0) {
			id=applenth-1
		} else {
			id=nowid-1
		}
	}
	$('#appid').attr("value",appconfig[id].id)
	$('#appname').text(appconfig[id].appname)
	$('.center').css("background",appconfig[id].bg)
	$('#appsrc').attr("src",appconfig[id].url)	
}
function mborder(){
	setTimeout(function(){
		 $(".outline_tleft,.outline_tright").css("display","block")
		 setTimeout(function(){
		 	$(".outline_left,.outline_right").css("display","block")
		 	setTimeout(function(){
		 		$(".outline_bleft,.outline_bright,.ifmcont,.appname").css("display","block")
		 		
		 	},1000)
		 },500)
	},300)
}
function bordernone(){
	$(".outline_tleft,.outline_tright,.outline_left,.outline_right,.outline_bleft,.outline_bright,.ifmcont,.appname").css("display","none")
}