const fs = require('fs');
/**
 * TemperatureController
 *
 * @description :: Server-side logic for managing temperatures
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

const temperatureData = JSON.parse(fs.readFileSync(`${sails.config.appPath}/api/templates/temperature.json`, "utf8"));

module.exports = {
	find: function(req, res) {
	  res.json(temperatureData);
  }
};

