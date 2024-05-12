import { Router } from 'express';
import { ErrorHandler as erHandler } from './helpers/error_handler';
import PersonController from './controllers/person_controller';

const Person = new PersonController();

const ROUTER = Router();

/** Persons Routes */
ROUTER.post( '/person', erHandler( Person.newRecord ) );
ROUTER.get( '/person', erHandler( Person.getRecords ) );
ROUTER.get( '/person/:id', erHandler( Person.getOneRecord ) );
ROUTER.put( '/person/:id', erHandler( Person.updateRecord ) );
ROUTER.delete( '/person/:id', erHandler( Person.deleteRecord ) );

export default ROUTER;
