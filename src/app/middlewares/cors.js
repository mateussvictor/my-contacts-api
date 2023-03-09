module.exports = (request, response, next) => {
  const allowedOrigins = ['http://localhost:3000'];

  const origin = request.header('origin');
  const isAllowed = allowedOrigins.includes(origin);

  if (isAllowed) {
    response.setHeader('Access-Control-Allow-Origin', origin);
    response.setHeader('Access-Control-Allow-Methods', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');
    response.setHeader('Access-Control-Max-Age', '10');
  }

  next();
};
