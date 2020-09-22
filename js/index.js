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

    //header scroll bar
    var flag=true;
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
                background:'rgba(0,0,0,0.9)'
            })
        }   else {
            $('#header').css({
                position:'relative',
                background:'rgba(0,0,0,1)'
        })
    }
})
// introduce 아티클 애니메이션 효과
    $(window).scroll(function(){
        var sct = $(this).scrollTop()
        var intNear = $('.introduce').offset().top - $(this).height()/2
        if(sct>=intNear){
            for(var i=0; i<$('.info_box .column').length; i++){
                $('.info_box .column').eq(i).css({
                    animationDelay:i*0.5+'s'
                }).addClass('animate__fadeInUp')
            }
        }   else    {
            $('.info_box .column').removeClass('animate__fadeInUp')
        }

        var curriNear = $('.curriInfo').offset().top - $(this).height()/2
        if(sct>=curriNear){
            $('.curriBox .column').eq(0).addClass('animate__fadeInLeft')
            $('.curriBox .column').eq(1).addClass('animate__fadeIn')
            $('.curriBox .column').eq(2).addClass('animate__fadeInRight')
        }   else    {
            $('.curriBox .column').eq(0).removeClass('animate__fadeInLeft')
            $('.curriBox .column').eq(1).removeClass('animate__fadeIn')
            $('.curriBox .column').eq(2).removeClass('animate__fadeInRight')
        }
    })





})(jQuery)