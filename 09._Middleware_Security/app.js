import express from 'express';
const app = express();

import session from 'express-session';

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));

import { rateLimit } from 'express-rate-limit'

const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	limit: 50, // Limit each IP to 50 requests per `window` (here, per 15 minutes).
	standardHeaders: 'draft-7', // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
	// store: ... , // Redis, Memcached, etc. See below.
})

app.use(limiter)

const authRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 5,
	standardHeaders: 'draft-7',
  legacyHeaders: false
});

app.use('/auth', authRateLimiter);

/* function ipLogger(req, res, next) {
  console.log(req.ip);
  next();
}
app.use(ipLogger); */

import middlewareRouter from './routers/middlewareRouter.js';
app.use(middlewareRouter);

import authRouter from './routers/authRouter.js';
app.use(authRouter);

import sessionRouter from './routers/sessionRouter.js';
app.use(sessionRouter);

app.get("*", (req, res) => {
  res.status(404).send({ message: "Not Found" });
});

app.all("*", (req, res) => {
  res.status(404).send({ message: "Not found" });
});

const PORT = process.env.PORT ?? 8080
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});