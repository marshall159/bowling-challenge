'use strict';

describe('Scorecard', function() {
    var card, firstFrame;

    beforeEach(function() {
        card = new Scorecard();
        firstFrame = new Frame();
    });


    it('adds a frame', function() {
        card.addFrame(firstFrame);
        expect(card.frames).toContain(firstFrame);
    });

    // it('has ten frames', function() {
    //   expect(card.frames.length).toEqual(10);
    // });
    //
    // it('writes input to frames property', function() {
    //   expect(card.frames[0]).toEqual(1);
    // });
});
