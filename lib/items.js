var cool = require('cool-ascii-faces');
var loremIpsum = require('lorem-ipsum');
var sillyName = require('sillyname');
var ips = require('img-placeholder-src')();

var imagePlaceholderServices = [
    'fillmurray'
];

var getSillyName = (function () {
    var _c = {};

    return function (id) {
        return _c[id] ? _c[id] : _c[id] = sillyName();
    }
})();

var getDescription = (function () {
    var _c = {};

    return function (id) {
        return _c[id] ? _c[id] : _c[id] = loremIpsum();
    }
})();

var getFace = (function () {
    var _c = {};

    return function (id) {
        return _c[id] ? _c[id] : _c[id] = cool.faces[id % cool.faces.length];
    }
})();

var getImgSrc = (function () {
    var _c = {};

    return function (id) {
        return _c[id] ? _c[id] : _c[id] = ips.src({
            height: 100,
            width: 100,
            text: getSillyName(id)
        }, imagePlaceholderServices[Math.floor(Math.random() * imagePlaceholderServices.length)])
    }
})();

var getItem = (function () {
    var _c = {};

    function _getItem(id) {
        return {
            face: getFace(id),
            description: getDescription(id),
            name: getSillyName(id)
        }
    }

    return function (id) {
        return _c[id] ? _c[id] : _c[id] = _getItem(id);
    }
})();

module.exports = function items(limit, offset) {
    limit = limit || 24;
    offset = offset || 0;
    var ret = [];

    for(var i = offset, l = offset + limit; i < l; i++) {
        ret.push(getItem(i));
    }

    return ret;
}
