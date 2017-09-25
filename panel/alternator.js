//var name=['发电机001','发电机002','发电机003','发电机004','发电机005','发电机006'];
var name=['水电站1','水电站2','水电站3','水电站4','水电站5','水电站6'];
var myChart1 = echarts.init(document.getElementById('alternator'));
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
			        data:name
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
			            data : ['1日','2日','3日','4日','5日','6日','7日','8日','9日','10日','11日','12日','13日','14日','15日','16日','17日','18日','19日','20日','21日','22日','23日','24日','25日','26日','27日','28日','29日','30日','31日']
			        }
			    ],
			    yAxis : [
			        {
			            type : 'value'
			        }
			    ],
			    series : [
			        {
			            name:name[0],
			            type:'line',
			            stack: '总量',
			            data:[120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132, 101]
			        },
			        {
			            name:name[1],
			            type:'line',
			            stack: '总量',
			            data:[220, 182, 191, 234, 290, 330, 310,220, 182, 191, 234, 290, 330, 310,220, 182, 191, 234, 290, 330, 310,220, 182, 191, 234, 290, 330, 310,220, 182]
			        },
			        {
			            name:name[2],
			            type:'line',
			            stack: '总量',
			            data:[150, 232, 201, 154, 190, 330, 410,150, 232, 201, 154, 190, 330, 410,150, 232, 201, 154, 190, 330, 410,150, 232, 201, 154, 190, 330, 410,150, 232, 201]
			        },
			        {
			            name:name[3],
			            type:'line',
			            stack: '总量',
			            data:[320, 332, 301, 334, 390, 330, 320,320, 332, 301, 334, 390, 330, 320,320, 332, 301, 334, 390, 330, 320,320, 332, 301, 334, 390, 330, 320,320, 332, 301]
			        },
			        {
			            name:name[4],
			            type:'line',
			            stack: '总量',
			            data:[820, 932, 901, 934, 1290, 1330, 1320,820, 932, 901, 934, 1290, 1330, 1320,820, 932, 901, 934, 1290, 1330, 1320,820, 932, 901, 934, 1290, 1330, 1320,820, 932, 901]
			        },
			        {
			            name:name[5],
			            type:'line',
			            stack: '总量',
			            data:[920, 992, 909, 934, 129, 133, 132,820, 932, 901, 934, 1290, 1330, 1320,820, 932, 901, 934, 1290, 1330, 1320,820, 932, 901, 934, 1290, 1330, 1320,820, 932, 901]
			        }
			    ]
			};
        myChart1.setOption(option);
