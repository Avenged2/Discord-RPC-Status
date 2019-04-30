const client = require('discord-rich-presence')('572764816914251796');
 
var header = "Actually:";
var description = "Lorem Ipsum";
var LargeImage = "av";
var largeImageTxt = "Lorem Ipsum";

client.updatePresence({
  details: header,
  state: description,
  startTimestamp: Date.now(),
  largeImageKey: LargeImage,
  largeImageText: largeImageTxt,
});

