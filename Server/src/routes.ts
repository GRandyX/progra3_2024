import { Router } from 'express';
import { ErrorHandler as erHandler } from './helpers/error_handler';


import PersonController from './controllers/person_controller';
import TeamController from './controllers/team_controller';
import FootballGameController from './controllers/footballgame_controller';

const Person = new PersonController();
const Team = new TeamController();
const Footg = new FootballGameController();

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


/** Football Game Routes */
ROUTER.post( '/footgame', erHandler( Footg.newRecord ) );
ROUTER.get( '/footgame', erHandler( Footg.getRecords ) );
ROUTER.get( '/footgame/:id', erHandler( Footg.getOneRecord ) );
ROUTER.put( '/footgame/:id', erHandler( Footg.updateRecord ) );
ROUTER.delete( '/footgame/:id', erHandler( Footg.deleteRecord ) );


export default ROUTER;
