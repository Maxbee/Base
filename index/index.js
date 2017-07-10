window.onload=function () {
	$().getClass('member').hover(function(){
		$().getClass('member_ul').show();
		$(this).css('background','url(img/up.png) 70px center no-repeat')
		$(this).css('backgroundSize','10px 10px')
	},function(){
		$().getClass('member_ul').hide();
		$(this).css('background','url(img/down.png) 70px center no-repeat')
		$(this).css('backgroundSize','10px 10px')
	})

	$().getId('login').center('350','250').resize(function(){

		$().getId('login').center('350','250').addClass('a')
	})

	$().getId('close').click(function(){
		$().getId('login').hide()
	})

	$().getClass('login').click(function(){
		$().getId('login').show()
	})

	$().getId('login').drag();
}