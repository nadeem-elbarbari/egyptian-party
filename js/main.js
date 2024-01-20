/// <reference types='../@types/jquery' />

// ? ==> navbar

const closeBtn = $('i#close');
let sbIw = $('nav').innerWidth();

(() => {
	$('nav').css('left', `-${sbIw}px`);
})();

closeBtn.on('click', () => {
	$('nav').animate({ left: `-${sbIw}px` }, 500);
});

const openBtn = $('#open');

$('#open').on('click', () => {
	if ($('nav').css('left') === `-${sbIw}px`) {
		$('nav').animate({ left: `0px` }, 500);
	}
});

// ? ==> accordion

const accordion = $('#accordion .accordion-header');

accordion.on('click', function () {
	$('.accordion-content').not($(this).next()).slideUp(600);
	$(this).next().slideToggle(600);
	$(this)
		.find('.accordion-icon')
		.toggleClass('bx-chevron-up bx-chevron-down');
});

(() => {
	$('.down').slideDown(0);
})();

// ? ==> countdown

const countDownDate = new Date('Dec 31, 2024 00:00:00').getTime();
const date = setInterval(() => {
	const now = new Date().getTime();
	const remaining = countDownDate - now;
	const days = Math.floor(remaining / (1000 * 60 * 60 * 24));
	const hours = Math.floor(
		(remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
	);
	const minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
	const seconds = Math.floor((remaining % (1000 * 60)) / 1000);

	$('#days').html(`${days} D`);
	$('#hours').html(`${hours} H`);
	$('#minutes').html(`${minutes} M`);
	$('#seconds').html(`${seconds} S`);
}, 1000);

// ? ==> character counter
$('#messageInput').on('input', function () {
	const max = $(this).attr('maxlength');
	const len = $(this).val().length;
	if (len <= max) {
		$('.char-count').html(`<span>${max - len}</span> characters left.`);
	}
});

// ? ==> click links to div

const home = $('.hero').offset().top;
const details = $('#accordion').offset().top;
const duration = $('#counter').offset().top;
const contact = $('.join-us').offset().top;

$('#home').on('click', () => {
	$('body,html').animate({ scrollTop: home }, 2000);
});

$('#details').on('click', () => {
	$('body,html').animate({ scrollTop: details - 50 }, 2000);
})

$('#duration').on('click', () => {
	$('body,html').animate({ scrollTop: duration - 50 }, 2000);
});

$('#contact').on('click', () => {
	$('body,html').animate({ scrollTop: contact }, 2000);
})