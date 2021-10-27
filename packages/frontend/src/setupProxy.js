const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(createProxyMiddleware('/graphql', { target: 'http://localhost:4000' }));
  app.use(createProxyMiddleware('/subscriptions', { target: 'ws://localhost:4000', ws: true }));
};
