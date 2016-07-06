---
layout:     post
title:      "jQuery延迟加载插件 – jquery.lazyload.js"
subtitle:   ""
date:       2016-05-18 10:50:00
author:     "Tc"
header-img: "img/list.jpg"
catalog: true
tags:
    - jquery
    - 加载
    - 插件
---

---

## 正文
Lazy Load一个jQuery插件，也就是基于jquery的。它可以延迟加载长页面中的图片。在包含很多大图片长页面中延迟加载图片可以加快页面加载速度. 浏览器将会在加载可见图片之后即进入就绪状态，在页面上图片比较多的时候，打开一张页面必然引起与服务器大数据量的交互。尤其是对于高清晰的图片，占的几M的空间。这里要实现的功能：在浏览器可视区域外的图片不会被载入, 直到用户将页面滚动到它们所在的位置，才会加载。

## 引入jquery

{% highlight ruby %}
 <script type="text/javascript" src="js/jquery"></script>
{% endhighlight %}

## 引入lazyload

{% highlight ruby %}
 <script type="text/javascript" src="js/jquery.lazyload.min.js"></script>
{% endhighlight %}

## html代码

{% highlight ruby %}
<!DOCTYPE html>
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>jquery.lazyload.js demo</title>
</head>
<body>
  <div class="main">
    <img class="lazy" alt="" data-original="img/bmw1.jpg" />
    <img class="lazy" alt="" data-original="img/bmw2.jpg" />
    <img class="lazy" alt="" data-original="img/bmw3.jpg" />
    <img class="lazy" alt="" data-original="img/bmw4.jpg" />
    <img class="lazy" alt="" data-original="img/bmw5.jpg" />
    <img class="lazy" alt="" data-original="img/bmw6.jpg" />
    <img class="lazy" alt="" data-original="img/bmw1.jpg" />
    <img class="lazy" alt="" data-original="img/bmw2.jpg" />
    <img class="lazy" alt="" data-original="img/bmw3.jpg" />
    <img class="lazy" alt="" data-original="img/bmw4.jpg" />
    <img class="lazy" alt="" data-original="img/bmw5.jpg" />
    <img class="lazy" alt="" data-original="img/bmw6.jpg" />
    <img class="lazy" alt="" data-original="img/bmw1.jpg" />
    <img class="lazy" alt="" data-original="img/bmw2.jpg" />
    <img class="lazy" alt="" data-original="img/bmw3.jpg" />
    <img class="lazy" alt="" data-original="img/bmw4.jpg" />
    <img class="lazy" alt="" data-original="img/bmw5.jpg" />
    <img class="lazy" alt="" data-original="img/bmw6.jpg" />
  </div>
</body>
</html>
{% endhighlight %}

## CSS
{% highlight ruby %}

<style type="text/css">
  .main{
    width:640px;
    margin:0 auto;
  }
  img.lazy{
    width:640px;
    height:480px;
  }

  </style>
{% endhighlight %}

## 初始化

{% highlight ruby %}
<script type="text/javascript">
  $(function() {
    $("img.lazy").lazyload({
      effect : "fadeIn"
    });
  });
  </script>

{% endhighlight %}

TIPS:必须设置图片的width和height,否则插件可能无法正常工作。

[lazyload.js api](http://www.appelsiini.net/projects/lazyload "lazyload.js api")










