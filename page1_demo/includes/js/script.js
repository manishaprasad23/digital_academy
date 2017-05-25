/*

My Custom JS
============

Author:  Brad Hussey
Updated: August 2013
Notes:	 Hand coded for Udemy.com

*/

$(function () {

	$('#alertMe').click(function(e) {
		e.preventDefault();
		$('#successAlert').slideDown();
	});


	$('a.pop').click(function(e) {
		e.preventDefault();
	});
   
   $('[data-toggle="popover"]').popover();

   $('[data-toggle="tooltip"]').tooltip();
});
	
