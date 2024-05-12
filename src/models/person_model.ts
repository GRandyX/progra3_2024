import Sequelize from 'sequelize';
import { sequelize } from '../database';
import { msgHelper } from '../helpers/helper';


class PersonModel extends Sequelize.Model {}
	PersonModel.init(
		{
			person_id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
			first_name: { type: Sequelize.CHAR(50), unique: true, allowNull: false,
				validate: {
					notNull: { msg: msgHelper.ErRequiredField },
					notEmpty: { msg: msgHelper.ErRequiredField }
				}
			},
			last_name: { type: Sequelize.CHAR(50), unique: true, allowNull: false,
				validate: {
					notNull: { msg: msgHelper.ErRequiredField },
					notEmpty: { msg: msgHelper.ErRequiredField }
				}
			},
			mail: { type: Sequelize.CHAR(100),
				validate: {
					isEmail: { msg: msgHelper.ErFormatField }
				}
			},
			active: { type: Sequelize.BOOLEAN, defaultValue: true },
			write_at: Sequelize.DATE
		},
		{
			sequelize,
			modelName: "Person",
			tableName: "pytgrp5_person",
			timestamps: false
		}
	);
export default PersonModel;
