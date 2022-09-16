const mpRender = require('miniprogram-render');
const createPage = require('../base.js');
const global_config = require('../../config');
var avmPage = null;

function initPage($window, $document) {
	avmPage = require('./page.js')($window, $document);
}

// 事件兼容驼峰和纯小写
const LifeCycle = {
    onLoad(query){
		if(!avmPage){
			return;
		}
		if(!avmPage.$_notify(null, 'onLoad', query)){
			avmPage.$_notify(null, 'onload', query);
		}
    },
	onShow(){
		if(!avmPage){
			return;
		}
		if(!avmPage.$_notify(null, 'onShow')){
			avmPage.$_notify(null, 'onshow');
		}
    },
    onReady(){
		if(!avmPage){
			return;
		}
		if(!avmPage.$_notify(null, 'onReady')){
			avmPage.$_notify(null, 'onready');
		}
    },
    onHide(){
		if(!avmPage){
			return;
		}
		if(!avmPage.$_notify(null, 'onHide')){
			avmPage.$_notify(null, 'onhide');
		}
    },
	onUnload(){
		if(!avmPage){
			return;
		}
		if(!avmPage.$_notify(null, 'onUnload')){
			avmPage.$_notify(null, 'onunload');
		}
    },
	onPullDownRefresh(){
		if(!avmPage){
			return;
		}
		if(!avmPage.$_notify(null, 'onPullDownRefresh')){
			avmPage.$_notify(null, 'onpulldownrefresh');
		}
	},
	onReachBottom(){
		if(!avmPage){
			return;
		}
		if(!avmPage.$_notify(null, 'onReachBottom')){
			avmPage.$_notify(null, 'onreachbottom');
		}
	},
	onPageScroll(e){
		if(!avmPage){
			return;
		}
		if(!avmPage.$_notify(null, 'onPageScroll', e)){
			avmPage.$_notify(null, 'onpagescroll', e);
		}
	},
	onResize(size){
		if(!avmPage){
			return;
		}
		if(!avmPage.$_notify(null, 'onResize', size)){
			avmPage.$_notify(null, 'onresize', size);
		}
	},
	onTabItemTap(item){
		if(!avmPage){
			return;
		}
		if(!avmPage.$_notify(null, 'onTabItemTap', item)){
			avmPage.$_notify(null, 'ontabitemtap', item);
		}
	},
	onAddToFavorites(data){
		if(!avmPage){
			return;
		}
		return avmPage.$_notify(null, 'onAddToFavorites', data);
	},
	onShareAppMessage(data){
		if(!avmPage){
			return;
		}
		return avmPage.$_notify(null, 'onShareAppMessage', data);
	},
	onShareTimeline(){
		if(!avmPage){
			return;
		}
		return avmPage.$_notify(null, 'onShareTimeline');
	}
};

Page(createPage(mpRender, global_config, initPage, LifeCycle));