var myChart2 = echarts.init(document.getElementById('personalan'));
var option = {
        	 	title : {
			        text: '',
			        
			    },
			     grid:{         
                    y:20,   
                }, 
			    tooltip : {
			        trigger: 'axis'
			    },
			    legend: {
			        data:['水电站001','水电站002']
			    },
			    toolbox: {
			        show : true,
			        x:100,
			        feature : {
			            mark : {show: true},
			            dataView : {show: false, readOnly: false},
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
			            data:[70, 60, 70, 70, 80, 81, 82,85, 80, 70, 60, 65]
			        },
			        {
			            name:'水电站002',
			            type:'line',
			            stack: '总量',
			            data:[70, 60, 70, 70, 80, 81, 82,85, 80, 70, 60, 65]
			        },			        
			    ]
			};
myChart2.setOption(option);
