// Test node class

var Node = require("../node");

describe("Distance calculation", function () {
   var testNode;

   beforeEach(function () {
      testNode = new Node(1, 2, 3, 4, 3);
      testNode.weights = [0.1, 0.4, 0.5];
   });

   it("should get the proper distance", function () {
      expect(testNode.getDistance([1,0,0])).toEqual(1.105);
   });

});