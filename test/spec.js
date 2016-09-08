const expect = require('chai').expect;
const request = require('request');

describe ('Vehicle Info', () => {

  it('/vehicles/:id should exist', (done) => {
    var id = 1234;
    request.get({url: 'http://fuf.me:3000/vehicles/' + id},
    (err, res, body) => {
      if (!err) {
        expect(res.req.path).to.equal('/vehicles/1234');
        done();  
      } else if (err) {
        console.log(err);
        done();        
      }
    });    
  });

  it('/vehicles/:id should have GET method', (done) => {
    var id = 1234;
    request.get({url: 'http://fuf.me:3000/vehicles/' + id},
    (err, res, body) => {
      if (!err) {
        expect(res.req.method).to.equal('GET');
        done();  
      } else if (err) {
        console.log(err);
        done();        
      }
    });    
  });

  it('/vehicles/:id should return a JSON string', (done) => {
    var id = 1234;
    request.get({url: 'http://fuf.me:3000/vehicles/' + id},
    (err, res, body) => {
      if (!err) {
        expect(typeof JSON.parse(body)).to.equal('object');
        done();  
      } else if (err) {
        console.log(err);
        done();        
      }
    });    
  })
}); 

