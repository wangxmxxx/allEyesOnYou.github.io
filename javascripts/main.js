// ����ʱ
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
/**
* ǰ�˴���
*<div class = "leftTime">
	<span class = "leftTimes" id='showtime'>00:00:00:00</span>
</div>
*
*/


// JQuery ͼƬ�Զ�ת��
	var t = n =0, count;
	$(document).ready(function(){ 
	count=$("#banner_list a").length;
	$("#banner_list a:not(:first-child)").hide();
	$("#banner_info").html($("#banner_list a:first-child").find("img").attr('alt'));
	$("#banner_info").click(function(){window.open($("#banner_list a:first-child").attr('href'), "_blank")});
	$("#banner li").click(function() {
	var i = $(this).text() -1;//��ȡLiԪ���ڵ�ֵ����1��2��3��4
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

/** JQuery ͼƬ�Զ�ת�� css ��ʽ
*#banner {position:relative;width:100%;height:65%;border:1px;solid #CDC28D;overflow:hidden;border-top: 0px;}
#banner_list img {border:0px;}
#banner_bg {position:absolute;bottom:0;background-color:#000;height:30px;filter: Alpha(Opacity=30);opacity:0.3;z-index:1000;cursor:pointer;width:478px;}
#banner_info {position:absolute;bottom:0;left:5px;height:22px;color:#fff;z-index:1001;cursor:pointer;}
#banner_text {position:absolute;width:120px;z-index:1002;right:3px;bottom:3px;}
#banner ul {position:absolute;list-style-type:none;filter: Alpha(Opacity=80);opacity:0.8;border:1px solid #fff;z-index:1002;margin:0;padding:0;bottom:3px; right:5px;}
#banner ul li {padding:0px 8px;float:left;display:block;color:#FFF;border:#e5eaff 1px solid;background:#6f4f67;cursor:pointer;}
#banner ul li.on { background:#900}
#banner_list a{position:absolute;} <!-- ������ͼƬ�������ص���һ�� -->
*
* ǰ�δ���
*<div id="banner"> 
    <div id="banner_bg"></div><!--���ⱳ��-->
    <div id="banner_info"></div><!--����-->
    <ul>
      <li class="on">1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
    </ul>
	<div id="banner_list">
		<a href="#" target="_blank"><img src="images/5.jpg" title="����" alt="����С�ݵ�blog" width="100%" height="100%"/></a>
		<a href="#" target="_blank"><img src="images/2.png" title="����С�ݵ�" alt="����С�ݵ�blog" width="100%" height="100%"/></a>
		<a href="#" target="_blank"><img src="images/5.jpg" title="����" alt="����С�ݵ�blog" width="100%" height="100%"/></a>
		<a href="#" target="_blank"><img src="images/4.png" title="����С�ݵ�" alt="����С�ݵ�blog" width="100%" height="100%"/></a>
	</div>
</div>
*
*
*/