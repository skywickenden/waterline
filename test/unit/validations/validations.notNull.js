var Validator = require('../../../lib/waterline/core/validations'),
    assert = require('assert');

describe('validations', function() {

  describe('notNull', function() {
    var validator;

    var not_null_string = {
      type: 'string',
      notNull: true
    };

    var not_null_number = {
      type: 'number',
      notNull: true
    };

    var undefined_field = {
      notNull: true
    };

    beforeEach(function() {
      validator = new Validator();
    });

    it('should error if the value of a notNull field is set to null.', function(done) {
      validator.initialize({ not_null_string: not_null_string });
      validator.validate({ not_null_string: null }, function(errors) {
        assert(errors);
        assert(errors.not_null_string);
        assert(errors.not_null_string[0].rule === 'string');
        assert(errors.not_null_string[1].rule === 'notNull');
        done();
      });
    });

    it('should NOT error if the value of a notNull field is set to an empty string.', function(done) {
      validator.initialize({ not_null_string: not_null_string });
      validator.validate({ not_null_string: '' }, function(errors) {
console.log(errors);
        assert(!errors);
        done();
      });
    });

    it('should NOT error if the value of a notNull field is set to 0 (zero).', function(done) {
      validator.initialize({ not_null_number: not_null_number });
      validator.validate({ not_null_number: 0 }, function(errors) {
        assert(!errors);
        done();
      });
    });

    it('should NOT error if the value of a notNull field is set to undefined.', function(done) {
      validator.initialize({ undefined_field: undefined_field });
      validator.validate({ undefined_field: undefined }, function(errors) {
console.log(errors);
        assert(!errors);
        done();
      });
    });

  });

});
