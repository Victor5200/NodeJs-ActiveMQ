let express = require("express");
app = express();
port = 8087;
bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
let routes = require('./api/routes/documentoRoutes');
routes(app);
app.listen(port);
