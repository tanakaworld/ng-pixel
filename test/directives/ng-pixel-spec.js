describe("ngPixel", function () {
    beforeEach(module("ngPixel"));

    describe("factory", function () {
        var defaultSettingFactory;
        beforeEach(inject(function (DefaultSetting) {
            defaultSettingFactory = DefaultSetting;
        }));

        it("DefaultSetting has default size", function () {
            expect(defaultSettingFactory.size).toBeDefined();
            expect(defaultSettingFactory.size.width).toBe(20);
            expect(defaultSettingFactory.size.height).toBe(20);
        });
    });

    describe("directive", function () {
        var $compile, $rootScope;
        beforeEach(inject(function (_$compile_, _$rootScope_) {
            $compile = _$compile_;
            $rootScope = _$rootScope_;
        }));

        describe("no custom config", function () {
            var scope, element;
            beforeEach(inject(function () {
                element = angular.element("<div><ng-pixel data='data' /></div>");

                scope = $rootScope.$new();
                scope.data =
                    [
                        {"xels": [
                            {"id": 0, "color": "#106CB7"},
                            {"id": 1, "color": "#F7EF22"},
                            {"id": 2, "color": "#D11E45"}
                        ]},
                        {"xels": [
                            {"id": 3, "color": "#F7923A"},
                            {"id": 4, "color": "FFFFFF"},
                            {"id": 5, "color": "#F7EF22"}
                        ]},
                        {"xels": [
                            {"id": 6, "color": "#139B69"},
                            {"id": 7, "color": "#D11E45"},
                            {"id": 8, "color": "#106CB7"}
                        ]}
                    ];

                $compile(element)(scope);
                scope.$digest();
            }));

            it("display xel count is 9", function () {
                expect(element[0].querySelectorAll(".cell").length).toBe(9);
            });

            it("xel style is default", function () {
                var cells = element[0].querySelectorAll(".cell");
                for (var i = 0; i < cells.length; i++) {
                    expect($(cells[i])).toHaveCss({display: 'block', float: 'left', width: '20px', height: '20px'});
                }
            });
        });

        describe("set custom config", function () {
            var scope, element;
            beforeEach(inject(function () {
                element = angular.element("<div><ng-pixel data='data' config='config' /></div>");

                scope = $rootScope.$new();
                scope.data =
                    [
                        {"xels": [
                            {"id": 0, "color": "#106CB7"},
                            {"id": 1, "color": "#F7EF22"},
                            {"id": 2, "color": "#D11E45"}
                        ]},
                        {"xels": [
                            {"id": 3, "color": "#F7923A"},
                            {"id": 4, "color": "FFFFFF"},
                            {"id": 5, "color": "#F7EF22"}
                        ]},
                        {"xels": [
                            {"id": 6, "color": "#139B69"},
                            {"id": 7, "color": "#D11E45"},
                            {"id": 8, "color": "#106CB7"}
                        ]}
                    ];
                scope.config = { width: 50, height: 50 };

                $compile(element)(scope);
                scope.$digest();
            }));

            it("xel style is custom", function () {
                var cells = element[0].querySelectorAll(".cell");
                for (var i = 0; i < cells.length; i++) {
                    expect($(cells[i])).toHaveCss({display: 'block', float: 'left', width: '50px', height: '50px'});
                }
            });
        });
    });
});