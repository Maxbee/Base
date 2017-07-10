/* base 库*/


var $= function(){
	return new Base();

}

function Base(){
	this.elements =[];

	this.getId =function(id){
		this.elements.push(document.getElementById(id))
		return this;
	};

	this.getTagName =function(tag){
		var tags = document.getElementsBytagName(tag);
		for(var i=0;i<tag.length;i++){
			this.elements.push(tags[i])
		}
		return this;
	}
}
Base.prototype.css =function (attr,value){
	for(var i = 0; i< this.elements.length;i++){
		this.elements[i].style[attr] = value;
	}
	return this ;
}


Base.prototype.html =function (str){
	for(var i = 0; i< this.elements.length;i++){
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
