
$(document).ready(function () {
	// get URL query params if available
	// Valid params: style
	// Currently available stylesheets: no-bg, default

	// To test, use query ?style=no-bg

	var url = new URL(location);
	var params = new URLSearchParams(url.search);

	// get alternate stylesheet name from params
	var css = params.get('style');

	// change stylesheet from default if style query is available
	if (css) {
		// file extension is added here, should not be included in query string
		$("#stylesheet").attr("href", "styles/" + css + ".css");
	}

	// populate couch names from external JSON
	function populateCouch() {
		// URL randomized to avoid caching old data
		$.getJSON('https://samanthamed.github.io/twitch-overlay/text.json?' + Math.random().toString().slice(-6), function(data) {
			var streamers = data.streamers;
			$('.streamers-header').text("Streamers");
			$('.streamers').text('');
			streamers.forEach(function(streamer) {
				$('.streamers').append(streamer + " ");
			})
		})
	}

	populateCouch();

	// repopulate couch every 60 seconds to grab any changes
	window.setInterval(function() {
		populateCouch();
		var currentdate = new Date();
  		var datetime = "Last Sync: " + (currentdate.getMonth() + 1) + "/" +
    	currentdate.getDate() + "/" +
    	currentdate.getFullYear() + " @ " +
    	('0' + currentdate.getHours()).substr(-2) + ":" +
    	('0' + currentdate.getMinutes()).substr(-2) + ":" +
    	('0' + currentdate.getSeconds()).substr(-2);
  		console.log(datetime);
	}, 60000);
