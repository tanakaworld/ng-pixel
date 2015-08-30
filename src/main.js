(function (window, document) {
    angular.module('ngPixel', [])
        .factory('DefaultSetting', DefaultSetting)
        .directive('ngPixel', ['$compile', 'DefaultSetting', NgPixel]);
})(window, document);