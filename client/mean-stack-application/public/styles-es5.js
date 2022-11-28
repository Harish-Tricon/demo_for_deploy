(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"], {
  /***/
  "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/styles.css":
  /*!*********************************************************************************************************************!*\
    !*** ./node_modules/css-loader/dist/cjs.js??ref--12-1!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
    \*********************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCssLoaderDistCjsJsNode_modulesPostcssLoaderSrcIndexJsSrcStylesCss(module, exports, __webpack_require__) {
    // Imports
    var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(
    /*! ../node_modules/css-loader/dist/runtime/api.js */
    "./node_modules/css-loader/dist/runtime/api.js");

    exports = ___CSS_LOADER_API_IMPORT___(true); // Module

    exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\r\nbody {\r\n  color: #566787;\r\n  background: #f5f5f5;\r\n  font-family: \"Varela Round\", sans-serif;\r\n  font-size: 13px;\r\n}\r\n.table-wrapper {\r\n  background: #fff;\r\n  padding: 20px 25px;\r\n  margin: 30px 0;\r\n  border-radius: 3px;\r\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);\r\n}\r\n.table-title {\r\n  padding-bottom: 15px;\r\n  background: #30700b;\r\n  color: #fff;\r\n  padding: 16px 30px;\r\n  margin: -20px -25px 10px;\r\n  border-radius: 3px 3px 0 0;\r\n}\r\n.table-title h2 {\r\n  margin: 5px 0 0;\r\n  font-size: 24px;\r\n}\r\n.table-title .btn-group {\r\n  float: right;\r\n}\r\n.table-title .btn {\r\n  color: #fff;\r\n  float: right;\r\n  font-size: 13px;\r\n  border: none;\r\n  min-width: 50px;\r\n  border-radius: 2px;\r\n  border: none;\r\n  outline: none !important;\r\n  margin-left: 10px;\r\n}\r\n.table-title .btn i {\r\n  float: left;\r\n  font-size: 21px;\r\n  margin-right: 5px;\r\n}\r\n.table-title .btn span {\r\n  float: left;\r\n  margin-top: 2px;\r\n}\r\ntable.table tr th,\r\ntable.table tr td {\r\n  border-color: #e9e9e9;\r\n  padding: 12px 15px;\r\n  vertical-align: middle;\r\n}\r\ntable.table tr th:first-child {\r\n  width: 60px;\r\n}\r\ntable.table tr th:last-child {\r\n  width: 100px;\r\n}\r\ntable.table-striped tbody tr:nth-of-type(odd) {\r\n  background-color: #fcfcfc;\r\n}\r\ntable.table-striped.table-hover tbody tr:hover {\r\n  background: #f5f5f5;\r\n}\r\ntable.table th i {\r\n  font-size: 13px;\r\n  margin: 0 5px;\r\n  cursor: pointer;\r\n}\r\ntable.table td:last-child i {\r\n  opacity: 0.9;\r\n  font-size: 22px;\r\n  margin: 0 5px;\r\n}\r\ntable.table td a {\r\n  font-weight: bold;\r\n  color: #566787;\r\n  display: inline-block;\r\n  text-decoration: none;\r\n  outline: none !important;\r\n}\r\ntable.table td a:hover {\r\n  color: #2196f3;\r\n}\r\ntable.table td a.edit {\r\n  color: #ffc107;\r\n}\r\ntable.table td a.delete {\r\n  color: #f44336;\r\n}\r\ntable.table td i {\r\n  font-size: 19px;\r\n}\r\ntable.table td {\r\n  width: 100px;\r\n}\r\ntable.table .avatar {\r\n  border-radius: 50%;\r\n  vertical-align: middle;\r\n  margin-right: 10px;\r\n}\r\n.btn-success {\r\n  color: #fff;\r\n  background-color: rgba(14, 137, 185, 0.87);\r\n  border-color: #4cae4c;\r\n}\r\n.pagination {\r\n  float: right;\r\n  margin: 0 0 5px;\r\n}\r\n.pagination li a {\r\n  border: none;\r\n  font-size: 13px;\r\n  min-width: 30px;\r\n  min-height: 30px;\r\n  color: #999;\r\n  margin: 0 2px;\r\n  line-height: 30px;\r\n  border-radius: 2px !important;\r\n  text-align: center;\r\n  padding: 0 6px;\r\n}\r\n.pagination li a:hover {\r\n  color: #666;\r\n}\r\n.pagination li.active a,\r\n.pagination li.active a.page-link {\r\n  background: #03a9f4;\r\n}\r\n.pagination li.active a:hover {\r\n  background: #0397d6;\r\n}\r\n.pagination li.disabled i {\r\n  color: #ccc;\r\n}\r\n.pagination li i {\r\n  font-size: 16px;\r\n  padding-top: 6px;\r\n}\r\n.hint-text {\r\n  float: left;\r\n  margin-top: 10px;\r\n  font-size: 13px;\r\n}\r\n/* Custom checkbox */\r\n.custom-checkbox {\r\n  position: relative;\r\n}\r\n.custom-checkbox input[type=\"checkbox\"] {\r\n  opacity: 0;\r\n  position: absolute;\r\n  margin: 5px 0 0 3px;\r\n  z-index: 9;\r\n}\r\n.custom-checkbox label:before {\r\n  width: 18px;\r\n  height: 18px;\r\n}\r\n.custom-checkbox label:before {\r\n  content: \"\";\r\n  margin-right: 10px;\r\n  display: inline-block;\r\n  vertical-align: text-top;\r\n  background: white;\r\n  border: 1px solid #bbb;\r\n  border-radius: 2px;\r\n  box-sizing: border-box;\r\n  z-index: 2;\r\n}\r\n.custom-checkbox input[type=\"checkbox\"]:checked + label:after {\r\n  content: \"\";\r\n  position: absolute;\r\n  left: 6px;\r\n  top: 3px;\r\n  width: 6px;\r\n  height: 11px;\r\n  border: solid #000;\r\n  border-width: 0 3px 3px 0;\r\n  transform: inherit;\r\n  z-index: 3;\r\n  transform: rotateZ(45deg);\r\n}\r\n.custom-checkbox input[type=\"checkbox\"]:checked + label:before {\r\n  border-color: #03a9f4;\r\n  background: #03a9f4;\r\n}\r\n.custom-checkbox input[type=\"checkbox\"]:checked + label:after {\r\n  border-color: #fff;\r\n}\r\n.custom-checkbox input[type=\"checkbox\"]:disabled + label:before {\r\n  color: #b8b8b8;\r\n  cursor: auto;\r\n  box-shadow: none;\r\n  background: #ddd;\r\n}\r\n/* Modal styles */\r\n.modal .modal-dialog {\r\n  max-width: 400px;\r\n}\r\n.modal .modal-header,\r\n.modal .modal-body,\r\n.modal .modal-footer {\r\n  padding: 20px 30px;\r\n}\r\n.modal .modal-content {\r\n  border-radius: 3px;\r\n}\r\n.modal .modal-footer {\r\n  background: #ecf0f1;\r\n  border-radius: 0 0 3px 3px;\r\n}\r\n.modal .modal-title {\r\n  display: inline-block;\r\n}\r\n.modal .form-control {\r\n  border-radius: 2px;\r\n  box-shadow: none;\r\n  border-color: #dddddd;\r\n}\r\n.modal textarea.form-control {\r\n  resize: vertical;\r\n}\r\n.modal .btn {\r\n  border-radius: 2px;\r\n  min-width: 100px;\r\n}\r\n.modal form label {\r\n  font-weight: normal;\r\n}\r\n", "", {
      "version": 3,
      "sources": ["styles.css", "css/site.css"],
      "names": [],
      "mappings": "AAAA,8EAA8E;ACA9E;EACE,cAAc;EACd,mBAAmB;EACnB,uCAAuC;EACvC,eAAe;AACjB;AACA;EACE,gBAAgB;EAChB,kBAAkB;EAClB,cAAc;EACd,kBAAkB;EAClB,yCAAyC;AAC3C;AACA;EACE,oBAAoB;EACpB,mBAAmB;EACnB,WAAW;EACX,kBAAkB;EAClB,wBAAwB;EACxB,0BAA0B;AAC5B;AACA;EACE,eAAe;EACf,eAAe;AACjB;AACA;EACE,YAAY;AACd;AACA;EACE,WAAW;EACX,YAAY;EACZ,eAAe;EACf,YAAY;EACZ,eAAe;EACf,kBAAkB;EAClB,YAAY;EACZ,wBAAwB;EACxB,iBAAiB;AACnB;AACA;EACE,WAAW;EACX,eAAe;EACf,iBAAiB;AACnB;AACA;EACE,WAAW;EACX,eAAe;AACjB;AACA;;EAEE,qBAAqB;EACrB,kBAAkB;EAClB,sBAAsB;AACxB;AACA;EACE,WAAW;AACb;AACA;EACE,YAAY;AACd;AACA;EACE,yBAAyB;AAC3B;AACA;EACE,mBAAmB;AACrB;AACA;EACE,eAAe;EACf,aAAa;EACb,eAAe;AACjB;AACA;EACE,YAAY;EACZ,eAAe;EACf,aAAa;AACf;AACA;EACE,iBAAiB;EACjB,cAAc;EACd,qBAAqB;EACrB,qBAAqB;EACrB,wBAAwB;AAC1B;AACA;EACE,cAAc;AAChB;AACA;EACE,cAAc;AAChB;AACA;EACE,cAAc;AAChB;AACA;EACE,eAAe;AACjB;AACA;EACE,YAAY;AACd;AACA;EACE,kBAAkB;EAClB,sBAAsB;EACtB,kBAAkB;AACpB;AACA;EACE,WAAW;EACX,0CAA0C;EAC1C,qBAAqB;AACvB;AACA;EACE,YAAY;EACZ,eAAe;AACjB;AACA;EACE,YAAY;EACZ,eAAe;EACf,eAAe;EACf,gBAAgB;EAChB,WAAW;EACX,aAAa;EACb,iBAAiB;EACjB,6BAA6B;EAC7B,kBAAkB;EAClB,cAAc;AAChB;AACA;EACE,WAAW;AACb;AACA;;EAEE,mBAAmB;AACrB;AACA;EACE,mBAAmB;AACrB;AACA;EACE,WAAW;AACb;AACA;EACE,eAAe;EACf,gBAAgB;AAClB;AACA;EACE,WAAW;EACX,gBAAgB;EAChB,eAAe;AACjB;AACA,oBAAoB;AACpB;EACE,kBAAkB;AACpB;AACA;EACE,UAAU;EACV,kBAAkB;EAClB,mBAAmB;EACnB,UAAU;AACZ;AACA;EACE,WAAW;EACX,YAAY;AACd;AACA;EACE,WAAW;EACX,kBAAkB;EAClB,qBAAqB;EACrB,wBAAwB;EACxB,iBAAiB;EACjB,sBAAsB;EACtB,kBAAkB;EAClB,sBAAsB;EACtB,UAAU;AACZ;AACA;EACE,WAAW;EACX,kBAAkB;EAClB,SAAS;EACT,QAAQ;EACR,UAAU;EACV,YAAY;EACZ,kBAAkB;EAClB,yBAAyB;EACzB,kBAAkB;EAClB,UAAU;EACV,yBAAyB;AAC3B;AACA;EACE,qBAAqB;EACrB,mBAAmB;AACrB;AACA;EACE,kBAAkB;AACpB;AACA;EACE,cAAc;EACd,YAAY;EACZ,gBAAgB;EAChB,gBAAgB;AAClB;AACA,iBAAiB;AACjB;EACE,gBAAgB;AAClB;AACA;;;EAGE,kBAAkB;AACpB;AACA;EACE,kBAAkB;AACpB;AACA;EACE,mBAAmB;EACnB,0BAA0B;AAC5B;AACA;EACE,qBAAqB;AACvB;AACA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,qBAAqB;AACvB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,kBAAkB;EAClB,gBAAgB;AAClB;AACA;EACE,mBAAmB;AACrB",
      "file": "styles.css",
      "sourcesContent": ["/* You can add global styles to this file, and also import other style files */\r\n@import \"~css/site.css\";\r\n", "body {\r\n  color: #566787;\r\n  background: #f5f5f5;\r\n  font-family: \"Varela Round\", sans-serif;\r\n  font-size: 13px;\r\n}\r\n.table-wrapper {\r\n  background: #fff;\r\n  padding: 20px 25px;\r\n  margin: 30px 0;\r\n  border-radius: 3px;\r\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);\r\n}\r\n.table-title {\r\n  padding-bottom: 15px;\r\n  background: #30700b;\r\n  color: #fff;\r\n  padding: 16px 30px;\r\n  margin: -20px -25px 10px;\r\n  border-radius: 3px 3px 0 0;\r\n}\r\n.table-title h2 {\r\n  margin: 5px 0 0;\r\n  font-size: 24px;\r\n}\r\n.table-title .btn-group {\r\n  float: right;\r\n}\r\n.table-title .btn {\r\n  color: #fff;\r\n  float: right;\r\n  font-size: 13px;\r\n  border: none;\r\n  min-width: 50px;\r\n  border-radius: 2px;\r\n  border: none;\r\n  outline: none !important;\r\n  margin-left: 10px;\r\n}\r\n.table-title .btn i {\r\n  float: left;\r\n  font-size: 21px;\r\n  margin-right: 5px;\r\n}\r\n.table-title .btn span {\r\n  float: left;\r\n  margin-top: 2px;\r\n}\r\ntable.table tr th,\r\ntable.table tr td {\r\n  border-color: #e9e9e9;\r\n  padding: 12px 15px;\r\n  vertical-align: middle;\r\n}\r\ntable.table tr th:first-child {\r\n  width: 60px;\r\n}\r\ntable.table tr th:last-child {\r\n  width: 100px;\r\n}\r\ntable.table-striped tbody tr:nth-of-type(odd) {\r\n  background-color: #fcfcfc;\r\n}\r\ntable.table-striped.table-hover tbody tr:hover {\r\n  background: #f5f5f5;\r\n}\r\ntable.table th i {\r\n  font-size: 13px;\r\n  margin: 0 5px;\r\n  cursor: pointer;\r\n}\r\ntable.table td:last-child i {\r\n  opacity: 0.9;\r\n  font-size: 22px;\r\n  margin: 0 5px;\r\n}\r\ntable.table td a {\r\n  font-weight: bold;\r\n  color: #566787;\r\n  display: inline-block;\r\n  text-decoration: none;\r\n  outline: none !important;\r\n}\r\ntable.table td a:hover {\r\n  color: #2196f3;\r\n}\r\ntable.table td a.edit {\r\n  color: #ffc107;\r\n}\r\ntable.table td a.delete {\r\n  color: #f44336;\r\n}\r\ntable.table td i {\r\n  font-size: 19px;\r\n}\r\ntable.table td {\r\n  width: 100px;\r\n}\r\ntable.table .avatar {\r\n  border-radius: 50%;\r\n  vertical-align: middle;\r\n  margin-right: 10px;\r\n}\r\n.btn-success {\r\n  color: #fff;\r\n  background-color: rgba(14, 137, 185, 0.87);\r\n  border-color: #4cae4c;\r\n}\r\n.pagination {\r\n  float: right;\r\n  margin: 0 0 5px;\r\n}\r\n.pagination li a {\r\n  border: none;\r\n  font-size: 13px;\r\n  min-width: 30px;\r\n  min-height: 30px;\r\n  color: #999;\r\n  margin: 0 2px;\r\n  line-height: 30px;\r\n  border-radius: 2px !important;\r\n  text-align: center;\r\n  padding: 0 6px;\r\n}\r\n.pagination li a:hover {\r\n  color: #666;\r\n}\r\n.pagination li.active a,\r\n.pagination li.active a.page-link {\r\n  background: #03a9f4;\r\n}\r\n.pagination li.active a:hover {\r\n  background: #0397d6;\r\n}\r\n.pagination li.disabled i {\r\n  color: #ccc;\r\n}\r\n.pagination li i {\r\n  font-size: 16px;\r\n  padding-top: 6px;\r\n}\r\n.hint-text {\r\n  float: left;\r\n  margin-top: 10px;\r\n  font-size: 13px;\r\n}\r\n/* Custom checkbox */\r\n.custom-checkbox {\r\n  position: relative;\r\n}\r\n.custom-checkbox input[type=\"checkbox\"] {\r\n  opacity: 0;\r\n  position: absolute;\r\n  margin: 5px 0 0 3px;\r\n  z-index: 9;\r\n}\r\n.custom-checkbox label:before {\r\n  width: 18px;\r\n  height: 18px;\r\n}\r\n.custom-checkbox label:before {\r\n  content: \"\";\r\n  margin-right: 10px;\r\n  display: inline-block;\r\n  vertical-align: text-top;\r\n  background: white;\r\n  border: 1px solid #bbb;\r\n  border-radius: 2px;\r\n  box-sizing: border-box;\r\n  z-index: 2;\r\n}\r\n.custom-checkbox input[type=\"checkbox\"]:checked + label:after {\r\n  content: \"\";\r\n  position: absolute;\r\n  left: 6px;\r\n  top: 3px;\r\n  width: 6px;\r\n  height: 11px;\r\n  border: solid #000;\r\n  border-width: 0 3px 3px 0;\r\n  transform: inherit;\r\n  z-index: 3;\r\n  transform: rotateZ(45deg);\r\n}\r\n.custom-checkbox input[type=\"checkbox\"]:checked + label:before {\r\n  border-color: #03a9f4;\r\n  background: #03a9f4;\r\n}\r\n.custom-checkbox input[type=\"checkbox\"]:checked + label:after {\r\n  border-color: #fff;\r\n}\r\n.custom-checkbox input[type=\"checkbox\"]:disabled + label:before {\r\n  color: #b8b8b8;\r\n  cursor: auto;\r\n  box-shadow: none;\r\n  background: #ddd;\r\n}\r\n/* Modal styles */\r\n.modal .modal-dialog {\r\n  max-width: 400px;\r\n}\r\n.modal .modal-header,\r\n.modal .modal-body,\r\n.modal .modal-footer {\r\n  padding: 20px 30px;\r\n}\r\n.modal .modal-content {\r\n  border-radius: 3px;\r\n}\r\n.modal .modal-footer {\r\n  background: #ecf0f1;\r\n  border-radius: 0 0 3px 3px;\r\n}\r\n.modal .modal-title {\r\n  display: inline-block;\r\n}\r\n.modal .form-control {\r\n  border-radius: 2px;\r\n  box-shadow: none;\r\n  border-color: #dddddd;\r\n}\r\n.modal textarea.form-control {\r\n  resize: vertical;\r\n}\r\n.modal .btn {\r\n  border-radius: 2px;\r\n  min-width: 100px;\r\n}\r\n.modal form label {\r\n  font-weight: normal;\r\n}\r\n"]
    }]); // Exports

    module.exports = exports;
    /***/
  },

  /***/
  "./node_modules/css-loader/dist/runtime/api.js":
  /*!*****************************************************!*\
    !*** ./node_modules/css-loader/dist/runtime/api.js ***!
    \*****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCssLoaderDistRuntimeApiJs(module, exports, __webpack_require__) {
    "use strict";
    /*
      MIT License http://www.opensource.org/licenses/mit-license.php
      Author Tobias Koppers @sokra
    */
    // css base code, injected by the css-loader
    // eslint-disable-next-line func-names

    module.exports = function (useSourceMap) {
      var list = []; // return the list of modules as css string

      list.toString = function toString() {
        return this.map(function (item) {
          var content = cssWithMappingToString(item, useSourceMap);

          if (item[2]) {
            return "@media ".concat(item[2], " {").concat(content, "}");
          }

          return content;
        }).join('');
      }; // import a list of modules into the list
      // eslint-disable-next-line func-names


      list.i = function (modules, mediaQuery, dedupe) {
        if (typeof modules === 'string') {
          // eslint-disable-next-line no-param-reassign
          modules = [[null, modules, '']];
        }

        var alreadyImportedModules = {};

        if (dedupe) {
          for (var i = 0; i < this.length; i++) {
            // eslint-disable-next-line prefer-destructuring
            var id = this[i][0];

            if (id != null) {
              alreadyImportedModules[id] = true;
            }
          }
        }

        for (var _i = 0; _i < modules.length; _i++) {
          var item = [].concat(modules[_i]);

          if (dedupe && alreadyImportedModules[item[0]]) {
            // eslint-disable-next-line no-continue
            continue;
          }

          if (mediaQuery) {
            if (!item[2]) {
              item[2] = mediaQuery;
            } else {
              item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
            }
          }

          list.push(item);
        }
      };

      return list;
    };

    function cssWithMappingToString(item, useSourceMap) {
      var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

      var cssMapping = item[3];

      if (!cssMapping) {
        return content;
      }

      if (useSourceMap && typeof btoa === 'function') {
        var sourceMapping = toComment(cssMapping);
        var sourceURLs = cssMapping.sources.map(function (source) {
          return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
        });
        return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
      }

      return [content].join('\n');
    } // Adapted from convert-source-map (MIT)


    function toComment(sourceMap) {
      // eslint-disable-next-line no-undef
      var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
      var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
      return "/*# ".concat(data, " */");
    }
    /***/

  },

  /***/
  "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
  /*!****************************************************************************!*\
    !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
    \****************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesStyleLoaderDistRuntimeInjectStylesIntoStyleTagJs(module, exports, __webpack_require__) {
    "use strict";

    var isOldIE = function isOldIE() {
      var memo;
      return function memorize() {
        if (typeof memo === 'undefined') {
          // Test for IE <= 9 as proposed by Browserhacks
          // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
          // Tests for existence of standard globals is to allow style-loader
          // to operate correctly into non-standard environments
          // @see https://github.com/webpack-contrib/style-loader/issues/177
          memo = Boolean(window && document && document.all && !window.atob);
        }

        return memo;
      };
    }();

    var getTarget = function getTarget() {
      var memo = {};
      return function memorize(target) {
        if (typeof memo[target] === 'undefined') {
          var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

          if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
            try {
              // This will throw an exception if access to iframe is blocked
              // due to cross-origin restrictions
              styleTarget = styleTarget.contentDocument.head;
            } catch (e) {
              // istanbul ignore next
              styleTarget = null;
            }
          }

          memo[target] = styleTarget;
        }

        return memo[target];
      };
    }();

    var stylesInDom = [];

    function getIndexByIdentifier(identifier) {
      var result = -1;

      for (var i = 0; i < stylesInDom.length; i++) {
        if (stylesInDom[i].identifier === identifier) {
          result = i;
          break;
        }
      }

      return result;
    }

    function modulesToDom(list, options) {
      var idCountMap = {};
      var identifiers = [];

      for (var i = 0; i < list.length; i++) {
        var item = list[i];
        var id = options.base ? item[0] + options.base : item[0];
        var count = idCountMap[id] || 0;
        var identifier = "".concat(id, " ").concat(count);
        idCountMap[id] = count + 1;
        var index = getIndexByIdentifier(identifier);
        var obj = {
          css: item[1],
          media: item[2],
          sourceMap: item[3]
        };

        if (index !== -1) {
          stylesInDom[index].references++;
          stylesInDom[index].updater(obj);
        } else {
          stylesInDom.push({
            identifier: identifier,
            updater: addStyle(obj, options),
            references: 1
          });
        }

        identifiers.push(identifier);
      }

      return identifiers;
    }

    function insertStyleElement(options) {
      var style = document.createElement('style');
      var attributes = options.attributes || {};

      if (typeof attributes.nonce === 'undefined') {
        var nonce = true ? __webpack_require__.nc : undefined;

        if (nonce) {
          attributes.nonce = nonce;
        }
      }

      Object.keys(attributes).forEach(function (key) {
        style.setAttribute(key, attributes[key]);
      });

      if (typeof options.insert === 'function') {
        options.insert(style);
      } else {
        var target = getTarget(options.insert || 'head');

        if (!target) {
          throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
        }

        target.appendChild(style);
      }

      return style;
    }

    function removeStyleElement(style) {
      // istanbul ignore if
      if (style.parentNode === null) {
        return false;
      }

      style.parentNode.removeChild(style);
    }
    /* istanbul ignore next  */


    var replaceText = function replaceText() {
      var textStore = [];
      return function replace(index, replacement) {
        textStore[index] = replacement;
        return textStore.filter(Boolean).join('\n');
      };
    }();

    function applyToSingletonTag(style, index, remove, obj) {
      var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

      /* istanbul ignore if  */

      if (style.styleSheet) {
        style.styleSheet.cssText = replaceText(index, css);
      } else {
        var cssNode = document.createTextNode(css);
        var childNodes = style.childNodes;

        if (childNodes[index]) {
          style.removeChild(childNodes[index]);
        }

        if (childNodes.length) {
          style.insertBefore(cssNode, childNodes[index]);
        } else {
          style.appendChild(cssNode);
        }
      }
    }

    function applyToTag(style, options, obj) {
      var css = obj.css;
      var media = obj.media;
      var sourceMap = obj.sourceMap;

      if (media) {
        style.setAttribute('media', media);
      } else {
        style.removeAttribute('media');
      }

      if (sourceMap && btoa) {
        css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
      } // For old IE

      /* istanbul ignore if  */


      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
        while (style.firstChild) {
          style.removeChild(style.firstChild);
        }

        style.appendChild(document.createTextNode(css));
      }
    }

    var singleton = null;
    var singletonCounter = 0;

    function addStyle(obj, options) {
      var style;
      var update;
      var remove;

      if (options.singleton) {
        var styleIndex = singletonCounter++;
        style = singleton || (singleton = insertStyleElement(options));
        update = applyToSingletonTag.bind(null, style, styleIndex, false);
        remove = applyToSingletonTag.bind(null, style, styleIndex, true);
      } else {
        style = insertStyleElement(options);
        update = applyToTag.bind(null, style, options);

        remove = function remove() {
          removeStyleElement(style);
        };
      }

      update(obj);
      return function updateStyle(newObj) {
        if (newObj) {
          if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
            return;
          }

          update(obj = newObj);
        } else {
          remove();
        }
      };
    }

    module.exports = function (list, options) {
      options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
      // tags it will allow on a page

      if (!options.singleton && typeof options.singleton !== 'boolean') {
        options.singleton = isOldIE();
      }

      list = list || [];
      var lastIdentifiers = modulesToDom(list, options);
      return function update(newList) {
        newList = newList || [];

        if (Object.prototype.toString.call(newList) !== '[object Array]') {
          return;
        }

        for (var i = 0; i < lastIdentifiers.length; i++) {
          var identifier = lastIdentifiers[i];
          var index = getIndexByIdentifier(identifier);
          stylesInDom[index].references--;
        }

        var newLastIdentifiers = modulesToDom(newList, options);

        for (var _i = 0; _i < lastIdentifiers.length; _i++) {
          var _identifier = lastIdentifiers[_i];

          var _index = getIndexByIdentifier(_identifier);

          if (stylesInDom[_index].references === 0) {
            stylesInDom[_index].updater();

            stylesInDom.splice(_index, 1);
          }
        }

        lastIdentifiers = newLastIdentifiers;
      };
    };
    /***/

  },

  /***/
  "./src/styles.css":
  /*!************************!*\
    !*** ./src/styles.css ***!
    \************************/

  /*! no static exports found */

  /***/
  function srcStylesCss(module, exports, __webpack_require__) {
    var api = __webpack_require__(
    /*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */
    "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");

    var content = __webpack_require__(
    /*! !../node_modules/css-loader/dist/cjs.js??ref--12-1!../node_modules/postcss-loader/src??embedded!./styles.css */
    "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/styles.css");

    content = content.__esModule ? content["default"] : content;

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    var options = {};
    options.insert = "head";
    options.singleton = false;
    var update = api(content, options);
    var exported = content.locals ? content.locals : {};
    module.exports = exported;
    /***/
  },

  /***/
  3:
  /*!******************************!*\
    !*** multi ./src/styles.css ***!
    \******************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\Prajapati.Kishor\Documents\Node-Handson\Docker-handson\mean-stack-application\client\src\styles.css */
    "./src/styles.css");
    /***/
  }
}, [[3, "runtime"]]]);
//# sourceMappingURL=styles-es5.js.map