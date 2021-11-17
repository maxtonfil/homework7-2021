var video = document.getElementById("player1");


window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {
	video.play();
	document.querySelector("#volume").innerHTML = document.querySelector("#slider").value + "%";
 	console.log("Play Video");
});

document.querySelector("#pause").addEventListener("click", function() {
	video.pause();
	console.log("Pause Video")
})

document.querySelector("#faster").addEventListener("click", function(){
	video.playbackRate = video.playbackRate + .05;
	console.log(video.playbackRate)
})

document.querySelector("#slower").addEventListener("click", function(){
	video.playbackRate = video.playbackRate - .05;
	console.log(video.playbackRate)
})

document.querySelector("#mute").addEventListener("click", function(){
	if (video.muted) {
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute";
	} else {
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute";
	}
})

document.querySelector("#skip").addEventListener("click", function(){
	video.currentTime = video.currentTime + 15;
	if (video.duration == video.currentTime) {
		video.currentTime = 0;
	}
	console.log(video.currentTime);
})

document.querySelector("#slider").addEventListener("input", function(vol) {
	video.volume = vol.currentTarget.value / 100;
	document.querySelector("#volume").innerHTML = vol.currentTarget.value + "%";
	console.log(video.volume)
})

document.querySelector("#vintage").addEventListener("click", function(vol) {
	document.getElementById("player1").classList.add("oldSchool");
})

document.querySelector("#orig").addEventListener("click", function(vol) {
	document.getElementById("player1").classList.remove("oldSchool");
})