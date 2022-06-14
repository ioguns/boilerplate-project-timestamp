// index.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 }));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function(req, res) {
  res.json({ greeting: 'hello API' });
});

// your first API endpoint... 
app.get("/api/:year-:month-:day", function(req, res) {

  try {
    const dateFormat = req.params.year + '-' + req.params.month + '-' + req.params.day;

    dateStr = Date.parse(dateFormat);

     if(dNum === NaN){
      res.json({ error: "Invalid Date" });
      return;
    }
    
    res.json({ unix: dateStr, utc: (new Date(dateFormat)).toUTCString() });
  } catch (err) {
    res.json({ error: "Invalid Date" });
    return;
  }

});

// your first API endpoint... 
app.get("/api/:date", function(req, res) {
  utc = undefined;
  try {
    dNum = Number.parseInt(req.params.date);
    if(dNum === NaN){
      res.json({ error: "Invalid Date" });
      return;
    }

    console.log(dNum);
     res.json({ unix: req.params.date, utc: (new Date(dNum * 1000)).toUTCString() });
  } catch (err) {
    res.json({ error: "Invalid Date" });
    return;
  }
 
});


// listen for requests :)
var listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
