var mysql = require("mysql");
const mysqlConfig = require("./config.js");
const Promise = require("bluebird");

var connection = mysql.createConnection(mysqlConfig);

const db = Promise.promisifyAll(connection, { multiArgs: true });

db.connectAsync().then(() =>
  console.log(
    `Connected to ${mysqlConfig.database} database as ID ${db.threadId}`
  )
);

var selectWilson = function (callback) {
  db.query("SELECT * FROM wilson", function (err, results) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};
var selectNike = function (callback) {
  db.query("SELECT * FROM nike", function (err, results) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};
var selectHead = function (callback) {
  db.query("SELECT * FROM head", function (err, results) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};
var selectBabolat = function (callback) {
  db.query("SELECT * FROM babolat", function (err, results) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};
var selectDiadora = function (callback) {
  db.query("SELECT * FROM diadora", function (err, results) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};
var selectRackets = function (callback) {
  db.query("SELECT * FROM rackets", function (err, results) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};
var selectShoes = function (callback) {
  db.query("SELECT * FROM shoes", function (err, results) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};
var selectBags = function (callback) {
  db.query("SELECT * FROM bags", function (err, results) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};
var selectBackpack = function (callback) {
  db.query("SELECT * FROM backpack", function (err, results) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};
var selectClothes = function (callback) {
  db.query("SELECT * FROM clothes", function (err, results) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

module.exports = {
  selectWilson,
  selectNike,
  selectHead,
  selectBabolat,
  selectDiadora,
  selectRackets,
  selectShoes,
  selectBags,
  selectBackpack,
  selectClothes,
};