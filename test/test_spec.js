import {expect} from 'chai';

import {add} from '../src/test.js';

describe('adding', () => {
  it('check if adds', () => {
    expect(add(1,1)).to.equal(2);
  })
})
