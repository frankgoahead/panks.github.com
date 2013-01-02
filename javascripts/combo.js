(function($){
   $(document).ready(function(){

// hash URL
var hash = window.location.hash.substr(1);
var href = $('#nav li#ajax a').each(function(){
    var href = $(this).attr('href');
    if(hash==href.substr(0,href.length-5)){
        var toLoad = hash+'.html #container';
        $('#container').load(toLoad)
    }
});
       var containerId = '#container',
       $container = $(containerId);
       $('#nav li#ajax a').live('click', function(e){
            $container.fadeOut('fast');
            $('#load').remove();  
            $('#wrapper').append('<span id="load">LOADING...</span>');  
            $('#load').fadeIn('normal');
            window.location.hash = $(this).attr('href').substr(0,$(this).attr('href').length-5);
            $container.load($(this).attr('href') + '  ' + containerId)
            $('#load').fadeOut('normal');
            $container.fadeIn('normal');
            e.preventDefault();
        });
   });
})(jQuery);
