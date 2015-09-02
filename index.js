/*!
 * to-path <https://github.com/jonschlinkert/to-path>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

module.exports = function toPath() {
  return [].concat.apply([], arguments).join('.');
};
