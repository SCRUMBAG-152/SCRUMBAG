var assert = require('assert');
var expect = require('chai').expect;
var should = require('chai').should();

it('should return true if valid user id found in DB', function(){
      var isValid = loginController.isValidUserId('559chop@gmail.com')
      //assert.equal(isValid, true);
      expect(isValid).to.be.true;
});
it('should return false if invalid user id not found in DB', function(){
      var isValid = loginController.isValidUserId('559chop@gmail.com')
      //assert.equal(isValid, false);
      isValid.should.equal(false);
});