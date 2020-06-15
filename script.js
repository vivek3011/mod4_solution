(function () {

    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
    var speakWord = "Hello";
    var helloSpeaker ={};
    helloSpeaker.speak=function (name) {
        console.log(speakWord + " " + name);
      }
    var speakword = "Good Bye";
    var byeSpeaker ={};
    byeSpeaker.speak=function(name) {
        console.log(speakword + " " + name);
      }
      for (var i = 0; i < names.length; i++) {
        var firstLetter = names[i].charAt(0).toLowerCase();
        if (firstLetter === 'j') {
            byeSpeaker.speak(names[i]);
          } else {
            helloSpeaker.speak(names[i]);
          }
        }
        
        
})();

  