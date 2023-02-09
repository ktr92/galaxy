
$(document).ready(function() { 
  $("input[type=tel]").mask("7 (999) 999-99-99");

  $(function() {
	
	$(".accordion__title").on("click", function(e) {

		e.preventDefault();
		var $this = $(this);

		if (!$this.hasClass("accordion-active")) {
			$(".accordion__content").slideUp(400);
			$(".accordion__title").removeClass("accordion-active");
			$('.accordion__arrow').removeClass('accordion__rotate');
		}

		$this.toggleClass("accordion-active");
		$this.next().slideToggle();
		$('.accordion__arrow',this).toggleClass('accordion__rotate');
	});
	//END
	
});

$("a.scrollTo").click(function (e) {
	e.preventDefault()
	var destination = $($(this).attr("href")).offset().top - 90;
	$("html:not(:animated),body:not(:animated)").animate({
		scrollTop: destination
	}, 1100);
	return false;
});


window.addEventListener('scroll', (event) => {
	scroll = window.scrollY
	if (scroll >= 1200) {
		document.getElementById("gototop").classList.add('active')
	} else {
		document.getElementById("gototop").classList.remove('active')
	}

});


})