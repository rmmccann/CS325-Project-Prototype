$(document).ready(function(){
	$("#create-button").click(function(){
		$("#myModal").modal({show: true});
	});

	$("#add-section-btn").click(function(){
		$("#add-section-modal").modal();
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

	$(".collapse").collapse();

	$(".collapsible > .list-title").click(function(){
		$(this).toggleClass("opened closed");
		$(this).children("i.glyphicon").toggleClass("glyphicon-chevron-down glyphicon-chevron-right");
		$(this).parent().children(".list-content").toggle(200);
	});

	//FOR TESTING ONLY
	$("#group-btn").click(function(){
		$("#content1").hide();
		$("#content2").show();
	});
});
