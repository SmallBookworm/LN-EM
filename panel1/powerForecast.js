//$.getJSON('https://free-api.heweather.com/v5/now?city=长沙&key=973947faf2ad4dbca52cd973ed2a1d91', function(data) {
//	console.log(data)
//});
var main = document.getElementById('main');
// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('main'));

var wlData = [];
var buData = [];
var bmData = [];
var bdData = [];
// 指定图表的配置项和数据
var option = {
	backgroundColor: 'rgba(255,255,255,0)',
	title: [{
		text: '布林曲线预测',
		left: '30%',
		top: '1%',
		textAlign: 'center'

	}, {
		text: '预测发电量',
		left: '77.5%',
		top: '0.5%',
		textAlign: 'center'
	}, {
		text: '现在发电量',
		left: '77.5%',
		top: '54%',
		textAlign: 'center'

	}],
	tooltip: {
		trigger: 'axis',
		axisPointer: {
			type: 'cross',
			label: {
				backgroundColor: '#283b56'
			}
		}
	},
	toolbox: {
		show: true,
		feature: {
			restore: {
				show: true
			},
			saveAsImage: {
				show: true
			}
		},
		right: 40
	},
	xAxis: {
		type: 'category',
		//		boundaryGap: false,
		data: ['1', '2', '3']
	},
	yAxis: [{
		type: 'value',
		name: '水位/m',
	}, {
		type: 'value',
		name: '发电量/kW.h',
	}],
	legend: {
		data: [{
			name: '三天',
			icon: 'circle'
		}, {
			name: '七天',
			icon: 'circle'
		}],
		selectedMode: 'single',
		top: '1%',
		left: '2%'
	},
	grid: {
		left: '5%',
		top: '10%',
		right: '45%',
	},
	series: [{
			type: 'line',
			name: '三天',
			itemStyle: {
				normal: {
					color: {
						type: 'linear',
						x: 0,
						y: 0,
						x2: 0,
						y2: 1,
						colorStops: [{
							offset: 0,
							color: 'rgba(14,125,218,0.8)'
						}, {
							offset: 1,
							color: 'rgba(14,125,218,1)'
						}],
						globalCoord: false
					}
				}
			}
		},
		{
			type: 'line',
			name: '七天',
			itemStyle: {
				normal: {
					color: {
						type: 'linear',
						x: 0,
						y: 0,
						x2: 0,
						y2: 1,
						colorStops: [{
							offset: 0,
							color: 'rgba(14,125,218,0.8)'
						}, {
							offset: 1,
							color: 'rgba(14,125,218,1)'
						}],
						globalCoord: false
					}
				}
			}
		}, {
			type: 'bar',
			name: '今年水位',
			itemStyle: {
				normal: {
					color: 'rgba(14,125,218,0.6)'
				}
			},
			data: wlData
		},
		{
			type: 'line',
			name: '发电量上轨',
			yAxisIndex: 1,
			data: buData
		}, {
			type: 'line',
			name: '发电量中轨',
			yAxisIndex: 1,
			data: bmData
		},
		{
			type: 'line',
			name: '发电量下轨',
			yAxisIndex: 1,
			data: bdData
		},
		{
			name: '预测电量',
			type: 'gauge',
			center: ['77.5%', '25%'], // 默认全局居中
			min: 0,
			max: 8000,
			splitNumber: 8,
			radius: '41%',
			startAngle: 135,
			endAngle: -135,
			axisLine: {
				show: true,
				lineStyle: {
					width: 15,
					shadowBlur: 0,
					color: [
						[0.25, '#ff4500'],
						[0.5, '#ffa500'],
						[0.75, '#90ee90'],
						[1, '#87ceeb']
					]
				}
			},
			axisTick: { // 坐标轴小标记
				show: false,
			},
			splitLine: { // 分隔线
				length: 20, // 属性length控制线长
				lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
					color: 'auto'
				}
			},
			pointer: {
				width: 5
			},
			title: {
				offsetCenter: [0, '-30%'], // x, y，单位px
			},
			detail: {
				textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
					fontWeight: 'bolder'
				}
			},
			data: [{
				value: 32 * 50,
				name: 'kW·h'
			}]
		},
		{
			name: '现在电量',
			type: 'gauge',
			center: ['77.5%', '75%'], // 默认全局居中
			min: 0,
			max: 8000,
			splitNumber: 8,
			radius: '34%',
			startAngle: 135,
			endAngle: -135,
			axisLine: {
				show: true,
				lineStyle: {
					width: 15,
					shadowBlur: 0,
					color: [
						[0.25, '#ff4500'],
						[0.5, '#ffa500'],
						[0.75, '#90ee90'],
						[1, '#87ceeb']
					]
				}
			},
			axisTick: { // 坐标轴小标记
				show: false,
			},
			splitLine: { // 分隔线
				length: 20, // 属性length控制线长
				lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
					color: 'auto'
				}
			},
			pointer: {
				width: 5
			},
			title: {
				offsetCenter: [0, '-30%'], // x, y，单位px
			},
			detail: {
				textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
					fontWeight: 'bolder'
				}
			},
			data: [{
				value: 22 * 50,
				name: 'kW·h'
			}]
		}
	]
};

// 使用刚指定的配置项和数据显示图表。
//function initMain() {
//	document.getElementById('main').style.width = window.innerWidth + 'px';
//	document.getElementById('main').style.height = window.innerHeight + 'px';
//	myChart.resize();
//}
//document.addEventListener('DOMContentLoaded', initMain);
//window.onresize = function() {
//	initMain();
//};
//布林线
function MA(data) {
	var num = 0;
	for(var i in data) {
		num += data[i];
	}
	return num / data.length;
}

function MD(data) {
	var ma = MA(data);
	var cma = 0;
	for(var i in data) {
		cma += Math.pow(data[i] - ma, 2);
	}
	return Math.sqrt(cma / data.length);
}

function Bollinger(data, k) {
	var ma = MA(data);
	var md = MD(data);
	buData.push((ma + k * md).toFixed(2));
	bmData.push((ma).toFixed(2));
	bdData.push((ma - k * md).toFixed(2));
}
var data3 = [
	[1, 3, 4],
	[34, 3, 2],
	[56, 90, 34, 34]
];
for(var i in data3) {
	Bollinger(data3[i], 2)
}
wlData.push(2, 3, 4);
myChart.setOption(option, true);
myChart.on('legendselectchanged', function(param) {
	if(param.name == '七天') {
		wlData = [12, 13, 14, 15, 16, 17, 11];
		var data7 = [
			[1, 3, 4],
			[34, 3, 2],
			[56, 90, 34, 34],
			[34, 3, 2],
			[34, 13, 12],
			[34, 31, 21],
			[34, 3, 2]
		];
		buData = [];
		bmData = [];
		bdData = [];
		for(var i in data7) {
			Bollinger(data7[i], 2)
		}
		myChart.setOption({
			xAxis: {
				data: ['1', '2', '3', '4', '5', '6', '7']
			},
			series: [{
					type: 'bar',
					name: '今年水位',
					data: wlData
				},
				{
					type: 'line',
					name: '发电量上轨',
					yAxisIndex: 1,
					data: buData
				}, {
					type: 'line',
					name: '发电量中轨',
					yAxisIndex: 1,
					data: bmData
				},
				{
					type: 'line',
					name: '发电量下轨',
					yAxisIndex: 1,
					data: bdData
				}, {
					name: '预测电量',
					data: [{
						value: 2800,
						name: 'kW·h'
					}]
				}, {
					name: '现在电量',
					data: [{
						value: 1800,
						name: 'kW·h'
					}]
				}
			]
		});
	} else {
		wlData = [2, 3, 4];
		buData = [];
		bmData = [];
		bdData = [];
		for(var i in data3) {
			Bollinger(data3[i], 2)
		}
		myChart.setOption({
			xAxis: {
				data: ['1', '2', '3']
			},
			series: [{
					type: 'bar',
					name: '今年水位',
					data: wlData
				},
				{
					type: 'line',
					name: '发电量上轨',
					yAxisIndex: 1,
					data: buData
				}, {
					type: 'line',
					name: '发电量中轨',
					yAxisIndex: 1,
					data: bmData
				},
				{
					type: 'line',
					name: '发电量下轨',
					yAxisIndex: 1,
					data: bdData
				}, {
					name: '预测电量',
					data: [{
						value: 234,
						name: 'kW·h'
					}]
				}, {
					name: '现在电量',
					data: [{
						value: 641,
						name: 'kW·h'
					}]
				}
			]
		});
	}

});