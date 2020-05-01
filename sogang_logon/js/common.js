//상단메뉴
$(function(){
	$('#nav li').bind('mouseenter keyup', function() { // 메뉴바의 각 메뉴들에 마우스를 올리거나 키보드로 이동하면,
		$(this).addClass('on').siblings().removeClass(); // 해당 메뉴에 클래스 on을 추가하고, 다른 메뉴의 클래스를 제거합니다.
	});
});


//탭
$(function(){
	var $tab=$(".tab-box1 h3 a");
	var $release=$(".release");
	$(".tab-box1 .ctn1").addClass("ctnOn");

	$tab.on("click focus", function(e){
		e.preventDefault();
		$(".ctn").removeClass("ctnOn");
		$(this).parent().parent(".ctn").addClass("ctnOn");
	});
});


//left
$(function(){
	var currentLeft;
	var prevLeft;
	$("ul.depth2").hide();

	$("a.lnb").click(function(){
		if($(this).hasClass("on") == false){
			$("a.lnb").each(function(){
				if($(this).hasClass("on")){
					$(this).removeClass("on");
					$(this).next(".depth2").slideUp("fast");
				}
			});

			$(this).addClass("on");
			$(this).next(".depth2").slideDown("fast"); // $(this).next().slideDown("fast");
		}else{
			// console.log("현재 활성화 중입니다.");
			$(this).removeClass("on");
			$(this).next(".depth2").slideUp("fast");
		}
	});
});

//radio 버튼
$(function(){
	// DOM 생성 완료 시 화면 숨김
	$("#changeMail").hide();

	// radio change 이벤트
	$("input[name=search_pass]").change(function() {
		var radioValue = $(this).val();
		if (radioValue == "SMS") {
			$("#changeSMS").show();
			$("#changeMail").hide();
		} else if (radioValue == "mail") {
			$("#changeMail").show();
			$("#changeSMS").hide();
		}
	});

	// 서버에서 전달 받은 값으로 radio 버튼 변경
	$("#changeUpdateRadio").click(function() {
		var resultValue = $("#radioId").val();
		$("input[name=search_pass][value=" + resultValue + "]").attr("checked", true);
	});

	// 체크 되어 있는지 확인
	var checkCnt = $("input[name=search_pass]:checked").size();
	if (checkCnt == 0) {
		// default radio 체크 (첫 번째)
		$("input[name=search_pass]").eq(0).attr("checked", true);
	}

});
