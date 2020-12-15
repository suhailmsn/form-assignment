$(document).ready(function () {
	
	$('ul.register-tab li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.register-tab li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})

})
 $(document).on("submit", ".needs-validation", validate);
        $('form').on('submit', function () {
            alert('submitted');
        });
        $(".needs-validation input").blur(validate);
        function validate(event) {
            if ($(".needs-validation")[0].checkValidity() == false) {
                event.preventDefault();
            }
            $(".needs-validation")[0].classList.add("was-validated");
        }