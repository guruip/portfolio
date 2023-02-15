const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll(params) {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 3;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('_active');
            }else {   
               if (!animItem.classList.contains('_anim-no-hide')) {
                    animItem.classList.remove('_active');
                }
            }
        } 
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }

    setTimeout(() => {
        animOnScroll();
    }, 300);   
}

/*----для формы---*/
jQuery(document).ready(function () {   
	$(".phone").mask("+7 (999) 999-99-99"); 
   jQuery('form button').click( function() {
	   var form = jQuery(this).closest('form');
	   if ( form.valid() ) {
		   form.css('opacity','.5');
		   var actUrl = form.attr('action');
		   jQuery.ajax({
			   url: actUrl,
			   type: 'post',
			   dataType: 'html',
			   data: form.serialize(),
			   success: function(data) {
					//form.html(data);
					//form.css('opacity','1');
				//    form.find('.status').html('форма отправлена успешно');
				   //$('#myModal').modal('show') // для бутстрапа
			   },
			//    error:	 function() {
			// 		form.find('.status').html('серверная ошибка');
			//    }
		   });
	   }
   });
});