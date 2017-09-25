var alarminfo = [
        {name:'（自检）开机旋钮故障',number:'0'},
        {name:'（自检）刹车旋钮故障',number:'0'},
        {name:'（自检）调速器旋钮故障',number:'0'},
        {name:'（通用）DSP故障',number:'0'},
        {name:'（通用）急停按钮故障',number:'0'},
        {name:'（通用）调速器回路故障',number:'0'},
        {name:'（通用）转速过高',number:'0'},
        {name:'（通用）浪涌保护故障',number:'0'},
        {name:'（通用）通讯故障',number:'0'},
        {name:'（自动）流程初始化故障',number:'0'},
        {name:'（自动）速度未稳定故障',number:'0'},
        {name:'（自动）功率未稳定故障',number:'0'},
        {name:'（自动）并网超时故障',number:'0'},
        {name:'（自动）离网超时故障',number:'0'},
        {name:'（手动）初始状态故障',number:'0'},
        {name:'（手动）速度未稳定故障',number:'0'},
        {name:'（手动）并网超时故障',number:'0'},
        {name:'（手动）离网超时故障',number:'0'},
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
	var cell=document.getElementById("PLC");
	cell.appendChild(createDiv);
}

function alarm(){
	window.open ('alarm.html', 'newwindow', 'height=500, width=700, top=100, left=400, toolbar=no, menubar=no, scrollbars=no, resizable=no,location=n o, status=no')
}
