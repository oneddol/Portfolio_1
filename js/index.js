(function($){

    $(window).load(function(){
        $('.loadAni').delay(100).fadeOut(100)
    })
    $('#content').load('main.html')

    $('.login_menu > a').on('click', function(e){
        e.preventDefault()
        var url = $(this).attr('href')
        $('#container').remove()
        $('#content').load(url)
    })

    $('.h1_nav .nav .depth1 > li > a').on('click', function(e){
        e.preventDefault()
        var url = $(this).attr('href')
        $('#container').remove()
        $('#content').load(url)
    })

    $('.h1_nav .nav .depth1 > li > .depth2 > li > a').on('click', function(e){
        e.preventDefault()
        var url = $(this).attr('href')
        $('#container').remove()
        $('#content').load(url)
    })



})(jQuery)