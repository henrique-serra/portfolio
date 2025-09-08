import 'dotenv/config';
import express from 'express';
import url from 'url';
import path from 'path';
import morgan from 'morgan';
import { index, about, notFound } from './controllers/controller.js';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

// register view engine
app.set('view engine', 'ejs');

// middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

// routes
app.get('/', index);

app.get('/about', about);

// 404 page
app.use(notFound);

// server
app.listen(port, () => console.log('server running at port ', port))