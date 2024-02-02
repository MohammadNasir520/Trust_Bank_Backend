"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_status_1 = __importDefault(require("http-status"));
const globalErrorHandler_1 = __importDefault(require("./app/middlewares/globalErrorHandler"));
const routes_1 = __importDefault(require("./app/routes"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
// cors bolck handle
// app.use(cors({ origin: 'livelink here', credentials: true }));
// app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use((0, cors_1.default)({
    origin: ['http://localhost:3000', 'https://trust-banking.vercel.app/'],
    credentials: true,
}));
// app.use(cors({ origin: baseUrl(), credentials: true }));
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
app.use((0, cookie_parser_1.default)());
//ejs view engine
app.set('view engine', 'ejs');
app.get('/verifyEmailForm', async (req, res) => {
    res.render('hello');
});
//parser
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use('/api/v1', routes_1.default);
//global error handler
app.use(globalErrorHandler_1.default);
app.get('/', async (req, res) => {
    res.send('  server is running');
});
//handle not found
app.use((req, res, next) => {
    res.status(http_status_1.default.NOT_FOUND).json({
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
exports.default = app;
