var tape = require("tape");
var extractHash = require("..");

var hash = "2fa71a2dbb7d53a39373a9c4e2c9d89aaa7a6db1";
tape(function (assert) {
  assert.plan(7);
  assert.equal(extractHash(hash)[0], hash);
  assert.equal(extractHash({ hash: hash })[0], hash);
  assert.equal(extractHash({ infoHash: hash })[0], hash);
  assert.equal(extractHash(new Buffer(hash))[0], hash);
  assert.equal(extractHash().length, 0);
  assert.equal(extractHash(null).length, 0);
  assert.equal(extractHash("invalid").length, 0);
});

