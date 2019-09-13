/// <reference path="typings/globals/jquery/index.d.ts" />
homePageTyping();

$(document).ready(function () {
	var lastClickedBtn = 'homeBtn';

	$('#left-sideBar > ul > li').on('click', function () {

		if ($(this).attr('id') != lastClickedBtn) {

			btnDecoloration(lastClickedBtn);
			lastClickedBtn = $(this).attr('id');
			$(this).css('color', '#3EB84E');

			var completedDelay = 500,
				widthDelay = 600,
				className_4display = '#' + $(this).attr('id');

			$('.fading_divs > div').each(function () {
				$(this).animate({ width: '101%' }, widthDelay).delay(completedDelay).animate({ width: '0' }, widthDelay);
			});

			setTimeout(function () {
				setDisplay(className_4display);
			}, widthDelay);
		}
	})

	function setDisplay(className) {
		// $(`div[data-type=${JSON.stringify(className)}]`).show();

		$("div[data-type^='#']").each(function () {
			if ($(this).attr('data-type') != className) {
				$(this).hide();
			}
			else if ($(this).attr('data-type') == className) {
				$(this).show();
			}
		});
	}

	function btnDecoloration(idName) {
		let id = '#' + idName;
		$(id).css('color', '#869BA0');
	}


});

function homePageTyping() {
	var speed = 35;
	new Typed("#subtitle #typed", {
		strings: ["Freelancer.", "photographer.", 'web developer.', 'blogger.'],
		typeSpeed: speed,
		backSpeed: speed,
		backDelay: 5000,
		loop: true,
		startDelay: 1000,
	});
}
