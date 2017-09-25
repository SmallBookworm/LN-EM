//百度地图(首页)
var points = [  
{"lng":112.878384,"lat":28.326652,"url":"#","id":0,"name":"水电站0","state":"0","electricity":"1000KW.h","power":"100KW","level":"100m","alarm":"0"},  
{"lng":112.879384,"lat":28.236752,"url":"#","id":1,"name":"水电站1","state":"1","electricity":"1000KW.h","power":"100KW","level":"100m","alarm":"5"},  
{"lng":112.877384,"lat":28.146852,"url":"#","id":2,"name":"水电站2","state":"2","electricity":"1000KW.h","power":"100KW","level":"100m","alarm":"0"},
{"lng":112.777884,"lat":28.141852,"url":"#","id":3,"name":"水电站3","state":"0","electricity":"1000KW.h","power":"100KW","level":"100m","alarm":"0"},
{"lng":112.976884,"lat":28.151852,"url":"#","id":4,"name":"水电站4","state":"0","electricity":"1000KW.h","power":"100KW","level":"100m","alarm":"0"},
]; 
//var map = new BMap.Map("baiduMap");  //创建Map实例
//var point = new BMap.Point(112.878384,28.226652);  //创建Point位置实例
//map.centerAndZoom(point, 13);  //设置地图中心点及缩放级别
//map.addControl(new BMap.MapTypeControl());  //添加地图类型控件
//map.setMapStyle({
//      styleJson: [{
//          "featureType": "road",
//          "elementType": "all",
//          "stylers": {
//            "visibility": "off"
//          }
//        },
//        {
//          "featureType": "label",
//          "elementType": "all",
//          "stylers": {
//            "visibility": "off"
//          }
//        },
//        {
//          "featureType": "poi",
//          "elementType": "all",
//          "stylers": {
//            "visibility": "off"
//          }
//        }
//      ]
//    });
//var marker = new BMap.Marker(point);  //创建一个Marker点
//map.addOverlay(marker);  //将Marker点覆盖到地图上    
//marker.setAnimation(BMAP_ANIMATION_BOUNCE);  //使Marker点跳动起来
//map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放


function addMarker(points) {
    //循环建立标注点
    for(var i=0, pointsLen = points.length; i<pointsLen; i++) {
        var point = new BMap.Point(points[i].lng, points[i].lat); //将标注点转化成地图上的点
        var myIcon ;
        if(points[i].state==0)
	        myIcon= new BMap.Icon("../images/tag/green.png", new BMap.Size(53, 55), {   
			    offset: new BMap.Size(100, 250),  
			    imageOffset: new BMap.Size(0, 0)  		  
			  });
		else if(points[i].state==1)
	        myIcon= new BMap.Icon("../images/tag/red.png", new BMap.Size(53, 55), {   
			    offset: new BMap.Size(100, 250),  
			    imageOffset: new BMap.Size(0, 0)  		  
			  });
		else if(points[i].state==2)
	        myIcon= new BMap.Icon("../images/tag/ash.png", new BMap.Size(53, 55), {   
			    offset: new BMap.Size(100, 250),  
			    imageOffset: new BMap.Size(0, 0)  		  
			  });
        var marker = new BMap.Marker(point,{icon:myIcon}); //将点转化成标注点
          
        map.addOverlay(marker);  //将标注点添加到地图上
        var label = new BMap.Label("水电站"+i,{offset:new BMap.Size(65,20)});
		marker.setLabel(label);  
		label.setStyle({
        //color: "red",
        //fontSize: "9px",
        //backgroundColor: "0.05",
        border: "0",
        //fontWeight: "bold"
  });
        marker.setAnimation(BMAP_ANIMATION_BOUNCE);  //使Marker点跳动起来
        //添加监听事件      
        (function() {
            var thePoint = points[i];
            marker.addEventListener("click",
            //显示信息的方法
                function() {
                showInfo(this,thePoint);
            });
         })();  
    }
}

function showInfo(thisMarker,point) {
    //获取点的信息
    var sContent = 
    '<ul style="margin:0 0 5px 0;padding:0.2em 0">'       
    +'<li style="line-height: 26px;font-size: 15px;">'  
    +'<span style="width: 50px;display: inline-block;">名称：</span>' + point.name + '</li>'
    +'<li style="line-height: 26px;font-size: 15px;">'  
    +'<span style="width: 50px;">电量产出值：</span>' + point.electricity + '</li>' 
    +'<li style="line-height: 26px;font-size: 15px;">'  
    +'<span style="width: 50px;">发电机功率：</span>' + point.power + '</li>' 
    +'<li style="line-height: 26px;font-size: 15px;">'  
    +'<span style="width: 50px;display: inline-block;">水位：</span>' + point.level + '</li>' 
    +'<li style="line-height: 26px;font-size: 15px;">'  
    +'<span style="width: 50px;">报警数量：</span>' + point.alarm + '</li>' 
    +'<li style="line-height: 26px;font-size: 15px;"><span style="width: 50px;display: inline-block;">查看：</span><a href="'+point.url+'">切换到该水电站</a></li>'  
    +'</ul>';
    var infoWindow = new BMap.InfoWindow(sContent); //创建信息窗口对象
    thisMarker.openInfoWindow(infoWindow); //图片加载完后重绘infoWindow
}

var map = new BMap.Map("baiduMap");    
map.centerAndZoom(new BMap.Point(112.878384,28.226652), 12);  // 设置中心点
map.centerAndZoom( "长沙");       //指定中心城市
map.setCurrentCity("长沙");          
//map.addControl(new BMap.MapTypeControl());  //设置可拖拽 
map.addControl(new BMap.MapTypeControl({mapTypes: [BMAP_NORMAL_MAP]})); 
map.enableScrollWheelZoom(true);  //添加滚轮缩放   
map.setMapStyle({
        styleJson: [{
            "featureType": "road",
            "elementType": "all",
            "stylers": {
              "visibility": "off"
            }
          },
          {
            "featureType": "label",
            "elementType": "all",
            "stylers": {
              "visibility": "off"
            }
          },
          {
            "featureType": "poi",
            "elementType": "all",
            "stylers": {
              "visibility": "off"
            }
          }
        ]
     });
addMarker(points); //添加标注
