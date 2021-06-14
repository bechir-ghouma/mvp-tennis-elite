var express = require("express");
const db = require("../database-mysql/index.js");
var items = require("../database-mysql");

var app = express();
const PORT = 7000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname + "/../client/build"));
app.get("/wilson", function (req, res) {
  db.selectWilson(function (err, data) {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

app.get("/nike", function (req, res) {
  db.selectNike(function (err, data) {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

app.get("/head", function (req, res) {
  db.selectHead(function (err, data) {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});
app.get("/babolat", function (req, res) {
  db.selectBabolat(function (err, data) {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});
app.get("/diadora", function (req, res) {
  db.selectDiadora(function (err, data) {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});
app.get("/rackets", function (req, res) {
  db.selectRackets(function (err, data) {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});
app.get("/shoes", function (req, res) {
  db.selectShoes(function (err, data) {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});
app.get("/bags", function (req, res) {
  db.selectBags(function (err, data) {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});
app.get("/backpack", function (req, res) {
  db.selectBackpack(function (err, data) {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});
app.get("/clothes", function (req, res) {
  db.selectClothes(function (err, data) {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});
app.get("/pocket", function (req, res) {
  db.selectPocket(function (err, data) {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});
app.post("/post", (req, res) => {
  db.postItem([req.body.url, req.body.model, req.body.price], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  });
});
app.get("/getme", function (req, res) {
  db.getItems(function (err, data) {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});
app.delete("/post/:id", (req, res) => {
  db.deleteItem(req.params.id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  });
});
app.listen(7000, function () {
  console.log("listening on port 7000!");
});
