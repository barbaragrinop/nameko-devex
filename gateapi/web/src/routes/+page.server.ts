export const actions = {
	default: async ({ request }) => {
		const formData = await request.formData()
		const dataFromForm = {
			propertyname: formData.get('propertyname'),
			address: formData.get('address'),
			propertytype: formData.get('propertytype'),
			unitname: formData.get('unitname'),
			rent: formData.get('rent'),
			deposit: formData.get('deposit'),
			leaselength: formData.get('leaselength'),
			numberofbeds: formData.get('numberofbeds'),
			numberofbaths: formData.get('numberofbaths'),
			sqft: formData.get('sqft'),
			movingdate: formData.get('movingdate'),
			vacancy: formData.get('vacancy'),
		}

		return {
			message: 'Form is submitted',
			data: dataFromForm,
		}
	},
}
