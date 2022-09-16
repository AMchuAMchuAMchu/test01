//app.js
App({
	onLaunch: function(options) {
    
	},
	onShow: function(options) {
		// Do something when show.
	},
	onHide: function() {
		// Do something when hide.
	},
	onError: function(msg) {
		console.log(msg)
	},
	globalData: {
		scene: 1089
	},
	avmConfig: typeof avmConfig !== 'undefined' ? avmConfig : undefined
})