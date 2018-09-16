'use strict';

describe('Scorecard', function() {
    var card, firstFrame, spyFrame;

    beforeEach(function() {
        card = new Scorecard();
        spyFrame = jasmine.createSpyObj('frame', ['pinsKnockedDown']);
    });


    it('adds a frame', function() {
        firstFrame = new Frame();
        card.addFrame(firstFrame);
        expect(card.frames).toContain(firstFrame);
    });

    it('has ten frames', function() {
        card.addAllFrames();
        expect(card.frames.length).toEqual(10);
    });

    // it('writes input to frames property', function() {
    //   expect(card.frames[0]).toEqual(1);
    // });
});