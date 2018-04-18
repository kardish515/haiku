import { Haiku } from './../src/haiku.js';

describe('Haiku', function() {
  it('should test whether prefixes are removed and returned in new array', function() {
    let haiku = new Haiku("pickle tickle", "", "");
    expect(haiku.syllableCheck()).toEqual(4);
  });
});
