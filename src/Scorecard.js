'use strict';

function Scorecard() {
  this.frames = [
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    []
  ];
};

Scorecard.prototype.pinsKnockedDown = function () {
  prompt('Enter the number of pins knocked down: ')
};
