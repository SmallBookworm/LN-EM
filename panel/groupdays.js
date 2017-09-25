$(function() {
			var data = [
			        	{name : '1日',value : 10430,color:'#4572a7'},
			        	{name : '2日',value : 9579,color:'#4572a7'},
			        	{name : '3日',value : 9402,color:'#4572a7'},
			        	{name : '4日',value : 8041,color:'#4572a7'},
			        	{name : '5日',value : 7865,color:'#4572a7'},
			        	{name : '6日',value : 7185,color:'#4572a7'},
			        	{name : '7日',value : 6568,color:'#4572a7'},
			        	{name : '8日',value : 5950,color:'#4572a7'},
			        	{name : '9日',value : 5723,color:'#4572a7'},
			        	{name : '10日',value : 5442,color:'#4572a7'},
			        	{name : '11日',value : 5442,color:'#4572a7'},
			        	{name : '12日',value : 6596,color:'#4572a7'},
			        	{name : '13日',value : 7456,color:'#4572a7'},
			        	{name : '14日',value : 6374,color:'#4572a7'},
			        	{name : '15日',value : 6831,color:'#4572a7'},
			        	{name : '16日',value : 6732,color:'#4572a7'},
			        	{name : '17日',value : 7632,color:'#4572a7'},
			        	{name : '18日',value : 7571,color:'#4572a7'},
			        	{name : '19日',value : 5474,color:'#4572a7'},
			        	{name : '20日',value : 7884,color:'#4572a7'},
			        	{name : '21日',value : 8746,color:'#4572a7'},
			        	{name : '22日',value : 7557,color:'#4572a7'},
			        	{name : '23日',value : 6470,color:'#4572a7'},
			        	{name : '24日',value : 6301,color:'#4572a7'},
			        	{name : '25日',value : 6181,color:'#4572a7'},
			        	{name : '26日',value : 7961,color:'#4572a7'},
			        	{name : '27日',value : 6293,color:'#4572a7'},
			        	{name : '28日',value : 8671,color:'#4572a7'},
			        	{name : '29日',value : 6301,color:'#4572a7'},
			        	{name : '30日',value : 5626,color:'#4572a7'},
			        	{name : '31日',value : 3002,color:'#4572a7'}
		        	];
			
			var chart = new iChart.Column2D({
				render : 'groupdays',
				data : data,
				title : {
					text : '集团当月发电量对比图',
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
							
							return name+"发电量:<br/>"+f+"KW/h<br/>占当月比重:<br/>"+(value/this.get('total') * 100).toFixed(2)+ '%';
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
					width : 420,
					height:220,
					axis : {
						color : '#c0d0e0',
						width : [0, 0, 1, 0]
					},
					scale : [{
						position : 'left',
						start_scale : 0,
						end_scale : 11000,
						scale_space : 1000,
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
			chart.plugin(new iChart.Custom({
					drawFn:function(){
						//计算位置
						var coo = chart.getCoordinate(),
							x = coo.get('originx'),
							y = coo.get('originy');
						//在左上侧的位置，渲染一个单位的文字
						chart.target.textAlign('start')
						.textBaseline('bottom')
						.textFont('600 11px Verdana')
						.fillText('发电量(KW/h)',x-40,y-10,false,'#6d869f');
						
					}
			}));
			
			chart.draw();
		});