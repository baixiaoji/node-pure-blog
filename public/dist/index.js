webpackJsonp([0],{

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

setTimeout(function () {
    $.ajax({
        url: '/user.action',
        method: 'get',
        success: function success(arr) {
            var liStr = arr.map(function (ele) {
                return "<li>" + ele + "</li>";
            }).join("");

            $("#root").html(liStr);
        },
        error: function error(err) {
            console.log(err);
        }
    });
    // 模拟post
    $.ajax({
        url: '/list.action',
        method: 'post',
        headers: {
            "content-type": "application/json"
        },
        data: JSON.stringify(["china", "zouzou"]),
        success: function success(arr) {
            var liStr = arr.map(function (ele) {
                return "<li>" + ele + "</li>";
            }).join("");

            $("#shop").html(liStr);
        },
        error: function error(err) {
            console.log(err);
        }
    });
}, 1000);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ })

},[2]);
//# sourceMappingURL=index.js.map