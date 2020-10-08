(function($){

    // content 구역 url load

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
        if($('html').hasClass('pc')){
            var url = $(this).attr('href')
            $('#container').remove()
            $('#content').load(url)
        }
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

    //header에 scroll bar위치 따라 bar 그리기
    $(window).on('scroll', function(){
        var scrollSize = $(document).height()-$('#header').height()-$(window).height();
        var sct = $(this).scrollTop();
        var wid = (sct/scrollSize)*100+'%';
        $('.scrolling-bar').css({
            zIndex:99999999,
            opacity:1,
            width:wid
        })
    })

    //scroll 위치 따라 header 변경
    $(window).on('scroll',function(){
        var sct = $(this).scrollTop();
        if(sct>=$('#header').height()){
            $('#header').css({
                position:'fixed',
                background:'rgba(0,0,0,0.8)'
            })
            $('#header .main_menu').css({
                display:'none'
            })
        }   else {
            $('#header').css({
                position:'relative',
                background:'rgba(0,0,0,0.19)'
        })
        $('#header .main_menu').css({
            display:'block'
        })
    }
})

    // 반응형 사이즈 조정시 네이브박스 오픈여부
    var deviceSize = 767;
    function scrollOX(status){
        $('html').css({
            overflowY:status
        })
        var htmlWidth = $('html').width()
        return htmlWidth
    }

    var swh = scrollOX('hidden'), sws = scrollOX('scroll'), swd = swh - sws
    if (swd>0){deviceSize = deviceSize - swd}

    res()

    function res(){
        var ww = $(window).width()
        if(ww>deviceSize && !$('html').hasClass('pc')){
            $('html').addClass('pc').removeClass('mobile')
            $('.h1_nav .nav').show()
            $('.depth1 > li').removeClass('on')
            $('.openNav, .closeNav, .depth2').hide()
        } else if (ww<=deviceSize && !$('html').hasClass('mobile')){
            $('html').addClass('mobile').removeClass('pc')
            $('.openNav').show()
            $('.h1_nav .nav').hide()
        }
    }

    $(window).on('resize', function(){
        res()
    })

  // mobile화면에서 클릭 시 2단계 메뉴 보이도록 하기
    $('.depth1 > li').on('click', function(e){
        e.preventDefault()
        if($('html').hasClass('mobile')){
            $(this).toggleClass('on')
            $(this).find('.depth2').stop().slideToggle(0)
            $(this).siblings().each(function(){
                if($(this).css('display')==='inline-block'){
                    $(this).find('.depth2').slideUp(0)
                    $(this).removeClass('on')
                }
            })
        }
    })

    // pc화면에서 1단계 메뉴 호버 시 2단계 메뉴 보이도록 하기
    $('.depth1 > li').hover(
        function(){
            if($('html').hasClass('pc')){
                $(this).find('.depth2').stop().slideDown(0)
                $(this).addClass('on')
            }
        },
        function(){
            if($('html').hasClass('pc')){
                $(this).find('.depth2').stop().slideUp(0)
                $(this).removeClass('on')
            }
        }
    )

    // 반응형 nav박스 작동
    $('.h1_nav .openNav').on('click', function(){
        $(this).next().stop().slideDown(300)
        $(this).hide()
        $(this).nextAll('.closeNav').css({display:'block'})
    })
    $('.h1_nav .closeNav').on('click', function(){
        $(this).prev().stop().slideUp(300)
        $(this).hide()
        $(this).prevAll('.openNav').css({display:'block'})
        $(this).prevAll('.nav').find('.depth1 > li').removeClass('on')
        $(this).prevAll('.nav').find('.depth1 > li > .depth2').css({display:'none'})
    })




})(jQuery)