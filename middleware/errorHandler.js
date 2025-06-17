// This middleware handles errors in the application.
// It logs the error stack to the console and sends a 500 response with an error message.

module.exports = (err, req, res, next) => {
  console.error('Error:',err.message);
  res.status(500).json({ error: 'Something went wrong!' });
};
