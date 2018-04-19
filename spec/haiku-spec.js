import { Haiku } from './../src/haiku.js';

describe('Haiku', function() {
  it('should test whether input is a haiku', function() {
    let haiku = new Haiku("i am first with five", "then seven in the middle", "five again to end");
    expect(haiku.haikuCheck()).toEqual(true);
  });
});
