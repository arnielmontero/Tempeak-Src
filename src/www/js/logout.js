		
$(document).ready(function() {
	$('#logout').click(function(e){
			e.preventDefault();			
			sessionStorage.clear();
			setTimeout(function(){	window.location.href="./index.html";}, 2000);	
			
	});
});