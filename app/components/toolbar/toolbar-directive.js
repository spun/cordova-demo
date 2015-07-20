var toolbar = angular.module('smartBeach.toolbar', []);

toolbar.service('$toolbar', ['$rootScope', function () {
    'use strict';

    return {
    	title: "Gato",
        icon: "menu",
    	setTitle: function(text) {
    		this.title = text; 
    	},

        setIcon: function(icon) {
                this.icon = icon; 
        }
    }
}]);

toolbar.directive('toolbar', ['$toolbar', function ($toolbar) {
    'use strict';

    return {
        scope: true,
        link: function (scope) {
        	scope.toolbar = $toolbar;
            scope.doTheBack = function() {
  window.history.back();
};
        },

        template: 
            '<md-toolbar layout="column" style="box-shadow: 0 2px 5px rgba(0,0,0,.26);">' +
				'<div class="md-toolbar-tools toolbar-title" flex layout="column">' +
					'<div layout="row" flex>' +
                        '<button ng-if="toolbar.icon == \'menu\'" class="menu-icon" ng-click="toggleLeft()" hide-gt-sm aria-label="Toggle Menu" style="background: none; border: none;">' +
                            '<md-icon icon="images/ic_menu_24px.svg"></md-icon>' +
                        '</button>' +
                        '<button ng-if="toolbar.icon == \'arrow\'" class="menu-icon" ng-click="doTheBack()" hide-gt-sm aria-label="Toggle Menu" style="background: none; border: none;">' +
                            '<md-icon icon="images/ic_arrow_back_24px.svg"></md-icon>' +
                        '</button>' +
						'<div style="line-height: 36px;">{{toolbar.title}}</div>' +
						'<div flex=""></div>' +
					'</div>' +
				'</div>' +
			'</md-toolbar>'
    };


}]);