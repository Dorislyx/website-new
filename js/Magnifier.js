//function getStyle(obj,attr){
//	return obj.currentStyle? obj.currentStyle[attr] : getComputedStyle(obj)[attr];
//}
//function zoomPic(){
//	var Box=document.getElementById("box");
//	var Div1=document.getElementById("div1");
//	var Big=document.getElementById("big");
//	var bigImg=document.getElementById("bigImg");
//	
//	var boxH=parseInt(getStyle(Box,'height'))
//	var boxW=parseInt(getStyle(Box,'width'))
//	var imgH=parseInt(getStyle(bigImg,'height'))
//	var imgW=parseInt(getStyle(bigImg,'width'))
//	var bigH=parseInt(getStyle(Big,'height'))
//	var bigW=parseInt(getStyle(Big,'width'))
//	
//	Div1.style.display=Big.style.display='none'
//	div1.style.height=(boxH*bigH/imgH)+'px'
//	div1.style.width=(boxW*bigW/imgW)+'px'
//	
//	var div1W=parseInt(getStyle(Div1,'width'))
//	var div1H=parseInt(getStyle(Div1,'height'))
//	
//	Box.onmousemove=function(ev){
//		var e=ev || event
//		Div1.style.display=Big.style.display='block'
//		var l=e.clientX-div1W/2-30
//		var t=e.clientY-div1H/2-30
//		if(l<=0)l=0
//		if(t<=0)t=0
//		if(l>=boxW-div1W) l=boxW-div1W 
//		//alert(Box.offsetWidth)
//		if(t>=boxH-div1H) t=boxH-div1H
//		Div1.style.left=l+'px'
//		Div1.style.top=t+'px'
//		bigImg.style.left=-(imgW-boxW)*( l/( boxW-div1W ) )+'px'
//		bigImg.style.top=-(imgH-boxH)*( t/( boxH-div1H ) )+'px'
//		
//	}
//	Box.onmouseout=function(){
//		Div1.style.display=Big.style.display='none'
//	}
//};
//zoomPic();


window.onload = function(){
	
	var oBox=document.getElementById('box');
	var oBtn=document.getElementById('btn');
	var	aInput=oBtn.getElementsByTagName('input');
	var oImg=oBox.getElementsByTagName('img')[0];
	var oUl=oBtn.getElementsByTagName('ul')[0];
	var	aLi=oUl.getElementsByTagName('li');
	var aUrl=['images/portfolio-thumb/p_z121.png',
		'images/portfolio-thumb/p_yx5534e.png',
		'images/portfolio-thumb/p_x35.png',
		'images/portfolio-thumb/p_m616t.png',
		'images/portfolio-thumb/p_z215.png',
		'images/portfolio-thumb/p_z235.png',
		'images/portfolio-thumb/p_z301.png'
	];
	var len=aLi.length;
	var iNow=0;
	var oTimer=0;
	var iSpeed=5;
	
	//点击缩列列图
	for(var i=0; i<aLi.length; i++){
		aLi[i].index=i;
		aLi[i].onmousemove=function(){
			aLi[iNow].className='';
			oImg.src=aUrl[this.index];
			this.className='ahover';
			iNow=this.index;	
		};
	};
	//左按下按钮	
	aInput[0].onmousedown=function(){
		oTimer=setInterval(function(){	
			var iLeft=getStyle(oUl,'left');
			//var iBottom=getStyle(oUl,'bottom');
			if(iLeft>=0){
				clearInterval(oTimer);
			}
			else{
				iLeft+=iSpeed;
				oUl.style.left=iLeft+"px";
			}
		},20);	
	};
	aInput[0].onmouseup=function(){
		clearInterval(oTimer);
	};
	//右抬起按钮
	aInput[1].onmousedown=function(){
		clearInterval(oTimer);
		oTimer=setInterval(function(){	
			var iLeft=getStyle(oUl,'left');
			//var iBottom=getStyle(oUl,'bottom');
			var iWidth=getStyle(aLi[0],'width');
			if(iLeft<470-iWidth*len){
				clearInterval(oTimer);
			}else{
				iLeft+=-iSpeed;
				oUl.style.left=iLeft+"px";
			}
		},20);	
	};
	//左抬起按钮
	aInput[1].onmouseup=function(){
		clearInterval(oTimer);
	};
	function getStyle(obj,sAttr){
		 return obj.currentStyle?parseFloat(obj.currentStyle[sAttr]):parseFloat(getComputedStyle(obj)[sAttr]);
	};
	//放大镜效果
	
//	function tab(){
//		for(var i=0; i<aLi.length; i++){
//			aLi[i].className='';
//		};
//		oImg.src=aUrl[iNow];
//		aLi[iNow].className='active';
//	};

}