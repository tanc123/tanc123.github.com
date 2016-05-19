---
layout:     post
title:      "jekyll-paginate插件安装"
subtitle:   ""
date:       2016-04-28 10:50:00
author:     "Tc"
header-img: "img/list.jpg"
catalog: true
tags:
    - jekyll
    - 版本
    - 分页
---

---

## 正文
如果博客有分页功能的话， Jekyll 升级到了 3.0.1 版本，自动生成本地博客的服务会出问题

运行 ``` $ jekyll serve ``` 出现报错：

> Deprecation: You appear to have pagination turned on, but you haven’t included the```jekyll-paginate```
gem. Ensure you have gems: ```jekyll-paginate``` in your configuration file.




## Install Jekyll-paginate

安装 Jekyll-paginate 插件：

{% highlight ruby %}
 $ gem install jekyll-paginate
{% endhighlight %}

确认是否已经包含在已安装的 gem 插件列表中：

{% highlight ruby %}
 $ gem list
{% endhighlight %}


嗯…这个就算解决了，再次运行服务，恢复正常啦。

如图![正常]({{ site.url }}/img/hello/normal.png)






