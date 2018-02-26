const fs = require('fs');
/**
 * PrecipitationController
 *
 * @description :: Server-side logic for managing precipitations
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

const precipitationData = JSON.parse(fs.readFileSync(`${sails.config.appPath}/api/templates/precipitation.json`, "utf8"));

module.exports = {
  find: function(req, res) {
    res.json(precipitationData);
  }
};

