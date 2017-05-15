$(function(){
	var refreshnum = 0
	fourmove(40,true)
	$("#abottom").click(function(){
		fourmove(10,true)
		setTimeout(function(){
			window.location.href="app.html"
		},500)
	})
	$('#aleft').click(function(){	
		fourmove(10,true)
		setTimeout(function(){
			window.location.href="website.html";
		},500)
	})
	$('#atop').click(function(){	
		fourmove(10,true)
		setTimeout(function(){
			window.location.href="index.html";
		},500)
	})
	$('.newstype').find("li").first().css("border-bottom","7px solid #464648").end()
	.bind({
		click:function(){
			$('#end').css("display","none")
			$('#refreshimg').css("display","inline")
			$('#refreshimg').css("transform","")
			$('#refreshnum').val(0)
			var index = $(this).index()
			/*getnews(newstypes[index].name,"3843c6e97c3a6e0aca9f0b6aef0576ba",0,9,1)*/
			var btclick = $(this)
			$('.newstype').find("li").each(function(){
				if ($(this).is(btclick)) {
					$(this).css("border-bottom","7px solid #464648")
				} else {
					$(this).css("border-bottom","7px solid rgb(212,212,212)")
				}
			})	
			$('#typehidden').val(index)
		},
		mouseenter:function(){
			$(this).css("border-bottom","7px solid #464648")
		},
		mouseleave:function(){
			var nowtype = $('#typehidden').val()
			if ($(this).index()==parseInt(nowtype)) {
				$(this).css("border-bottom","7px solid #464648")
			}else{
				$(this).css("border-bottom","7px solid rgb(212,212,212)")
			}		
		}
	})

	/*getnews("top","3843c6e97c3a6e0aca9f0b6aef0576ba",0,9)*/
	/*getrefresh(refreshnum)*/
	$('.leftul').find("li").each(function(){
	$(this).bind({
		mouseenter:function(){
			$(this).find(".lntopline1").css("transition","width 0.5s").end()
			.find(".lnbottomline").css("transition","width 0.5s 1s").end()
			.find(".lntopline1").css("width","110px").end()
			.find(".lnleftline").css("height","400px").end()
			.find(".lnbottomline").css("width","400px")
		},
		mouseleave:function(){
			$(this).find(".lntopline1").css("transition","width 0.5s 1s").end()
			.find(".lnbottomline").css("transition","width 0.5s").end()
			.find(".lnbottomline").css("width","0").end()
			.find(".lnleftline").css("height","0").end()
			.find(".lntopline1").css("width","0")	
		}
	})
})
$('.rightul').find("li").each(function(){
	$(this).bind({
		mouseenter:function(){
			$(this).find(".rntopline1").css("transition","width 0.5s").end()
			.find(".rnbottomline").css("transition","width 0.5s 1s").end()
			.find(".rntopline1").css("width","110px").end()
			.find(".rnrightline").css("height","400px").end()
			.find(".rnbottomline").css("width","400px")
		},
		mouseleave:function(){
			$(this).find(".rntopline1").css("transition","width 0.5s 1s").end()
			.find(".rnbottomline").css("transition","width 0.5s").end()
			.find(".rnbottomline").css("width","0").end()
			.find(".rnrightline").css("height","0").end()
			.find(".rntopline1").css("width","0")	
		}
	})
})
})

/*function getnews(type,key,begin,end,method){
	if (method==1) {$('.leftul,.rightul').html("")}
	
	var news = 	JSON.parse(localStorage[type])
	if (begin<news.length) {
		for (var i = begin; i < end+1; i++) {
			if (i%2==0) {
				if (i==news.length-1) {
					$('.rightul').append('<li class="rightli">'+
						'<div class="rightnews">'+
						'<div class="rntopline1 line"></div>'+
						'<div class="rntoptext">'+
							'<span class="rightauthor">'+news[i].author_name+'</span>'+
							'<span class="righttime">'+news[i].date+'</span>'+
						'</div>'+
						'<div class="rntopline2 line"></div>'+
						'<div class="rntopsquare"><div class="rntopdot"></div></div>'+
						'<div class="rnrightline line"></div>'+
						'<div class="rncontent"></div>'+
						'<div class="rnbottomline line"></div>'+
						'<div class="rnleftline line"></div>'+
						'<div class="newscontent">'+
								'<img src="'+news[i].thumbnail_pic_s+'" no-repeat center>'+
								'<p class="righttitle">'+news[i].title+'</p>'+
								'<span class="rightfrom">'+news[i].url+'</span>'+
							'</div>'+
						'</div>'+
						'</li>')
				}else{
					$('.leftul').append('<li class="leftli">'+
						'<div class="leftnews">'+
						'<div class="lntopline1 line"></div>'+
						'<div class="lntoptext">'+
							'<span class="leftauthor">'+news[i].author_name+'</span>'+
							'<span class="lefttime">'+news[i].date+'</span>'+
						'</div>'+
						'<div class="lntopline2 line"></div>'+
						'<div class="lntopsquare"><div class="lntopdot"></div></div>'+
						'<div class="lnleftline line"></div>'+
						'<div class="lncontent"></div>'+
						'<div class="lnrightline line"></div>'+
						'<div class="lnbottomline line"></div>'+
						'<div class="newscontent">'+
							'<img src="'+news[i].thumbnail_pic_s+'" no-repeat center>'+
							'<p class="lefttitle">'+news[i].title+'</p>'+
							'<span class="leftfrom">'+news[i].url+'</span>'+
						'</div>'+
						'</div>'+
						'</li>')
				}
			} else {
				$('.rightul').append('<li class="rightli">'+
				'<div class="rightnews">'+
				'<div class="rntopline1 line"></div>'+
				'<div class="rntoptext">'+
					'<span class="rightauthor">'+news[i].author_name+'</span>'+
					'<span class="righttime">'+news[i].date+'</span>'+
				'</div>'+
				'<div class="rntopline2 line"></div>'+
				'<div class="rntopsquare"><div class="rntopdot"></div></div>'+
				'<div class="rnrightline line"></div>'+
				'<div class="rncontent"></div>'+
				'<div class="rnbottomline line"></div>'+
				'<div class="rnleftline line"></div>'+
				'<div class="newscontent">'+
						'<img src="'+news[i].thumbnail_pic_s+'" no-repeat center>'+
						'<p class="righttitle">'+news[i].title+'</p>'+
						'<span class="rightfrom">'+news[i].url+'</span>'+
					'</div>'+
				'</div>'+
			'</li>')
			}
		}
	}}*/


/*function getrefresh(refreshnum){
	  $(".center").scroll(function () {  
            var $this = $(this),  
            viewH = $(this).height(),//可见高度  
            contentH = $(this).get(0).scrollHeight,//内容高度  
            scrollTop = $(this).scrollTop()//滚动高度 
            if (scrollTop / (contentH - viewH) >= 1) {
            	var type = newstypes[parseInt($('#typehidden').val())].name,
            	news = 	JSON.parse(localStorage[type]),
            	refreshnum=parseInt($('#refreshnum').val())
            	if ((news.length-10)%6==0?refreshnum<parseInt((news.length-10)/6):refreshnum<parseInt((news.length-10)/6)+1) {
            		$('#refreshimg').css("transform","rotate(360deg)")
            		$('#refreshnum').val(refreshnum+1)
                    setTimeout(function(){
                    	getnews(type,"3843c6e97c3a6e0aca9f0b6aef0576ba"
                    		,refreshnum*6+1+9,(refreshnum+1)*6+9>=news.length?news.length-1:(refreshnum+1)*6+9,2)
                    	$('#refreshimg').css("transform","")
                    	
                    },500)
            	}else{
            		$('#refreshimg').css("display","none")
            		$('#end').css("display","inline")
            	}
            	
            	
                
            }  
            })
}*/
