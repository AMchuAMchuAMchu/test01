module.exports = function(window, document) {
	var apivm = require('../../common/avm.min')(window, document);
	var avm = apivm;
	var api = apivm.api;
	var Component = apivm.Component;
	var $ = apivm.$;
	(function() {
	var Main = /*@__PURE__*/ (function(Component) {
		function Main(props) {
			Component.call(this, props);
			this.data = {
				animeName: "莉可丽丝~~",
				add: 1
			};
		}

		if (Component) Main.__proto__ = Component;
		Main.prototype = Object.create(Component && Component.prototype);
		Main.prototype.constructor = Main;
		Main.prototype.apiready = function() {};
		Main.prototype.AddNum = function() {
			this.data.add++;
		};
		Main.prototype.SubNum = function() {
			this.data.add--;
		};
		Main.prototype.ClearNum = function() {
			this.data.add = 0;
		};
		Main.prototype.render = function() {
			var this$1 = this;
			return apivm.h(
				"safe-area",
				{class: "page"},
				apivm.h(
					"view",
					{class: "header"},
					apivm.h("text", {class: "title"}, "首页")
				),
				apivm.h(
					"view",
					{class: "body"},
					apivm.h("text", {class: "h1"}, this.data.animeName),
					apivm.h("img", {class: "img", src: "../../image/img.png"}),
					apivm.h("text", {class: "p"}, "拖入组件搭建你的第一个 APP"),
					apivm.h(
						"button",
						{
							onClick: function() {
								return this$1.AddNum();
							}
						},
						"点我加一!!🎃🎃"
					),
					apivm.h(
						"button",
						{
							onClick: function() {
								return this$1.SubNum();
							}
						},
						"点我减一!!🤣🤣"
					),
					apivm.h(
						"button",
						{
							onClick: function() {
								return this$1.ClearNum();
							}
						},
						"点我清零!!😤😤"
					),
					apivm.h("h1", null, this.data.add),
					apivm.h("h1", null, this.data.add),
					apivm.h("h1", null, this.data.add)
				)
			);
		};

		return Main;
	})(Component);
	apivm.define("main", Main);
	apivm.render(apivm.h("main", null), "body");
})();

	window['createApp'] = function() {
		apivm.$_start();
	}
	return avm;
}