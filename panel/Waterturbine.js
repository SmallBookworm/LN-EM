var PercentOfCharge0=1000;
var myChartwaterturbine;
require.config({
            paths: {
                echarts: '../js/dist'
            }
     });
   
        // 使用
        require(
            [
                'echarts',
                'echarts/chart/gauge' // 使用柱状图就加载bar模块，按需加载
            ],
            function (ec) {
                // 基于准备好的dom，初始化echarts图表
                myChartwaterturbine = ec.init(document.getElementById('revolutions')); 
                
                var option = {
    
    tooltip : {
        formatter: "{a} <br/>{c} {b}"
    },
    toolbox: {
        show : false,
        feature : {
            mark : {show: true},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    series : [
        {
            name:'',
            type:'gauge',
            center : ['50%', '40%'],    // 默认全局居中
            min:0,
            max:2000,
            splitNumber:10,
            axisLine: {            // 坐标轴线
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: [[0.2, '#ff4500'],[0.8, '#1e90ff'],[1, 'lime']],
                    width: 10,
                    shadowColor : '#fff', //默认透明
                    shadowBlur: 5,
                    shadowOffsetX:5,
                }
            },
            axisLabel: {            // 坐标轴小标记
                textStyle: {       // 属性lineStyle控制线条样式
                  
                    color: '#000000',
                    shadowColor : '#fff', //默认透明
                    shadowBlur: 10,
                    fontSize:10,
                }
            },
            axisTick: {            // 坐标轴小标记
                length :15,        // 属性length控制线长
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: 'auto',
                    shadowColor : '#fff', //默认透明
                    shadowBlur: 10,
                }
            },
            splitLine: {           // 分隔线
                length :25,         // 属性length控制线长
                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                    width:3,
                    color: '#fff',
                    shadowColor : '#fff', //默认透明
                    shadowBlur: 100,
                }
            },
            pointer: {           // 分隔线
                shadowColor : '#fff', //默认透明
                shadowBlur: 50
            },
            title : {
                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    //fontWeight: 'bolder',
                    fontSize: 10,
                    fontStyle: 'italic',
                    color: '#000000',
                    shadowColor : '#fff', //默认透明
                    shadowBlur: 100,
                }
            },
            detail : {
                backgroundColor: 'rgba(30,144,255,0.8)',
                borderWidth: 0.5,
                borderColor: '#fff',
                shadowColor : '#fff', //默认透明
                shadowBlur: 5,
                offsetCenter: [0, '50%'],       // x, y，单位px
                formatter:'{value}',
                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    
                    color: '#000000'
                }
            },
            data:[{value: 16, name: '水轮机转数'}]
        },
    ]
};
    var percentOfCharge=PercentOfCharge0;
    option.series[0].data[0].value = percentOfCharge.toFixed(2) - 0;
    myChartwaterturbine.setOption(option,true);

	}
   );