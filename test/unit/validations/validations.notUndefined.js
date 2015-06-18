var Validator = require('../../../lib/waterline/core/validations'),
    assert = require('assert');

describe('validations', function() {

  describe('notUndefined', function() {
    var validator;

    var not_undefined_string = {
      type: 'string',
      notUndefined: true
    };

    var not_undefined_number = {
      type: 'number',
      notUndefined: true
    };

    beforeEach(function() {
      validator = new Validator();
    });

    it('should error if the value of a notUndefined field is set to undefined.', function(done) {
      validator.initialize({ not_undefined_string: not_undefined_string });
      validator.validate({ not_undefined_string: undefined }, function(errors) {
console.log(errors);
        assert(errors);
        assert(errors.not_null_string);
        assert(errors.not_null_string[0].rule === 'string');
        assert(errors.not_null_string[1].rule === 'notUndefined');
        done();
      });
    });

    it('should NOT error if the value of a notUndefined field is set to an empty string.', function(done) {
      validator.initialize({ not_undefined_string: not_undefined_string });
      validator.validate({ not_undefined_string: '' }, function(errors) {
console.log(errors);
        assert(!errors);
        done();
      });
    });

    it('should NOT error if the value of a notUndefined field is set to 0 (zero).', function(done) {
      validator.initialize({ not_undefined_number: not_undefined_number });
      validator.validate({ not_undefined_number: 0 }, function(errors) {
console.log(errors);
        assert(!errors);
        done();
      });
    });

    it('should NOT error if the value of a notUndefined field is set to null.', function(done) {
      validator.initialize({ not_undefined_number: not_undefined_number });
      validator.validate({ not_undefined_number: null }, function(errors) {
console.log(errors);
        assert(!errors);
        done();
      });
    });

  });

});
