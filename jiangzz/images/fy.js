$(document).ready(function(e) {
    
	var fybox = $("#fy");
	var pageurl = window.location.href;
	var fdl = fybox.children("div").length;
	for(var i=0;i<=fdl+1;i++)
	{
		var hsr = fybox.find("div").eq(i).children("a").attr("href");
		var st = 'http://chengdu.somorn.cn/yinxiang/'+hsr.substring(6,hsr.length);
		if(pageurl==st)
		{
			
			if(i==0)
			{
				var lasturl = fybox.find("div").eq(i+1).children("a").attr("href");
				var lasttit = fybox.find("div").eq(i+1).children("a").attr("title");
				var st2 = 'http://chengdu.somorn.cn/yinxiang/'+lasturl.substring(6,lasturl.length);
				$("#fy-show a:first").hide();
				$("#fy-show a:last").attr("href",st2);
				$("#fy-show a:last").text('下一篇 : '+lasttit);
			}else if(i==fdl-1){
				var firsturl = fybox.find("div").eq(i-1).children("a").attr("href");
				var firsttit = fybox.find("div").eq(i-1).children("a").attr("title");
				var st1 = 'http://chengdu.somorn.cn/yinxiang/'+firsturl.substring(6,firsturl.length);
				$("#fy-show a:last").hide();
				$("#fy-show a:first").attr("href",st1);
				$("#fy-show a:first").text('上一篇 : '+firsttit);
			}else{
				var firsturl = fybox.find("div").eq(i-1).children("a").attr("href");
				var firsttit = fybox.find("div").eq(i-1).children("a").attr("title");
				var st1 = 'http://chengdu.somorn.cn/yinxiang/'+firsturl.substring(6,firsturl.length);
				var lasturl = fybox.find("div").eq(i+1).children("a").attr("href");
				var lasttit = fybox.find("div").eq(i+1).children("a").attr("title");
				var st2 = 'http://chengdu.somorn.cn/yinxiang/'+lasturl.substring(6,lasturl.length);
				$("#fy-show a:first").attr("href",st1);
				$("#fy-show a:first").text('上一篇 : '+firsttit);
				$("#fy-show a:last").attr("href",st2);
				$("#fy-show a:last").text('下一篇 : '+lasttit);
			}
			
		}else{
		}
		//alert(st);
	}
	
	
});