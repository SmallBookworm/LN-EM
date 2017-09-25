
var alarminfo = [
        {name:'电机过热',number:'0'},
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
	var cell=document.getElementById("dianji");
	cell.appendChild(createDiv);
}

function alarm(){
	window.open ('alarm.html', 'newwindow', 'height=500, width=700, top=100, left=400, toolbar=no, menubar=no, scrollbars=no, resizable=no,location=n o, status=no')
}