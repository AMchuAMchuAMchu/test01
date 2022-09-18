(function() {
	var Main = /*@__PURE__*/ (function(Component) {
		function Main(props) {
			Component.call(this, props);
			this.data = {
				dateList: [
					// 有几个数组，将来就会渲染几列数据
					[
						1980,
						1981,
						1982,
						1983,
						1984,
						1985,
						1986,
						1987,
						1988,
						1989,
						1990,
						1991,
						1992
					],

					[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
				],

				birth: [0, 0]
			};
		}

		if (Component) Main.__proto__ = Component;
		Main.prototype = Object.create(Component && Component.prototype);
		Main.prototype.constructor = Main;
		Main.prototype.apiready = function() {};
		Main.prototype.submit = function(e) {};
		Main.prototype.render = function() {
			return apivm.h(
				"view",
				{class: "page"},

				apivm.h(
					"form",
					{class: "form", onSubmit: this.submit},
					apivm.h(
						"view",
						{class: "form-item"},
						apivm.h("text", null, "姓名:"),
						apivm.h("input", {
							type: "text",
							placeholder: "请输入姓名...🥳🥳",
							name: "name"
						})
					),

					apivm.h(
						"radio-group",
						{class: "form-item", name: "sex"},
						apivm.h("text", null, "性别:"),
						apivm.h(
							"label",
							null,
							apivm.h("radio", {value: "男"}),
							apivm.h("text", null, "男")
						),
						apivm.h(
							"label",
							null,
							apivm.h("radio", {checked: true, value: "女"}),
							apivm.h("text", null, "女")
						)
					),

					apivm.h(
						"picker",
						{
							id: "birth-picker",
							mode: "multiSelector",
							class: "form-item",
							onChange: this.setBirth
						},
						apivm.h("text", null, "出生年月:", formatBirth)
					),

					apivm.h(
						"checkbox-group",
						{class: "form-item", name: "hobby"},
						apivm.h("text", null, "爱好:"),
						apivm.h(
							"label",
							null,
							apivm.h("checkbox", {value: "唱"}),
							apivm.h("text", null, "唱")
						),
						apivm.h(
							"label",
							null,
							apivm.h("checkbox", {value: "跳"}),
							apivm.h("text", null, "跳")
						),
						apivm.h(
							"label",
							null,
							apivm.h("checkbox", {value: "rap"}),
							apivm.h("text", null, "rap")
						),
						apivm.h(
							"label",
							null,
							apivm.h("checkbox", {value: "篮球"}),
							apivm.h("text", null, "篮球")
						)
					),

					apivm.h(
						"view",
						{class: "form-item"},
						apivm.h("text", null, "介绍:"),
						apivm.h("textarea", {name: "info", placeholder: "请输入个人简介..."})
					),

					apivm.h(
						"view",
						{class: "form-item"},
						apivm.h("button", {type: "submit"}, "提交"),
						apivm.h("button", null, "取消")
					)
				)
			);
		};

		return Main;
	})(Component);
	Main.css = {
		".form": {padding: "10px"},
		".form-item": {flexDirection: "row", marginBottom: "10px"}
	};
	apivm.define("main", Main);
	apivm.render(apivm.h("main", null), "body");
})();
