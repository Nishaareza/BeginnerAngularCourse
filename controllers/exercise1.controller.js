(function (angular) {
	angular
		.module("application")
		.controller("exercise1Controller", function () {
			// private properties go here

			let vm = this;

			this.title = "exercise title";

			// publics go here

			this.rollButtonText = "Roll Me";

			this.rollButtonEvent = function() {
				this.rollButtonText = "I am Rolled";
			}

	//		this.possibleColors = ["hotpink", "limegreen", "purple", "maroon", "dodgerblue"];

		    this.possibleColors = [
 				{
 					name: "Brown",
 					hex: "#A52A2A"
 				},
 				{
 					name: "Blue",
 					hex: "#0000FF"
 				},
 				{
 					name: "Gainsboro",
 					hex: "#DCDCDC"
 				}
 			];
			

			this.controllerInitializedObject = {
				name: "Object 1",
				clickCount: 0,
				color: _getRandomColor()
			};

			this.objectArray = [this.controllerInitializedObject];

			// hoisted, private functions go here
			this.addObject = function(){
				this.objectArray.push({
				   name: "Object" +(this.objectArray.length +1),
				   clickCount:0,
				   color: _getRandomColor()
				   
				});
				
			 };
			 this.objectClicked = function (obj) {
          			obj.clickCount++;
     		    	this.lastObjectClickedText = obj.name + " clicked " + obj.clickCount + " times";
 				    console.log(this.lastObjectClickedText);
 			};
 
 			this.clearColorFilter = function() {
 				if (this.filter.color === null) {
 					// delete color from filter object, otherwise the filter will test for elements in an array
 					// with color set to null...
 
 					// setting this.filter.color equal to null is not equivalent to delete(this.filter.color)
  		  
 					// please see http://adripofjavascript.com/blog/drips/the-delete-operator-in-javascript.html
 					delete(this.filter.color);
 				}
 			};

			function _getRandomColor() {
				let randomColor = vm.possibleColors[Math.floor(Math.random() * vm.possibleColors.length)];

				return randomColor.hex;
			}
		});
} (window.angular))