angular.module('coreMod')
	.directive('contact', function(){
		return {
			restrict: 'E',
			templateUrl: '/web/app/modules/contact/contact.html',
			controller: 'ClientController',
			controllerAs: 'client',
		};
	});