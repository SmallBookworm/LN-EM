var alarminfo = [
       {name:'CPLD故障',number:'1'},
        {name:'铁电故障',number:'1'},
        {name:'变频输入接触器故障',number:'1'},
        {name:'预充电接触器故障',number:'1'},
        {name:'变频输出接触器故障',number:'1'},
        {name:'频敏接入故障',number:'1'},
        {name:'频敏短接接触器故障',number:'1'},
        {name:'高压断路器故障',number:'1'},
        {name:'变频器风机故障',number:'1'},
        {name:'电机风机故障',number:'1'},
        {name:'急停故障',number:'1'},
        {name:'逆变IGBT过流',number:'0'},
        {name:'直流母线过压(硬件)',number:'0'},
        {name:'直流母线过压(软件)',number:'0'},
        {name:'直流母线欠压(硬件)',number:'0'},
        {name:'直流母线欠压(软件)',number:'0'},
        {name:'控制侧硬件过流_CPLD',number:'0'},
        {name:'功率侧硬件过流_CPLD',number:'0'},
        {name:'直流母线过压_CPLD',number:'0'},
        {name:'功率开关两侧电压偏差过大',number:'0'},
        {name:'功率侧过压',number:'0'},
        {name:'控制侧过载(硬件)',number:'0'},
        {name:'功率侧过载(硬件)',number:'0'},
        {name:'控制侧过载(软件)',number:'0'},
        {name:'功率侧过载(软件)',number:'0'},
        {name:'控制侧输入缺相',number:'0'},
        {name:'控制侧输出缺相',number:'0'},
        {name:'逆变IGBT 过热',number:'0'},
        {name:'变频器过热 (柜内)',number:'0'},
        {name:'Speed600TimeOut',number:'0'},
        {name:'Speed700TimeOut',number:'0'},        
        {name:'控制侧过压',number:'0'},
        {name:'PFC交流侧软件过流',number:'0'},
        {name:'PFC交流侧硬件过流',number:'0'},
        {name:'PFC交流侧硬件过流_CPLD',number:'0'},
        {name:'参数自检失败',number:'0'},
        {name:'减速停机超时故障',number:'0'},
        {name:'电网电压锁相失败',number:'0'},
        {name:'电流检测故障',number:'0'},
        {name:'功率单元均流故障',number:'0'},
        {name:'PFC启动失败',number:'0'},
        {name:'PFC igbt硬件过流',number:'0'},
        {name:'PLC系统故障',number:'0'},
        {name:'PFC电压指令越界',number:'0'},
        {name:'逆变电压指令跨界',number:'0'},
        {name:'水电柜开关逻辑错误',number:'0'},
        {name:'逆变IGBT过流_CPLD',number:'0'},
        {name:'整流IGBT过流_CPLD',number:'0'},
        {name:'DSP心跳故障_CPLD',number:'0'},
        {name:'CPLD保护',number:'0'},
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
	var cell=document.getElementById("zhukong");
	cell.appendChild(createDiv);
}

function alarm(){
	window.open ('alarm.html', 'newwindow', 'height=500, width=700, top=100, left=400, toolbar=no, menubar=no, scrollbars=no, resizable=no,location=n o, status=no')
}