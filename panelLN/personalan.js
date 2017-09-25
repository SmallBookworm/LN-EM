var myChart2 = echarts.init(document.getElementById('personalan'));
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
        data:['无刷双馈电机','其它某电机']
    },
    toolbox: {
        show : true,
        x:100,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType : {show: true, type: ['line', 'bar']},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    xAxis : [
        {
            type : 'category',
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
            name:'无刷双馈电机',
            type:'bar',
            data:[8.0, 8.9, 17.0, 43.2, 45.6, 96.7, 85.6, 92.2, 52.6, 40.0, 10.4, 20.3],
            
//          markLine : {
//              data : [
//                  {type : 'average', name: '平均值'}
//              ]
//          }
        },
        {
            name:'其它某电机',
            type:'bar',
            data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 75.6, 82.2, 48.7, 18.8, 6.0, 2.3],
            
//          markLine : {
//              data : [
//                  {type : 'average', name : '平均值'}
//              ]
//          }
        }
    ]
};
myChart2.setOption(option);
