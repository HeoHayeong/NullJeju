(function(){
	var url = document.location.href;
	var cate = url.split('?')[1].split('&')[0].split('=')[1];
	$('.filtr-controls').find('span').removeClass('active');
	if(cate == 'all')
		$(".cateAll").addClass('active');
	if(cate == 'jeju')
		$(".cateJeju").addClass('active');
	if(cate == 'seo')
		$(".cateSeo").addClass('active');
	if(cate == 'island')
		$(".cateIsland").addClass('active');
})();


function changeView(value){
    
    if(value == "0") // HOME 버튼 클릭시 메인으로 이동
    {
        location.href="main.do";
    }
    else if(value == "1") // 로그인 버튼 클릭시 로그인 화면으로 이동
    {
        location.href="login.do";
    }
    else if(value == "2") // 회원가입 버튼 클릭시 회원가입 화면으로 이동
    {
        location.href="login.do";
    }
    else if(value == "3") // 로그아웃 버튼 클릭시 로그아웃 처리
    {
        location.href="logout.do";
    }
    else if(value == "4") // 회원정보 수정 버튼 클릭시 회원 확인 화면으로 이동
    {
        location.href="infochk.do";
    }
    else if(value == "5") // 비밀번호 확인 후 인증되면 비밀번호 변경 화면으로 이동
    {
        location.href="modify.do";
    }
}


// 탑버튼
$( window ).scroll(function() {
   if ( $( this ).scrollTop() > 200 ) {
      $( '.topBtn' ).fadeIn();
   } else {
      $( '.topBtn' ).fadeOut();
   }
} );

$(document).ready(function(){
   $( '.topBtn' ).click( function() {
      $( 'html, body' ).animate( { scrollTop : 0 }, 400 );
      return false;
    } );
} );