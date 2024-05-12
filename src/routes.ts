import { Router } from 'express';
import { ErrorHandler as erHandler } from './helpers/error_handler';

import PersonController from './controllers/person_controller';
import TeamController from './controllers/team_controller';

const Person = new PersonController();
const Team = new TeamController();

const ROUTER = Router();


/** Persons Routes */
ROUTER.post( '/person', erHandler( Person.newRecord ) );
ROUTER.get( '/person', erHandler( Person.getRecords ) );
ROUTER.get( '/person/:id', erHandler( Person.getOneRecord ) );
ROUTER.put( '/person/:id', erHandler( Person.updateRecord ) );
ROUTER.delete( '/person/:id', erHandler( Person.deleteRecord ) );


/** Teams Routes */
ROUTER.post( '/team', erHandler( Team.newRecord ) );
ROUTER.get( '/team', erHandler( Team.getRecords ) );
ROUTER.get( '/team/:id', erHandler( Team.getOneRecord ) );
ROUTER.put( '/team/:id', erHandler( Team.updateRecord ) );
ROUTER.delete( '/team/:id', erHandler( Team.deleteRecord ) );

export default ROUTER;
