
var data=[{days:'301',equipment:'6',electricity:'0.0',alarmnum:'0'},
{sdzname:'水电站3333',sdzid:'3',name:'测试机组0006||测试机组0001',id:'6||1'},
{sdzname:'水电站2222',sdzid:'2',name:'测试机组0004||测试机组0003||测试机组0002',id:'4||3||2'},
{sdzname:'2222水电站',sdzid:'5',name:'测试机组0005',id:'5'}];

var rundays=data[0].days;
document.getElementById("day").innerHTML=rundays;

var equip=data[0].equipment;
document.getElementById("equipnum").innerHTML=equip;

var ele=data[0].electricity;
document.getElementById("dayele").innerHTML=ele;

var totalalarm=data[0].alarmnum;
document.getElementById("talarm").innerHTML=totalalarm;
