"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformUnwindPositions = exports.getUnwindPositions = exports.getOpenPositions = void 0;
var graphql_request_1 = require("graphql-request");
var queries_1 = require("./queries");
var parseSubgraphUrl = function (value) {
    if (typeof value === "string")
        return { url: value };
    else
        return value;
};
var requestAllWithStep = function (_a) { return __awaiter(void 0, [_a], void 0, function (_b) {
    var skip, results, partialResult, array;
    var url = _b.url, step = _b.step, document = _b.document, variables = _b.variables, extractArray = _b.extractArray;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                skip = 0;
                results = [];
                _c.label = 1;
            case 1:
                if (!true) return [3 /*break*/, 3];
                return [4 /*yield*/, (0, graphql_request_1.request)(__assign(__assign({}, parseSubgraphUrl(url)), { document: document, variables: __assign(__assign({}, variables), { first: step, skip: skip }) }))];
            case 2:
                partialResult = _c.sent();
                array = extractArray(partialResult);
                results.push.apply(results, array);
                // break if we don't fetch more than step
                if (array.length < step)
                    return [3 /*break*/, 3];
                skip += step;
                return [3 /*break*/, 1];
            case 3: return [2 /*return*/, results];
        }
    });
}); };
var getOpenPositions = function (_a) { return __awaiter(void 0, [_a], void 0, function (_b) {
    var url = _b.url, account = _b.account, first = _b.first;
    return __generator(this, function (_c) {
        return [2 /*return*/, requestAllWithStep({
                url: url,
                document: queries_1.OpenPositionsQuery,
                step: first !== null && first !== void 0 ? first : 1000,
                extractArray: function (result) { var _a, _b; return (_b = (_a = result === null || result === void 0 ? void 0 : result.account) === null || _a === void 0 ? void 0 : _a.positions) !== null && _b !== void 0 ? _b : []; },
                variables: {
                    account: account,
                },
            })];
    });
}); };
exports.getOpenPositions = getOpenPositions;
var getUnwindPositions = function (_a) { return __awaiter(void 0, [_a], void 0, function (_b) {
    var url = _b.url, account = _b.account, first = _b.first, skip = _b.skip;
    return __generator(this, function (_c) {
        return [2 /*return*/, requestAllWithStep({
                url: url,
                document: queries_1.UnwindPositionsQuery,
                step: first !== null && first !== void 0 ? first : 1000,
                extractArray: function (result) { var _a, _b; return (_b = (_a = result === null || result === void 0 ? void 0 : result.account) === null || _a === void 0 ? void 0 : _a.unwinds) !== null && _b !== void 0 ? _b : []; },
                variables: {
                    account: account,
                },
            })];
    });
}); };
exports.getUnwindPositions = getUnwindPositions;
var transformUnwindPositions = function (unwindPositions) {
    return unwindPositions.map(function (unwind) {
        var _a;
        return {
            testField: (_a = unwind.position) === null || _a === void 0 ? void 0 : _a.market,
            newFieldName1: unwind.currentOi, // Rename the field
            newFieldName2: formatValue(unwind.timestamp), // Format the value
            // Add other field transformations here
        };
    });
};
exports.transformUnwindPositions = transformUnwindPositions;
var formatValue = function (value) {
    // Implement your formatting logic here
    // For example, converting a number to a fixed decimal string
    if (typeof value === "number") {
        // return value as a date string
        return new Date(value).toISOString();
    }
    return value;
};
