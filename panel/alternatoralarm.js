var alarminfo = [
        {name:'水电站1',number:'8',xitong:'1',zhukong:'1',PLC:'1',dianji:'1',tspeed:'4'},
        {name:'水电站2',number:'8',xitong:'1',zhukong:'1',PLC:'1',dianji:'1',tspeed:'4'},
        {name:'水电站3',number:'8',xitong:'1',zhukong:'1',PLC:'1',dianji:'1',tspeed:'4'},
        {name:'水电站4',number:'8',xitong:'1',zhukong:'1',PLC:'1',dianji:'1',tspeed:'4'},
        {name:'水电站5',number:'8',xitong:'1',zhukong:'1',PLC:'1',dianji:'1',tspeed:'4'},
        {name:'水电站6',number:'8',xitong:'1',zhukong:'1',PLC:'1',dianji:'1',tspeed:'4'},
        {name:'水电站7',number:'8',xitong:'1',zhukong:'1',PLC:'1',dianji:'1',tspeed:'4'},
        {name:'水电站8',number:'8',xitong:'1',zhukong:'1',PLC:'1',dianji:'1',tspeed:'4'},
        {name:'水电站9',number:'8',xitong:'1',zhukong:'1',PLC:'1',dianji:'1',tspeed:'4'},
    ];

for(var i=0;i<alarminfo.length;i++){
	var createDiv=document.createElement("div"); 
	//createDiv.appendChild("personalalarm");	
	createDiv.id=i;
	createDiv.innerHTML=alarminfo[i].name+"<br>"+"数量："+alarminfo[i].number+"<br><br>"+"系统故障："+alarminfo[i].xitong+"<br>"+"控制柜变流器故障："+alarminfo[i].zhukong+"<br>"+"控制柜PLC故障："+alarminfo[i].PLC+"<br>"+"电机故障："+alarminfo[i].dianji+"<br>"+"调速器故障："+alarminfo[i].tspeed;
	createDiv.className="svg-icon-1";
	createDiv.style.background="#8DDDFF";
	createDiv.style.width=6.1+"rem";
	createDiv.style.height=4+"rem";
	createDiv.style.height=4+"rem";
	createDiv.style.textAlign="center";
	createDiv.style.margin=0.3+"rem";
	createDiv.style.marginTop=0.4+"rem";
	createDiv.style.fontSize=0.33+"rem";
	createDiv.style.borderRadius=0.1+"rem";
	createDiv.style.float="left";
	var cell=document.getElementById("alternatoralarm");
	cell.appendChild(createDiv);
}

