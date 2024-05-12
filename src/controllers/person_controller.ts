import { Request, Response } from "express";
import Helper, { msgHelper } from '../helpers/helper';
import PersonService from "../services/person_service";

const helper = new Helper();
const personSrvc = new PersonService();

class PersonController {

	public async getRecords(req: Request, res: Response) {
		let person_obj:any = await personSrvc.getAllPersons();
		return res.status(200).json({
			name: person_obj.length === 0 ? "InNoRecords" : "InReadOk",
			message: person_obj.length === 0 ? msgHelper.InNoRecords : msgHelper.InReadOk,
			data: person_obj
		});
	}

	public async getOneRecord(req: Request, res: Response) {
		let person_obj = await personSrvc.getPersonById(parseInt(req.params['id']));
		return res.status(200).json({
			name: !person_obj ? "InNoRecord" : "InReadOk",
			message: !person_obj ? msgHelper.InNoRecord : msgHelper.InReadOk,
			data: person_obj
		});
	}

	public async newRecord(req: Request, res: Response) {
		const { first_name, last_name, mail } = req.body;
		let person_obj = await personSrvc.createPerson({ first_name, last_name, mail });
		return res.status(201).json({ name: "InCreateOk", message: msgHelper.InCreateOk, data: person_obj });
	}

	public async updateRecord(req: Request, res: Response) {
		var { first_name, last_name, mail } = req.body;
		let person_obj = await personSrvc.updatePerson({ first_name, last_name, mail }, parseInt(req.params['id']));
		if (!person_obj)
			return res.status(200).json({ name: "InNoRecord", message: msgHelper.InNoRecord, data: person_obj });
		else return res.status(201).json({ name: "InUpdateOk", message: msgHelper.InUpdateOk, data: person_obj });
	}

	public async deleteRecord(req: Request, res: Response) {
		let deleted_register = await personSrvc.deletePerson(parseInt(req.params['id']));
		if (!deleted_register)
			return res.status(200).json({ errors: [{ name: "InNoRecord", message: msgHelper.InNoRecord, field: null, value: null }] });
		else return res.status(200).json({ name: "InDeleteOk", message: msgHelper.InDeleteOk, data: deleted_register });
	}

};
export default PersonController;
