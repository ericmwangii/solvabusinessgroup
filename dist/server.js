"use strict";

var _express = _interopRequireDefault(require("express"));
var _cors = _interopRequireDefault(require("cors"));
require("dotenv/config");
var _routesLipanampesa = _interopRequireDefault(require("./routes/routes.lipanampesa.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// initialise exxpress
var app = (0, _express["default"])();
app.use(_express["default"].json());
app.use((0, _cors["default"])());
app.use("/api", _routesLipanampesa["default"]);
var port = process.env.PORT;
app.listen(port, function () {
  console.log("App listening on port ".concat(port));
});