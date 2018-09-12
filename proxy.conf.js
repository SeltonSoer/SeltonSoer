const PROXY_CONFIG = {
  "/": {
    "target": "http://10.21.3.29:8000",
    "secure": false,
    "changeOrigin": true,
  },

};
module.exports = PROXY_CONFIG;
