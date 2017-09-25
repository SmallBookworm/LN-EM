var alarminfo = [
        {name:'系统故障',number:'8'},
        {name:'控制柜变流器故障',number:'8'},
        {name:'控制柜PLC故障',number:'8'},
        {name:'电机故障',number:'8'},
        {name:'调速器故障',number:'8'},
];

for(var i=0;i<alarminfo.length;i++){
	var createDiv=document.createElement("div"); 
	//createDiv.appendChild("personalalarm");	
	createDiv.id=i;
	createDiv.innerHTML=alarminfo[i].name+"<br>"+"数量："+alarminfo[i].number;
	createDiv.className="svg-icon-1";
	createDiv.style.background="#8DDDFF";
	createDiv.style.width=6.1+"rem";
	createDiv.style.height=4+"rem";
	createDiv.style.height=4+"rem";
	createDiv.style.textAlign="center";
	createDiv.style.margin=0.3+"rem";
	createDiv.style.marginTop=0.4+"rem";
	createDiv.style.paddingTop=1.1+"rem";
	createDiv.style.fontSize=0.4+"rem";
	createDiv.style.borderRadius=0.1+"rem";
	createDiv.style.float="left";
	var cell=document.getElementById("personalalarm");
	cell.appendChild(createDiv);
}
