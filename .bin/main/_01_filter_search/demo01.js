(function() {
	var Demo01 = /*@__PURE__*/ (function(Component) {
		function Demo01(props) {
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
					{id: 9, name: "为美好世界献上祝福", time: 2016},
					{id: 10, name: "我的青春恋爱物语果然有问题", time: 2016},
					{id: 11, name: "尸鬼", time: 2010},
					{id: 12, name: "黑岩射手", time: 2013},
					{id: 13, name: "影宅2", time: 2022},
					{id: 14, name: "刀剑神域", time: 2012}
				],

				orderType: "origin",
				searchText: ""
			};
			this.compute = {
				handleAnimes: function() {
					var ref = this.data;
					var animes = ref.animes;
					var orderType = ref.orderType;
					var searchText = ref.searchText;
					var newAnime = animes.filter(function(anime) {
						return anime.name.includes(searchText);
					});
					if (orderType === "asc") {
						newAnime.sort(function(a, b) {
							return a.time - b.time;
						});
					} else if (orderType === "desc") {
						newAnime.sort(function(a, b) {
							return b.time - a.time;
						});
					}
					return newAnime;
				},
				animes: function() {},
				orderType: function() {},
				searchText: function() {}
			};
		}

		if (Component) Demo01.__proto__ = Component;
		Demo01.prototype = Object.create(Component && Component.prototype);
		Demo01.prototype.constructor = Demo01;
		Demo01.prototype.apiready = function() {};
		Demo01.prototype.setOrderType = function(orderType) {
			this.data.orderType = orderType;
		};
		Demo01.prototype.render = function() {
			var this$1 = this;
			return apivm.h(
				"safe-area",
				{class: "page"},
				apivm.h("input", {
					type: "text",
					class: "search",
					placeholder: "请输入搜索内容...",
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
					{class: "search"},
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
						"升序😂😂"
					),
					apivm.h(
						"button",
						{
							onClick: function() {
								return this$1.setOrderType("desc");
							}
						},
						"降序🤣🤣"
					),
					apivm.h(
						"button",
						{
							onClick: function() {
								return this$1.setOrderType("origin");
							}
						},
						"原序😤😤"
					)
				)
			);
		};

		return Demo01;
	})(Component);
	Demo01.css = {
		".page": {padding: "10px", height: "100%"},
		".search": {width: "100%"}
	};
	apivm.define("demo01", Demo01);
	apivm.render(apivm.h("demo01", null), "body");
})();
