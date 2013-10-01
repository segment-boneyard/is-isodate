
var assert = require('assert');
var iso = require('..');

describe('is-isodate', function () {
  describe('true', function () {
    it('2012-12-30', function () {
      assert(iso('2012-12-30'));
    });

    it('2012-12-30T20:10', function () {
      assert(iso('2012-12-30T20:10'));
    });

    it('2012-12-30T20:12Z', function () {
      assert(iso('2012-12-30T20:12Z'));
    });

    it('2012-12-30T20:12:22', function () {
      assert(iso('2012-12-30T20:12:22'));
    });

    it('2012-12-30T20:12:22+01:00', function () {
      assert(iso('2012-12-30T20:12:22+01:00'));
    });

    it('2012-12-30T20:12:22-05:00', function () {
      assert(iso('2012-12-30T20:12:22-05:00'));
    });

    it('2012-12-30T20:12:22.222', function () {
      assert(iso('2012-12-30T20:12:22.222'));
    });

    it('2012-12-30T20:12:22.222Z', function () {
      assert(iso('2012-12-30T20:12:22.222Z'));
    });

    it('2012-12-30T20:12:22.222222', function () {
      assert(iso('2012-12-30T20:12:22.222222'));
    });

    it('2012-12-30T20:12:22.222', function () {
      assert(iso('2012-12-30T20:12:22.222'));
    });
  });

  describe('false', function () {
    it('2012', function () {
      assert(!iso('2012'));
    });

    it('2012-12', function () {
      assert(!iso('2012-12'));
    });

    it('2012-12-30T', function () {
      assert(!iso('2012-12-30T'));
    });

    it('2012-12-30T10', function () {
      assert(!iso('2012-12-30T10'));
    });
  });
});