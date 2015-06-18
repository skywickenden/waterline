var Validator = require('../../../lib/waterline/core/validations'),
    assert = require('assert');

describe('validations', function() {

  describe('required', function() {
    var validator;

    var required_string = {
      type: 'string',
      required: true
    };

    var required_boolean = {
      type: 'boolean',
      required: true
    };

    var not_required_string = {
      type: 'string'
    };

    var false_required_string = {
      type: 'string',
      required: false
    };

    beforeEach(function() {
        validator = new Validator();
    });

    it('should error if value is set to an empty string for a required string field', function(done) {
      validator.initialize({ required_string: required_string });
      validator.validate({ required_string: '' }, function(errors) {
        assert(errors);
        assert(errors.required_string);
        assert(errors.required_string[0].rule === 'required');
        done();
      });
    });

    it('should error if an undefined value is set for a required field', function(done) {
      validator.initialize({ required_string: required_string });
      validator.validate({ required_string: undefined }, function(errors) {
        assert(errors);
        assert(errors.required_string);
        assert(errors.required_string[0].rule === 'string');
        assert(errors.required_string[1].rule === 'required');
        done();
      });
    });

    it('should error if a null value is set for a required field', function(done) {
      validator.initialize({ required_string: required_string });
      validator.validate({ required_string: null }, function(errors) {
        assert(errors);
        assert(errors.required_string);
        assert(errors.required_string[0].rule === 'string');
        assert(errors.required_string[1].rule === 'required');
        done();
      });
    });

    it('should error if no value is set for required boolean field', function(done) {
      validator.initialize({ required_string: required_string, required_boolean: required_boolean });
      validator.validate({ required_string: 'foo' }, function(errors) {
        assert(errors);
        assert(errors.required_boolean);
        assert(errors.required_boolean[0].rule === 'boolean');
        assert(errors.required_boolean[1].rule === 'required');
        done();
      });
    });

    it('should error if a required string field is omitted', function(done) {
      validator.initialize({ not_required_string : not_required_string, required_string: required_string });
      validator.validate({ not_required_string: 'foo' }, function(errors) {
        assert(errors);
        assert(errors.required_string);
        assert(errors.required_string[0].rule === 'string');
        assert(errors.required_string[1].rule === 'required');
        done();
      });
    });

    it('should error if required is not set and value is invalid', function(done) {
      validator = new Validator();
      validator.initialize({ not_required_string: not_required_string });
      validator.validate({ not_required_string: 123,  }, function(errors) {
        assert(errors);
        assert(errors.not_required_string);
        assert(errors.not_required_string[0].rule === 'string');
        done();
      });
    });

    it('should error if required is false and value is invalid', function(done) {
      validator = new Validator();
      validator.initialize({ false_required_string: false_required_string });
      validator.validate({ false_required_string: 123,  }, function(errors) {
        assert(errors);
        assert(errors.false_required_string);
        assert(errors.false_required_string[0].rule === 'string');
        done();
      });
    });

    it('should NOT error if required is false and value is valid', function(done) {
      validator = new Validator();
      validator.initialize({ false_required_string: false_required_string });
      validator.validate({ false_required_string: 'foo',  }, function(errors) {
        assert(!errors);
        done();
      });
    });

    it('should NOT error if required is not specified and value is valid', function(done) {
      validator.initialize({ false_required_string: false_required_string });
      validator.validate({ false_required_string: 'foo' }, function(errors) {
        assert(!errors);
        done();
      });
    });

    it('should NOT error if all required values are set', function(done) {
      validator.initialize({ required_string: required_string, required_boolean: required_boolean });
      validator.validate({ required_string: 'foo', required_boolean: true }, function(errors) {
        assert(!errors);
        done();
      });
    });

    it('should NOT error if required is false and values are valid', function(done) {
      validator.initialize({ false_required_string: false_required_string });
      validator.validate({ false_required_string: 'foo' }, function(errors) {
        assert(!errors);
        done();
      });
    });

    it('should NOT error if required is false and value is not present', function(done) {
      validator.initialize({ required_string: required_string, false_required_string: false_required_string });
      validator.validate({ required_string: 'foo' }, function(errors) {
        assert(!errors);
        done();
      });
    });

  });

});
