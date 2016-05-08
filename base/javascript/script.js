$(function(){
	   $("#nav ul li").hover(function(){
			$(this).children("ul").stop(true,true).slideDown(400);
        },function(){
		    $(this).children("ul").stop(true,true).slideUp("fast");
		});
})

function close(){var adv=document.getElementById("ga");adv.style.display="none";}