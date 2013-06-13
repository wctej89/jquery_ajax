$(document).ready(function(){
 $('#get_color').on('click', function(e) {
 		e.preventDefault();
 		$.ajax({
 			type: 'POST',
 			url: '/color'
 		}).done(function (response){
 			$('li:nth-child('+response.cellnum+')').css('background-color', response.colorcode);
 		});
 });
});