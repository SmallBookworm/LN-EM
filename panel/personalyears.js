var chart3;
$(function() {
			var data = [
			        	{name : '2012年',value : 104300,color:'#4572a7'},
			        	{name : '2013年',value : 95790,color:'#4572a7'},
			        	{name : '2014年',value : 94020,color:'#4572a7'},
			        	{name : '2015年',value : 80410,color:'#4572a7'},
			        	{name : '2016年',value : 78650,color:'#4572a7'},
			        	{name : '2017年',value : 71850,color:'#4572a7'},
		        	];
			
				chart3 = new iChart.Column2D({
				render : 'personalyears',
				data : data,
				title : {
					text : '水电站历年发电量对比图',
					color : '#3e576f'
				},
				subtitle : {
					text : '',
					color : '#6d869f'
				},
				footnote : {
					text : '',
					color : '#909090',
					fontsize : 11,
					padding : '0 38'
				},
				width : 500,
				height : 300,
				label : {
					fontsize:11,
					textAlign:'right',
					textBaseline:'middle',
					rotate:-45,
					color : '#666666'
				},
				tip:{
					enable:true,
					listeners:{
						 //tip:提示框对象、name:数据名称、value:数据值、text:当前文本、i:数据点的索引
						parseText:function(tip,name,value,text,i){
							//将数字进行千位格式化
							var f = new String(value);
							f = f.split("").reverse().join("").replace(/(\d{3})/g,"$1,").split("").reverse();
							if(f[0]==','){
								f.shift();
							}	
							f = f.join("");
							
							return name+"发电量:<br/>"+f+"KW/h<br/>占历年比重:<br/>"+(value/this.get('total') * 100).toFixed(2)+ '%';
						}
					}
				},
				shadow : true,
				shadow_blur : 2,
				shadow_color : '#aaaaaa',
				shadow_offsetx : 1,
				shadow_offsety : 0,
				column_width : 62,
				sub_option : {
					label : false,
					border : {
						width : 2,
						color : '#ffffff'
					}
				},
				coordinate : {
					background_color : null,
					grid_color : '#c0c0c0',
					width : 350,
					height:170,
					axis : {
						color : '#c0d0e0',
						width : [0, 0, 1, 0]
					},
					scale : [{
						position : 'left',
						start_scale : 0,
						end_scale : 110000,
						scale_space : 10000,
						scale_enable : false,
						label : {
							fontsize:11,
							color : '#666666'
						},
						listeners:{
							parseText:function(t,x,y){
								return {text:t}
							}
						 }
					}]
				}
			});
			
			//利用自定义组件构造左侧说明文本
			chart3.plugin(new iChart.Custom({
					drawFn:function(){
						//计算位置
						var coo = chart3.getCoordinate(),
							x = coo.get('originx'),
							y = coo.get('originy');
						//在左上侧的位置，渲染一个单位的文字
						chart3.target.textAlign('start')
						.textBaseline('bottom')
						.textFont('600 11px Verdana')
						.fillText('发电量(KW/h)',x-40,y-10,false,'#6d869f');
						
					}
			}));
			
			chart3.draw();
		});
		