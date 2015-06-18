var Validator = require('../../../lib/waterline/core/validations'),
    assert = require('assert');

describe('validations', function() {

  describe('notEmpty', function() {
    var validator;

    var not_empty_array = {
      type: 'array',
      notEmpty: true
    };

    var not_empty_object = {
      type: 'object',
      notEmpty: true
    };

    var not_empty_string = {
      type: 'string',
      notEmpty: true
    };

    var not_empty_number = {
      type: 'number',
      notEmpty: true
    };

    beforeEach(function() {
      validator = new Validator();
    });

    it('should error if the value of a notEmpty field is set to an empty string.', function(done) {
      validator.initialize({ not_empty_string: not_empty_string });
      validator.validate({ not_empty_string: '' }, function(errors) {
console.log(errors);
        assert(errors);
        assert(errors.not_empty_string);
        assert(errors.not_empty_string[0].rule === 'notEmpty');
        done();
      });
    });

    it('should NOT error if the value of a notEmpty string field has content.', function(done) {
      validator.initialize({ not_empty_string: not_empty_string });
      validator.validate({ not_empty_string: 'foo' }, function(errors) {
        assert(!errors);
        done();
      });
    });

    it('should NOT error if the value of a notEmpty number field is set to 0 (zero).', function(done) {
      validator.initialize({ not_empty_number: not_empty_number });
      validator.validate({ not_empty_number: 0 }, function(errors) {
console.log(errors);
        assert(!errors);
        done();
      });
    });

    it('should NOT error if the value of a notEmpty number field is set to a number other than zero.', function(done) {
      validator.initialize({ not_empty_number: not_empty_number });
      validator.validate({ not_empty_number: 42 }, function(errors) {
        assert(!errors);
        done();
      });
    });

    it('should error if the value of a notEmpty array field does not have content.', function(done) {
      validator.initialize({ not_empty_array: not_empty_array });
      validator.validate({ not_empty_array: [] }, function(errors) {
        assert(errors);
        assert(errors.not_empty_array);
        assert(errors.not_empty_array[0].rule === 'notEmpty');
        done();
      });
    });

    it('should NOT error if the value of a notEmpty array field does have content.', function(done) {
      validator.initialize({ not_empty_array: not_empty_array });
      validator.validate({ not_empty_array: [1,2,3] }, function(errors) {
        assert(!errors);
        done();
      });
    });

    it('should error if the value of a notEmpty object field does not have content.', function(done) {
      validator.initialize({ not_empty_object: not_empty_object });
      validator.validate({ not_empty_object: [] }, function(errors) {
        assert(errors);
        assert(errors.not_empty_object);
        assert(errors.not_empty_object[0].rule === 'notEmpty');
        done();
      });
    });

    it('should NOT error if the value of a notEmpty object field does have content.', function(done) {
      validator.initialize({ not_empty_object: not_empty_object });
      validator.validate({ not_empty_object: { foo : 'bar' } }, function(errors) {
        assert(!errors);
        done();
      });
    });

    it('should NOT error if the value of an empty field is null.', function(done) {
      validator.initialize({ not_empty_object: not_empty_object });
      validator.validate({ not_empty_object: null }, function(errors) {
        assert(!errors);
        done();
      });
    });

    it('should NOT error if the value of an empty field is undefined.', function(done) {
      validator.initialize({ not_empty_object: not_empty_object });
      validator.validate({ not_empty_object: undefined }, function(errors) {
        assert(!errors);
        done();
      });
    });

  });

});
