
var byeSpeaker = {}

byeSpeaker.speakWord = "Good Bye";


byeSpeaker.speak = function speak (name) {
  console.log(this.speakWord + " " + name);
}


