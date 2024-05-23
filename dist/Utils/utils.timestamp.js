"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTimestamp = void 0;
function parseDate(val) {
  return val < 10 ? "0" + val : val;
}
var getTimestamp = exports.getTimestamp = function getTimestamp() {
  var dateString = new Date().toLocaleString("en-us", {
    timeZone: "Africa/Nairobi"
  });
  var dateObject = new Date(dateString);
  var month = parseDate(dateObject.getMonth() + 1);
  var day = parseDate(dateObject.getDate());
  var hour = parseDate(dateObject.getHours());
  var minute = parseDate(dateObject.getMinutes());
  var second = parseDate(dateObject.getSeconds());
  return dateObject.getFullYear() + "" + month + "" + day + "" + hour + "" + minute + "" + second;
};