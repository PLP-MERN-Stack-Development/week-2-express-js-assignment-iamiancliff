// This middleware logs the request method and URL to the console.

module.exports = (req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`);
  next();
};
