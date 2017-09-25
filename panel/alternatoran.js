var myChart3 = echarts.init(document.getElementById('alternatoran'));
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
        data:['2017年6月','2016年5月']
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
            name:'2017年6月',
            type:'bar',
            data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 35.6, 62.2, 32.6, 20.0, 6.4, 3.3,2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 35.6, 62.2, 32.6, 20.0, 6.4, 3.3, 76.7, 35.6, 62.2, 32.6, 20.0, 6.4, 3.3],
            
//          markLine : {
//              data : [
//                  {type : 'average', name: '平均值'}
//              ]
//          }
        },
        
        {
            name:'2016年5月',
            type:'bar',
            data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 35.6, 62.2, 32.6, 20.0, 6.4, 3.3,2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 35.6, 62.2, 32.6, 20.0, 6.4, 3.3, 76.7, 35.6, 62.2, 32.6, 20.0, 6.4, 3.3],
            
//          markLine : {
//              data : [
//                  {type : 'average', name: '平均值'}
//              ]
//          }
        },
        
    ],

};
myChart3.setOption(option);
