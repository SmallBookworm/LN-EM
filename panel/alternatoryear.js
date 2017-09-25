var myChart3 = echarts.init(document.getElementById('alternatoryear'));
        var option = {
        	 	title : {
			        text: '',
			        subtext: ''
			    },
			    grid:{         
                    y:20,   
                }, 
			    tooltip : {
			        trigger: 'axis'
			    },
			    legend: {
			        data:['发电机001','发电机002','发电机003','发电机004','发电机005','发电机006']
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
			            data : ['2012年','2013年','2014年','2015年','2016年','2017年']
			        }
			    ],
			    yAxis : [
			        {
			            type : 'value'
			        }
			    ],
			    series : [
			        {
			            name:'发电机001',
			            type:'line',
			            stack: '总量',
			            data:[120, 132, 101, 134, 90, 230]
			        },
			        {
			            name:'发电机002',
			            type:'line',
			            stack: '总量',
			            data:[220, 182, 191, 234, 290, 330]
			        },
			        {
			            name:'发电机003',
			            type:'line',
			            stack: '总量',
			            data:[150, 232, 201, 154, 190, 330]
			        },
			        {
			            name:'发电机004',
			            type:'line',
			            stack: '总量',
			            data:[320, 332, 301, 334, 390, 330]
			        },
			        {
			            name:'发电机005',
			            type:'line',
			            stack: '总量',
			            data:[820, 932, 901, 934, 1290, 1330]
			        },
			        {
			            name:'发电机006',
			            type:'line',
			            stack: '总量',
			            data:[920, 992, 909, 934, 129, 133]
			        }
			    ]
			};
        myChart3.setOption(option);