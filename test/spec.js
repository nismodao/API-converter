const expect = require('chai').expect;
const request = require('request');

describe ('Vehicle Info endpoint', () => {

  it('/vehicles/:id should exist', (done) => {
    var id = 1234;
    request.get({url: 'http://localhost:3000/vehicles/' + id},
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
    request.get({url: 'http://localhost:3000/vehicles/' + id},
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
    request.get({url: 'http://localhost:3000/vehicles/' + id},
    (err, res, body) => {
      if (!err) {
        expect(typeof JSON.parse(body)).to.equal('object');
        done();  
      } else if (err) {
        console.log(err);
        done();        
      }
    });    
  });

  it('/vehicles/:id should return \'vin\' key with string value', (done) => {
    var id = 1234;
    request.get({url: 'http://localhost:3000/vehicles/' + id},
    (err, res, body) => {
      if (!err) {
        expect(typeof JSON.parse(body).vin).to.equal('string');
        done();  
      } else if (err) {
        console.log(err);
        done();        
      }
    });    
  });

  it('/vehicles/:id should return color \'key\' with string value', (done) => {
    var id = 1234;
    request.get({url: 'http://localhost:3000/vehicles/' + id},
    (err, res, body) => {
      if (!err) {
        expect(typeof JSON.parse(body).color).to.equal('string');
        done();  
      } else if (err) {
        console.log(err);
        done();        
      }
    });    
  });

  it('/vehicles/:id should return \'doorCount\' key with number value', (done) => {
    var id = 1234;
    request.get({url: 'http://localhost:3000/vehicles/' + id},
    (err, res, body) => {
      if (!err) {
        expect(typeof JSON.parse(body).doorCount).to.equal('number');
        done();  
      } else if (err) {
        console.log(err);
        done();        
      }
    });    
  });

  it('/vehicles/:id should return \'driveTrain\' key with string value', (done) => {
    var id = 1234;
    request.get({url: 'http://localhost:3000/vehicles/' + id},
    (err, res, body) => {
      if (!err) {
        expect(typeof JSON.parse(body).driveTrain).to.equal('string');
        done();  
      } else if (err) {
        console.log(err);
        done();        
      }
    });    
  });
}); 

describe ('Security endpoint', () => {

  it('/vehicles/:id/doors should exist', (done) => {
    var id = 1234;
    request.get({url: 'http://localhost:3000/vehicles/' + id + '/doors'},
    (err, res, body) => {
      if (!err) {
        expect(res.req.path).to.equal('/vehicles/1234/doors');
        done();  
      } else if (err) {
        console.log(err);
        done();        
      }
    });    
  });

  it('/vehicles/:id/doors should have GET method', (done) => {
    var id = 1234;
    request.get({url: 'http://localhost:3000/vehicles/' + id + '/doors'},
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

  it('/vehicles/:id/doors should return a JSON string', (done) => {
    var id = 1234;
    request.get({url: 'http://localhost:3000/vehicles/' + id + '/doors'},
    (err, res, body) => {
      if (!err) {
        expect(typeof JSON.parse(body)).to.equal('object');
        done();  
      } else if (err) {
        console.log(err);
        done();        
      }
    });    
  });

  it('/vehicles/:id/doors should return an array of length 4 for a 4 door car', (done) => {
    var id = 1234;
    request.get({url: 'http://localhost:3000/vehicles/' + id + '/doors'},
    (err, res, body) => {
      if (!err) {
        expect(JSON.parse(body).length).to.equal(4);
        done();  
      } else if (err) {
        console.log(err);
        done();        
      }
    });    
  });

  it('/vehicles/:id/doors should return an array with location index, for a 4 door car as, \'[frontLeft, frontRight, backLeft, backRight]\'',
   (done) => {
    var id = 1234;
    request.get({url: 'http://localhost:3000/vehicles/' + id + '/doors'},
    (err, res, body) => {
      if (!err) {
        var door = ["frontLeft", "frontRight", "backLeft", "backRight"];
        JSON.parse(body).forEach((element,index) => {
          expect(element.location).to.equal(door[index]);
        });
        done();  
      } else if (err) {
        console.log(err);
        done();        
      }
    });    
  });

  it('/vehicles/:id/doors should return an array of length 2 for a 2 door car', (done) => {
    var id = 1235;
    request.get({url: 'http://localhost:3000/vehicles/' + id + '/doors'},
    (err, res, body) => {
      if (!err) {
        expect(JSON.parse(body).length).to.equal(2);
        done();  
      } else if (err) {
        console.log(err);
        done();        
      }
    });    
  });

  it('/vehicles/:id/doors should return an array with location index, for a 2 door car as, \'[frontLeft, frontRight]\'',
   (done) => {
    var id = 1235;
    request.get({url: 'http://localhost:3000/vehicles/' + id + '/doors'},
    (err, res, body) => {
      if (!err) {
        var door = ["frontLeft", "frontRight"];
        JSON.parse(body).forEach((element,index) => {
          expect(element.location).to.equal(door[index]);
        });
        done();  
      } else if (err) {
        console.log(err);
        done();        
      }
    });    
  });

  it('/vehicles/:id should return a \'locked\' key with a boolean value', (done) => {
    var id = 1234;
    request.get({url: 'http://localhost:3000/vehicles/' + id + '/doors'},
    (err, res, body) => {
      if (!err) {
        JSON.parse(body).forEach((element) => {
          expect(typeof element.locked).to.equal('boolean');
        });
        done();  
      } else if (err) {
        console.log(err);
        done();        
      }
    });    
  });

  it('/vehicles/:id should return a \'location\' key with a string value', (done) => {
    var id = 1234;
    request.get({url: 'http://localhost:3000/vehicles/' + id + '/doors'},
    (err, res, body) => {
      if (!err) {
        JSON.parse(body).forEach((element) => {
          expect(typeof element.location).to.equal('string');
        });
        done();  
      } else if (err) {
        console.log(err);
        done();        
      }
    });    
  });
}); 

