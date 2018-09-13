"use strict";

import constants from "./constants";

var Whale = {
  set: function(theme) {
    Object.assign(this, theme);
  }
};

Whale.set(constants);

module.exports = Whale;
