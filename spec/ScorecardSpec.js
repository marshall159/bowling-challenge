'use strict';

describe('Scorecard', function() {
  var card = new Scorecard();
  it('has ten frames', function() {
    expect(card.frames.length).toEqual(10);
  });
});
