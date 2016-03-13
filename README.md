
# 一个简单的幻灯片插件 - 基于jQuery

## 使用说明:

- 在你的HTML文件中复制下面的HTML结构代码；

``` 
<div id="slider-box">
    <div class="slider-img-box">
        <div class="img-list">
            <a href="#"><img src="img/1.jpg" alt=""></a>
        </div>
        <div class="img-list">
            <a href="#"><img src="img/2.jpg" alt=""></a>
        </div>
        <div class="img-list">
            <a href="#"><img src="img/3.jpg" alt=""></a>
        </div>
        <div class="img-list">
            <a href="#"><img src="img/4.jpg" alt=""></a>
        </div>
        <div class="img-list">
            <a href="#"><img src="img/1.jpg" alt=""></a>
        </div>
        <div class="img-list">
            <a href="#"><img src="img/6.jpg" alt=""></a>
        </div>
    </div>
    <div class="btn-box">
        <a href="javascript:;" class="btn btn-prev">&lt;</a>
        <a href="javascript:;" class="btn btn-next">&gt;</a>
    </div>
    <div class="slider-ctrl">
    </div>
</div>
```

- 在你的HTML文件中引入css文件夹中的style.css文件；

```
<link rel="stylesheet" type="text/css" href="css/style.css">
```

- 在你的HTML文件中引入js中slider.js文件（必须先引入jQuery文件）；

```
<script src="js/slider.js"></script>
```

- 使用插件

```js
$('#slider-box').slider({
    duration: 600,
    autoplay: 3000,
    width: 600,
    height: 300,
    autoplayDisableOnInteraction: true
});
```

## 参数说明：

- duration: 每张图动画的时间，即从滑动开始到滑动结束的时间
- autoplay: 自动切换的时间，即定时器的时间
- width: 最外层盒子的宽度
- height: 最外层盒子的高度
- autoplayDisableOnInteraction: 用户操作slider时,是否停止自动播放