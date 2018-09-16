'use strict';

function Scorecard() {
    this.frames = [];
}

Scorecard.prototype.addFrame = function(frame) {
    this.frames.push(frame);
};

// Scorecard.prototype.writeFrames = function () {
//   for (var i = 0; i < this.frames.length; i++) {
//     this.frames[i] = this.pinsKnockedDown();
//   }
// };

Scorecard.prototype.addAllFrames = function(numFrames = 10) {
    for (let i = 0; i < numFrames; i++) {
        let frame = new Frame();
        frame.pinsKnockedDown(5);
        frame.pinsKnockedDown(5);
        this.addFrame(frame);
    }
}