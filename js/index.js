(function($){

    $('#content').load(main.html)

    $('.login_menu > a').on('click', function(e){
        e.preventDefault
        var url = $(this).attr('href')
        $('#container').remove()
        $('#content').load(url)
    })

})(jQuery)