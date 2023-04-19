import type { ActionReturnType } from 'src/types/ActionReturn'
import { formDataValues } from '../../store'

export const actions = {
	default: async ({ request }):Promise<ActionReturnType> => {
		const formData = await request.formData()
		const dataFromForm = {
			propertyname: formData.get('propertyname').toString(),
			address: formData.get('address').toString(),
			propertytype: formData.get('propertytype').toString(),
			unitname: formData.get('unitname').toString(),
			rent: formData.get('rent').toString(),
			deposit: formData.get('deposit').toString(),
			leaselength: formData.get('leaselength').toString(),
			numberofbeds: formData.get('numberofbeds').toString(),
			numberofbaths: formData.get('numberofbaths').toString(),
			sqft: formData.get('sqft').toString(),
			movingdate: formData.get('movingdate').toString(),
			vacancy: formData.get('vacancy').toString(),
		}

		formDataValues.set(dataFromForm)

		return {
			message: 'Form is submitted',
			dataFromForm,
		}
	},
}
