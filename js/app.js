var appconfig=[
		{"id":"0","bg":"url('./img/app1.jpg') no-repeat center","appname":"基本信息","url":"姓名：周泽宇<br>年龄：25<br>身高：175cm<br>体重：70kg"},
		{"id":"1","bg":"url('./img/app2.jpg') no-repeat center","appname":"毕业院校","url":"毕业院校：江西农业大学<br>专业：软件工程"},
		{"id":"2","bg":"url('./img/app3.jpg') no-repeat center","appname":"爱好","url":"台球<br>跑步<br>麻将"},
		{"id":"3","bg":"url('./img/app4.jpg') no-repeat center","appname":"自我评价","url":"自我评价<br>1.谦虚上进，与人为善，对工作热情，有较强的学习精神，不浮躁不浮夸。<br>2.相信天蝎座的我是一个对技术细节要求严谨，一丝不苟，专注的员工。<br>3.对工作的期待是前端移动开发岗位，未来可以成为全栈工程师。<br>4.希望进入公司得到最大的锻炼，也为公司创造更大的效益，共同发展。"},
		{"id":"4","bg":"url('./img/app5.jpg') no-repeat center","appname":"联系方式","url":"手机号码：18515291278<br>邮箱：zeyujay@163.com<br>个人网址：yi-qiao.top"}
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
			var id=parseInt($(this).attr("value")) 
			closemenu()
			$('#appid').attr("value",appconfig[id].id)
			$('#appname').text(appconfig[id].appname)
			$('.center').css("background",appconfig[id].bg)
			$('.me').html(appconfig[id].url)	
		})
	})
	bordernone()
	mborder()
	$('#appid').attr("value",appconfig[0].id+"")
	$('#appname').text(appconfig[0].appname)
	$('.center').css("background",appconfig[0].bg)
	$('.me').html(appconfig[0].url)

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
	$("#atop").click(function(){
		fourmove(10,true)
		setTimeout(function(){
			window.location.href="news.html"
		},500)
	})
	$('#aright').click(function(){	
		fourmove(10,true)
		setTimeout(function(){
			window.location.href="contact.html";
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
	$('.me').html(appconfig[id].url)	
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