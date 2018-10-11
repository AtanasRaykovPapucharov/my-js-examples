const cloudinaryUploader = (() => {
	return (data) => {
		class Cloudinary {
			constructor(data) {
				this.data = data.userData;
			}

			uploadImage(file) {
				return this.data.params
					.then((params) => {
						let CLOUDINARY_URL = params.cloudinary.CLOUDINARY_URL;
						let CLOUDINARY_UPLOAD_PRESET = params.cloudinary.CLOUDINARY_UPLOAD_PRESET;
						let formData = new FormData();

						formData.append('file', file);
						formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
						let dataObj = {
							CLOUDINARY_URL: CLOUDINARY_URL,
							formData: formData
						}
						return dataObj;
					})
					.then((dataObj) => {
						let r = this.data.postImage(dataObj.CLOUDINARY_URL, dataObj.formData)
							.then((res) => {
								return res;
							})
							.catch((err) => {
								console.log(err);
							})
						return r;
					})
					.catch((err) => {
						console.log(err);
					})
			}
		}

		let cloudImg = new Cloudinary(data);
		return cloudImg;
	}
})()