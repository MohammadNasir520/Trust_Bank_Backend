import cors from 'cors';
import express, { Application, NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import routes from './app/routes';

import cookieParser from 'cookie-parser';
import { findLastAccountId } from './app/modules/account/account.utils';
import { baseUrl } from './utils/getBaseUrl';

const app: Application = express();

// cors bolck handle
// app.use(cors({ origin: 'livelink here', credentials: true }));
// app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(cors({ origin: baseUrl(), credentials: true }));

// app.use((req, res, next) => {
//   // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
//   res.setHeader(
//     'Access-Control-Allow-Origin',
//     'https://trust-bank-backend.vercel.app/'
//   );
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//   res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//   res.setHeader('Access-Control-Allow-Credentials', 'true');
//   next();
// });

app.use(cookieParser());

//ejs view engine
app.set('view engine', 'ejs');

app.get('/verifyEmailForm', async (req, res) => {
  res.render('hello');
});
findLastAccountId();
//parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1', routes);

// console.log('new id', createNewIdNumber());
// console.log('generatedId', generateNewId('S-00001'));

//global error handler
app.use(globalErrorHandler);

app.get('/', async (req, res) => {
  res.send('  server is running');
});

//handle not found
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'Not Found',
    errorMessages: [
      {
        path: req.originalUrl,
        message: 'API Not Found',
      },
    ],
  });
  next();
});

export default app;
