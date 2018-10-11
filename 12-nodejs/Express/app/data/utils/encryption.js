const crypto = require("crypto");

module.exports = {
	generateSalt: () => {
		return crypto.randomBytes(128).toString("base64");
	},
	generateHashedPassword: (salt, pwd) => {
		let hmac = crypto.createHmac("sha1", salt);
		return hmac.update(pwd).digest("hex");
	},
	encrypt: (text, key) => {
		let cipher = crypto.createCipher("aes256", key);
		let encryptedData = cipher.update(text, "binary", "hex");
		return (encryptedData + cipher.final("hex"));
	},
	decrypt: (cipher, key) => {
		let decipher = crypto.createDecipher("aes256", key);
		let decryptedData = decipher.update(cipher, "hex", "binary");
		return (decryptedData + decipher.final("binary"));
	}
};