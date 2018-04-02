// Your jQuery Logic will go here
$(document).ready(function() {
	console.log("ready");

	$("#target").submit(function(e) {
		e.preventDefault()
		
		
		$("#container").append(('<li id="newList">'  + $('#box').val()) + '  <button class="new">');
		
		$('.new').click(function() {
			$(this).html('Got It!');
		});

		$(document).ready(function() {
			$("#box").val(" ");

			
		

		});
		
	
	});
});

// //$("#new").click(function() {
// 			$("#new").html('done');
// 		}