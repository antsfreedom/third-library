//事件捕获
	function fun(ele,eve,handler,type){
		if(ele.attachEvent){
			ele.attachEvent("on"+eve,handler)
		}else{
			ele.addEventListener(eve,handler,type)
		}
	}


//onclick
	document.onclik = function(e){	
		var oEvent = e || event;
		alert('x:'+oEvent.clientX + 'y:'+oEvent.clientY)		
	}


//keydown
	document.onkeydown = function(eve){	
	if(eve.keyCode){
		alert(eve.keyCode)
	}else{
		alert(eve.which)
		}
	}

//阻止冒泡
	var e = e || window.event;
	  if ( e && e.stopPropagation ){
	      e.stopPropagation();
	  }else{
	      e.cancelBubble = true;
	  }

//阻止默认事件
	var olink = document.getElementById("link")
	olink.onclick= function(e){
		var e = e||window.event;
		if(e && e.preventDefault){
			e.preventDefault();
		}else{
			e.returnValue = false;
		}
	}

//事件委托
	oUl.onmouseover = function(e){  
	    //为了兼容IE
	var oEvent = e||window.event; 
	var target = oEvent.target|| oEvent.srcElement;  
	
	if(target.nodeName.toLowerCase() == 'li'){ 
		target.style.background = 'red';  
		} 	 
	}

//获取元素的样式
	function getStyle (obj,style){
		if(obj.currentStyle){
			return obj.currentStyle[style]
		}else{
			return getComputedStyle(obj,false)[style];
		}		
	}

//封装 getElementsByClassName
	function getByClass(oParent,sClass){
		var result = [];
		var aEle = oParent.getElementsByTagName("*")   //元素无法确认，因此用*表示
		for(var i=0;i<aEle.length;i++){
			if(aEle[i].className ==sClass){
				result.push(aEle[i])
			}
		}
		return result
	}


	//封装 设置cookie
	function setcookie(name,value,iday){
		var oDate = new Date();
		oDate.setDate(oDate.getDate()+iday);
			document.cookie = name+ '='+value+'; expires='+oDate.toUTCString();
	}
//封装 删除cookie	
	function removecookie(name){
		setcookie(name,1,-1)
	}

	//封装获取cookie
	function getcookie(name){
		var arr =document.cookie.split('; ');
		for(var i=0;i<arr.length;i++){
			var arr2 = arr[i].split('=');
			if(arr2[0]==name){
				alert(arr2[1])
			}
		}
		return'false';
	}

//用jquery封装的ajax

	function fun(option){
	var type = option.type;
	var url = option.url;
	var judg = option.judg;
	var success =option.success;

	var xhr = null;
	if(window.XMLHttpRequest){
	  xhr = new XMLHttpRequest();
	}else{
		xhr = new ActiveXObject("Microsoft.XMLHttp")
	}
	xhr.open(type,url,judg);
	xhr.send();
	xhr.onreadystatechange = function(){
		if(xhr.readyState ==4){
			if(xhr.status ==200){
				success && success(JSON.parse(xhr.responseText));		
			}
		}
	}

}