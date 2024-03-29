BrowserPonies.loadConfig({
	"speed": 3,
	"speakProbability": 0.1,
	"dontSpeak": true,
	"volume": 1,
	"interval": 40,
	"fps": 25,
	"interactionInterval": 500,
	"audioEnabled": false,
	"showFps": false,
	"preloadAll": false,
	"showLoadProgress": true,
	"fadeDuration": 500,
	"spawn": {
		"Anton": 1
	},
	"autostart": true,
	"ponies": [{
		"baseurl": "https://github.com/opossumkisses/Browser-Anton/tree/main/anton/",
		"behaviors": [{
			"name": "stand",
			"probability": 0.25,
			"maxduration": 10,
			"minduration": 2,
			"speed": 0,
			"rightimage": "stand_right.gif",
			"leftimage": "stand_left.gif",
			"movement": "None",
			"auto_select_images": true,
			"dont_repeat_animation": false,
			"skip": false,
			"x": 0,
			"y": 0,
			"rightcenter": {
				"x": 0,
				"y": 0
			},
			"leftcenter": {
				"x": 0,
				"y": 0
			},
			"group": 0
		}, {
			"name": "walk",
			"probability": 0.25,
			"maxduration": 10,
			"minduration": 3,
			"speed": 3,
			"rightimage": "run_right.gif",
			"leftimage": "run_left.gif",
			"movement": "Diagonal_horizontal",
			"auto_select_images": true,
			"dont_repeat_animation": false,
			"skip": false,
			"x": 0,
			"y": 0,
			"rightcenter": {
				"x": 0,
				"y": 0
			},
			"leftcenter": {
				"x": 0,
				"y": 0
			},
			"group": 0
		}, {
			"name": "snarl",
			"probability": 0.25,
			"maxduration": 5.04,
			"minduration": 5.04,
			"speed": 0,
			"rightimage": "snarl_right.gif",
			"leftimage": "snarl_left.gif",
			"movement": "None",
			"auto_select_images": true,
			"dont_repeat_animation": false,
			"skip": false,
			"x": 0,
			"y": 0,
			"rightcenter": {
				"x": 0,
				"y": 0
			},
			"leftcenter": {
				"x": 0,
				"y": 0
			},
			"group": 0
		}, {
			"name": "clutch",
			"probability": 0.25,
			"maxduration": 1.76,
			"minduration": 1.76,
			"speed": 5,
			"rightimage": "clutch_right.gif",
			"leftimage": "clutch_left.gif",
			"movement": "Diagonal_horizontal",
			"auto_select_images": true,
			"dont_repeat_animation": false,
			"skip": false,
			"x": 0,
			"y": 0,
			"rightcenter": {
				"x": 0,
				"y": 0
			},
			"leftcenter": {
				"x": 0,
				"y": 0
			},
			"group": 0
		}],
		"speeches": [],
		"categories": ["supporting ponies", "stallions"],
		"name": "Anton"
	}]
});
