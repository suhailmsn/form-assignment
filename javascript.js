$(document).ready(function () {
	
	$('ul.register-tab li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.register-tab li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})
        $('form').on('submit', function () {
            $('ul.register-tab li').addClass('submitted');
            alert('submitted');
        });

    })