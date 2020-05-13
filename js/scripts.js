$(function() {
	$(".child").draggable({ 
		axis: 'x',
	    containment: "child-container",
	});
});

$(function() {
	$(".childb").draggable({ 
	    axis: 'x',
	    containment: "child-containerb",
	});
});