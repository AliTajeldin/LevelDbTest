//import assert from 'power-assert';
//import pkg from '../package.json';

import * as ldb from '../src/leveldb';

describe('LevelDBTest', function() {
  it('loads without crashing', (done) => {
    ldb.levelupWrite().then(() => done());
    // assert.equal(src.helloWorld(), "Hi");
    // assert.equal(src.obj.a, "1");
  });
});
