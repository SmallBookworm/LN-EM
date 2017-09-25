var myChart1 = echarts.init(document.getElementById('personalmom'));
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
        data:['2017年']
    },
    toolbox: {
        show : true,
        x:100,
        feature : {
            mark : {show: true},
            dataView : {show: false, readOnly: false},
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
            name:'2017年',
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
        myChart1.setOption(option);
