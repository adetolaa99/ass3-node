function authenticate(req, res, next) {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const [username, password] = Buffer.from(authHeader.split("")[1], "base64")
      .toString()
      .split(":");
    console.log(`Username: ${username}, Password: ${password}`);
    next();
  } else {
    res.writeHead(401);
    res.end("Unauthorized");
  }
}

module.exports = { authenticate };
