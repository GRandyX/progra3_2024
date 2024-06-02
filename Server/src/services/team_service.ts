import TeamModel from '../models/team_model';
import Helper from '../helpers/helper';

export default class TeamService {

	private helper = new Helper();
	private defaultGetAttributes:any = ['team_id', 'code', 'name', 'players', 'active'];

	async getAllTeams( all_fields:boolean=false ) {
		if (all_fields) return await TeamModel.findAll();

		return await TeamModel.findAll({
			attributes: this.defaultGetAttributes
		});
	}

	async getTeamById(id:number, all_fields:boolean=false) {
		if (all_fields) return await TeamModel.findOne({ where: { team_id: id } });

		return await TeamModel.findOne({
			where: { team_id: id },
			attributes: this.defaultGetAttributes
		});
	}

	async createTeam(params: any) {
		let register = await TeamModel.create(params);
		return register.get();
	}

	async updateTeam(params:object, team_id:number) {
		let register = await this.getTeamById(team_id);
		if (!register) return null;
		await register.update(params);
		return register.get();
	}

	async deleteTeam(team_id:number) {
		let register = await this.getTeamById(team_id);
		if (!register) return false;
		await register.destroy();
		return true;
	}

}
