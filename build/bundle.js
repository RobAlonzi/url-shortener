/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading wasm modules
/******/ 	var installedWasmModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// object with all compiled WebAssembly.Modules
/******/ 	__webpack_require__.w = {};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/server/config/config.json":
/*!***************************************!*\
  !*** ./src/server/config/config.json ***!
  \***************************************/
/*! exports provided: production, test, development, default */
/***/ (function(module) {

eval("module.exports = {\"production\":{\"DB_HOST\":\"ds121599.mlab.com:21599\",\"DB_NAME\":\"url-shortener\",\"DB_USER\":\"urlAdmin\",\"DB_PASS\":\"dealtap\",\"WEB_HOST\":\"http://localhost:3000\"},\"test\":{\"DB_HOST\":\"ds121599.mlab.com:21599\",\"DB_NAME\":\"url-shortener\",\"DB_USER\":\"urlAdmin\",\"DB_PASS\":\"dealtap\",\"WEB_HOST\":\"http://localhost:3000\"},\"development\":{\"DB_HOST\":\"ds121599.mlab.com:21599\",\"DB_NAME\":\"url-shortener\",\"DB_USER\":\"urlAdmin\",\"DB_PASS\":\"dealtap\",\"WEB_HOST\":\"http://localhost:3000\"}};\n\n//# sourceURL=webpack:///./src/server/config/config.json?");

/***/ }),

/***/ "./src/server/config/index.js":
/*!************************************!*\
  !*** ./src/server/config/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar env = \"development\" || \"development\";\nconsole.log('env **********', env);\n\nif (env === \"development\" || env === \"test\" || env === \"production\") {\n\tvar config = __webpack_require__(/*! ./config.json */ \"./src/server/config/config.json\");\n\tvar envConfig = config[env];\n\n\tObject.keys(envConfig).forEach(function (key) {\n\t\tprocess.env[key] = envConfig[key];\n\t});\n}\n\n//# sourceURL=webpack:///./src/server/config/index.js?");

/***/ }),

/***/ "./src/server/helpers/shortener.js":
/*!*****************************************!*\
  !*** ./src/server/helpers/shortener.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar alphabet = \"123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ\";\nvar base = alphabet.length; // base is the length of the alphabet (58 in this case)\n\nvar encode = function encode(num) {\n\tvar encoded = \"\";\n\n\twhile (num) {\n\t\tvar remainder = num % base;\n\t\tnum = Math.floor(num / base);\n\t\tencoded = alphabet[remainder].toString() + encoded;\n\t}\n\n\treturn encoded;\n};\n\nvar decode = function decode(str) {\n\tvar decoded = 0;\n\n\twhile (str) {\n\t\tvar index = alphabet.indexOf(str[0]);\n\t\tvar power = str.length - 1;\n\t\tdecoded += index * Math.pow(base, power);\n\t\tstr = str.substring(1);\n\t}\n\n\treturn decoded;\n};\n\nmodule.exports = {\n\tencode: encode,\n\tdecode: decode\n};\n\n//# sourceURL=webpack:///./src/server/helpers/shortener.js?");

/***/ }),

/***/ "./src/server/index.js":
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__dirname) {\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nvar _bodyParser = __webpack_require__(/*! body-parser */ \"body-parser\");\n\nvar _bodyParser2 = _interopRequireDefault(_bodyParser);\n\nvar _deviceDetector = __webpack_require__(/*! device-detector */ \"device-detector\");\n\nvar _shortener = __webpack_require__(/*! ./helpers/shortener */ \"./src/server/helpers/shortener.js\");\n\nvar _shortener2 = _interopRequireDefault(_shortener);\n\nvar _models = __webpack_require__(/*! ./models */ \"./src/server/models/index.js\");\n\nvar _models2 = _interopRequireDefault(_models);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar path = __webpack_require__(/*! path */ \"path\");\n\n// Custom Files\n__webpack_require__(/*! ./config */ \"./src/server/config/index.js\");\n\n\n// Mongoose Models\nvar Counter = _mongoose2.default.model(\"Counter\");\nvar URL = _mongoose2.default.model(\"Url\");\nvar Visitor = _mongoose2.default.model(\"Visitor\");\n\n// Mongodb connection\nvar MONGO_URI = \"mongodb://\" + process.env.DB_USER + \":\" + process.env.DB_PASS + \"@\" + process.env.DB_HOST + \"/\" + process.env.DB_NAME;\nif (!MONGO_URI) {\n  throw new Error('You must provide a Mongo URI');\n}\n\n// Mongoose setup\n_mongoose2.default.Promise = global.Promise;\n_mongoose2.default.connect(MONGO_URI).then(function () {\n  return console.log(\"Connected to MongoDB instance: \" + MONGO_URI);\n}, function (err) {\n  return console.log('Error connecting to MongoDB:', error);\n});\n\nvar dirname = path.resolve(\"./\");\n\n// Express Setup\nvar app = (0, _express2.default)();\napp.use(_express2.default.static('public'));\napp.use(_bodyParser2.default.json());\napp.use(_bodyParser2.default.urlencoded({ extended: true }));\n\napp.get('/u/', function (req, res) {\n  // route to create and return a shortened URL given a long URL\n\n  URL.find({}).sort({ _id: \"desc\" }).exec(function (err, docs) {\n\n    if (err) {\n      // Send Error code\n      console.log(err);\n    }\n\n    res.send(docs);\n  });\n});\n\n// Get details about a URL id\napp.get('/u/:id/details', function (req, res) {\n  // Get the id\n  var id = req.params.id;\n\n  // Check our DB for the ID, also populate the virtual visitors collection\n  URL.findOne({ _id: id }).populate(\"visitors\").exec(function (err, doc) {\n\n    if (err) {\n      // Send Error code\n      console.log(err);\n    }\n\n    // Convert to JS Object so we can add the short url to the return object\n    var result = doc.toObject();\n    result.shortUrl = process.env.WEB_HOST + \"/u/\" + _shortener2.default.encode(doc._id);\n    // Send it!\n    res.send(result);\n  });\n});\n\n// Redirect any '/u/' URL that comes our way\napp.get('/u/:encoded_id', function (req, res) {\n\n  // Get the encoded id, and decode it\n  var encodedId = req.params.encoded_id;\n  var id = _shortener2.default.decode(encodedId);\n\n  // Check our DB for the ID \n  URL.findOneAndUpdate({ _id: id }, { $inc: { count: 1 } }, function (err, doc) {\n\n    // We have a url with that id\n    if (doc) {\n\n      // Get info about our visitor\n      var visitorDevice = (0, _deviceDetector.parse)(req.headers['user-agent']);\n\n      // Save this visitor \n      new Visitor({\n        url: id,\n        ipAddress: req.ip,\n        deviceType: visitorDevice.type,\n        browser: visitorDevice.browser,\n        engine: visitorDevice.engine,\n        browserVersion: visitorDevice.version,\n        os: visitorDevice.os,\n        userAgent: visitorDevice.userAgent\n      }).save();\n\n      // Redirect them to where they want to go, add http:// to the front if needed\n      var redirect = !/^(?:f|ht)tps?\\:\\/\\//.test(doc.url) ? \"http://\" + doc.url : doc.url;\n      res.redirect(redirect);\n\n      // Could not find this redirect, let's send them to the home page\n    } else {\n      res.redirect(process.env.WEB_HOST);\n    }\n  });\n});\n\n// Route to create and return a shortened URL given a long URL\napp.post('/api/shorten', function (req, res) {\n  var result = void 0,\n      url = req.body.url;\n\n  // If it's not a valid URL, send an error back\n  if (!/^(?:http(s)?:\\/\\/)?[\\w.-]+(?:\\.[\\w\\.-]+)+[\\w\\-\\._~:/?#[\\]@!\\$&'\\(\\)\\*\\+,;=.]+$/.test(url)) {\n    res.status(400);\n    res.send(\"Please enter a valid URL!\");\n  } else {\n    new URL({ url: url }).save(function (err, newUrl) {\n\n      // Error creating document, notify user\n      if (err) {\n        res.status(400);\n        res.send(\"Something went wrong, please try again!\");\n      }\n\n      // Convert to JS Object so we can add the short url to the return object\n      result = newUrl.toObject();\n      result.shortUrl = process.env.WEB_HOST + \"/u/\" + _shortener2.default.encode(newUrl._id);\n      // Send it!\n      res.send(result);\n    });\n  }\n});\n\n// Catch all endpoint for React SPA\napp.get('*', function (req, res) {\n  // Send the compiled HTML file\n  res.sendFile('public/index.html', { root: __dirname });\n});\n\n// Start\napp.listen(3000, function () {\n  console.log('Listening on Port 3000');\n});\n\nmodule.exports.app = app;\n/* WEBPACK VAR INJECTION */}.call(this, \"/\"))\n\n//# sourceURL=webpack:///./src/server/index.js?");

/***/ }),

/***/ "./src/server/models/counter.js":
/*!**************************************!*\
  !*** ./src/server/models/counter.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar CounterSchema = new _mongoose.Schema({\n\t_id: { type: String, required: true },\n\tseq: { type: Number, default: 0 }\n});\n\n_mongoose2.default.model('Counter', CounterSchema);\n\n//# sourceURL=webpack:///./src/server/models/counter.js?");

/***/ }),

/***/ "./src/server/models/index.js":
/*!************************************!*\
  !*** ./src/server/models/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ./counter */ \"./src/server/models/counter.js\");\n__webpack_require__(/*! ./url */ \"./src/server/models/url.js\");\n__webpack_require__(/*! ./visitor */ \"./src/server/models/visitor.js\");\n\n//# sourceURL=webpack:///./src/server/models/index.js?");

/***/ }),

/***/ "./src/server/models/url.js":
/*!**********************************!*\
  !*** ./src/server/models/url.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nvar _moment = __webpack_require__(/*! moment */ \"moment\");\n\nvar _moment2 = _interopRequireDefault(_moment);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Counter = _mongoose2.default.model(\"Counter\");\n\nvar UrlSchema = new _mongoose.Schema({\n\t_id: { type: Number },\n\tcreated: { type: Date },\n\turl: { type: String },\n\tcount: { type: Number }\n}, { toObject: { virtuals: true } });\n\nUrlSchema.virtual(\"visitors\", {\n\tref: \"Visitor\",\n\tlocalField: \"_id\",\n\tforeignField: \"url\"\n});\n\n// Before creating a new URL, increment the counter \nUrlSchema.pre('save', function (next) {\n\tvar doc = this;\n\n\tCounter.findByIdAndUpdate({ _id: \"count\" }, { $inc: { seq: 1 } }, function (err, counter) {\n\n\t\tif (err) return next(error);\n\n\t\t// Setting values\t\n\t\tdoc._id = counter.seq;\n\t\tdoc.created = (0, _moment2.default)();\n\t\tdoc.count = 0;\n\n\t\tnext();\n\t});\n});\n\n_mongoose2.default.model('Url', UrlSchema);\n\n//# sourceURL=webpack:///./src/server/models/url.js?");

/***/ }),

/***/ "./src/server/models/visitor.js":
/*!**************************************!*\
  !*** ./src/server/models/visitor.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nvar _moment = __webpack_require__(/*! moment */ \"moment\");\n\nvar _moment2 = _interopRequireDefault(_moment);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar VisitorSchema = new _mongoose.Schema({\n\turl: { type: Number },\n\tbrowser: { type: String },\n\tbrowserVersion: { type: String },\n\tdate: { type: Date, default: _moment2.default },\n\tdeviceType: { type: String },\n\tengine: { type: String },\n\tipAddress: { type: String },\n\tos: { type: String },\n\tuserAgent: { type: String }\n});\n\n_mongoose2.default.model('Visitor', VisitorSchema);\n\n//# sourceURL=webpack:///./src/server/models/visitor.js?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "device-detector":
/*!**********************************!*\
  !*** external "device-detector" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"device-detector\");\n\n//# sourceURL=webpack:///external_%22device-detector%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"moment\");\n\n//# sourceURL=webpack:///external_%22moment%22?");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");\n\n//# sourceURL=webpack:///external_%22mongoose%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ })

/******/ });