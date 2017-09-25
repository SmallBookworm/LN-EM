var myChart1 = echarts.init(document.getElementById('personalmom'));
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
			        data:['2017年(使用无刷双馈电机)','2016年(使用其它电机)']
			    },
			    toolbox: {
			        show : true,
			        x:100,
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
			            name:'2017年(使用无刷双馈电机)',
			            type:'line',
			           // stack: '总量',
			            data:[70, 60, 70, 70, 80, 81, 82,85, 80, 70, 60, 65]
			        },
			    	{
			            name:'2016年(使用其它电机)',
			            type:'line',
			           // stack: '总量',
			            data:[50, 40, 50, 50, 60, 61, 62,65, 60, 50, 40, 45]
			        },		
			        
			        
			    ]
			};
        myChart1.setOption(option);
