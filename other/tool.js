 function add(a,b){
    return a + b;
};
var minus = function(a,b){
    return a - b;
};
module.exports={
	add:function(a,b){return a+b},
	minus:minus
}

/**
 * [inArray 主要用于查询数组中是否存在某个特定的值；]
 * @param  {[type]} string [description]
 * @return {[type]}        [description]
 */
Array.prototype.inArray = function(string){
	for(var i=0; i<this.length; i++){
		if(this[i]===string){
			return true;
		}
	}
	return false;
}

/**
 * [reverse 主要用于翻转字符串]
 * @return {[type]} [description]
 */
String.prototype.reverse = function(){
	return Array.prototype.reverse.apply(this.split("")).join("");
}

/**
 * [trim 主要用于简化字符串，删除字符串两头的空格]
 * @param  {[type]} typeof String.prototype.trim ! [description]
 * @return {[type]}        [description]
 */
if(typeof String.prototype.trim !== 'function'){
	String.prototype.trim=function(){
		return this.replace(/^\s+|\s+&/g,'');
	}
}

/**
 * [shuffle 主要用于将一个数组进行随机打乱]
 * @return {[type]} [description]
 */
Array.prototype.shuffle=function(){
	var randomSort=function(a,b){
		return Math.random()>.5 ? -1 : 1;
	}
	return this.sort(randomSort);
}