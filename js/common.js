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

    
// main - introduce 아티클 애니메이션 효과 안되ㅣㅣㅣㅣㅣㅣㅣㅣㅣㅣㅣㅣㅣㅣㅣㅣㅣㅣㅣㅁ
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

    // join page
    // $('form').submit(function(){
    //     var namelbl = $('#name_lbl').val()
    //     if(namelbl.length>=3 && namelbl.length<=10){
    //         for( var i=0; i<namelbl.length; i++){
    //             var ch = namelbl.charAt(i)
    //             if(!(ch>='0' && ch<='9') && !(ch>='a'&&ch<='z') && !(ch>='A'&&ch<='Z'))
    //             {alert('아이디는 영어 대소문자, 숫자만 사용 가능합니다.')
    //             $('#name_lbl').css({
    //                 border:'1px solid #f00'
    //             })
    //             $('#name_lbl').focus()
    //             $('#name_lbl').select()
    //             return false
    //             }
    //         }
    //     } else {
    //         alert('아이디는 3~10글자의 범위입니다.')
    //         $('#name_lbl').css({
    //             border:'1px solid #f00'
    //         })
    //         $('#name_lbl').focus()
    //         $('#name_lbl').select()
    //         return false
    //     }


    // })

    // $('.info_content > input').on(click, function(){
    //     $(this).attr({placeholder:''})
    // })

    var flagJoin = true
    initJoin()
    function initJoin(){
        if($('html').hasClass('mobile')&&flagJoin){
            $('.gender_area label, .pizza_area label').after('<br>')
            $('#addr1').attr({placeholder:'도로명 주소'})
            $('#addr2').attr({placeholder:'지번 주소'})
            $('#addr3').attr({placeholder:'나머지 주소'})
            flagJoin=false
        } else if ($('html').hasClass('pc')&&!flagJoin){
            $('.gender_area, .pizza_area').find('br').remove()
            $('#addr1').attr({placeholder:''})
            $('#addr2').attr({placeholder:''})
            $('#addr3').attr({placeholder:''})
            flagJoin=true
        }
    }

    $(window).resize(function(){
        initJoin()
    })

        // 이메일 선택 옵션따라 내용 채우기   왜안될까ㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏ
    $('#email_choice').on('change', function(){
        $('#email_choice option:selected').each(function(){
            if($(this).val()==='nochoice'){
                $('#domain').val('')
                $('#domain').attr('disabled', true)
            } else if ($(this).val()==='self'){
                $('#domain').val('')
                $('#domain').attr('disabled', false)
            } else {
                $('#domain').val($(this).val())
                $('#domain').attr('disabled', true)
            }
        })
    })


    // greeting.html
    $('#container .greeting_header .greeting .greet_nav > a').on('click', function(){
        $(this).addClass('active')
        $(this).siblings().removeClass('active')
    })

    // product01.html
    $('#container .product_header .product .product_nav > a').on('click', function(){
        $(this).addClass('active')
        $(this).siblings().removeClass('active')
    })


})(jQuery)