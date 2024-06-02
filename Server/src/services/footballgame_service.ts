import FootballGameModel from '../models/footballgame_model';
import Helper from '../helpers/helper';

export default class FootballGameService {

	private helper = new Helper();
	private defaultGetAttributes:any = [
        'fgame_id',
        'code',
        'location',
        'local_team',
        'visit_team',
        'fgame_best_player',
        'first_goal',
        'active'
    ];

	async getAllFootballGames( all_fields:boolean=false ) {
		if (all_fields) return await FootballGameModel.findAll();

		return await FootballGameModel.findAll({
			attributes: this.defaultGetAttributes
		});
	}

	async getFootballGameById(id:number, all_fields:boolean=false) {
		if (all_fields) return await FootballGameModel.findOne({ where: { fgame_id: id } });

		return await FootballGameModel.findOne({
			where: { fgame_id: id },
			attributes: this.defaultGetAttributes
		});
	}

	async createFootballGame(params: any) {
		let register = await FootballGameModel.create(params);
		return register.get();
	}

	async updateFootballGame(params:object, fgame_id:number) {
		let register = await this.getFootballGameById(fgame_id);
		if (!register) return null;
		await register.update(params);
		return register.get();
	}

	async deleteFootballGame(fgame_id:number) {
		let register = await this.getFootballGameById(fgame_id);
		if (!register) return false;
		await register.destroy();
		return true;
	}

}
