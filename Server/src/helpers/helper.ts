
export default class Helper {

	public isNullOrUndefinedOrEmpty(field:any) {
		if (field === null || field === "" || field === undefined)
			return true;
		return false;
	}

	public getRandomInt(min:number, max:number) {
		return Math.floor(Math.random() * (max - min)) + min;
	}

}

export const msgHelper = {
	ErInDataBase: "Has error in Database",
	ErDbAccess: "Access to Database not allowed",
	InReadOk: "The records has been received successfully",
	InCreateOk: "The record has been created successfully",
	InUpdateOk: "The record has been updated successfully",
	InDeleteOk: "The record has been deleted successfully",
	InSigninOk: "A successfully logged in",
	InNoRecords: "There are no records in the database",
	InNoRecord: "No data related to this record was found",
	ErIntegerField: "The field is not number",
	ErRequiredField: "The field does not exist or is empty. It is required",
	ErRecordByField: "The record of the requested field does not exist",
	ErFormatField: "The field format is wrong",
	ErNequalsFields: "The fields are not the same",
	ErPassword: "The current password is wrong",
	ErInternal: "There was an internal error on the server, contact your system administrator",
	ErHeader: "The key header does not null or empty",
	ErToken: "The received token is invalid",
	ErUserDisabled: "The authenticated user has been disabled, contact your system administrator",
	ErDisabledRecord: "The record has been disabled, contact your system administrator",
	ErUploadFile: "There was an error trying to upload the file to the server",
	ErDeleteFile: "There was an error trying to delete the file to the server",
	ErDupEntry: "The field record already exists",
	ErRowIsReferenced: "You cannot delete the record, because it refers to another table",
	ErNoReferencedRow: "Cannot add or update a child row. Constraint Error"
};
