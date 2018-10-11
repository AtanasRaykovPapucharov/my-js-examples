const validator = (() => {
	return (notifier) => {
		class Validator {
			constructor(notifier) {
				this.notifier = notifier;
				this.constantz = {
					emailReg: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
					passwordReg: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/,
					usernameReg: /^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$/,
					commentReg: /^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$/
				}
			}

			isValidEmail(email) {
				let letters = this.constantz.emailReg;

				if (!email || !email.match(letters)) {
					this.notifier.error('E-mail must consist of letters and numbers, dot, symbol @ ');
					return false;
				}
				return true;
			}

			isValidPassword(password) {
				let letters = this.constantz.passwordReg;

				if (!password || !password.match(letters)) {
					this.notifier.error('Password must contain at least 6 characters, including UPPER/lowercase and numbers');
					return false;
				}
				return true;
			}

			isValidUsername(username) {
				let letters = this.constantz.usernameReg;

				if (!username || username.length < 3 || username.length > 20) {
					this.notifier.error('Username must be consist of min 3 symbols and max of 20 symbols');
					return false;
				}

				if (!username.match(letters)) {
					this.notifier.error('Username must consist of letters and numbers');
					return false;
				}
				return true;
			}

			isValidAge(age) {
				if (!age || age < 0 || age > 120) {
					this.notifier.error('Age must be a number between 0 and 120');
					return false;
				}
				return true;
			}

			isValidComment(comment) {
				let letters = this.constantz.commentReg;

				if (!comment || comment.length > 200 || !comment.match(letters)) {
					this.notifier.error('Comment must be maximum 200 symbols of letters and numbers');
					return false;
				}
				return true;
			}
		}

		const newValid = new Validator(notifier);
		return newValid;
	}
})();