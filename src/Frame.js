'use strict';

function Frame() {
    this.frame = [];
}

Frame.prototype.pinsKnockedDown = function(number) {
    this.frame.push(number);
}