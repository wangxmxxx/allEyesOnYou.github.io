// 倒计时
	var se,d=1,h=0,m=0,s=2;
    function second(){
    if(s==0 && m!= 0){m-=1;s=60;}
    if(m==0 && s==0 && h!= 0){h-=1;m=60;m-=1;s=60}
	if(h==0 && m==0 && s==0 && d!=0){d-=1;h=24;h-=1;m=60;m-=1;s=60;}
	if(d==0 && h==0 && m==0 && s==0){
		clearInterval(se);
		}
	  var dd = d>9?d:"0"+d;
	  var hh = h>9?h:"0"+h;
	  var mm = m>9?m:"0"+m;
	  var ss = s>9?s:"0"+s;
      time= dd + ":" + hh + ":" + mm + ":" + ss;
      document.getElementById("showtime").innerHTML=time;
      s-=1;
    }
    function startclock(){se=setInterval("second()",1000);}

// JQuery 图片自动转换
	var t = n =0, count;
	$(document).ready(function(){ 
	count=$("#banner_list a").length;
	$("#banner_list a:not(:first-child)").hide();
	$("#banner_info").html($("#banner_list a:first-child").find("img").attr('alt'));
	$("#banner_info").click(function(){window.open($("#banner_list a:first-child").attr('href'), "_blank")});
	$("#banner li").click(function() {
	var i = $(this).text() -1;//获取Li元素内的值，即1，2，3，4
	n = i;
	if (i >= count) return;
	$("#banner_info").html($("#banner_list a").eq(i).find("img").attr('alt'));
	$("#banner_info").unbind().click(function(){window.open($("#banner_list a").eq(i).attr('href'), "_blank")})
	$("#banner_list a").filter(":visible").fadeOut(500).parent().children().eq(i).fadeIn(1000);
	document.getElementById("banner").style.background="";
	$(this).toggleClass("on");
	$(this).siblings().removeAttr("class");
	});
	t = setInterval("showAuto()", 2000);
	$("#banner").hover(function(){clearInterval(t)}, function(){t = setInterval("showAuto()", 2000);});
	})

	function showAuto()
	{
	n = n >=(count -1) ?0 : ++n;
	$("#banner li").eq(n).trigger('click');
	}

