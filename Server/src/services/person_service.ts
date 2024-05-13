import PersonModel from '../models/person_model';
import Helper from '../helpers/helper';

export default class PersonService {

	private helper = new Helper();
	private defaultGetAttributes:any = ['person_id', 'first_name', 'last_name', 'mail', 'active'];

	async getAllPersons( all_fields:boolean=false ) {
		if (all_fields) return await PersonModel.findAll();

		return await PersonModel.findAll({
			attributes: this.defaultGetAttributes
		});
	}

	async getPersonById(id:number, all_fields:boolean=false) {
		if (all_fields) return await PersonModel.findOne({ where: { person_id: id } });

		return await PersonModel.findOne({
			where: { person_id: id },
			attributes: this.defaultGetAttributes
		});
	}

	async createPerson(params: any) {
		let register = await PersonModel.create(params);
		return register.get();
	}

	async updatePerson(params:object, person_id:number) {
		let register = await this.getPersonById(person_id);
		if (!register) return null;
		await register.update(params);
		return register.get();
	}

	async deletePerson(person_id:number) {
		let register = await this.getPersonById(person_id);
		if (!register) return false;
		await register.destroy();
		return true;
	}

}
