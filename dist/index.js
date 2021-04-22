/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/config.ts":
/*!***********************!*\
  !*** ./src/config.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.default = {\n    // using default postchain node REST API port\n    connectionUrl: 'http://localhost:7740',\n    // default blockchain identifier used for testing\n    blockchainRID: '839FB75EB03E97BDEF45C197E030CD5E38CF96E789BB05802F105ECE98AAC24A'\n};\n\n\n//# sourceURL=webpack://postchain-client-starter/./src/config.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\nvar postchain_wrapper_1 = __webpack_require__(/*! ./postchain-wrapper */ \"./src/postchain-wrapper.ts\");\nvar app = express_1.default();\nvar _a = process.env.PORT, PORT = _a === void 0 ? 3000 : _a;\napp.use(express_1.default.urlencoded({ extended: true }));\napp.use(express_1.default.json());\napp.get('/', function (req, res) {\n    res.send({\n        message: 'hello world',\n    });\n});\napp.post('/cities', function (req, res) {\n    var wrapper = new postchain_wrapper_1.PostchainWrapper();\n    var user = wrapper.getRandomKeyPair();\n    wrapper.insertCity(user, req.body.name)\n        .then(function (result) {\n        console.log(result);\n        res.status(200).json({ result: result });\n    })\n        .catch(function (error) { return res.status(400).send(error); });\n});\napp.get('/cities', function (req, res) {\n    var wrapper = new postchain_wrapper_1.PostchainWrapper();\n    wrapper.getAllCities()\n        .then(function (result) { return res.status(200).json({ result: result }); })\n        .catch(function (error) { return res.status(400).send(error); });\n});\napp.get('/cities/:name', function (req, res) {\n    var wrapper = new postchain_wrapper_1.PostchainWrapper();\n    wrapper.getOneCity(req.params.name)\n        .then(function (result) {\n        console.log('result:::: ', result);\n        res.status(200).json({ result: result });\n    })\n        .catch(function (error) { return res.status(400).send(error); });\n});\napp.listen(PORT, function () {\n    console.log('server started at http://localhost:' + PORT);\n});\n\n\n//# sourceURL=webpack://postchain-client-starter/./src/index.ts?");

/***/ }),

/***/ "./src/postchain-wrapper.ts":
/*!**********************************!*\
  !*** ./src/postchain-wrapper.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.PostchainWrapper = void 0;\nvar pcl = __webpack_require__(/*! postchain-client */ \"postchain-client\");\nvar config_1 = __importDefault(__webpack_require__(/*! ./config */ \"./src/config.ts\"));\nvar node_api_url = config_1.default.connectionUrl; // using default postchain node REST API port\nvar blockchainRID = config_1.default.blockchainRID;\n/**\n * TODO:\n * - learn how to return complex object\n * - learn how to handle the postchain responses\n */\nvar PostchainWrapper = /** @class */ (function () {\n    function PostchainWrapper() {\n        this._restClient = pcl.restClient.createRestClient(node_api_url, blockchainRID, 5);\n        this._gtx = pcl.gtxClient.createClient(this._restClient, Buffer.from(blockchainRID, 'hex'), []);\n    }\n    PostchainWrapper.prototype.getRandomKeyPair = function () {\n        return pcl.util.makeKeyPair();\n    };\n    PostchainWrapper.prototype.insertCity = function (user, name) {\n        var tx = this._gtx.newTransaction([user.pubKey]);\n        tx.addOperation('insert_city', name);\n        tx.sign(user.privKey, user.pubKey);\n        return tx.postAndWaitConfirmation();\n    };\n    PostchainWrapper.prototype.getAllCities = function () {\n        return this._gtx.query('get_all_cities', {});\n    };\n    PostchainWrapper.prototype.getOneCity = function (name) {\n        return this._gtx.query('get_one_city', { name: name });\n    };\n    return PostchainWrapper;\n}());\nexports.PostchainWrapper = PostchainWrapper;\n\n\n//# sourceURL=webpack://postchain-client-starter/./src/postchain-wrapper.ts?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");;

/***/ }),

/***/ "postchain-client":
/*!***********************************!*\
  !*** external "postchain-client" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("postchain-client");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;