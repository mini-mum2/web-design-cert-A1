$(document).ready(function(){
    //슬라이드
    let num = 0;
    setInterval(function(){
        num++;
        if(num>2) {num = 0}
        $('.slide_wrapper').css('transform',`translateY(${-33.333*num}%)`)
    },3000)

    //탭메뉴
    $('.tabs>a').click(function(){
        $('.tabs>a').removeClass('active')
        $(this).addClass('active')
        $('.tab_contents>ul').removeClass('active')
        let index = $(this).index()
        $('.tab_contents>ul').eq(index).addClass('active')
    })
    
    //팝업 열기
    $('#open').click(function(){
        $('.popup').addClass('active');
    })
    //팝업 닫기
    $('#close').click(function(){
        $('.popup').removeClass('active');
    })
})