// JavaScript Document
$(function(){
	var $div_li=$("div.menu-box ul li");
	$div_li.click(function(){
		$(this).addClass("active")
		       .siblings().removeClass("active");
		var index=$div_li.index(this);
		$("div.product-box>div")
		      .eq(index).show()
			  .siblings().hide();
		})
	})	
	
$(function(){
	var span = $(".nums font");
	
	$(".add_nums").click(function(){
		$(this).parents(".nums").find("font").show();
		$(this).parents(".nums").find(".jian_nums").show();
		var ui = parseInt(span.html());
		ui++;	
		span.text(ui);

	})
		
	$(".jian_nums").click(function(){
		var ui = parseInt(span.html());
		ui--;	
		if(ui<=0) {
			$(this).hide();
			$(this).parents(".nums").find("font").hide();
			}
		span.text(ui);
	})
})


