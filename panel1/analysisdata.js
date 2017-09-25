var myChart1 = echarts.init(document.getElementById('analysisdata'));
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
        data:['最大值','最小值','平均值']
    },
    toolbox: {
        show : true,
        x:100,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType : {show: true, type: ['line', 'bar','stack', 'tiled']},
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
            name:'最大值',
            type:'line',
            data:[12.0, 14.9, 17.0, 33.2, 35.6, 86.7, 145.6, 172.2, 42.6, 30.0, 17.4, 13.3],
//          markPoint : {
//              data : [
//                  {type : 'max', name: '最大值'},
//                  {type : 'min', name: '最小值'}
//              ]
//          },
//          markLine : {
//              data : [
//                  {type : 'average', name: '平均值'}
//              ]
//          }
        },
         {
            name:'平均值',
            type:'line',
            data:[7.0, 9.9, 12.0, 28.2, 30.6, 76.7, 115.6, 132.2, 12.6, 20.0, 10.4, 8.3],
//          markPoint : {
//              data : [
//                  {type : 'max', name: '最大值'},
//                  {type : 'min', name: '最小值'}
//              ]
//          },
//          markLine : {
//              data : [
//                  {type : 'average', name: '平均值'}
//              ]
//          }
        },
        {
            name:'最小值',
            type:'line',
            data:[2.0, 4.9, 7.0, 13.2, 1.6, 66.7, 105.6, 102.2, 22.6, 10.0, 6.4, 3.3],
//          markPoint : {
//              data : [
//                  {type : 'max', name: '最大值'},
//                  {type : 'min', name: '最小值'}
//              ]
//          },
//          markLine : {
//              data : [
//                  {type : 'average', name: '平均值'}
//              ]
//          }
        },
       
    ]
};
myChart1.setOption(option);
