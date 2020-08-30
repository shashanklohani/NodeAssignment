const url = require('url');

exports.sampleRequest = function (req, res) {
  const reqUrl = url.parse(req.url, true);
  let number;
  if (reqUrl.query.number) {
    number = reqUrl.query.number;
  }

  var i;
  var str = '';

  if (number !== undefined) {
    for (i = 1; i <= number; i++) {
      if (i % 1000 === 1 && i !== 1) {
        str = str + '\n';
      }
      if (i % 7 === 0 && i % 4 === 0) {
        if (i % 1000 === 1) {
          str = str + 'marcopolo';
        } else {
          str = str + ' marcopolo';
        }
      } else if (i % 7 === 0) {
        if (i % 1000 === 1) {
          str = str + 'polo';
        } else {
          str = str + ' polo';
        }
      } else if (i % 4 === 0) {
        if (i % 1000 === 1) {
          str = str + 'marco';
        } else {
          str = str + ' marco';
        }
      } else {
        if (i % 1000 === 1) {
          str = str + i;
        } else {
          str = str + ' ' + i;
        }
      }
    }
  } else {
    str = 'Please enter a num';
  }
  //   var response = {
  //     str,
  //   };
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.write(str);
  res.end();
};
