const client = require('discord-rich-presence')('572764816914251796');
 
var header = "Aktualnie:";
var description = "Odpoczywam";
var LargeImage = "av";
var largeImageTxt = "apollo-mta.pl";

client.updatePresence({
  details: header,
  state: description, // aktualny filmor
  startTimestamp: Date.now(),
  largeImageKey: LargeImage,
  largeImageText: largeImageTxt,
});

