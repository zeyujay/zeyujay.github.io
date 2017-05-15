$(function(){
	$('.logo span').css("width","80px")
	setTimeout(function(){
		$('.content').css("background","url(./img/home.jpg) no-repeat center")
		setTimeout(function(){
		$('.center').css("display","block")
		fourmove(70)
	}, 1000)
	},2000)

	$('#abottom').click(function(){
		fourmove(10,true)
		setTimeout(function(){
			window.location.href="app.html";
		},300)	
	}) 
	$('#aleft').click(function(){
		fourmove(10,true)
		setTimeout(function(){
			window.location.href="website.html";
		},300)	
	})
	$('#atop').click(function(){
		fourmove(10,true)
		setTimeout(function(){
			window.location.href="news.html";
		},300)	
	})
	getalltype("3843c6e97c3a6e0aca9f0b6aef0576ba")

})