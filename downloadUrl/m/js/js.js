$(function(){
	var body_w = $('body').width();
	$('#banner,#banner-img,#banner-img ul li,#banner-img ul li img').css({
		width:body_w,
		height:body_w / 2,
	})
	$('#download h3').css('padding-left',$('#code').width() + 15);
	$('#button').css('width',body_w - $('#code').width() - 45);
	$('#msg').css('height',$(window).height());
	$('#auth').css('min-height',$(window).height());
	$(window).resize(function(){
		var body_w = $('body').width();
		$('#banner,#banner-img,#banner-img ul li,#banner-img ul li img').css({
			width:body_w,
			height:body_w / 2,
		})
		$('#download h3').css('padding-left',$('#code').width() + 15);
		$('#button').css('width',body_w - $('#code').width() - 45);
		$('#msg').css('height',$(window).height());
		$('#auth').css('min-height',$(window).height());
	})

	$('#msg button').click(function(){
		$('#msg').fadeOut();
	})

	$('#auth button').click(function(){
		$('#auth').fadeOut();
		$('#auth').scrollTop(0);
		setTimeout(function(){
			$('#auth').fadeIn();
		},6000);
	})

	TouchSlide({ 
    slideCell:'#banner',
    mainCell:'#banner-img ul',
    titCell:'#banner-btn dd',
    effect:'leftLoop',
    autoPlay:true,
    delayTime:500,
    interTime:2500,
  })
})