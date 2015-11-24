$("#up").on('click', function(e){
	e.stopPropagation();
	e.preventDefault();
	$('html, body').animate({scrollTop:0}, 'slow');
});


var header_a = $("#header .black");
var header_out = $("#header .out");
var header_in = $("#header .in");
var left = $("#header nav").offset().left+10;

header_a.hover(move);

function move(){
	var index = $(this).index();
	var out_px,in_px,width_px;
	var this_a = $(this);
	var left_rem = (this_a.offset().left-left)/16;
	out_px = left_rem+"rem";
	in_px = -left_rem+"rem";
	switch(index){
		case 1: width_px = '4.75rem';break;
		case 2: width_px = '4.125rem';break;
		case 3: width_px = '5.75rem';break;
		case 4: width_px = '4.75rem';break;
		case 5: width_px = '4.75rem';break;
		case 6: width_px = '4.75rem';break;
		default: width_px = '4.75rem';break;
	}
	header_out.animate({left:out_px,width:width_px},{queue:false},50);
	header_in.animate({left:in_px},{queue:false},50);
}

var _phone = $(".phone1");
var __phone = $(".phone2");
var more = $(".more1");
var In = $(".more1 .in");

$("#top").mousemove(function (e) {
	var x = e.pageX;
	_phone.css("left",x/300+21);
	__phone.css("left",140-x/100);
});

var $Screen = $(".screen");

$Screen.mousemove(function (e) {
	var x = e.pageX - $Screen.offset().left;
	var y = e.pageY - $Screen.offset().top;
	y > 462 ? y = 462 : y = y ;
	y < 175 ? y = 175 : y = y ;
	x > 430 ? x = 430 : x = x ;
	x < 170 ? x = 170 : x = x ;
	more.css("left",x+260);
	more.css("top",y-175);
	In.css("left",240-x);
	In.css("top",205-y);
});


var schedule = $(".schedule1");
var botton = $(".botton2");
var Botton = $(".botton3");
botton.click(function(){
	schedule.animate({opacity:0},500);
});
Botton.click(function(){
	schedule.animate({opacity:1},500);
});

$(document).ready(function(){
	$('#featured-area ul').roundabout({
		easing: 'easeOutInCirc',
		duration: 600
	});
});

var $kebiao = $('#kebiao');
var topKebiao = $kebiao.offset().top;
var $info = $('#info');
var topInfo = $info.offset().top;
var $find = $('#find');
var topFind = $find.offset().top;
var $more1 = $(".more1");
var $more2 = $(".more2");
var $Screen = $(".screen");
var $scope = $(".scope");

function kebiao(){
	$("#kebiao .out").addClass("animation");

	var $botton1Out = $(".botton1");
	var $botton2Out = $(".botton2");
	var $botton3Out = $(".botton3");

	setTimeout(function(){
		$(".botton").css("display","block");
	},2000);

	setTimeout(function(){
		$(".botton3").click();
		$(".click").on('click', function(){
			var index = 1,
			self = this;
			buttons = [];
			buttons2 = [];

			for(; index <= 3; index ++){
				buttons.push($('.schedule1').find('.botton' + index ));
				buttons2.push($('.schedule').find('.botton' + index ));
			}

			$botton1Out.addClass("botton1Out");
			$botton1Out.removeClass("botton1");
			$botton2Out.addClass("botton2Out");
			$botton2Out.removeClass("botton2");
			$botton3Out.addClass("botton3Out");
			$botton3Out.removeClass("botton3");

			$(".clickOut").css("display","block");
			$(".click").css("display","none");

			setTimeout(function(){
				$botton1Out.css("display","none");
				$botton2Out.css("display","none");
				$botton3Out.css("display","none");
			},500);

		});
		$(".clickOut").on('click', function(){

			var index = 1,
			self = this;
			buttons = [];
			buttons2 = [];
			$botton1Out.css("display","block");
			$botton2Out.css("display","block");
			$botton3Out.css("display","block");

			for(; index <= 3; index ++){
				buttons.push($('.schedule1').find('.botton' + index ));
				buttons2.push($('.schedule').find('.botton' + index ));
				}

			$botton1Out.addClass("botton1");
			$botton1Out.removeClass("botton1Out");
			$botton2Out.addClass("botton2");
			$botton2Out.removeClass("botton2Out");
			$botton3Out.addClass("botton3");
			$botton3Out.removeClass("botton3Out");

			$(".click").css("display","block");
			$(".clickOut").css("display","none");

		});
	},3000);
}

function info(){
	$("#info .out").addClass("animation");
	setTimeout(function(){
		$("#in").click();
	},2000);
}

function Find(){
	$("#find .out").addClass("animation");
	setTimeout(function(){
		$more2.css("display","block");
		$more1.css("display","block");
		$Screen.css("display","block");
		$scope.css("display","none");
	},3000);
}

var $window = $(window);


$(document).on('scroll', function(e){
	var _top = $window.scrollTop() + 0.5 * $window.height();

	if(_top >= topKebiao + 0.1 * $kebiao.height()){
		kebiao();
	}

	if(_top >= topInfo + 0.1 * $info.height()){
		info();
	}

	if(_top >= topFind + 0.1 * $find.height()){
		Find();
	}
});

$("#kebiao").hover(function(){
	kebiao();
});

$("#info").hover(function(){
	info();
});

$("#find").hover(function(){
	Find();
});


var mask = $('.theme-popover-mask');
var obj = $("#changepass");

$(".wx").click(function(){
    mask.fadeIn(500);
    obj.slideDown(500);
});

$(".close").click(function(){
    mask.fadeOut(500);
    obj.slideUp(500);
});

$window.mousemove(function (e) {
	var y = e.pageY;
	if(y>1000){
		$("#up").css("display","block");
		// $up.animate({opacity:1},500);
	}else{
		// $up.animate({opacity:0},500);
		// setTimeout(function(){
		// 	$up.css("display","none");
		// },500);
		$("#up").css("display","none");
	}
});
