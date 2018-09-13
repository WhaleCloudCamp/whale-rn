"use strict";

import constants from "./constants";

var Theme = {
  set: function(theme) {
    Object.assign(this, theme);
  }
};

Theme.set(constants);

module.exports = Theme;
