$(document).ready(function() {
	/*自制的小屏下拉菜单*/
	$("#menu").click(function() {
		/*$("#nav").toggleClass("none");*/
		$("#nav").slideToggle("slow");
	});
	var btn1=document.getElementById("btn1");//按钮
      btn1.onclick=function(){
	      if(btn1.innerHTML=="查看更多"){
	      	$(".cang").css("display","block");
	      	btn1.innerHTML="关闭";
	      }else{
	      	$(".cang").css("display","none");
	      	btn1.innerHTML="查看更多";
	      }
      }
	var btn2=document.getElementById("btn2");//按钮
      btn2.onclick=function(){
	      if(btn2.innerHTML=="查看更多"){
	      	$(".hid").css("display","block");
	      	btn2.innerHTML="关闭";
	      }else{
	      	$(".hid").css("display","none");
	      	btn2.innerHTML="查看更多";
	      }
      }
	var btn3=document.getElementById("btn3");//按钮
      btn3.onclick=function(){
	      if(btn3.innerHTML=="查看更多"){
	      	$(".yin").css("display","block");
	      	btn3.innerHTML="关闭";
	      }else{
	      	$(".yin").css("display","none");
	      	btn3.innerHTML="查看更多";
	      }
      }
	var btn4=document.getElementById("btn4");//按钮
      btn4.onclick=function(){
	      if(btn4.innerHTML=="查看更多"){
	      	$(".wu").css("display","block");
	      	btn4.innerHTML="关闭";
	      }else{
	      	$(".wu").css("display","none");
	      	btn4.innerHTML="查看更多";
	      }
      }
});