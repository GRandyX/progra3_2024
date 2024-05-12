import Sequelize from 'sequelize';
import { sequelize } from '../database';
import { msgHelper } from '../helpers/helper';


class FootballGameModel extends Sequelize.Model {}
	FootballGameModel.init(
		{
			fgame_id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
			code: Sequelize.CHAR(10),
			location: { type: Sequelize.CHAR(75), unique: true, allowNull: false,
				validate: {
					notNull: { msg: msgHelper.ErRequiredField },
					notEmpty: { msg: msgHelper.ErRequiredField }
				}
			},
			local_team: { type: Sequelize.INTEGER, unique: true, allowNull: false,
				validate: {
					notNull: { msg: msgHelper.ErRequiredField },
					notEmpty: { msg: msgHelper.ErRequiredField }
				}
			},
			visit_team: { type: Sequelize.INTEGER, unique: true, allowNull: false,
				validate: {
					notNull: { msg: msgHelper.ErRequiredField },
					notEmpty: { msg: msgHelper.ErRequiredField }
				}
			},
			local_goal: Sequelize.INTEGER,
			visit_goal: Sequelize.INTEGER,
			fgame_best_player: Sequelize.CHAR(50),
			first_goal: Sequelize.CHAR(50),
			active: { type: Sequelize.BOOLEAN, defaultValue: true },
			write_at: Sequelize.DATE
		},
		{
			sequelize,
			modelName: "FootballGame",
			tableName: "pytgrp5_football_game",
			timestamps: false
		}
	);
export default FootballGameModel;
