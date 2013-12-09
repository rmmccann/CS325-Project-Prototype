$(document).ready(function(){

	//Big Create Group button
	$("#create-button").click(function(){
		$("#myModal").modal({show: true});
	});

	//
	//Create Group Modal
	//
	$("#modal-next-btn").click(function(){
		$("#modal-part-1").hide();
		$("#modal-part-2").show();
	});
	$("#create-btn").click(function(){
		$("#myModal").modal("hide");
		$("#content1").hide();
		$("#content2").show();

		$("#project-title").text($("#project-name").val() || "Project Title");

		var groupMembers = "<span>" + $("#your-name").val() + " &lt;" + $("#your-email").val() + "&gt;</span><br>";
		console.log($("#collaborators").val());
		var groupArr = $("#collaborators").val().split("\n");
		$(groupArr).each(function(index)
		{
			groupMembers += "<span>" + this + "</span><br>";
		});
		$("#group-members").html(groupMembers);

		$("#home-btn").removeClass("active");
		$("#work-btn").addClass("active");

		if(!/sa90j3eoirwjslkd9/.test(window.location.href)){
			history.pushState(null, null, "?group=sa90j3eoirwjslkd9");
		}
	});

	//
	// Collapsing/folding of sections/tasks
	//
	function addFoldingListener()
	{
		$(".collapsible > .list-title").unbind("click");
		$(".collapsible > .list-title").click(function(){
			$(this).toggleClass("opened closed");
			$(this).children("i.glyphicon").toggleClass("glyphicon-chevron-down glyphicon-chevron-right");
			$(this).parent().children(".list-content").toggle(200);
		});
	}
	addFoldingListener();

    //
    // Task Completion
    //
    $("#this-week input").click(function() {
        var labelObj = $(this).parent();    // Because I like verbose JS ohkay?!
        labelObj.toggleClass("strikethrough");
    });

	//Add Section Button
	$("#add-section-btn").click(function(){
		$("#add-section-modal").modal({show: true});
	});

	//
	//Add Section Modal
	//
	var taskTemplate = '<li><input type="text" class="task" /> assigned to <input type="text" class="assignee" /></li>';
	$("#add-task-btn").click(function(){
		// var tmp = $("#new-tasks > li:first");
		// $("#new-tasks").append(tmp);
		$("#new-tasks").append(taskTemplate);
	});
	$("#add-section-modal-btn").click(function(){
		$("#add-section-modal").modal("hide");

		var sectionTemplate = '<div class="collapsible"><p class="list-title closed"><i class="glyphicon glyphicon-chevron-down"></i>$section<span class="pull-right due-date">$due</span></P><div class="list-content">$tasks</div></div>';
		var sectionTaskTemplate = '<div class="indent checkbox zebra-stripe"><span class="pull-left">$task</span><span class="pull-right">$assignees</span></div>';

		var taskList = '';
		var newSection = '';

		//add each task to the new section on the main page
		$("#new-tasks > li").each(function(index)
		{
			taskList += sectionTaskTemplate.replace("$task", $(this).children("input.task").val())
					.replace("$assignees", $(this).children("input.assignee").val());
		});

		//build new section from template
		newSection = sectionTemplate.replace("$section", $("#section-title").val())
					.replace("$due", $("#section-due").val())
					.replace("$tasks", taskList);

		//Add the new section and tasks to the overview on the main page
		$("#overview").append(newSection);

		$("#num-sections").html($("#overview > .collapsible").length);

		addFoldingListener(); //make folding work for new sections

		//reset form
		$("#section-title").val("");
		$("#section-due").val("");
		$("#new-tasks").html(taskTemplate);
	});


	//FOR TESTING
	// $("#content1").hide();
	// $("#content2").show();
	$("#home-btn").click(function(){
		$("#content1").show();
		$("#content2").hide();
		$("#home-btn").addClass("active");
		$("#work-btn").removeClass("active");
	});
	$("#work-btn").click(function(){
		$("#content1").hide();
		$("#content2").show();
		$("#home-btn").removeClass("active");
		$("#work-btn").addClass("active");
	});
	$("#group-btn").click(function(){
		$("#group-modal").modal("show");
	});

});
