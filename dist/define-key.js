"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

function _default(text) {
  if (!text && text.length === 0) return;
  var r = text.normalize('NFD').replace(/[\u0300-\u036f]/g, "").replace(/\W/g, "-").replace(/\-{2,}/g, "-").toLowerCase();
  if (r[0] === "-") r = r.substring(1);
  if (r[r.length - 1] === "-") r = r.substring(0, r.length - 1);
  return r;
}