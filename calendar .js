var initFlag = false;
$('#start').datepicker({
	language: 'zh-CN',
	autoclose: true
}).on('changeDate', function(event) {
	var start = $('#start').datepicker('getDate');
	if(start)
		if(!initFlag) {
			initEnd(start);
			initFlag = true;
		}
	else {
		var end = $('#end').datepicker('getDate');
		updateEnd(start, end);
		$('#table').bootstrapTable('load', json);
	}
});

function initEnd(start) {
	document.getElementById('end').disabled = false;
	createEnd(start);
	$('#end').datepicker('show');
}

function updateEnd(start, end) {
	if(start.getTime() > end.getTime()) {
		$('#end').datepicker('update', '');
		$('#end').datepicker('destroy');
		createEnd(start,start);
		$('#end').datepicker('show');
	} else {
		$('#end').datepicker('destroy');
		createEnd(start, end);
	}

}

function createEnd(start, end) {
	$('#end').datepicker({
		startDate: start,
		defaultViewDate: end,
		language: 'zh-CN',
		autoclose: true
	}).on('changeDate', function(event) {
		var start = $('#start').datepicker('getDate');
		var end = $('#end').datepicker('getDate');
		$('#table').bootstrapTable('load', json);

	});
}

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

$('#start').datepicker({
	language: 'zh-CN',
	format: "yyyy年mm月dd",
	minViewMode: 0,
	autoclose: true
}).on('changeDate', function(event) {
	console.log(event.date);
});
$('#end').datepicker({
	language: 'zh-CN',
	format: "yyyy年mm月dd",
	minViewMode: 0,
	autoclose: true
}).on('changeDate', function(event) {
	console.log(event.date);
});

document.getElementById('datetype').addEventListener('click', function(event) {
	if(this.innerText === '日') {
		this.innerText = '年';
		$('#start').datepicker('update', '');
		$('#start').datepicker('destroy');
		$('#start').datepicker({
			language: 'zh-CN',
			format: "yyyy",
			minViewMode: 2,
			autoclose: true
		});
		$('#end').datepicker('update', '');
		$('#end').datepicker('destroy');
		$('#end').datepicker({
			language: 'zh-CN',
			format: "yyyy",
			minViewMode: 2,
			autoclose: true
		});
	} else if(this.innerText === '月') {
		this.innerText = '日';
		$('#start').datepicker('update', '');
		$('#start').datepicker('destroy');
		$('#start').datepicker({
			language: 'zh-CN',
			format: "yyyy年mm月dd",
			minViewMode: 0,
			autoclose: true
		});
		$('#end').datepicker('update', '');
		$('#end').datepicker('destroy');
		$('#end').datepicker({
			language: 'zh-CN',
			format: "yyyy年mm月dd",
			minViewMode: 0,
			autoclose: true
		});
	} else if(this.innerText === '年') {
		this.innerText = '月';
		$('#start').datepicker('update', '');
		$('#start').datepicker('destroy');
		$('#start').datepicker({
			language: 'zh-CN',
			format: "yyyy年mm",
			minViewMode: 1,
			autoclose: true
		});
		$('#end').datepicker('update', '');
		$('#end').datepicker('destroy');
		$('#end').datepicker({
			language: 'zh-CN',
			format: "yyyy年mm",
			minViewMode: 1,
			autoclose: true
		});
	}
});


var initFlag1=false;
$('#start1').datepicker({
	language: 'zh-CN',
	autoclose: true
}).on('changeDate', function(event) {
	var start1 = $('#start1').datepicker('getDate');
	if(start1)
		if(!initFlag1) {
			initEnd1(start1);
			initFlag1 = true;
		}
	else {
		var end1 = $('#end1').datepicker('getDate');
		updateEnd1(start1, end1);
		$('#table').bootstrapTable('load', json);
	}
});

function initEnd1(start1) {
	document.getElementById('end1').disabled = false;
	createEnd1(start1);
	$('#end1').datepicker('show');
}

function updateEnd1(start1, end1) {
	if(start1.getTime() > end1.getTime()) {
		$('#end1').datepicker('update', '');
		$('#end1').datepicker('destroy');
		createEnd1(start1,start1);
		$('#end1').datepicker('show');
	} else {
		$('#end1').datepicker('destroy');
		createEnd1(start1, end1);
	}

}

function createEnd1(start1, end1) {
	$('#end1').datepicker({
		startDate: start1,
		defaultViewDate: end1,
		language: 'zh-CN',
		autoclose: true
	}).on('changeDate', function(event) {
		var start1 = $('#start1').datepicker('getDate');
		var end1 = $('#end1').datepicker('getDate');
		$('#table').bootstrapTable('load', json);

	});
}

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

$('#start1').datepicker({
	language: 'zh-CN',
	format: "yyyy年mm月dd",
	minViewMode: 0,
	autoclose: true
}).on('changeDate', function(event) {
	console.log(event.date);
});
$('#end1').datepicker({
	language: 'zh-CN',
	format: "yyyy年mm月dd",
	minViewMode: 0,
	autoclose: true
}).on('changeDate', function(event) {
	console.log(event.date);
});

document.getElementById('datetype1').addEventListener('click', function(event) {
	if(this.innerText === '日') {
		this.innerText = '年';
		$('#start1').datepicker('update', '');
		$('#start1').datepicker('destroy');
		$('#start1').datepicker({
			language: 'zh-CN',
			format: "yyyy",
			minViewMode: 2,
			autoclose: true
		});
		$('#end1').datepicker('update', '');
		$('#end1').datepicker('destroy');
		$('#end1').datepicker({
			language: 'zh-CN',
			format: "yyyy",
			minViewMode: 2,
			autoclose: true
		});
	} else if(this.innerText === '月') {
		this.innerText = '日';
		$('#start1').datepicker('update', '');
		$('#start1').datepicker('destroy');
		$('#start1').datepicker({
			language: 'zh-CN',
			format: "yyyy年mm月dd",
			minViewMode: 0,
			autoclose: true
		});
		$('#end1').datepicker('update', '');
		$('#end1').datepicker('destroy');
		$('#end1').datepicker({
			language: 'zh-CN',
			format: "yyyy年mm月dd",
			minViewMode: 0,
			autoclose: true
		});
	} else if(this.innerText === '年') {
		this.innerText = '月';
		$('#start1').datepicker('update', '');
		$('#start1').datepicker('destroy');
		$('#start1').datepicker({
			language: 'zh-CN',
			format: "yyyy年mm",
			minViewMode: 1,
			autoclose: true
		});
		$('#end1').datepicker('update', '');
		$('#end1').datepicker('destroy');
		$('#end1').datepicker({
			language: 'zh-CN',
			format: "yyyy年mm",
			minViewMode: 1,
			autoclose: true
		});
	}
});
