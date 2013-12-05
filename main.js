$(document).ready(function(){
	$("#create-button").click(function(){
		$("#myModal").modal({show: true});
	});

	$("#modal-next-btn").click(function(){
		$("#modal-part-1").hide();
		$("#modal-part-2").show();
	});

	$("#create-btn").click(function(){
		$("#myModal").modal("hide");
		$("#content1").hide();
		$("#content2").show();
	});

	//FOR TESTING ONLY
	$("#group-btn").click(function(){
		$("#content1").hide();
		$("#content2").show();
	});
});