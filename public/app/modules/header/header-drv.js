angular.module('coreMod')
	.directive('appheader', function(){
		return {
			restrict: 'E',
			templateUrl: '/web/app/modules/header/header.html'
		};
	});