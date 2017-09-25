(function($) {
	$.fn.datepicker.dates['zh-CN'] = {
		days: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
		daysShort: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
		daysMin: ["日", "一", "二", "三", "四", "五", "六"],
		months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
		monthsShort: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
		today: "今日",
		clear: "清除",
		format: "yyyy年mm月dd日",
		titleFormat: "yyyy年mm月",
		weekStart: 1
	};
}(jQuery));

var json = [{
	date: '2017-7-20',
	starttime: '10:54',
	username: 'pwj',
	endtime: '23:54'
}, {
	date: '2017-7-29',
	starttime: '7:54',
	username: 'pwj',
	endtime: '22:54'
}, {
	date: '2017-7-12',
	starttime: '10:54',
	username: 'pwj',
	endtime: '20:54'
}, {
	date: '2017-6-20',
	starttime: '8:54',
	username: 'pwj',
	endtime: '12:54'
}, {
	date: '2017-5-20',
	starttime: '6:54',
	username: 'pwj',
	endtime: '10:54'
}, {
	date: '2017-1-20',
	starttime: '7:54',
	username: 'pwj',
	endtime: '10:54'
}, {
	date: '2017-11-20',
	starttime: '4:32',
	username: 'pwj',
	endtime: '10:54'
}];

(new dateRange($('#start'), $('#end'), function() {
	$('#table').bootstrapTable('load', json)
})).initRange();

$('#table').bootstrapTable({
	idField: 'date',
	pageSize: 5,
	pageList: [10, 25, 50],
	exportDataType: 'all',
	exportOptions: {
		fileName: '运行日志'
	},
	columns: [{
		field: 'date',
		title: '日期',
		align: 'center',
		sortable: true
	}, {
		field: 'username',
		title: '登录名',
		align: 'center',
	}, {
		field: 'starttime',
		title: '开机时间',
		align: 'center',
	}, {
		field: 'endtime',
		title: '关机时间',
		align: 'center',
	}],
	data: {}
});