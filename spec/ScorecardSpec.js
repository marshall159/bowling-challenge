'use strict';

describe('Scorecard', function() {
  var card;

  beforeEach(function() {
    card = new Scorecard();
    spyOn(
      card, 'pinsKnockedDown'
    ).and.returnValues(1,4,4,5,6,4,5,5,10,0,1,7,3,6,4,10,2,8,6);
  });


  it('has ten frames', function() {
    expect(card.frames.length).toEqual(10);
  });

  it('allows input of number of pins knocked down', function() {
    expect(card.pinsKnockedDown()).toEqual(1);
    expect(card.pinsKnockedDown()).toEqual(4);
    expect(card.pinsKnockedDown()).toEqual(4);
    expect(card.pinsKnockedDown()).toEqual(5);
    expect(card.pinsKnockedDown()).toEqual(6);
    expect(card.pinsKnockedDown()).toEqual(4);
    expect(card.pinsKnockedDown()).toEqual(5);
    expect(card.pinsKnockedDown()).toEqual(5);
    expect(card.pinsKnockedDown()).toEqual(10);
    expect(card.pinsKnockedDown()).toEqual(0);
    expect(card.pinsKnockedDown()).toEqual(1);
    expect(card.pinsKnockedDown()).toEqual(7);
    expect(card.pinsKnockedDown()).toEqual(3);
    expect(card.pinsKnockedDown()).toEqual(6);
    expect(card.pinsKnockedDown()).toEqual(4);
    expect(card.pinsKnockedDown()).toEqual(10);
    expect(card.pinsKnockedDown()).toEqual(2);
    expect(card.pinsKnockedDown()).toEqual(8);
    expect(card.pinsKnockedDown()).toEqual(6);
  });
});
