// JavaScript Document
$(function(){
	$(window).scroll(function(){
		if($(window).scrollTop()>0)
			$('.navbar').addClass('navbar-top')
		else
			$('.navbar').removeClass('navbar-top')
	});
	$('.claryfi-group li:first').addClass('bg-gray');
	$('.claryfi-group li').click(function(){
		$(this).addClass('bg-gray').siblings().removeClass('bg-gray')
	})
	$('.trend-block').click(function(){
		$('.trend-alltext span').addClass('run');
		setTimeout(() => {
			$('.trend-alltext span').removeClass('run');
		},1000)
	})
	$('.robot').click(function(){
		$('.robot-container').toggleClass('open')
	});
	$(document).on("click",'.q-btn',function () {
	  $('.msg-box').append(`
		<div class="p-qs"><p>${$(this).text()}</p></div>
	  `);

	  setTimeout(() => $('.msg-box').append(`
		<div class="r-ansr"><p>${({
		  'q1': '<button class="btn q-btn" value="a1">新冠病毒</button> or <button class="btn q-btn" value="a2">流感</button>',
		  'q2': '口罩目前已解除實名制，除了從實體藥局購買外，也可以透過健保快一通APP網路購買，本網站也可幫助您預購喔。',
		  'q3': '<button class="btn q-btn" value="a3">新冠疫苗</button> or <button class="btn q-btn" value="a4">流感疫苗</button>',
		  'q4': '<button class="btn q-btn" value="a5">本國籍</button> or <button class="btn q-btn" value="a6">外國籍</button>',
		  'a1': '今日新增1例境外移入，為60歲本國籍男姓，今2020年2月至印度工作，10/28返國。10/2出現線呼吸困難、咳嗽、發燒等症。30日確診，目前住院隔離治療中。',
		  'a2': '流感是由流感病毒引起的急性呼吸道感染，病毒有A、B、C、D形四種。除了飛沫傳染，病毒也可存活物體表面，手接觸後再碰觸口鼻或眼睛就可能被感染。',
		  'a3': '針對新冠肺炎(COVID-19疫苗的研發進度，疫情指揮中心研發組組長指出，國內各單位研發疫苗、藥物的進度相當順利，預計年底前將展開臨床試驗，而目前新藥抑病毒的能力高達90%以上。',
		  'a4': '依世界衛生組織說明，在某些情況下，選定之病毒株不一定同時適用兩種不同疫苗製程，此時分別選擇在個別製程內最有效複製，但具有相同抗原性的病毒株作為疫苗株，更有利於疫苗的即時生產。',
		  'a5': '國人及部分外國籍人士，無論有無症狀，入境時均須於機場完成採檢；有症狀者送至集中檢疫所等候檢驗結果，無症狀者返家或至防疫旅館完成居家檢疫14天。',
		  'a6': '未持有我國居留證之外國籍人士，仍須提供登機前3日內之COVID-19檢驗陰性報告，才能登機、轉機及入境台灣，並於入境後進行居家檢疫14天。',
		})[$(this).val()]}</p></div>
	  `), 1000);
	});
	$('.fans i').click(function(){
		alert('目前尚無網路 請稍再試')
	});
	var num = 0;
	function click(num_var) {
	  num +=  num_var;
	  $('.num').text(num);
	  $('.sum').text(num * 300);
	};
	$('.dec').click(function() {
	  click(-1);
	});
	$('.inc').click(function() {
	  click(1);
	});
});
	text("people",12700,13000);
	text("join",200,500);
	text("share",2700,3000);
function text(className,start,end){
	var timer = setInterval(() =>{
		start++
		$('.'+className).text(start+"+")
		if(start>=end){
			clearInterval(timer)
		}
	})
}