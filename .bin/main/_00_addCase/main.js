(function() {
	var Main = /*@__PURE__*/ (function(Component) {
		function Main(props) {
			Component.call(this, props);
			this.data = {
				salary: 0,
				dream: 0
			};
		}

		if (Component) Main.__proto__ = Component;
		Main.prototype = Object.create(Component && Component.prototype);
		Main.prototype.constructor = Main;
		Main.prototype.apiready = function() {};
		Main.prototype.addSalary = function() {
			this.data.salary += parseInt(this.data.dream);
		};
		Main.prototype.subSalary = function() {
			this.data.salary -= parseInt(this.data.dream);
		};
		Main.prototype.clearSalary = function() {
			this.data.salary = 0;
		};
		Main.prototype.render = function() {
			var this$1 = this;
			return apivm.h(
				"view",
				{class: "page"},
				apivm.h(
					"safe-area",
					null,
					apivm.h("input", {
						type: "text",
						placeholder: "请输入您的妄想...😂😂",
						onInput: function(e) {
							if (typeof dream != "undefined") {
								dream = e.target.value;
							} else {
								this$1.data.dream = e.target.value;
							}
						},
						class: "search",
						value: typeof dream == "undefined" ? this.data.dream : dream
					}),
					apivm.h(
						"button",
						{
							onClick: function() {
								return this$1.addSalary();
							}
						},
						"老板加薪!!🤣🤣"
					),
					apivm.h(
						"button",
						{
							onClick: function() {
								return this$1.subSalary();
							}
						},
						"老板降薪!!😤😤"
					),
					apivm.h(
						"button",
						{
							onClick: function() {
								return this$1.clearSalary();
							}
						},
						"老板直接清零赶人走!!🧱🧱"
					),
					apivm.h("h1", null, "Your salary ::  🎃", this.data.salary)
				)
			);
		};

		return Main;
	})(Component);
	Main.css = {".page": {height: "100%"}};
	apivm.define("main", Main);
	apivm.render(apivm.h("main", null), "body");
})();
