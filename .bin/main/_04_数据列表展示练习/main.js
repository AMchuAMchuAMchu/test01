(function() {
	var data = [
		{
			id: 1,
			title: "肖申克的救赎",
			cover: "1.jpg"
		},
		{
			id: 2,
			title: "霸王别姬",
			cover: "2.jpg"
		},
		{
			id: 3,
			title: "阿甘正传",
			cover: "3.jpg"
		},
		{
			id: 4,
			title: "泰坦尼克号",
			cover: "4.jpg"
		},
		{
			id: 5,
			title: "这个杀手不太冷",
			cover: "5.jpg"
		},
		{
			id: 6,
			title: "美丽人生",
			cover: "6.jpg"
		},
		{
			id: 7,
			title: "千与千寻",
			cover: "7.jpg"
		},
		{
			id: 8,
			title: "辛德勒的名单",
			cover: "8.jpg"
		},
		{
			id: 9,
			title: "盗梦空间",
			cover: "9.jpg"
		},
		{
			id: 10,
			title: "星际穿越",
			cover: "10.jpg"
		},
		{
			id: 11,
			title: "忠犬八公的故事",
			cover: "11.jpg"
		},
		{
			id: 12,
			title: "楚门的世界",
			cover: "12.jpg"
		},
		{
			id: 13,
			title: "海上钢琴师",
			cover: "13.jpg"
		},
		{
			id: 14,
			title: "三傻大闹宝莱坞",
			cover: "14.jpg"
		},
		{
			id: 15,
			title: "机器人总动员",
			cover: "15.jpg"
		},
		{
			id: 16,
			title: "放牛班的春天",
			cover: "16.jpg"
		},
		{
			id: 17,
			title: "无间道",
			cover: "17.jpg"
		},
		{
			id: 18,
			title: "疯狂动物城",
			cover: "18.jpg"
		},
		{
			id: 19,
			title: "大话西游之大圣娶亲",
			cover: "19.jpg"
		},
		{
			id: 20,
			title: "熔炉",
			cover: "20.jpg"
		},
		{
			id: 21,
			title: "控方证人",
			cover: "21.jpg"
		},
		{
			id: 22,
			title: "教父",
			cover: "22.jpg"
		},
		{
			id: 23,
			title: "当幸福来敲门",
			cover: "23.jpg"
		},
		{
			id: 24,
			title: "触不可及",
			cover: "24.jpg"
		},
		{
			id: 25,
			title: "怦然心动",
			cover: "25.jpg"
		},
		{
			id: 26,
			title: "龙猫",
			cover: "26.jpg"
		},
		{
			id: 27,
			title: "末代皇帝",
			cover: "27.jpg"
		},
		{
			id: 28,
			title: "寻梦环游记",
			cover: "28.jpg"
		},
		{
			id: 29,
			title: "蝙蝠侠：黑暗骑士",
			cover: "29.jpg"
		},
		{
			id: 30,
			title: "活着",
			cover: "30.jpg"
		},
		{
			id: 31,
			title: "哈利·波特与魔法石",
			cover: "31.jpg"
		},
		{
			id: 32,
			title: "指环王3：王者无敌",
			cover: "32.jpg"
		},
		{
			id: 33,
			title: "乱世佳人",
			cover: "33.jpg"
		},
		{
			id: 34,
			title: "素媛",
			cover: "34.jpg"
		},
		{
			id: 35,
			title: "飞屋环游记",
			cover: "35.jpg"
		},
		{
			id: 36,
			title: "我不是药神",
			cover: "36.jpg"
		},
		{
			id: 37,
			title: "摔 跤吧！爸爸",
			cover: "37.jpg"
		},
		{
			id: 38,
			title: "何以为家",
			cover: "38.jpg"
		},
		{
			id: 39,
			title: "十二怒汉",
			cover: "39.jpg"
		},
		{
			id: 40,
			title: "哈尔的移动城堡",
			cover: "40.jpg"
		},
		{
			id: 41,
			title: "少年派的奇幻漂流",
			cover: "41.jpg"
		},
		{
			id: 42,
			title: "鬼子来了",
			cover: "42.jpg"
		},
		{
			id: 43,
			title: "猫鼠游戏",
			cover: "43.jpg"
		},
		{
			id: 44,
			title: "大话西游之月光宝盒",
			cover: "44.jpg"
		},
		{
			id: 45,
			title: "天空之城",
			cover: "45.jpg"
		},
		{
			id: 46,
			title: "让子弹飞",
			cover: "46.jpg"
		},
		{
			id: 47,
			title: "钢琴家",
			cover: "47.jpg"
		},
		{
			id: 48,
			title: "指环王2：双塔奇兵",
			cover: "48.jpg"
		},
		{
			id: 49,
			title: "闻香识女人",
			cover: "49.jpg"
		},
		{
			id: 50,
			title: "天堂电影院",
			cover: "50.jpg"
		}
	];

	var Main = /*@__PURE__*/ (function(Component) {
		function Main(props) {
			Component.call(this, props);
			this.data = {
				refreshState: "normal"
			};
		}

		if (Component) Main.__proto__ = Component;
		Main.prototype = Object.create(Component && Component.prototype);
		Main.prototype.constructor = Main;
		Main.prototype.apiready = function() {
			//like created
			var list = document.getElementById("list");
			list.load({data: data});
		};
		Main.prototype.setRefreshState = function(e) {
			api.alert({
				msg: e.detail
			});
		};
		Main.prototype.render = function() {
			return apivm.h(
				"safe-area",
				{class: "page"},
				apivm.h(
					"grid-view",
					{
						"column-count": 2,
						"show-scrollbar": false,
						id: "list",
						$bindCell_: function(celltype, item, index) {
							return apivm.h(
								"cell",
								null,
								apivm.h("image", {src: "../../image/" + item.cover}),
								apivm.h("text", null, index + 1, "-", item.title)
							);
						}
					},
					apivm.h(
						"list-header",
						null,
						apivm.h("text", {class: "title"}, "电影列表")
					),

					apivm.h(
						"refresh",
						{
							type: "footer",
							class: "refresh",
							state: this.data.refreshState,
							onStateChange: this.setRefreshState
						},
						apivm.h("image", {src: "../../image/loading.gif", class: "refresh-img"})
					)
				)
			);
		};

		return Main;
	})(Component);
	Main.css = {
		".page": {height: "100%"},
		"#list": {height: "100%", padding: "10px"},
		".title": {
			fontSize: "25px",
			fontWeight: "700",
			textAlign: "center",
			marginBottom: "10px"
		},
		".refresh": {
			width: "100%",
			height: "50px",
			justifyContent: "center",
			alignItems: "center"
		},
		".refresh-img": {width: "30px", height: "30px"}
	};
	apivm.define("main", Main);
	apivm.render(apivm.h("main", null), "body");
})();
