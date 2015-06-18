var Validator = require('../../../lib/waterline/core/validations'),
    assert = require('assert');

describe('validations', function() {

  describe('null', function() {
    var validator;

    var string_field = {
      type: 'string'
    };

    var null_field = {
      null: true
    };

    beforeEach(function() {
      validator = new Validator();
    });

    it('should error if the value of a null field is set to a string.', function(done) {
      validator.initialize({ null_field: null_field });
      validator.validate({ null_field: 'foo' }, function(errors) {
        assert(errors);
        assert(errors.null_field);
        assert(errors.null_field[0].rule === 'null');
        done();
      });
    });

    it('should error if the value of a null field is set to an empty string.', function(done) {
      validator.initialize({ null_field: null_field });
      validator.validate({ null_field: '' }, function(errors) {
        assert(errors);
        assert(errors.null_field);
        assert(errors.null_field[0].rule === 'null');
        done();
      });
    });

    it('should error if the value of a null field is set to 0 (zero).', function(done) {
      validator.initialize({ null_field: null_field });
      validator.validate({ null_field: 0 }, function(errors) {
        assert(errors);
        assert(errors.null_field);
        assert(errors.null_field[0].rule === 'null');
        done();
      });
    });

    it('should error if the value of a null field is set to undefined.', function(done) {
      validator.initialize({ null_field: null_field });
      validator.validate({ null_field: undefined }, function(errors) {
        assert(errors);
        assert(errors.null_field);
        assert(errors.null_field[0].rule === 'null');
        done();
      });
    });

    it('should NOT error if the value of a null field is set to null.', function(done) {
      validator.initialize({ null_field: null_field });
      validator.validate({ null_field: null }, function(errors) {
        assert(!errors);
        done();
      });
    });

    it('should error if the value of a null field is not set.', function(done) {
      validator.initialize({ string_field: string_field, null_field: null_field });
      validator.validate({ string_field: 'foo' }, function(errors) {
        assert(errors);
        assert(errors.null_field);
        assert(errors.null_field[0].rule === 'null');
        done();
      });
    });

  });

});
