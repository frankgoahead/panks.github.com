$(document).ready(function() {
						   
	var hash = window.location.hash.substr(1);
	var href = $('#nav li a').each(function(){
		var href = $(this).attr('href');
		if(hash==href.substr(0,href.length-5)){
			var toLoad = hash+'.html #toload';
			$('#toload').load(toLoad)
		}											
	});

	$('#nav li#ajax a').click(function(){
								  
		var toLoad = $(this).attr('href')+' #toload';
		$('#toload').hide('fast',loadContent);
		$('#load').remove();
		$('#wrapper').append('<span id="load">LOADING...</span>');
		$('#load').fadeIn('normal');
		window.location.hash = $(this).attr('href').substr(0,$(this).attr('href').length-5);
		function loadContent() {
			$('#toload').load(toLoad,'',showNewContent())
		}
		function hideLoader() {
			$('#load').fadeOut('fast');
		}
		function showNewContent() {
			$('#toload').show('normal',hideLoader());
		}
		return false;
		
	});

});
