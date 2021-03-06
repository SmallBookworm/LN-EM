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
	time: '20:54',
	username: 'pwj',
	operation: 'deletuser'
}, {
	date: '2017-7-29',
	time: '20:54',
	username: 'pwj',
	operation: 'deletuser'
}, {
	date: '2017-7-12',
	time: '10:54',
	username: 'pwj',
	operation: 'deletuser'
}, {
	date: '2017-6-20',
	time: '22:54',
	username: 'pwj',
	operation: 'deletuser'
}, {
	date: '2017-5-20',
	time: '23:54',
	username: 'pwj',
	operation: 'deletuser'
}, {
	date: '2017-1-20',
	time: '23:54',
	username: 'pwj',
	operation: 'deletuser'
}, {
	date: '2017-11-20',
	time: '23:54',
	username: 'pwj',
	operation: 'deletuser'
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
		fileName: '操作记录'
	},
	columns: [{
		field: 'date',
		title: '日期',
		align: 'center',
		sortable: true
	}, {
		field: 'time',
		title: '时间',
		align: 'center',
	}, {
		field: 'username',
		title: '登录名',
		align: 'center',
	}, {
		field: 'operation',
		title: '操作',
		align: 'center',
	}],
	data: {}
});