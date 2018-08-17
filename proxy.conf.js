const PROXY_CONFIG = {
  "/": {
    "target": "http://0.0.0.0:8000",
    "secure": false,
    "changeOrigin": true,
  },

  "/service1c": {
    "target": "http://rn-rbs-test.samberi.com/hms/hs/",
    "secure": false,
    "bypass": function (req, res, proxyOptions) {
      //if (req.headers.accept.indexOf("html") !== -1) {
      //console.log("Skipping proxy for browser request.");
      //return "/index.html";
      //}
      req.headers["Authorization"] = "Basic SE1TOnF3ZTEyMw==";
      console.log(req)
    },

    "router": function (req) {
      try {
        var server = req.headers.cookie.match(/hms_service1c=([\w/:\-.]+);?/);
        if (server && server[1]) {
          console.log(req.url + " : " + server[1]);
          return server[1];
        }
      } catch (e) { }
    }
	},

};
module.exports = PROXY_CONFIG;
