/*
 * @Author: dongjiabo
 * @Date:   2016-03-12 16:43:48
 * @Last Modified by:   dongjiabo
 * @Last Modified time: 2016-03-12 17:09:02
 */

'use strict';

function animate(obj, json, fn) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function() {
        var bStop = true; // 当bStop为真的时候，说明这次运动到达目标位置了
        for (var attr in json) {
            // 1.取当前的值
            var iCur = 0;

            if (attr == 'opacity') {
                iCur = parseInt(parseFloat(getStyle(obj, attr)) * 100) || 0; // 因为IE6、7、8下获取不到opacity,让其为0
            } else {
                iCur = parseInt(getStyle(obj, attr));
            }
            // 2.算速度
            var iStep = (parseInt(json[attr]) - iCur) / 8;
            iStep = iStep > 0 ? Math.ceil(iStep) : Math.floor(iStep);
            // 3.检测停止   运动没有到达目标位置，我们让bStop为假
            if (iCur != json[attr]) {
                bStop = false;
            }
            if (attr == 'opacity') {
                if ("opacity" in obj.style) {
                    obj.style.opacity = (iCur + iStep) / 100;
                } else {
                    obj.style.filter = 'alpha(opacity:' + (iCur + iStep) + ')';
                }
            } else if (attr == "zIndex") {
                obj.style.zIndex = json[attr];
            } else {
                obj.style[attr] = iCur + iStep + 'px';
            }
        }
        if (bStop) { // 如果bStop为真，说明运动到达目标了，停止定时器，并且如果如果有fn，就执行fn函数
            clearInterval(obj.timer);
            if (fn) {
                fn();
            }
        }
    }, 15)
};

function getStyle(obj, attr) {
    if (obj.currentStyle) { // IE
        return obj.currentStyle[attr];
    } else { // 其它浏览器
        return getComputedStyle(obj, false)[attr];
    }
};
