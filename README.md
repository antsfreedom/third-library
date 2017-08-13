# third-library
总结了一些常用的库


## arguements  ## 

	//arguments 相当用于数组，循环求和,在不知道个数以及数据类型的情况下可用
	 function sum(){
	 	var result = 0;
	 	for(var i=0;i<arguments.length;i++){
	 		result +=arguments[i];
	 	}
	 		return result;
	 }
	 alert(sum(2,3,4,3,5,7,4,5))

获取样式


	var obox = document.getElementById("box");
	// alert(getComputedStyle(obox,false).width);//兼容火狐 chorme
	// alert(obox.currentStyle.width)  //兼容IE
	// alert(obox.style.width)   //针对行间样式可用此方式直接获取，上面主要针对非行间样式的获取