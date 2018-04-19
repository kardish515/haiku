import { Haiku } from './../src/haiku.js';

describe('Haiku', function() {
  it('should test whether input is a haiku', function() {
    let haiku = new Haiku("time button yonder", "time pickle yonder button", "a fun time was had");
    expect(haiku.haikuCheck()).toEqual(true);
  });
});
