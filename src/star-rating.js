(function(){
angular.module("alfanso", [])
	.directive("avStarRating", function()
	{
		var filledStar = "<span>&#9733;</span>",
			emptyStar  = "<span>&#9734;</span>";

		return {
			restrict: "EA",
			link: function(scope, el, attr)
			{
				attr.$observe("currentRating", function()
				{
					var 
					i = 0, 
					html = [],
					totalRating = attr.totalRating,
					currentRating = Math.round(Math.min(attr.currentRating, totalRating));

					for ( ; i < currentRating; i++)
						html.push( filledStar );

					for ( ; i < totalRating; i++)
						html.push( emptyStar );

					el.html( html.join("") );
				});


				// listen on click event to update the rating
			}
		};
	})
})();