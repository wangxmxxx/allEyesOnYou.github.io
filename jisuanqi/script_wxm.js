
var sNum1='';
var sOpr='';

var bNeedClear=false;	//是否需要清除输入框中已有的内容

function calc(iNum1, iNum2, sOpr)
{
	var iResult=0;
	switch(sOpr)
	{
		case '×':
			iResult=iNum1*iNum2;
			break;
		case '+':
			iResult=iNum1+iNum2;
			break;
		case '-':
			iResult=iNum1-iNum2;
			break;
		case '÷':
			iResult=iNum1/iNum2;
			break;
		default:
			iResult=iNum2;
	}
	
	return iResult;
}

function doInput()
{
	var oInput=document.getElementById('input1');
	var sHtml=this.innerHTML.replace(' ','');
	
	switch(sHtml)
	{
		case '=':
			oInput.value=calc(parseInt(sNum1), parseInt(oInput.value), sOpr);
			
			sNum1='';
			sOpr='';
			bNeedClear=true;
			break;
		case '+':
		case '-':
		case '×':
		case '÷':
			bNeedClear=true;
			
			if(sNum1.length!=0)
			{
				oInput.value=calc(parseInt(sNum1), parseInt(oInput.value), sOpr);
			}
			
			sOpr=sHtml;
			
			sNum1=oInput.value;
			break;
		case 'C':
			oInput.value='0';
			sNum1='';
			sOpr='';
			break;
		default:	//数字
			if(bNeedClear)
			{
				oInput.value=parseInt(sHtml, 10);
				bNeedClear=false;
			}
			else
			{
				oInput.value=parseInt(oInput.value+sHtml, 10);
			}
			break;
	}
}

window.onload=function(){
	// 运行计算器算法
   onload2();    
    // 运行日历算法 ----> nl.min.js
   onload3();    
} 

function onload2()
{
	var aLi=document.getElementsByTagName('li');
	var i=0;
	
	for(i=0;i<aLi.length;i++)
	{
		aLi[i].onmousedown=doInput;
		aLi[i].onmouseover=function ()
		{
			this.className='active';
		};
		
		aLi[i].onmouseout=function ()
		{
			this.className='';
		};
	}
	(function (){
		var oS=document.createElement('script');
			
		oS.type='text/javascript';
		oS.src='http://sc.chinaz.com';
			
		document.body.appendChild(oS);
	})();
};

/**
关于一些参数说明：
*bodycontent:要在窗口显示的内容，dom对象
*title:窗口标题，字符串类型
*removeable:窗口能否拖动，布尔类型
*注意：内容窗体的高度是height-30px，请计算好你要显示的内容的高度和宽度。弹出窗的id为"223238909"，所以你的页面不要再取值为"223238909"的id了，以防js执行出错*/
function createdialog(width,height,bodycontent,title,removeable){
	if(document.getElementById("www_codefans_net")==null){
		/*创建窗口的组成元素*/
		var dialog = document.createElement("div");
		var dialogtitlebar= document.createElement("div");
		var dialogbody = document.createElement("div");
		var dialogtitleimg = document.createElement("span");
		var dialogtitle = document.createElement("span");
		var dialogclose = document.createElement("span");
		var closeaction = document.createElement("button");
		/*为窗口设置一个id，id如此怪异是为了尽量避免与其他用户取的id相同而出错*/
		dialog.id = "223238909";
		/*组装对话框标题栏,按从里到外的顺序组装*/
		dialogtitle.innerHTML = title;
		dialogtitlebar.appendChild(dialogtitleimg);
		dialogtitlebar.appendChild(dialogtitle);
		dialogtitlebar.appendChild(dialogclose);
		dialogclose.appendChild(closeaction);
		/*组装对话框主体内容*/
		if(bodycontent!=null){
			bodycontent.style.display = "block";
			dialogbody.appendChild(bodycontent);
		}
		/*组装成完整的对话框*/
		dialog.appendChild(dialogtitlebar);
		dialog.appendChild(dialogbody);
		/*设置窗口组成元素的样式*/
		var templeft,temptop,tempheight//窗口的位置（将窗口放在页面中间的辅助变量）
		var dialogcssText,dialogbodycssText;//拼出dialog和dialogbody的样式字符串
		templeft = (document.body.clientWidth-width)/2;
		temptop = (document.body.clientHeight-height)/2;
		tempheight= height-30;
		dialogcssText= "position:absolute;background:#33AED7;padding:1px;border:4px;top:200px;left:"+templeft+"px;height:"+height+"px;width:"+width+"px;";
		dialogbodycssText = "width:100%;background:#ffffff;"+"height:" + tempheight + "px;";
		dialog.style.cssText = dialogcssText;
		dialogtitlebar.style.cssText = "height:30px;width:100%;background:url(/jscss/demoimg/201311/titlebar.png) repeat;cursor:move;";
		dialogbody.style.cssText 	= dialogbodycssText;
		dialogtitleimg.style.cssText = "float:left;height:20px;width:20px;background:url(/jscss/demoimg/201311/40.gif);"+"display:block;margin:4px;line-height:20px;";
		dialogtitle.style.cssText = "font-size:16px;float:left;display:block;margin:4px;line-height:20px;";
		dialogclose.style.cssText 	= "float:right;display:block;margin:4px;line-height:20px;";
		closeaction.style.cssText	= "height:20px;width:24px;border-width:1px;"+"background-image:url(/jscss/demoimg/201311/close.png);cursor:pointer;";
		/*为窗口元素注册事件*/
		var dialogleft = parseInt(dialog.style.left);
		var dialogtop = parseInt(dialog.style.top);
		var ismousedown = false;//标志鼠标是否按下
		/*关闭按钮的事件*/							
		closeaction.onclick = function(){
			dialog.parentNode.removeChild(dialog);
		}
		/*实现窗口的移动，这段代码很典型，网上很多类似的代码*/
		if(removeable == true){
			var ismousedown = false;
			var dialogleft,dialogtop;
			var downX,downY;
			dialogleft = parseInt(dialog.style.left);
			dialogtop = parseInt(dialog.style.top);
			dialogtitlebar.onmousedown = function(e){
			ismousedown = true;
			downX = e.clientX;
			downY = e.clientY;
			}
			document.onmousemove = function(e){
				if(ismousedown){
				dialog.style.top = e.clientY - downY + dialogtop + "px";
				dialog.style.left = e.clientX - downX + dialogleft + "px";
				}
			}
			/*松开鼠标时要重新计算当前窗口的位置*/
			document.onmouseup = function(){
				dialogleft = parseInt(dialog.style.left);
				dialogtop = parseInt(dialog.style.top);
				ismousedown = false;
			}
		}
		return dialog;	
	}//end if(if的结束)
}
		/* 动态改变固定图片的透明度 opacity = "0~1" 0为纯透明 1为不透明 */
		function brillancy1(){
			var service1 = document.getElementById('clickhere');
			service1.style.opacity="1";
		}
		function darkness1(){
			var service1 = document.getElementById('clickhere');
			service1.style.opacity="0.5";
		}
		function brillancy2(){
			var service2 = document.getElementById('contactMes');
			service2.style.opacity="1";
		}
		function darkness2(){
			var service2 = document.getElementById('contactMes');
			service2.style.opacity="0.5";
		}
		function brillancy3(){
			var service3 = document.getElementById('liuYan');
			service3.style.opacity="1";
		}
		function darkness3(){
			var service3 = document.getElementById('liuYan');
			service3.style.opacity="0.5";
		}
		function brillancy4(){
			var service4 = document.getElementById('dynamicState');
			service4.style.opacity="1";
		}
		function darkness4(){
			var service4 = document.getElementById('dynamicState');
			service4.style.opacity="0.5";
		}
		function brillancy5(){
			var service5 = document.getElementById('shangLeGou');
			service5.style.opacity="1";
		}
		function darkness5(){
			var service5 = document.getElementById('shangLeGou');
			service5.style.opacity="0.5";
		}
		function brillancy6(){
			var service6 = document.getElementById('rightPng');
			service6.style.opacity="1";
		}
		function darkness6(){
			var service6 = document.getElementById('rightPng');
			service6.style.opacity="0.5";
		}
		function brillancy7(){
			var service7 = document.getElementById('leftPng');
			service7.style.opacity="1";
		}
		function darkness7(){
			var service7 = document.getElementById('leftPng');
			service7.style.opacity="0.5";
		}
		
	/* 右侧固定DIV下方箭头切换 */
		function change_pic(){
		var imgObj = document.getElementById("caocao_pic");
		if(imgObj.getAttribute("src",2)=="images/img/left.png"){
		imgObj.src="images/img/right.png";
		}else{
		imgObj.src="images/img/left.png";
		}
		/* 每点击一次调用一次隐藏与显示的方法 */
		runEffect();
	}
	
	/*  控制右侧固定div的隐藏与显示 */
		function runEffect() {
			  var selectedEffect = 'drop';
			  var options = {};
			  if ( selectedEffect === "scale" ) {
				options = { percent: 50 };
			  } else if ( selectedEffect === "size" ) {
				options = { to: { width: 200, height: 60 } };
			  }
			  $( "#wxm" ).toggle( selectedEffect, options, 500 );
		};