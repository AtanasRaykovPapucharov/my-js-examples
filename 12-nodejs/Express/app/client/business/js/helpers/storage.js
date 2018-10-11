'use strict';

const storage = (() => {
	return {
		cloudinaryStore: {
			uploadImage: (file) => {
				data.getCloudinaryParams()
					.then((params) => {
						let CLOUDINARY_URL = params.data.CLOUDINARY_URL;
						let CLOUDINARY_UPLOAD_PRESET = params.data.CLOUDINARY_UPLOAD_PRESET;

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
						let r = data.postImage(dataObj.CLOUDINARY_URL, dataObj.formData)
							.then((res) => {
								console.log(res.data);
								return res.data;
							});
						console.log(r);
						return r;
					})
					.catch((err) => {
						console.log(err);
					});;
			}
		},

		localStore: {
			setLocal: function (name, value) {
				localStorage.setItem(name, value);
				return this;
			},
			getLocal: function (name) {
				return localStorage.getItem(name);
			}
		},

		cookieStore: {
			setCookie: function (name, value, minutes) {
				let date = new Date();

				date.setTime(date.getTime() + (minutes * 60 * 1000));

				let expires = "; expires=" + date.toGMTString();

				document.cookie = name + "=" + value + expires + "; path=/";
			},

			getCookieByName: function (name) {
				let allCookies = document.cookie.split(";");

				for (let i = 0; i < allCookies.length; i += 1) {
					let cookie = allCookies[i];
					let trailingZeros = 0;

					for (let j = 0; j < cookie.length; j += 1) {
						if (cookie[j] !== " ") {
							break;
						}
					}
					cookie = cookie.substring(j);

					if (cookie.startsWith(name + "=")) {
						return cookie;
					}
				}
			}
		}
	}
})();