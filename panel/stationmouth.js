var myChart = echarts.init(document.getElementById('stationmouth'));
        var option = {
        	 	title : {
			        text: '',
			        subtext: '集团各水电站发电量月对比图'
			    },
			    tooltip : {
			        trigger: 'axis'
			    },
			    legend: {
			        data:['水电站001','水电站002','水电站003','水电站004','水电站005','水电站006']
			    },
			    toolbox: {
			        show : false,
			        feature : {
			            mark : {show: true},
			            dataView : {show: true, readOnly: false},
			            magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
			            restore : {show: true},
			            saveAsImage : {show: true}
			        }
			    },
			    calculable : false,
			    xAxis : [
			        {
			            type : 'category',
			            boundaryGap : false,
			            data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
			        }
			    ],
			    yAxis : [
			        {
			            type : 'value'
			        }
			    ],
			    series : [
			        {
			            name:'水电站001',
			            type:'line',
			            stack: '总量',
			            data:[120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90]
			        },
			        {
			            name:'水电站002',
			            type:'line',
			            stack: '总量',
			            data:[220, 182, 191, 234, 290, 330, 310,220, 182, 191, 234, 290]
			        },
			        {
			            name:'水电站003',
			            type:'line',
			            stack: '总量',
			            data:[150, 232, 201, 154, 190, 330, 410,150, 232, 201, 154, 190]
			        },
			        {
			            name:'水电站004',
			            type:'line',
			            stack: '总量',
			            data:[320, 332, 301, 334, 390, 330, 320,320, 332, 301, 334, 390]
			        },
			        {
			            name:'水电站005',
			            type:'line',
			            stack: '总量',
			            data:[820, 932, 901, 934, 1290, 1330, 1320,820, 932, 901, 934, 1290]
			        },
			        {
			            name:'水电站006',
			            type:'line',
			            stack: '总量',
			            data:[920, 992, 909, 934, 129, 133, 132,820, 932, 901, 934, 1290]
			        }
			    ]
			};
        myChart.setOption(option);