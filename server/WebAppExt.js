/**
 * Created by Jay on 2016/3/8.
 */

//var Session = require("weroll/model/Session");

exports.extend = function(App) {
    //no any session check
    /*
    App.handleUserSession = function(req, res, auth) {
        return new Promise(resolve => {
            const user = { isLogined:false };
            resolve(user);
        });
    };*/
<<<<<<< HEAD
=======

    //override App.handleUserSession for ignoring user session.
    App.handleUserSession = function(req, res, next, error, auth) {
        var user = {isLogined: false};
        next(0, user);
    };

    /* example codes to implement user session validation
    App.handleUserSession = function(req, res, next, error, auth) {
        var user = { isLogined:false };
        var userid = auth ? auth.userid : null;
        //user.isHack = auth && auth.hp && auth.hp == global.SETTING.hack.password;
        if (userid) {
            var token = auth ? auth.token : null;
            var tokentimestamp = Number(auth ? auth.tokentimestamp : 0);
            if (!token || !tokentimestamp || tokentimestamp <= 0) {
                //no cookies...
                next(0, user);
            } else {
                Session.getSharedInstance().check(userid, token, function(err, sess) {
                    if (err) {
                        error(err);
                    } else {
                        if (sess) {
                            user.isLogined = true;
                            user.id = userid;
                            user._id = userid;
                            user.userid = userid;
                            user.token = token;
                            user.tokentimestamp = tokentimestamp;
                            //parse user extra data
                            if (sess.extra) {
                                user.phone = extra[0];
                                user.nickname = extra[1];
                                user.gender = Number(extra[2]);
                                user.head = extra[3];
                            }
                            user.type = parseInt(sess.type);
                            next(1, user);
                        } else {
                            next(0, user);
                        }
                    }
                });
            }
        } else {
            next(0, user);
        }
    }
    */
>>>>>>> c4645f84d3602bd92962c36b78559e9e2ca37239
}