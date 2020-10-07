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

    //header scroll bar
    
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

    // nav depth2 슬라이드다운
    // $('.h1_nav .depth1 > li').on('mouseover', function(){
    //     $('.h1_nav .depth1 > li > .depth2').slideDown(300)
    // })

    // 반응형 사이즈 조정시 네이브박스 오픈여부
    res()
    res2()

    var flag=true;
    function res(){
        var ww = $(window).width()
        if(ww>767 && flag){
            $('.h1_nav .nav').show()
            $('.depth1 > li').removeClass('on')
            $('.openNav, .closeNav, .depth2').hide()
            flag = false
        } else if (ww<=767 && !flag){
            $('.openNav').show()
            $('.h1_nav .nav').hide()
            flag=true
        }
    }

    function res2(){
        var ww = $(window).width()
        if(ww>767){
            $('html').addClass('pc').removeClass('mobile')
        } else if(ww<=767){
            $('html').addClass('mobile').removeClass('pc')
        }
    }

    $(window).on('resize', function(){
        res()
        res2()
    })

  // mobile화면에서 클릭 시 2단계 메뉴 보이도록 하기
    $('.depth1 > li').on('click', function(){
        if(('html').hasClass('mobile')){
            $(this).toggleClass('on')
            $(this).find('.depth2').slideToggle(300)
            $(this).siblings().each(function(){
                if($(this).css('display'==='inline-block')){
                    $(this).find('.depth2').slideUp(300)
                    $(this).removeClass('on')
                }
            })
        }
        return false;
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
    })




})(jQuery)