window
	.useNumCaptcha()
	.then((res) => {
		console.log("Captcha Passes")
	})
	.catch((err) => {
		console.log("Captcha Failed")
	});