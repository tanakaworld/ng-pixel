angular.module('NgPixelEditor', ['colorpicker.module'])
    .controller("EditorController", function () {
        var vm = this;

        vm.generateSquares = function (w, h) {
            var squares = [];

            var id = 0;
            for (var k = 0; k < h; k++) {
                var row = {xels: []};

                for (var j = 0; j < w; j++) {
                    row.xels.push({id: id, color: "lightgray"});
                    id += 1;
                }
                squares.push(row);
            }

            vm.squares = squares;
        };
    });