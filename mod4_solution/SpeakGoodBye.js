(function(window){
	var speakWord = "Good Bye";
	byeSpeaker = {};

    byeSpeaker.speak = function(name) {
        console.log(speakWord + " " + name);
    }
    window.byeSpeaker = byeSpeaker;
})(window)