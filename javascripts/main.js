// 倒计时
	var se,d=1,h=0,m=0,s=0;
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
* 前端代码
*<div class = "leftTime">
	<span class = "leftTimes" id='showtime'>00:00:00:00</span>
</div>
*
*/


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

/** JQuery 图片自动转换 css 样式
*#banner {position:relative;width:100%;height:65%;border:1px;solid #CDC28D;overflow:hidden;border-top: 0px;}
#banner_list img {border:0px;}
#banner_bg {position:absolute;bottom:0;background-color:#000;height:30px;filter: Alpha(Opacity=30);opacity:0.3;z-index:1000;cursor:pointer;width:478px;}
#banner_info {position:absolute;bottom:0;left:5px;height:22px;color:#fff;z-index:1001;cursor:pointer;}
#banner_text {position:absolute;width:120px;z-index:1002;right:3px;bottom:3px;}
#banner ul {position:absolute;list-style-type:none;filter: Alpha(Opacity=80);opacity:0.8;border:1px solid #fff;z-index:1002;margin:0;padding:0;bottom:3px; right:5px;}
#banner ul li {padding:0px 8px;float:left;display:block;color:#FFF;border:#e5eaff 1px solid;background:#6f4f67;cursor:pointer;}
#banner ul li.on { background:#900}
#banner_list a{position:absolute;} <!-- 让四张图片都可以重叠在一起 -->
*
* 前段代码
*<div id="banner"> 
    <div id="banner_bg"></div><!--标题背景-->
    <div id="banner_info"></div><!--标题-->
    <ul>
      <li class="on">1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
    </ul>
	<div id="banner_list">
		<a href="#" target="_blank"><img src="images/5.jpg" title="鄙视" alt="橡树小屋的blog" width="100%" height="100%"/></a>
		<a href="#" target="_blank"><img src="images/2.png" title="橡树小屋的" alt="橡树小屋的blog" width="100%" height="100%"/></a>
		<a href="#" target="_blank"><img src="images/5.jpg" title="鄙视" alt="橡树小屋的blog" width="100%" height="100%"/></a>
		<a href="#" target="_blank"><img src="images/4.png" title="橡树小屋的" alt="橡树小屋的blog" width="100%" height="100%"/></a>
	</div>
</div>
*
*
*/

	
	// 视频弹幕特效  部分功能  完整版在360云盘
	function mu()//控制弹幕的颜色、字体、位置的随机生成
	{
		function $(id)
		{
			return document.getElementById(id);
		}
		var num=0;
		var pmh=ds.offsetHeight;

		var dd=document.createElement('div');
		dd.setAttribute('class','ss');
		dd.innerHTML=$('dm').value;
		$('dm').value='';
		ds.appendChild(dd);
		dd.style.color='rgb('+Math.floor(Math.random()*256)+','+Math.floor(Math.random()*256)+','+Math.floor(Math.random()*256)+')';
		dd.style.fontSize=Math.floor(Math.random()*25+12)+'px';
		dd.style.left=Math.floor(Math.random()*10+900)+'px';
		dd.style.top=Math.floor(Math.random()*(pmh-30))+'px';
		var l=pmh-dd.offsetWidth;
		var tim=null;
		tim=setInterval(function()
		{
	       l--;
	       if(l<=(0-dd.offsetWidth))
	       {
	       	clearInterval(tim);
	       	$('ds').removeChild(dd);
	       }
	       dd.style.left=l+'px';
		},15) // 弹幕滚动速度
	}
	
	// jsp页面代码
	/**
	<div id="ds"></div>
	<div id="sent">
		<input id="dm" type="text" onclick="ccc()" style="margin-left:160px;"/>
		<input id="st" type="submit" onclick="mu()" value="发送 >>"/>		
	</div>
	*/
	
	// css 代码
	/**
	*{padding:0;margin:0;}
	#zz{background-color: #5F2C6D;width:900px;height: 450px;margin: 0 auto;margin-top: 15px;color:#ffffff;}
	#ds{position: relative;background-color: #5F2C6D;width:900px;height: 450px;margin: 0 auto;margin-top: 15px;color:#ffffff;overflow: hidden;}
	.ss{position: absolute;top:10px;left: 20px;}
	#sent{width:898px;height:70px;margin:0 auto;background: #ffffff;border-style:inset;border: 1px solid #d5d5d5;border-top:none;box-shadow:-2px 0  #dddddd,2px 0  #dddddd,0 2px  #dddddd;position: relative;}
	#dm{width:498px;height:32px;margin:20px 0px 20px 10px;border:1px solid #d5d5d5;color:#6e6e6e; }
	#st{line-height: 30px;color:#ffffff;border:none;background: #00A2D6;padding:0px 15px;text-align: center;cursor: pointer;}
	#dw{position: absolute;left:208px;top:29px;font-size: 14px;color:#6e6e6e;}
	#high{position: absolute;left:208px;top:30px;font-size: 12px;color:#B5B4B4;display: none;}
	#yc{display:none;}
	#xs{position: absolute;display: block;font-size: 18px;color:#6e6e6e;top:30px;left:300px;}
	span{color:#ffa178;cursor: pointer;font-size: 20px;}
	#back{width:100%;height: 100%;opacity: 0.6;background: #d5d5d5;position: absolute;top:0px;left:0px;display: none;}
	input{border:none;background: #ffffff;color:#3c3c3c;border:1px solid #d5d5d5;padding-left: 10px;padding-right: 10px;line-height: 30px;}
	#rr{line-height: 30px;color:#ffffff;border:none;background: #ddd;padding:0px 15px;text-align: center;cursor: pointer;margin-left: 90px;}
	#rr{line-height: 30px;color:#ffffff;border:none;background: #ddd;padding:0px 15px;text-align: center;cursor: pointer; margin-left: 90px;}
	*/