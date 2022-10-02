(function() {
	var Demo4 = /*@__PURE__*/ (function(Component) {
		function Demo4(props) {
			Component.call(this, props);
			this.data = {
				animes: [
					{id: 1, name: "罪恶王冠", time: 2011},
					{id: 2, name: "魔女之旅", time: 2020},
					{id: 3, name: "终末的女武神", time: 2021},
					{id: 4, name: "食锈末世录", time: 2022},
					{id: 5, name: "哥布林杀手", time: 2018},
					{id: 6, name: "那朵花", time: 2011},
					{id: 7, name: "影宅1", time: 2020},
					{id: 8, name: "美妙世界", time: 2020},
					{id: 9, name: "为美好世界献上祝福", time: 2015},
					{id: 10, name: "我的青春恋爱物语果然有问题", time: 2013},
					{id: 11, name: "尸鬼", time: 2010},
					{id: 12, name: "黑岩射手", time: 2013},
					{id: 13, name: "影宅2", time: 2022},
					{id: 14, name: "刀剑神域第一季SAO+ALO", time: 2016}
				],

				// 搜索内容
				searchText: "",
				// 排序类型 asc 升序  desc 降序 origin 原本顺序
				orderType: "origin"
			};
			this.compute = {
				handleAnimes: function() {
					var ref = this.data;
					var animes = ref.animes;
					var searchText = ref.searchText;
					var orderType = ref.orderType;
					// 过滤，只保留包含searchText的内容
					var newAnimes = animes.filter(function(anime) {
						return anime.name.includes(searchText);
					});
					// 排序
					if (orderType === "asc") {
						newAnimes.sort(function(a, b) {
							return a.time - b.time;
						});
					} else if (orderType === "desc") {
						newAnimes.sort(function(a, b) {
							return b.time - a.time;
						});
					}

					return newAnimes;
				},
				animes: function() {},
				searchText: function() {},
				orderType: function() {}
			};
		}

		if (Component) Demo4.__proto__ = Component;
		Demo4.prototype = Object.create(Component && Component.prototype);
		Demo4.prototype.constructor = Demo4;
		Demo4.prototype.apiready = function() {};
		Demo4.prototype.setOrderType = function(orderType) {
			this.data.orderType = orderType;
		};
		Demo4.prototype.render = function() {
			var this$1 = this;
			return apivm.h(
				"safe-area",
				{class: "page"},

				apivm.h("input", {
					type: "text",
					placeholder: "请输入搜索内容🍹🍹",
					class: "search",
					onInput: function(e) {
						if (typeof searchText != "undefined") {
							searchText = e.target.value;
						} else {
							this$1.data.searchText = e.target.value;
						}
					},
					value: typeof searchText == "undefined" ? this.data.searchText : searchText
				}),

				apivm.h(
					"view",
					null,
					(Array.isArray(this.handleAnimes)
						? this.handleAnimes
						: Object.values(this.handleAnimes)
					).map(function(anime) {
						return apivm.h(
							"text",
							{key: anime.id},
							anime.id,
							" - ",
							anime.name,
							" - ",
							anime.time
						);
					})
				),
				apivm.h(
					"view",
					{class: "container"},
					apivm.h(
						"button",
						{
							onClick: function() {
								return this$1.setOrderType("asc");
							}
						},
						"😂😂时间升序"
					),
					apivm.h(
						"button",
						{
							onClick: function() {
								return this$1.setOrderType("desc");
							}
						},
						"🤣🤣时间降序"
					),
					apivm.h(
						"button",
						{
							onClick: function() {
								return this$1.setOrderType("origin");
							}
						},
						"😤😤时间原序"
					)
				),
				apivm.h("img", {
					style: "background-size:cover",
					src: "../../image/11385343fbf2b2119313f479cdd272380cd7912320f0.jpg"
				})
			);
		};

		return Demo4;
	})(Component);
	Demo4.css = {
		".page": {padding: "10px"},
		".search": {width: "100%", marginBottom: "10px"},
		".container": {flexDirection: "row", marginTop: "10px"}
	};
	apivm.define("demo4", Demo4);
	apivm.render(apivm.h("demo4", null), "body");
})();
