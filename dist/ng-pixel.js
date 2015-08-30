function DefaultSetting() {
    'user strict';
    return {
        size: {
            width: 20,
            height: 20
        }
    };
}
NgPixel.$inject = ['$compile', 'DefaultSetting'];
function NgPixel($compile, DefaultSetting) {
    'user strict';
    return {
        restrict: 'E',
        transclude: true,
        replace: true,
        scope: {
            data: '=',
            config: '='
        },
        link: function (scope, element, attrs) {
            if (angular.isDefined(scope.config)) {
                if (!angular.isDefined(scope.config.width)) {
                    scope.config.width = DefaultSetting.size.width;
                }
                if (!angular.isDefined(scope.config.height)) {
                    scope.config.height = DefaultSetting.size.height;
                }
            } else {
                scope.config = {
                    width: DefaultSetting.size.width,
                    height: DefaultSetting.size.height
                }
            }
            var height = angular.isDefined(scope.config.height) ? scope.config.height : DefaultSetting.size.height;

            var htmlText = '<div ng-repeat="row in data" style="clear: both">' +
                '<div class="cell" ng-repeat="d in row.xels"' +
                'style="display:block; float: left"' +
                'ng-style="{background: d.color, width: config.width + \'px\', height: config.height + \'px\'}">' +
                '</div>' +
                '</div>'
            var template = angular.element(htmlText);
            element.replaceWith($compile(template)(scope));
        }
    };
}
(function (window, document) {
    angular.module('ngPixel', [])
        .factory('DefaultSetting', DefaultSetting)
        .directive('ngPixel', ['$compile', 'DefaultSetting', NgPixel]);
})(window, document);