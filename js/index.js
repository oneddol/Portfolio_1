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

    $('#footer .company_menu .depth1 > li > ul > li > a').on('click', function(e){
        e.preventDefault()
        var url = $(this).attr('href')
        $('#container').remove()
        $('#content').load(url)
    })

    //theader scroll bar
    var scrollSize = $(document).height()-$(window).height()
    $(window).on('scroll', function(){
        $('.scrolling-bar').css({
            zIndex:99999,
            opacity:1,
            width:((($(window)).scrollTop()/scrollSize)*100)+'%'
        })
    })

    $(window).on('scroll',function(){
        var sct = $(this).scrollTop();
        if(sct>=$('#header').height()){
            $('#header').css({
                position:'fixed',
                background:'rgba(0,0,0,0.9)'
            },)
        }   else {
            $('#header').css({
                position:'relative',
                background:'rgba(0,0,0,1)'
        })
    }
})





})(jQuery)