'use strict';

describe('Scorecard', function() {
    var card;

    beforeEach(function() {
        card = new Scorecard();
    });


    // it('has ten frames', function() {
    //   expect(card.frames.length).toEqual(10);
    // });

    it('allows input of number of pins knocked down', function() {
        card.addFrame()
        expect(card.frames).toContain([]);
    });

    // it('writes input to frames property', function() {
    //   expect(card.frames[0]).toEqual(1);
    // });
});
