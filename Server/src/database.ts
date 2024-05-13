import { Sequelize } from 'sequelize';
import config from './config';

export const sequelize = new Sequelize({
	database: config.db.name,
	username: config.db.user,
	password: config.db.pass,
	host: config.db.host,
	dialect: 'mysql',
	pool: {
		max: 5,
		min: 0,
		idle: 10000
	},
	dialectOptions: {
		dateStrings: true,
		charset: 'utf8'
	},
	timezone: '-06:00',
	logging: false
})
