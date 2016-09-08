const request = require('request');

module.exports = {
  getVehicle: (req, response) => {
    let id = req.params.id;
    let model = {id: id, responseType: "JSON"};
    request.post({url: 'http://gmapi.azurewebsites.net/getVehicleInfoService', json: model},
    (err, res, body) => {
      if (!err) {
        let result = {};
        result.vin = body.data.vin.value;
        result.color = body.data.color.value;
        body.data.twoDoorCoupe.value === "True" ? result.doorCount = 2 : result.doorCount = 4;
        result.driveTrain = body.data.driveTrain.value;
        response.json(result);    
      } else if (err) {
        response.json(err);
      }
    });
  },
  getSecurity: (req, response) => {
    let id = req.params.id;
    let model = {id: id, responseType: "JSON"};
    request.post({url: 'http://gmapi.azurewebsites.net/getSecurityStatusService', json: model},
    (err, res, body) => {
      if (!err) {
        let result = [];
        body.data.doors.values.forEach(element => {
          let item = {};
          item.location = element.location.value;
          item.locked = element.locked.value;
          if (item.location === "frontLeft") result[0] = item;
          if (item.location === "frontRight") result[1] = item;
          if (item.location === "backLeft") result[2] = item;
          if (item.location === "backRight") result[3] = item;
        });
        response.json(result);    
      } else if (err) {
        response.json({error: err});
      }
    });
  },
  getRange: (req, response) => {
    let id = req.params.id;
    let model = {id: id, responseType: "JSON"};
    request.post({url: 'http://gmapi.azurewebsites.net/getEnergyService', json: model},
    (err, res, body) => {
      if (!err) {
        let result = {};
        body.data.tankLevel.value === 'null' ? result.percent = body.data.batteryLevel.value :
        result.percent = body.data.tankLevel.value;
        response.json(result);    
      } else if (err) {
        response.json(err);
      }
    });
  },
  activate: (req, response) => {
    if (req.headers["content-type"] === "application/json") {
      let id = req.params.id;
      let command = req.body.action + "_VEHICLE";
      let model = {id: id, command: command, responseType: "JSON"};
      request.post({url: 'http://gmapi.azurewebsites.net/actionEngineService', json: model},
      (err, res, body) => {
        if (!err) {
          let result = {};
          body.actionResult.status === "EXECUTED" ? result.status = "success" : result.status = "error";
          response.json(result);    
        } else if (err) {
          response.json(err);
        }
      });
    } else {
      response.json({error:'content not accepted'});
    }
  }
}