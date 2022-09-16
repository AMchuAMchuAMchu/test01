module.exports = {
	"origin": "https://developers.weixin.qq.com",
	"entry": "/",
	"router": {
		
	},
	"generate": {
		
	},
	"runtime": {
		"subpackagesMap": {},
		"tabBarMap": {},
		"usingComponents": {},
		"wxComponent": "noprefix"
	},
	"pages": {
		"index": {
			"share": true,
			"windowScroll": false,
			"backgroundColor": "#F7F7F7",
			"rem": false
		}
	},
	"redirect": {
		"notFound": "app",
		"accessDenied": "app"
	},
	"optimization": {
		"domSubTreeLevel": 10,
		"elementMultiplexing": true,
		"textMultiplexing": true,
		"commentMultiplexing": true,
		"domExtendMultiplexing": true,
		"styleValueReduce": 5000,
		"attrValueReduce": 35000
	}
}