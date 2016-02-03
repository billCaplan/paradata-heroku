angular.module('coreMod')
	.directive('appfooter', function(){
		return {
			restrict: 'E',
			templateUrl: '/web/app/modules/footer/footer.html'
		};
	});