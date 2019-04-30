// /* Code */
// function isAuthorizedPromise(user){
//     return new Promise(function(resolve){
//         setTimeout(function(){resolve(userList.indexOf(user) >= 0)}, 10);
//     });
//   }
// // Note: setTimeout has been used to simulate the async behavior.
// /* Test */
// var chai = require('chai');
// var chaiAsPromised = require('chai-as-promised');
// chai.use(chaiAsPromised).should();
// describe('isAuthorizedPromise', function(){
//   it('should return true if valid user id', function(){
//       return    loginController.isAuthorizedPromise('abc123').should.eventually.be.true;
//     });
// });