'use strict';

describe('Frame', function() {
    let first = new Frame();

    it('adds number of pins knocked down', function() {
        first.pinsKnockedDown(8);
        first.pinsKnockedDown(2);
        expect(first.frame).toContain(8,2);
    });

});