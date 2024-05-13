import Sequelize from 'sequelize';
import { sequelize } from '../database';
import { msgHelper } from '../helpers/helper';


class TeamModel extends Sequelize.Model {}
	TeamModel.init(
		{
			team_id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
			code: Sequelize.CHAR(10),
			name: { type: Sequelize.CHAR(50), unique: true, allowNull: false,
				validate: {
					notNull: { msg: msgHelper.ErRequiredField },
					notEmpty: { msg: msgHelper.ErRequiredField }
				}
			},
			active: { type: Sequelize.BOOLEAN, defaultValue: true },
			write_at: Sequelize.DATE
		},
		{
			sequelize,
			modelName: "Team",
			tableName: "pytgrp5_team",
			timestamps: false
		}
	);
export default TeamModel;
