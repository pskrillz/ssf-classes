"use strict";
exports.__esModule = true;
var planet = /** @class */ (function () {
    function planet(width, color) {
        this.width = width;
        this.color = color;
    }
    return planet;
}());
exports.planet = planet;
exports.krypton = new planet(5, 'blue');
exports.omicronPersei8 = new planet(6, 'red');
exports.nemesis = new planet(8, 'purple');
