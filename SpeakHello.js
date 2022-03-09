var helloSpeaker = {}

helloSpeaker.speakWord = "Hello"

helloSpeaker.speak = function speak (name) {
  console.log(this.speakWord + " " + name);
}
