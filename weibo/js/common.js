$(function(){
	var add = function(){
    var counter = 0;
    var plus = function(){
      return counter+=1;
    }
    return plus;
}
var plus2 = add();
console.log(plus2());
console.log(plus2());
console.log(plus2());
/*	document.getElementsByTagName("body")[0].onscroll=function(){
		if(document.getElementsByTagName("body")[0].scrollTop>600){
		alert("网页太长")；
	}}*/
	$("#idlogin").click(function(){
		$(".loginqu2").css("display","none")
		$(".loginqu1").css("display","block")
		$(".change2").css("display","none")
		$(".change1").css("display","block")
		$("#secritylogin").css("border-bottom","1px solid rgba(0,0,0,0.1)")
		$("#idlogin").css("border-bottom","4px solid #fa7d3c")
		$("#ewmlogin").css("display","none")
		$("#phonelogin").css("display","block")

	})
	$("#secritylogin").click(function(){
		$("#secritylogin").css("border-bottom","4px solid #fa7d3c")
		$("#idlogin").css("border-bottom","1px solid rgba(0,0,0,0.1)")
		$(".change1").css("display","none")
		$(".change2").css("display","block")
		$("#ewmlogin").css("display","none")
		$("#phonelogin").css("display","block")
	})
	$("#phonelogin").click(function() {
		$(".change2").css("display","none")
		$(".change1").css("display","block")
		$("#phonelogin").css("display","none")
		$("#ewmlogin").css("display","block")
		$(".loginqu2").css("display","block")
		$(".loginqu1").css("display","none")
		$("#secritylogin").css("border-bottom","1px solid rgba(0,0,0,0.1)")
		$("#idlogin").css("border-bottom","1px solid rgba(0,0,0,0.1)")
	})
	$("#ewmlogin").click(function() {
		$("#ewmlogin").css("display","none")
		$("#phonelogin").css("display","block")
		$(".change1").css("display","none")
		$(".change2").css("display","block")
		$("#secritylogin").css("border-bottom","4px solid #fa7d3c")
	})
	$("#erweima").hover(function(){
		$(".fangda").css("display","block")
		
	},function(){
		$(".fangda").css("display","none")
	})
	
})	