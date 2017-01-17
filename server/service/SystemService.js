/**
 * Created by Jay on 4/1/15.
 */

exports.config = {
    name: "system",
    enabled: true,
    security: {
        //@now 获得服务器当前时间 @format 时间格式,1 - 时间戳,2 - 字符串
        "now":{ needLogin:false, checkParams:{ format:"int" } },
        //@echo 打个招呼 @name 名字 @ip 是否返回客户端的IP地址
        "echo":{ needLogin:false, checkParams:{ name:"string" }, optionalParams:{ ip:"boolean" } }
    }
};

var CODES = require("weroll/ErrorCodes");

exports.now = function(req, res, params) {
    var format = params.format;
    if (format == 1 || format == 2) {
        var now = new Date();
        if (format == 1) {
            now = now.getTime();
        } else {
            now = now.toString();
        }
        res.sayOK({ time:now });
    } else {
        res.sayError(CODES.REQUEST_PARAMS_INVALID, "invalid time format");
    }
}

exports.echo = async function(req, res, params) {
    var result = { msg:`Hi, ${params.name}` };
    if (params.ip) {
        result.msg += `, your IP address is: ${req._clientIP}`;
    }
    res.sayOK(result);
}


