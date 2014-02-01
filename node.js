/**
 * This file contains an implemenation of a Node for use with Kohohen feature maps.
 */

// Include a few required files.
var Chance = require('chance');
var chance = new Chance();

/**
 * Create a constructor for a Node object.
 * @constructor
 */
function Node(left, right, top, bottom, numWeights) {
   this.weights = [];      // Weights for the node.
   this.x = 0.0;           // X position in the lattice
   this.y = 0.0;           // Y position in the lattice
   this.left = left;          // Edges of cell.
   this.right = right;
   this.top = top;
   this.bottom = bottom;


   // Fill in the weights with small values.
   for (var i = 0; i < numWeights; i++) {
      this.weights.push(chance.floating({min: 0, max: 1}));
   }

   // Calculate center
   this.x = this.left + (this.right - this.left) / 2;
   this.y = this.top + (this.bottom - this.top) / 2;
}

Node.prototype.getDistance = function (inputVector) {
   var self = this;
   var distance = 0;
   for (var i = 0; i < self.weights.length; i++) {
      distance += Math.pow((inputVector[i] - self.weights[i]), 2);
   }

   distance = distance.toFixed(2); // 2 decimal places for now...
   console.log(distance);
   return parseFloat((Math.sqrt(distance)).toFixed(3));
};

module.exports = Node;


