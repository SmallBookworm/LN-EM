angular.module('myApp', []).controller('alarminfoCtrl', function($scope) {
    $scope.alarminfo = [
        {name:'停机自检转速不为零故障',number:'0'},
        {name:'停机自检DSP异常',number:'0'},
        {name:'停机自检开机旋钮故障',number:'0'},
        {name:'停机自检刹车旋钮故障',number:'0'},
        {name:'停机自检调速器旋钮故障',number:'0'},
        {name:'停机自检调速器初始故障',number:'0'},
        {name:'停机自检开机水位过低',number:'0'},
        {name:'DSP故障',number:'0'},
        {name:'急停按钮按下',number:'0'},
        {name:'调速器力矩限位触发',number:'0'},
        {name:'调速器回路异常',number:'0'},
        {name:'转速过高',number:'0'},
        {name:'浪涌保护器',number:'0'},
        {name:'通讯故障',number:'0'},
        {name:'水位计故障',number:'0'},
        {name:'逆功故障',number:'0'},
        {name:'警告:导叶全关',number:'0'},
        {name:'警告:导叶全开',number:'0'},
        {name:'警告:高水位',number:'0'},
        {name:'警告:低水位',number:'0'},
        {name:'警告:极低水位',number:'0'},
        {name:'自动：流程初始化故障',number:'0'},
        {name:'离网超时故障',number:'0'},
        {name:'自动：速度未稳定故障',number:'0'},
        {name:'自动：功率未稳定故障',number:'0'},
        {name:'开机水位过低故障',number:'0'},
        {name:'运行水位过低故障',number:'0'},
        {name:'并网超时故障',number:'0'},
        {name:'离网超时故障',number:'0'},
        {name:'MPPT：速度未稳定故障',number:'0'},
        {name:'MPPT：功率未稳定故障',number:'0'},
        {name:'手动：初始状态异常',number:'0'},
        {name:'并网超时故障',number:'0'},
        {name:'速度未稳定故障',number:'0'},
        {name:'预留',number:'0'},
        {name:'水位极低故障',number:'0'},
        {name:'手动：开度与转速不匹配故障',number:'0'},
        {name:'自动：开度与转速不匹配故障',number:'0'},
    ];
});
