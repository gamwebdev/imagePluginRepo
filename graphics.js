(function($) {
	jQuery.fn.graphics = function(options) {
		return this.each(function() {
			
			var defaults = {
				height:"300px",
				width:"300px"
			};
			
			var o = $.extend(defaults,options);
			
			var e = $(this);
			e.height(128);
			e.click(function() {
				
				$("#myGalleryId").remove();
				
				e.clone().
				attr("id","myGalleryId"). // imp how to set id of an element
				height(o.height).
				width(o.width).
				css({
					position:"absolute",
					border: "10px solid yellow"
				}).
				prependTo("body").
				center().
				click(function(){
					$(this).remove();
					
				});
				
				
				
			});
		});
	};
})(jQuery);





/*(function($) {
	jQuery.fn.graphics = function() {
		return this.each(function() {
			var e = $(this);
			var h = e.height();
			e.height(128);
			e.click(function() {
				
				$("#myGalleryId").remove();
				
				e.clone().
				attr("id","myGalleryId"). // imp how to set id of an element
				height(h).
				css({
					position:"absolute",
					width:"500px",
					height:"500px",
					border: "10px solid yellow"
				}).
				prependTo("body").
				center().
				click(function(){
					$(this).remove();
					
				});
				
				
				
			});
		});
	};
})(jQuery);
*/







/*(function($) {
jQuery.fn.graphics = function() {
return this.each(function() {
var e = $(this);
var h = e.height();
e.height(128);
e.click(function() {
// removes the currently displayed preview (if any)
$("#myGalleryId").remove();
e.clone()
.attr("id", "myGalleryId")
.height(h)
.css("position", "absolute")
.prependTo("body")
.click(function() {
// whenever we click on the big preview,
// it will disappear.
// NOTE $(this) always refers to the currently
// selected element, the preview in this case
$(this).remove()
});
});
});
};
})(jQuery)
*/





/*
(function($) {                 // basic file
	jQuery.fn.graphics = function() {
		return this.each(function() {
			var e = $(this);
			e.click(function() {
				e.clone().prependTo("body");
			});
		});
	};
})(jQuery)
*/