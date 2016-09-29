//选择器
/*
	1.function 函数
	2.string --- #xxx .xxx xxx
	3.对象 this window document
*/

/*跨浏览器事件绑定*/
function myAddEvent(obj, sEv, fn){
	if(obj.attachEvent){
		//IE this传递 重复添加
		obj.attachEvent("on" + sEv, function(){
			//【注】我们先要知道他return false
			//函数的返回值,看不到  IE
			if(false == fn.call(obj)){
				event.cancelBubble = true;
				return false;
			}
		});
	}else{
		obj.addEventListener(sEv, function(ev){
			if(false == fn.call(obj)){
				ev.stopPropagation();
				ev.preventDefault();
			}
		}, false);
	}
}

function myRemoveEvent(){

}

/*找到class相同的元素*/
function getByClass(oParent, sClass){
	var aEle = oParent.getElementsByTagName("*");
	var aResult = [];
	for(var i = 0; i < aEle.length; i++){
		if(aEle[i].className == sClass){
			aResult.push(aEle[i]);
		}
	}
	return aResult;
}

function MQuery(vArg){
	//this = new Object();
	//用来保存选中的元素
	this.elements = [];
	switch(typeof vArg)
	{
		case 'function':
			myAddEvent(window, "load", vArg);
			break;
		case 'string':
			switch(vArg.charAt(0))
			{
				case '#': //ID
					var obj = document.getElementById(vArg.substring(1)); //如果直接取到字符串末尾,第二个参数可以不传
					this.elements.push(obj);
					break;
				case ".": //className
					this.elements = getByClass(document, vArg.substring(1));
					break;
				default: //TagName
					this.elements = document.getElementsByTagName(vArg);
					break;
			}
			break;
		case 'object':
			this.elements.push(vArg);
			break;
	}
	//return this;
}

MQuery.prototype.click = function(fn){
	for(var i = 0; i < this.elements.length; i++){
		myAddEvent(this.elements[i], "click", fn);
	}
	return this;
}

MQuery.prototype.show = function(){
	for(var i = 0; i < this.elements.length; i++){
		this.elements[i].style.display = "block";
	}
	return this;
}

MQuery.prototype.hide = function(){
	for(var i = 0; i < this.elements.length; i++){
		this.elements[i].style.display = "none";
	}
	return this;
}

/*

hide()
show()
*/ 

function _$(vArg){
	return new MQuery(vArg);
}

//当前有效的样式
function getStyle(element, style){
	if(element.currentStyle){
		return element.currentStyle[style];
	}else{
		return getComputedStyle(element)[style];
	}
}


MQuery.prototype.css = function(attr, value){
	// arguments
	if(arguments.length == 2){ //设置样式
		for(var i = 0; i < this.elements.length; i++){
			this.elements[i].style[attr] = value;
		}
	}else{
		if(typeof attr == "string"){
			//this.elements[0].style[attr]; 获取行间样式
			//在这里要求获取 当前样式,借助于,自己封装的getStyle
			return getStyle(this.elements[0], attr);
		}else{ //json对象
			for(var i = 0; i < this.elements.length; i++){
				for(var key in attr){
					this.elements[i].style[key] = attr[key];
				}
			}
		}
	}

	//凡是需要可以链式操作的地方,我们只需要加一个返回值this 就可以了
	return this; //obj 
}


MQuery.prototype.attr = function(attr, value){
	if(arguments.length == 2){
		for(var i = 0; i < this.elements.length; i++){
			this.elements[i][attr] = value;
		}
	}else{
		return this.elements[0][attr];
	}
	return this;
}


MQuery.prototype.hover = function(fnOver, fnOut){
	for(var i = 0; i < this.elements.length; i++){
		myAddEvent(this.elements[i], "mouseover", fnOver);
		myAddEvent(this.elements[i], "mouseout", fnOut);
	}
	return this;
}

/*MQuery.prototype.toggle = function(){
	
	for(var i = 0; i < this.elements.length; i++){
		addToggle(this.elements[i]);
	}
	function addToggle(obj){
		var count = 0;
		myAddEvent(obj, "click", function(){
			alert(count++);
		});
	}
}
*/

//添加函数
MQuery.prototype.toggle = function(){
	//arguments  和 this一样复杂 一样容易犯错, 处理方式都一样
	var _arguments = arguments;
	for(var i = 0; i < this.elements.length; i++){
		addToggle(this.elements[i]);
	}
	function addToggle(obj){
		var count = 0;
		myAddEvent(obj, "click", function(){
			//应该调用,当前顺序的函数
			//alert(count++);
			_arguments[count++ % _arguments.length](); //注意函数的调用
		});
	}
	return this;
}

//eq 找到所有符合条件的元素组成的数组某个下标位置的元素
// _$(document)
// _$(obj)

MQuery.prototype.eq = function(n){
	// this.elements[n]  应该返回MQuery对象,而不是一个元素节点对象
	return _$(this.elements[n]);
}


MQuery.prototype.find = function(str){
	var aResult = []; //存符合条件的元素
	for(var i = 0; i < this.elements.length; i++){
		switch(str.charAt(0))
		{
			case ".": //class
				var aEle = getByClass(this.elements[i], str.substring(1));
				aResult = aResult.concat(aEle);
				break;
			default: //tagName
				//集合
				var aEle = this.elements[i].getElementsByTagName(str);
				appendArr(aResult, aEle);
				break;
		}
	}
	//return _$(aResult);
	//
	//var newMQuery = new MQuery();
	var newMQuery = _$();
	newMQuery.elements = aResult; //this.elements
	return newMQuery;
}

function appendArr(arr1, arr2){
	for(var i = 0; i < arr2.length; i++){
		arr1.push(arr2[i]);
	}
}


function getIndex(obj){
			//childNodes   children 剔除空白节点后的子节点
	var aBrother = obj.parentNode.children;
	for(var i = 0; i < aBrother.length; i++){
		if(aBrother[i] == obj){
			return i;
		}
	}
}



MQuery.prototype.index = function(){
	return getIndex(this.elements[this.elements.length - 1]);
}


MQuery.prototype.bind = function(sEv, fn){
	for(var i = 0; i < this.elements.length; i++){
		myAddEvent(this.elements[i], sEv, fn);
	}
}


//MQuery的插件方法extend
MQuery.prototype.extend = function(json){
	for(var key in json){
		//给MQuery添加方法
		MQuery.prototype[key] = json[key];
	}
}




















