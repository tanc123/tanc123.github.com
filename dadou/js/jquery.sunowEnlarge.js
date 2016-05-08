/**
 *
 * sunow编写 
 * 2014.11
 * 图片放大镜插件
 * 基于juqery 使用前请先引入jquery库
 * 兼容IE6以上 和所有浏览器
 *
 */
(function($) {
	$.fn.sunowEnlarge = function(options) {
		var defaults = {
				times: 2,
				divSize: 150,
				roffset: 20,
				bgColor: '#39F',
				nature: 'datasrc'
		};
		var options = $.extend(defaults, options),plugin = this;

		var Amplification = {
			
			presentImg: '',
			defaultMove: '',
			defaultShow: '',
			initial: function() {
				Amplification.loaderHtml();

				plugin.find("img").mouseenter(function() {

					if (typeof($(this).attr(options.nature)) != "undefined") {
						
						Amplification.presentImg = $(this);

						plugin.mousemove(function(e) {

							var x = e.pageX,
							y = e.pageY,
							img_left = Amplification.presentImg.offset().left,
							img_top = Amplification.presentImg.offset().top,
							img_w = Amplification.presentImg.width(),
							img_h = Amplification.presentImg.height(),

							move_left = Amplification.defaultMove.offset().left,
							move_top = Amplification.defaultMove.offset().top,
							move_w = Amplification.defaultMove.width(),
							move_h = Amplification.defaultMove.height();

							if (x >= img_left && x <= img_left + img_w && y >= img_top && y <= img_top + img_h) {
								Amplification.defaultMove.show();
								Amplification.defaultShow.show();
								if ($(window).width() - (plugin.offset().left + plugin.width()) -  options.roffset > Amplification.defaultShow.width()) {
									Amplification.defaultShow.offset({
										left: plugin.offset().left + plugin.width() + options.roffset,
										top: plugin.offset().top
									})
								} else {
									Amplification.defaultShow.offset({
										left: plugin.offset().left,
										top: plugin.offset().top + plugin.height() + options.roffset
									})
								};

							} else {
								Amplification.defaultMove.hide();
								Amplification.defaultShow.hide();
							};

							if (x >= img_left + move_w / 2 && x < img_left + img_w - move_w / 2) {
								Amplification.defaultMove.css({
									'left': x - move_w / 2
								})
							} else if (x >= img_left && x < img_left + move_w / 2) {
								Amplification.defaultMove.css({
									'left': img_left
								})
							} else if (x >= img_left + img_w - move_w / 2 || x <= img_left + img_w) {
								Amplification.defaultMove.css({
									'left': img_left + img_w - move_w
								})
							};

							if (y >= img_top + move_h / 2 && y < img_top + img_h - move_h / 2) {
								Amplification.defaultMove.css({
									'top': y - move_h / 2
								});
							} else if (y >= img_top && y < img_top + move_h / 2) {
								Amplification.defaultMove.css({
									'top': img_top
								});
							} else if (y >= img_top + img_h - move_h / 2 || x <= img_top + img_h) {
								Amplification.defaultMove.css({
									'top': img_top + img_h - move_h
								});
							};

							Amplification.showImgs(move_left - img_left, move_top - img_top);
						}).mouseleave(function(){
							Amplification.defaultMove.hide();
							Amplification.defaultShow.hide();
						})
					}

				})
			},
			loaderHtml: function() {

				plugin.append('<div class="sunowMove_dv"></div>');
				plugin.append('<div class="sunowShow_dv"><img></div>');
				Amplification.defaultMove = $(".sunowMove_dv");
				Amplification.defaultShow = $(".sunowShow_dv");

				Amplification.defaultMove.css({
					"width": options.divSize / options.times,
					"height": options.divSize / options.times,
					"position": "absolute",
					"display": "none",
					"z-index": "9999",
					'opacity': 0.3,
					"background": options.bgColor
				});
				Amplification.defaultShow.css({
					"width": options.divSize * options.times,
					"height": options.divSize * options.times,
					"position": "absolute",
					"display": "none",
					"overflow": "hidden",
					"z-index": "9999",
					"box-shadow": "0 0 5px #000",
					"background": "#fff"
				});

			},
			showImgs: function(x, y) {
				Amplification.defaultShow.find('img').attr('src', (Amplification.presentImg.attr('src'))).css({
					'position': 'absolute',
					'left': -x * Math.pow(options.times, 2),
					'top': -y * Math.pow(options.times, 2),
					'width': Amplification.presentImg.width() * Math.pow(options.times, 2),
					'height': Amplification.presentImg.height() * Math.pow(options.times, 2)
				})
			}
		};
		
		Amplification.initial()
		
	}	
})(jQuery)