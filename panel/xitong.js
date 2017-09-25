var alarminfo = [
        {name:'电机失速',number:'0'},
        {name:'功率侧缺相',number:'0'},        
        {name:'极对数设置错误',number:'0'},
        {name:'转速步长自检失败',number:'0'},
        {name:'转速限值自检失败',number:'0'},
        {name:'（自检）转速不为零故障',number:'0'},
        {name:'（自检）开机水位过低',number:'0'},
        {name:'（通用）水位计故障',number:'0'},
        {name:'（通用）逆功故障',number:'0'},
        {name:'（通用）调速器电源反向',number:'0'},
        {name:'（手动）水位极低故障',number:'0'},
        {name:'（自动）开机水位过低故障',number:'0'},
        {name:'（自动）运行水位过低故障',number:'0'},
        {name:'（手动）开度与转速不匹配故障',number:'0'},
        {name:'（自动）开度与转速不匹配故障',number:'0'},
        {name:'功率绕组外接电源绕组相序错误',number:'0'},
        
    ];

for(var i=0;i<alarminfo.length;i++){
	var createDiv=document.createElement("div"); 
	//createDiv.appendChild("personalalarm");	
	createDiv.id=i;
	createDiv.innerHTML=alarminfo[i].name+"<br>"+"数量："+alarminfo[i].number;
	createDiv.className="svg-icon-1";
	createDiv.style.background="#8DDDFF";
	createDiv.style.width=4.1+"rem";
	createDiv.style.textAlign="center";
	createDiv.style.margin=0.3+"rem";
	createDiv.style.marginTop=0.4+"rem";
	createDiv.style.fontSize=0.33+"rem";
	createDiv.style.borderRadius=0.1+"rem";
	createDiv.style.float="left";
	var cell=document.getElementById("xitong");
	cell.appendChild(createDiv);
}


function alarm(){
	window.open ('alarm.html', 'newwindow', 'height=500, width=700, top=100, left=400, toolbar=no, menubar=no, scrollbars=no, resizable=no,location=n o, status=no')
}

