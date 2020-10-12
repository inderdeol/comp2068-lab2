var express = require('express');
var router = express.Router();

// calculate function to sort which method id being passed in url
function calculate(method, x, y){
  if(method == "add"){
    return x+y;
  }
  else if(method == "subtract"){
    return x-y;
  }
  else if(method == "multiply"){
    return x*y;
  }
  else if(method == "divide"){
    return x/y;
  }
  else{
    return "Error occured..!";
  }
}

/* GET home page. */
router.get('/', function(req, res, next) {
  var method = req.query.method;
  var operation;

  if(method == "add"){
    operation = " + "
  }
  else if(method == "subtract"){
    operation = " - "
  }
  else if(method == "multiply"){
    operation = " * "
  }
  else if(method == "divide"){
    operation = " / "
  }

  // var n1 = data.x;
  var x = Number(req.query.x);
  
  // var n2 = data.y;
  var y = Number(req.query.y);

  var result = calculate(method, x, y)
  // print onto DOM
  res.send(x + operation + y + " = " + result.toString());
});

module.exports = router;
