/*
 * @Author: dongjiabo
 * @Date:   2016-03-12 15:46:42
 * @Last Modified by:   dongjiabo
 * @Last Modified time: 2016-03-12 18:30:52
 */

(function(document) {
    'use strict';
    /**
     * 选取元素
     */
    var sliderBox = document.getElementById('slider-box');
    var imgBox = sliderBox.querySelector('.slider-img-box');
    var imgList = imgBox.querySelectorAll('.img-list');
    var btnBox = sliderBox.querySelector('.btn-box');
    var btnPrev = btnBox.querySelector('.btn-prev');
    var btnNext = btnBox.querySelector('.btn-next');
    var ctrlBox = sliderBox.querySelector('.slider-ctrl');
    var ctrlList = ctrlBox.querySelectorAll('span');



    var sliderWidth = sliderBox.offsetWidth; // 获取最外层的高度


    //console.log(btnNext);
    var i = 0,
        iNow = 0, // 计数器
        len = imgList.length,
        timer = null;
    // 让第一个盒子位于0 ， 其余的盒子位于右边一个盒子的位置
    for (i = 0; i < len; i++) {
        imgList[i].style.left = i === 0 ? 0 + 'px' : 600 + 'px';
    }
    // next
    btnNext.addEventListener('click', autoPlay, false);

    // prev
    btnPrev.addEventListener('click', prevFn, false);
    // 小圆圈点击效果
    for (var a = 0; a < ctrlList.length; a++) {
        ctrlList[a].addEventListener('click', clickCircle, false);
    };

    // 开启定时器
    timer = setInterval(autoPlay, 3000);
    // 鼠标滑过
    sliderBox.addEventListener('mouseenter', function() {
        clearInterval(timer);
        btnBox.style.display = "block";
    }, false);
    // 鼠标离开
    sliderBox.addEventListener('mouseleave', function() {
        timer = setInterval(autoPlay, 3000);
        btnBox.style.display = "none";
    }, false);



    /**
     * 用来控制小圆圈的点击效果
     * @return No return value
     */
    function clickCircle() {
        var index = this.innerHTML - 1; // 也就是我们点击的下面的span
        for (var b = 0; b < ctrlList.length; b++) {
            ctrlList[b].classList.remove('active');
        };
        this.classList.add('active');

        if (index > iNow) {
            // 当我们点击的那张的索引号大于当前正在运动的那一张的图片，我们要让图片从右侧运动出来
            animate(imgList[iNow], { left: -sliderWidth });
            imgList[index].style.left = sliderWidth + "px";
        } else if (index < iNow) {
            // 当我们的点击的那张索引号小于当前正在运动的那一张的图片，我们要让图片从左侧运动出来
            animate(imgList[iNow], { left: sliderWidth });
            imgList[index].style.left = -sliderWidth + "px";
        }
        iNow = index; //  点击过后，让播放计数器，等于当前点击的索引，再继续进行运动
        animate(imgList[index], { left: 0 });
    };
    /**
     * 上一个按钮点击效果
     * @return No return value
     */
    function prevFn() {
        animate(imgList[iNow], {
            left: sliderWidth
        });
        iNow--;
        iNow = iNow < 0 ? len - 1 : iNow;
        imgList[iNow].style.left = -sliderWidth + 'px';
        animate(imgList[iNow], {
            left: 0
        })
        circleStyle();
    };

    /**
     * 下一个按钮点击效果以及自动播放控制从效果
     * @return No return value
     */
    function autoPlay() {
        animate(imgList[iNow], {
            left: -sliderWidth
        });
        iNow++;
        iNow = iNow > len - 1 ? 0 : iNow;
        imgList[iNow].style.left = sliderWidth + 'px';
        animate(imgList[iNow], {
            left: 0
        })
        circleStyle();
    };

    /**
     * 用来控制小圆圈的样式
     * @return No return value
     */
    function circleStyle() {
        for (var k = 0; k < ctrlList.length; k++) {
            ctrlList[k].classList.remove('active');
        }
        ctrlList[iNow].classList.add('active');
    };
})(document);
