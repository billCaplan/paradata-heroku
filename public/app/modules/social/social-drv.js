angular.module('coreMod')
	.directive('social', function(){
		return {
			restrict: 'E',
			templateUrl: '/web/app/modules/social/social.html',
			controller: 'ClientController',
			controllerAs: 'client',
		};
	});