## ngPixel - Generate pixel pattern using AngularJS
An AngularJS simple directive that generate pixel pattern.

![ngPixel example 1](https://raw.githubusercontent.com/wiki/tanakayutaro/ng-pixel/images/ngPixel-Example-1.png)


## Dependencies
* angular.js, any version starting with 1

## Installation

#### Manual Download
Download the from [here](https://github.com/TanakaYutaro/ng-pixel/releases/)

#### Bower
```
bower install ng-pixel
```

## Introduction

1. Copy `ng-pixel.js` to your project directory

2. Set `ngPixel` as a dependency in your module

	```javascript
	angular.module("myApp", ["ngPixel"])
	```

3. Add ng-pixel directive to the wanted element

  ```html
  <ng-pixel data='[{"xels":[{"id":0,"color":"#106CB7"},{"id":1,"color":"#F7EF22"},{"id":2,"color":"#D11E45"}]},{"xels":[{"id":3,"color":"#F7923A"},{"id":4,"color":"FFFFFF"},{"id":5,"color":"#F7EF22"}]},{"xels":[{"id":6,"color":"#139B69"},{"id":7,"color":"#D11E45"},{"id":8,"color":"#106CB7"}]}]'/>
  ```
Using [ngPixel editor](http://tanakayutaro.github.io/ng-pixel/editor/), you can generate json for `data` attribute.

4. Done! You can draw following pixel pattern!!

	![ngPixel example 2](https://raw.githubusercontent.com/wiki/tanakayutaro/ng-pixel/images/ngPixel-Installation-1.png)

## ngPixel attributes
* data : Pixel color info. [ngPixel editor](http://tanakayutaro.github.io/ng-pixel/editor/) support to genarating.
* config : Each pixel size (px). Default `width: 20`, `height: 20`

	```html
	<ng-pixel data='Generated color info' config='{ width: 30, height: 30 }' />
	```

## TODO
* ngPixel
	* bind events to each cells
* ngPixel Editor
	* import ngPixel json
	* import image, and convert to json
