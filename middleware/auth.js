// This middleware checks for a valid API key in the request headers
// and returns a 401 Unauthorized response if the key is invalid.

module.exports = (req, res, next) => {
  const apiKey = req.headers['x-api-key'];
  if (apiKey !== 'mysecretkey') {
    return res.status(401).json({ error: 'Unauthorized: Invalid API Key' });
  }
  next();
};
