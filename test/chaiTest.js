// var assert = require('assert');
// var expect = require('chai').expect;
// var should = require('chai').should();
// it('should return true if valid user id', function(){
//       var isValid = loginController.isValidUserId('abc123')
//       //assert.equal(isValid, true);
//       expect(isValid).to.be.true;
// });
// it('should return false if invalid user id', function(){
//       var isValid = loginController.isValidUserId('abc1234')
//       //assert.equal(isValid, false);
//       isValid.should.equal(false);
// });

//let's set up the data we need to pass to the login method


const userCredentials = {
    email: 'chop559@gmail.com', 
    password: ""
  }
  //now let's login the user before we run any tests
  var authenticatedUser = request.agent(app);
  before(function(done){
    authenticatedUser
      .post('/login')
      .send(userCredentials)
      .end(function(err, response){
        expect(response.statusCode).to.equal(200);
        expect('Location', '/home');
        done();
      });
  });
  //this test says: make a POST to the /login route with the email: sponge@bob.com, password: garyTheSnail
  //after the POST has completed, make sure the status code is 200 
  //also make sure that the user has been directed to the /home page