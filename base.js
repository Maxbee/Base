/* base 库*/

//前台调用
var $= function(_this){
	return new Base(_this);

}

function Base(_this){
	this.elements =[];
	if(_this !=undefined){
		this.elements[0]=_this;
	}
}



Base.prototype.getId =function(id){
	this.elements.push(document.getElementById(id))
	return this;
};

Base.prototype.getTagName =function(tag){
	var tags = document.getElementsBytagName(tag);
	for(var i=0;i<tag.length;i++){
		this.elements.push(tags[i])
	}
	return this;
};
Base.prototype.getClass = function(classname,idname){
	var node =null;
	if(arguments ==2){
		node = document.getElementById(idname);
	}else{
		node = document;
	}
	var classN = node.getElementsByClassName(classname);
	for(var i=0;i<classN.length;i++){
		this.elements.push(classN[i]);
	}
	return this;
}


Base.prototype.css =function (attr,value){
	for(var i = 0; i< this.elements.length;i++){
		if(arguments.length ==1){
		 return	getStyle(this.elements[i],attr)
		}
		this.elements[i].style[attr] = value;
	}
	return this ;
}

//
Base.prototype.html =function (str){
	for(var i = 0; i< this.elements.length;i++){
		if(arguments.length == 0){
			return this.elements[i].innerHTML;
		}
		this.elements[i].innerHTML = str
	}
	return this ;
}

Base.prototype.click = function(fn){
	for(var i = 0; i< this.elements.length;i++){
		this.elements[i].onclick  = fn;
	}
	return this;
}


//获取某一个节点
Base.prototype.getElement = function(num){
	var element = this.elements[num];
	this.elements = []
	this.elements[0] =element;
	return this
}

//add Class
Base.prototype.addClass = function(className){
	for(var i=0;i<this.elements.length;i++){
		if(!hasClass(this.elements[i],className)){
				this.elements[i].className +=' ' + className
		}
		
	}
}


Base.prototype.removeClass =function(classname){
	for(var i=0;i<this.elements.length;i++){
		if(hasClass(this.elements[i],classname)){
			this.elements[i].className = this.elements[i].className.replace(new RegExp('(\\s|^)'+classname+'(\\s|$)'),' ')
		}
		
	}
}

//添加lingk或style规则
Base.prototype.addRule = function(num,selectorTexr,cssText,position){
	var sheet =document.styleSheets[num];
	if(typeof sheet.addRule !='undefined'){
		sheet.insertRule(selectorTexr+'{'+ cssText+'}',position)
	}else if(typeof sheet.addRule !='undefined'){
		sheet.addRule(selectorTexr,cssText,position)
	}
	return this;
}

Base.prototype.removeRule =function (index){
	var sheet =document.styleSheets[num];
	if(typeof sheet.deleteRule !='undefined'){
		sheet.deleteRule(index);
	}else if(typeof sheet.removeRule !='undefined'){
		sheet.removeRule(index)
	}
	return this;
}

//设置鼠标移入移除时间
Base.prototype.hover = function(over,out){
	for (var i = 0; i < this.elements.length; i++) {
		this.elements[i].onmouseover =over;
		this.elements[i].onmouseout =out;
	}
	return this;
}

//设置显示
Base.prototype.show =function(){
	for (var i = 0; i < this.elements.length; i++) {
		this.elements[i].style.display ='block'
	}
}
Base.prototype.hide =function(){
	for (var i = 0; i < this.elements.length; i++) {
		this.elements[i].style.display ='none'
	}
}

//设置物体居中
Base.prototype.center =function(width,height){
	var top =(document.documentElement.clientHeight -height)/2;
	var left = (document.documentElement.clientWidth -width)/2;
	for (var i = this.elements.length - 1; i >= 0; i--) {
			this.elements[i].style.top = top +'px';
			this.elements[i].style.left = left +'px';
 		}	
 		return this;
}

Base.prototype.resize =function(fn){
	
	window.onresize= fn;
	return this;
}

//物体拖动
Base.prototype.drag = function(){
	for(var i = 0;i<this.elements.length;i++){

		this.elements[i].onmousedown =function(e){
			var e = getEvent(e);
			var _this =this;
			var diffX = e.clientX -_this.offsetLeft;
			var diffY =e.clientY -_this.offsetTop;
			document.documentElement.style.overflow ='hidden'
			
			document.onmousemove =function(e){
				var e =getEvent(e);
				_this.style.left = e.clientX -diffX +'px';
				_this.style.top = e.clientY -diffY +'px';

			}
			document.onmouseup =function(e){
				this.onmousemove = null;
				this.onmouseup =null;
				document.documentElement.style.overflow='auto'
			}
		}

	}
	return this;
}