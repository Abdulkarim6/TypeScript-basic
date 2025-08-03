"use strict";
var ResponseStatus;
(function (ResponseStatus) {
    ResponseStatus[ResponseStatus["SUCCESS"] = 0] = "SUCCESS";
    ResponseStatus[ResponseStatus["FAILUR"] = 1] = "FAILUR";
    ResponseStatus[ResponseStatus["FORBIDDEN"] = 2] = "FORBIDDEN";
    ResponseStatus[ResponseStatus["UNOUTHORIZED"] = 3] = "UNOUTHORIZED";
})(ResponseStatus || (ResponseStatus = {}));
//can be pass any type data with specifiedly telling
const response2 = {
    status: 200,
    responseResult: ResponseStatus.FORBIDDEN,
    data2: "success"
};
console.log(response2);
