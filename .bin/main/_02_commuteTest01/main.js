(function() {
	var Child = /*@__PURE__*/ (function(Component) {
		function Child(props) {
			Component.call(this, props);
			this.data = {
				add: 0
			};
		}

		if (Component) Child.__proto__ = Component;
		Child.prototype = Object.create(Component && Component.prototype);
		Child.prototype.constructor = Child;
		Child.prototype.apiready = function() {};
		Child.prototype.updateData = function() {
			// alert(typeof parseInt(this.add))
			this.fire("setNum", this.data.add);
			// this.setNum(this.data.add)
		};
		Child.prototype.render = function() {
			var this$1 = this;
			return apivm.h(
				"view",
				{class: "page"},
				apivm.h("h1", null, "我是子组件...🍏🍏"),
				apivm.h("h1", null, "收到的父组件的信息:", this.props.animeee),
				apivm.h("input", {
					type: "text",
					placeholder: "请输入金额...🎃🎃",
					onInput: function(e) {
						if (typeof add != "undefined") {
							add = e.target.value;
						} else {
							this$1.data.add = e.target.value;
						}
					},
					value: typeof add == "undefined" ? this.data.add : add
				}),
				apivm.h("button", {onClick: this.updateData}, "点我修改🥳🥳"),
				apivm.h("h2", null, "金额 : ", this.data.add),
				apivm.h("image", {src: "../../image/Emilike.jpg"})
			);
		};

		return Child;
	})(Component);
	Child.css = {".page": {height: "100%"}};
	apivm.define("child", Child);

	var Main = /*@__PURE__*/ (function(Component) {
		function Main(props) {
			Component.call(this, props);
			this.data = {
				anime: "LYCORIS",
				count: 0
			};
		}

		if (Component) Main.__proto__ = Component;
		Main.prototype = Object.create(Component && Component.prototype);
		Main.prototype.constructor = Main;
		Main.prototype.apiready = function() {};
		Main.prototype.setNum = function(e) {
			// alert(typeof e.detail)
			// alert(e)
			// api.alert({
			// 	msg:e.detail
			// })
			this.data.count += parseInt(e.detail); //字符转整形
			// alert(typeof this.data.count)
		};
		Main.prototype.render = function() {
			return apivm.h(
				"safe-area",
				null,
				apivm.h(
					"view",
					{class: "page"},
					apivm.h("h1", null, "我是父组件...😎😎"),

					apivm.h("child", {anime: this.data.anime, onSetNum: this.setNum}),
					apivm.h("h1", null, "count show = ", this.data.count)
				)
			);
		};

		return Main;
	})(Component);
	Main.css = {".page": {height: "100%"}};
	apivm.define("main", Main);
	apivm.render(apivm.h("main", null), "body");
})();
