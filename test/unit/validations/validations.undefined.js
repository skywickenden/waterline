var Validator = require('../../../lib/waterline/core/validations'),
    assert = require('assert');

describe('validations', function() {

  describe('undefined', function() {
    var validator;

    var string_field = {
      type: 'string'
    };

    var undefined_field = {
      undefined: true
    };

    beforeEach(function() {
      validator = new Validator();
    });

    it('should error if the value of an undefined field is set to a string.', function(done) {
      validator.initialize({ undefined_field: undefined_field });
      validator.validate({ undefined_field: 'foo' }, function(errors) {
        assert(errors);
        assert(errors.undefined_field);
        assert(errors.undefined_field[0].rule === 'undefined');
        done();
      });
    });

    it('should error if the value of an undefined field is set to an empty string.', function(done) {
      validator.initialize({ undefined_field: undefined_field });
      validator.validate({ undefined_field: '' }, function(errors) {
console.log(errors);
        assert(errors);
        assert(errors.undefined_field);
        assert(errors.undefined_field[0].rule === 'undefined');
        done();
      });
    });

    it('should error if the value of an undefined field is set to 0 (zero).', function(done) {
      validator.initialize({ undefined_field: undefined_field });
      validator.validate({ undefined_field: 0 }, function(errors) {
        assert(errors);
        assert(errors.undefined_field);
        assert(errors.undefined_field[0].rule === 'undefined');
        done();
      });
    });

    it('should error if the value of an undefined field is set to null.', function(done) {
      validator.initialize({ undefined_field: undefined_field });
      validator.validate({ undefined_field: null }, function(errors) {
console.log(errors);
        assert(errors);
        assert(errors.undefined_field);
        assert(errors.undefined_field[0].rule === 'undefined');
        done();
      });
    });

    it('should NOT error if the value of an undefined field is set to undefined.', function(done) {
      validator.initialize({ undefined_field: undefined_field });
      validator.validate({ undefined_field: undefined }, function(errors) {
        assert(!errors);
        done();
      });
    });

    it('should NOT error if the value of an undefined field is not set.', function(done) {
      validator.initialize({ string_field: string_field, undefined_field: undefined_field });
      validator.validate({ string_field: 'foo' }, function(errors) {
        assert(!errors);
        done();
      });
    });

  });

});
