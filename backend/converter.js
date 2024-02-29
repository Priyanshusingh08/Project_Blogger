const { Deepgram } = require("@deepgram/sdk");
const deepgram = new Deepgram("d368cbb6234b6eb5dbc0d9974d15951fbcd71785");
//d368cbb6234b6eb5dbc0d9974d15951fbcd71785
//b9f5586026e57cb72031058c00333941b2ff54e8
const fs = require("fs");
let audioSource = {
  stream: fs.createReadStream("./static/uploads/firebase.mp4"),
  mimetype: "video/mp4",
};

// Sending a Buffer of the file
fs.readFile("./static/uploads/tauri.mp4", function (err, buffer) {});

async function start() {
  const response = await deepgram.transcription.preRecorded(audioSource, {
    punctuate: true,
    // other options are available
  });

  console.log(response.results.channels[0].alternatives[0]);
}

start();
