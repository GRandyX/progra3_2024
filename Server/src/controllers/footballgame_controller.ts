import { Request, Response } from "express";
import Helper, { msgHelper } from '../helpers/helper';
import FootballGameService from "../services/footballgame_service";

const helper = new Helper();
const footgSrvc = new FootballGameService();

class TeamController {

	public async getRecords(req: Request, res: Response) {
		let record_obj:any = await footgSrvc.getAllFootballGames();

		return res.status(200).json({
			name: record_obj.length === 0 ? "InNoRecords" : "InReadOk",
			message: record_obj.length === 0 ? msgHelper.InNoRecords : msgHelper.InReadOk,
			data: record_obj
		});
	}

	public async getOneRecord(req: Request, res: Response) {
		let record_obj = await footgSrvc.getFootballGameById( parseInt(req.params['id']) );

		return res.status(200).json({
			name: !record_obj ? "InNoRecord" : "InReadOk",
			message: !record_obj ? msgHelper.InNoRecord : msgHelper.InReadOk,
			data: record_obj
		});
	}

	public async newRecord(req: Request, res: Response) {
		const fields = req.body;
		let record_obj = await footgSrvc.createFootballGame( fields );

		return res.status(201).json({ name: "InCreateOk", message: msgHelper.InCreateOk, data: record_obj });
	}

	public async updateRecord(req: Request, res: Response) {
		var fields = req.body;
		let record_obj = await footgSrvc.updateFootballGame( fields, parseInt(req.params['id']));

		if (!record_obj)
			return res.status(200).json({ name: "InNoRecord", message: msgHelper.InNoRecord, data: record_obj });
		else return res.status(201).json({ name: "InUpdateOk", message: msgHelper.InUpdateOk, data: record_obj });
	}

	public async deleteRecord(req: Request, res: Response) {
		let deleted_register = await footgSrvc.deleteFootballGame( parseInt(req.params['id']) );

		if (!deleted_register)
			return res.status(200).json({ errors: [{ name: "InNoRecord", message: msgHelper.InNoRecord, field: null, value: null }] });
		else return res.status(200).json({ name: "InDeleteOk", message: msgHelper.InDeleteOk, data: deleted_register });
	}

};

export default TeamController;
