var assert = require('assert');
var common = require('./includes/common.js');

common.executeTests(function (err, res) {
	assert.ifError(err);
	assert.deepEqual(res.code, 200);
	assert.deepEqual(res.headers['content-type'], 'text/plain');
}, {}, true);
