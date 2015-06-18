var Validator = require('../../../lib/waterline/core/validations'),
    assert = require('assert');

describe('validations', function() {

  describe('empty', function() {
    var validator;

    var empty_string = {
      type: 'string',
      empty: true
    };

    var empty_number = {
      type: 'number',
      empty: true
    };

    var empty_array = {
      type: 'array',
      empty: true
    };

    var empty_object = {
      type: 'object',
      empty: true
    };

    beforeEach(function() {
      validator = new Validator();
    });

    it('should error if the value of an empty field is set to a string with content.', function(done) {
      validator.initialize({ empty_string: empty_string });
      validator.validate({ empty_string: 'foo' }, function(errors) {
        assert(errors);
        assert(errors.empty_string);
        assert(errors.empty_string[0].rule === 'empty');
        done();
      });
    });

    it('should NOT error if the value of an empty field is set to an empty string.', function(done) {
      validator.initialize({ empty_string: empty_string });
      validator.validate({ empty_string: '' }, function(errors) {
        assert(!errors);
        done();
      });
    });

    it('should error if the value of an empty number field is set to 0 (zero).', function(done) {
      validator.initialize({ empty_number: empty_number });
      validator.validate({ empty_number: 0 }, function(errors) {
console.log(errors);
        assert(errors);
        assert(errors.empty_number);
        assert(errors.empty_number[0].rule === 'empty');
        done();
      });
    });

    it('should error if the value of an empty array field has content.', function(done) {
      validator.initialize({ empty_array: empty_array });
      validator.validate({ empty_array: [1,2,3] }, function(errors) {
        assert(errors);
        assert(errors.empty_array);
        assert(errors.empty_array[0].rule === 'empty');
        done();
      });
    });

    it('should NOT error if the value of an empty array field does not have content.', function(done) {
      validator.initialize({ empty_array: empty_array });
      validator.validate({ empty_array: [] }, function(errors) {
        assert(!errors);
        done();
      });
    });

    it('should error if the value of an empty object field has content.', function(done) {
      validator.initialize({ empty_object: empty_object });
      validator.validate({ empty_object: { foo: 'bar' } }, function(errors) {
        assert(errors);
        assert(errors.empty_object);
        assert(errors.empty_object[0].rule === 'empty');
        done();
      });
    });

    it('should NOT error if the value of an empty object field does not have content.', function(done) {
      validator.initialize({ empty_object: empty_object });
      validator.validate({ empty_object: {} }, function(errors) {
        assert(!errors);
        done();
      });
    });

    it('should error if the value of an empty field is null.', function(done) {
      validator.initialize({ empty_object: empty_object });
      validator.validate({ empty_object: null }, function(errors) {
console.log(errors);
        assert(errors);
        assert(errors.empty_object);
        assert(errors.empty_object[0].rule === 'empty');
        done();
      });
    });

    it('should error if the value of an empty field is undefined.', function(done) {
      validator.initialize({ empty_object: empty_object });
      validator.validate({ empty_object: undefined }, function(errors) {
console.log(errors);
        assert(errors);
        assert(errors.empty_object);
        assert(errors.empty_object[0].rule === 'empty');
        done();
      });
    });

  });

});
