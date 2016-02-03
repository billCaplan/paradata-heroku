angular.module('coreMod')
	.directive('navigation', function(){
		return {
			restrict: 'E',
			templateUrl: '/web/app/modules/nav/nav.html',
			controller: 'SitemapController',
			controllerAs: 'sitemap',
		};
	});