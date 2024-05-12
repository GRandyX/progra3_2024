import { NextFunction, Request, Response } from "express";
import { msgHelper } from "./helper";

export const ErrorHandler = ( callback:any ) => {
	return async ( req: Request, res: Response, next: NextFunction ) => {
		try {
			await callback(req, res, next);
		} catch (err:any) {
			const errors = [];

			if (err.parent || err.errors) {

				if (!err.parent) {

					for (let i = 0; i < err.errors.length; i++) {
						var name:string = err.errors[i].validatorKey;
						name = name === "notEmpty" || name === "is_null" ? "ErRequiredField": name;
						errors.push({
							name,
							message: err.errors[i].message,
							field: err.errors[i].path,
							value: err.errors[i].value
						});
					}

				} else if (err.parent.code) {

					const error = { name: "", message: "", field: null, value: null };
					if (err.errors) {
						const currentErr = err.errors[0].path.split('.');
						error.field = currentErr[ currentErr.length > 1 ? 1 : 0 ].split('_')[0];
					}

					if (err.errors) error.value = err.errors[0].value;
					switch (err.parent.code) {

						case "ER_ACCESS_DENIED_ERROR":
							error.name = "ErDbAccess";
							error.message = msgHelper.ErDbAccess;
							break;

						case "ER_DUP_ENTRY":
							error.name = "ErDupEntry";
							error.message = msgHelper.ErDupEntry;
							break;

						case "ER_ROW_IS_REFERENCED_2":
							error.name = "ErRowIsReferenced";
							error.message = msgHelper.ErRowIsReferenced;
							break;

						case "ER_NO_REFERENCED_ROW_2":
							error.name = "ErNoReferencedRow";
							error.message = msgHelper.ErNoReferencedRow;
							break;

						default:
							error.name = "ErInDataBase";
							error.message = msgHelper.ErInDataBase;
							break;
					}

					console.log( err.parent.message );
					errors.push(error);

				}

			} else if (err.name) {
				console.log( err.name );
			}

			if (errors.length === 0) {
				return res.status(500).json({ errors: [{ name: "ErInternal", message: msgHelper.ErInternal, field: null, value: null }]});
			}

			return res.json({ errors });
		}
	};
}
