const bodyParser = require("body-parser");
const cors = require('cors')
const depoimentos = require("./depoimentos");
const destinos = require("./destinos");

var corsOptions = {
  origin: 'http://localhost',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

module.exports = (app) => {
  app.use(cors(corsOptions))
  app.use(bodyParser.json());
  app.use(
    depoimentos,
    destinos
  );
};