(function(window) {
	script = {};
	script.names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
	window.script = script;
})(window);

for (var i = 0; i < script.names.length; i++) {

  var firstLetter = script.names[i].toLowerCase().charAt(0);

  if (firstLetter === 'j') {
       byeSpeaker.speak(script.names[i]);
  } else {
       helloSpeaker.speak(script.names[i]);
  }
}
