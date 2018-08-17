/**
 * Created by Jay on 14-5-4.
 */
module.exports = {

<<<<<<< HEAD
    env:"localdev",

    host:"localhost",
    port:3000,

    compress:{
        api:false, //or false,  true -> use MsgPack,   false -> use json
    },

    model: {
        /* mongodb connection config
        db: {
            host:"127.0.0.1",
            port:27017,
            name:"weroll_app",
            option: {
                driver:"mongoose",  //or "native"
                server: {
                    reconnectTries: Number.MAX_VALUE,
                    poolSize: 5,
                    socketOptions: { keepAlive: 120 }
                }
            }
        },
         */
        /* redis connection config
        */
        redis: {
            host:"127.0.0.1",
            port:6379,
            prefix:{
                "*": "weroll_app_",
                common: "weroll_common_"
            },
            ttl:24 * 60 * 60,  //sec,
            pass:"",
            maxLockTime:2 * 60,  //sec
            releaseLockWhenStart: true
        }
    },

    session: {
        /* user access session config. enable redis first */
        secret:"magicFish@2018",
        onePointEnter:false,
        cookiePath:"/",
        cacheExpireTime:3 * 60,  //sec
        tokenExpireTime:24 * 60 * 60,  //sec
        cookieExpireTime:24 * 60 * 60 * 1000  //million sec
    },
    /* update service config */
    upload: {
=======
    //override vars
    $VARS:{
        env:"localdev"
>>>>>>> c4645f84d3602bd92962c36b78559e9e2ca37239
    },

    //override settings
    siteName:"weroll-mini-application"
};
