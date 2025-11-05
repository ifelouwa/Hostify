// Handles requests to endpoints that do not exist
export const notFound = (req, res, next) => {
  res.status(404).json({
    error: "Endpoint not found",
    method: req.method,
    url: req.originalUrl,
    message: `The route you are trying to access (${req.method} ${req.originalUrl}) does not exist. Please check your API documentation or verify the URL and HTTP method.`,
    suggestion: "Make sure the route is correctly defined and your request matches the expected endpoint and HTTP method."
  });
};

// Handles server-side errors
export const errorHandler = (err, req, res, next) => {
  console.error("Server Error:", err.stack);

  res.status(err.status || 500).json({
    error: err.message || "Internal Server Error",
    method: req.method,
    url: req.originalUrl,
    message: `An error occurred while processing your request (${req.method} ${req.originalUrl}).`,
    suggestion: err.help || "Check your request body, query parameters, and ensure all required data is provided. Inspect server logs for more details."
  });
};
