import express, { json } from 'express';
import cors from 'cors';
import ROUTER from './routes';
import morgan from 'morgan';

const APP = express();

// Middlewares
APP.use( cors( { origin: true, optionsSuccessStatus: 200 } ) );
APP.use( morgan( 'dev' ) );
APP.use( json( { limit: '10mb' } ) );
APP.use( '/restapi/', ROUTER );

export default APP;
