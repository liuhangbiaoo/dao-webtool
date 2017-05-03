(function (root, factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD. Register as an anonymous module.
		define(['b'], factory);
	} else if (typeof exports === 'object') {
		// Node. Does not work with strict CommonJS, but
		// only CommonJS-like environments that support module.exports,
		// like Node.
		module.exports = factory(require('b'));
	} else {
		// Browser globals (root is window)
		root.returnExports = factory(root.b);
	}
}(this, function (b) {

	function returnExports () {
		b=true;
	}

	return returnExports;
}));