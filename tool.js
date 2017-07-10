
function getStyle(element,attr){
	if(typeof window.getComputedStyle !='undefined'){
				return window.getComputedStyle(element,null)[attr]
			}else if(typeof this.elements[i].currentStyle !='undefined'){
				return element.currentStyle[attr];
			}
}

//判断class 是否存在
function hasClass(el,className){

	return  el.className.match(new RegExp('(\\s|^)'+className+'(\\s|$)'))
}

//获取event对象
function  getEvent(e) {
	var e = e||window.event;
	return e;
}