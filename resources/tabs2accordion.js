$(document).ready( function() {
	$('.tabs.tabs-tabbox').show();

	function showHideTab(tabpos, show) {
		console.log("Click: "+tabpos, show);
		$('.tabs-header[data-tabpos="'+tabpos+'"]')
			.toggleClass('active', show);
		$('.tabs-content[data-tabpos="'+tabpos+'"]')
			.toggleClass('open')
			.slideToggle();
	}

	var labels = [];
	$('label.tabs-label').each(function(index) {
		labels.push($(this).text());
	});

	$('.tabs-content').each(function(index) {
		$(this)
			.attr('data-tabpos', index)
			.hide();
		$('<h5>'+labels[index]+'</h5>')
			.addClass('tabs-header collapsible-heading')
			.attr('data-tabpos', index)
			.insertBefore(this)
			.click( function() {
				showHideTab(index);
			});
	});

});
