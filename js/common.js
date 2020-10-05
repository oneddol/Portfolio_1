(function($){
    
    // slick 이벤트
    $('.mainSlideInner').slick({
        autoplay: true, // 자동재생
        autoplaySpeed: 3500, // 간격시간
        dots: true, // 동그라미버튼
        speed: 600, // 바뀌는시간(생략가능)
        slidesToShow: 1, // 보여질슬라이드수(생략가능)
        slidesToScroll: 1, // 이동슬라이드수(생략가능)
        pauseOnHover: true, // 마우스오버시 멈춤여부(생략가능)
        pauseOnDotsHover: true, // 동그라미번호버튼에 호버시 멈춤여부(생략가능)
        pauseOnFocus: false, // 동그라미번호버튼 클릭시 자동실행 멈춤여부
        cssEase: 'linear', // 속도함수(생략가능)
        draggable: true, // 마우스드래그시 슬라이드 교체가능여부(생략가능)
        fade: true, // 슬라이드가 수평으로 이동하지 않고, 제자리에서 사라지고 나타남(생략가능)
        arrows: true, // 좌우화살표 사용여부(생략가능)
        prevArrow: '<button class="prevArrow marrow"><i class="fas fa-angle-left"></i></button>',
        nextArrow: '<button class="nextArrow marrow"><i class="fas fa-angle-right"></i></button>',
        responsive:[{
            breakpoint:1025,
            settings:{
                arrows:false
            }
        }]
    })

    
    $('.slide_inner').slick({
        autoplay: true, // 자동재생
        autoplaySpeed: 3000, // 간격시간
        dots: false, // 동그라미버튼
        speed: 600, // 바뀌는시간(생략가능)
        slidesToShow: 1, // 보여질슬라이드수(생략가능)
        slidesToScroll: 1, // 이동슬라이드수(생략가능)
        pauseOnHover: true, // 마우스오버시 멈춤여부(생략가능)
        pauseOnDotsHover: true, // 동그라미번호버튼에 호버시 멈춤여부(생략가능)
        pauseOnFocus: false, // 동그라미번호버튼 클릭시 자동실행 멈춤여부
        cssEase: 'linear', // 속도함수(생략가능)
        draggable: true, // 마우스드래그시 슬라이드 교체가능여부(생략가능)
        fade: false, // 슬라이드가 수평으로 이동하지 않고, 제자리에서 사라지고 나타남(생략가능)
        arrows: false
    })

    
// main - introduce 아티클 애니메이션 효과
$(window).scroll(function(){
    var sct = $(this).scrollTop()
    var intNear = $('.introduce').offset().top - $(this).height()/2
    if(sct>=intNear){
        for(var i=0; i<$('.introduce .info_box .column').length; i++){
            $('.introduce .info_box .column').eq(i).css({
                animationDelay:i*0.5+'s'
            }).addClass('animate__fadeInUp')
        }
    }   else    {
        $('.info_box .column').removeClass('animate__fadeInUp')
    }

    var curriNear = $('.curriInfo').offset().top - $(this).height()/2
    if(sct>=curriNear){
        $('.curriBox .column').eq(0).addClass('animate__fadeInLeft')
        $('.curriBox .column').eq(1).addClass('animate__fadeInRight')
        $('.curriBox .column').eq(2).addClass('animate__fadeInLeft')
        $('.curriBox .column').eq(3).addClass('animate__fadeInRight')
    }   else    {
        $('.curriBox .column').eq(0).removeClass('animate__fadeInLeft')
        $('.curriBox .column').eq(1).removeClass('animate__fadeInRight')
        $('.curriBox .column').eq(2).removeClass('animate__fadeInLeft')
        $('.curriBox .column').eq(3).removeClass('animate__fadeInRight')
    }
})


    // greeting.html
    $('.greeting_header .greeting .greet_nav > a').on('click', function(){
        $(this).addClass('.active')
        $(this).siblings().removeClass('.active')
    })

})(jQuery)