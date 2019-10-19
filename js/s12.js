/**
 * 
 */

$(function() {
	$('#sendLoveButton').click(function() {
		let msg = $('#msgComment').val();
		$('<textarea style="width:600px; height:30px;">' + msg + '</textarea>').appendTo('body');
		var scrollBottom = $(window).scrollTop() + $(window).height();
		$('html, body').animate({scrollTop:scrollBottom},'50');
		console.log('jQuerry used: Comment added');
	});
	
	
	$('#edoPic').click(function() {
		$('#edoPic').attr('width','650');
		console.log('jQuerry used: Edo pic increased');
	});
});
