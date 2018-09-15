'use strict';

function Scorecard() {
    this.frames = [];
}

Scorecard.prototype.addFrame = function () {
    this.frames.push([]);
};

// Scorecard.prototype.writeFrames = function () {
//   for (var i = 0; i < this.frames.length; i++) {
//     this.frames[i] = this.pinsKnockedDown();
//   }
// };
