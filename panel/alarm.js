var json = [{
	time: '20170808-14:47',
	kind: '电机失速',
	remark: '未处理',
	level: '1',
	reason: '电机失速',
	suggest: '1、关闭电机     2、关闭电机     3断电'	
},
{
	time: '20170808-14:47',
	kind: '电机失速',
	remark: '未处理',
	level: '1',
	reason: '电机失速',
	suggest: '1、关闭电机     2、关闭电机     3断电'	
},
{
	time: '20170808-14:47',
	kind: '电机失速',
	remark: '未处理',
	level: '1',
	reason: '电机失速',
	suggest: '1、关闭电机     2、关闭电机     3断电'	
},
{
	time: '20170808-14:47',
	kind: '电机失速',
	remark: '未处理',
	level: '1',
	reason: '电机失速',
	suggest: '1、关闭电机     2、关闭电机     3断电'	
},
{
	time: '20170808-14:47',
	kind: '电机失速',
	remark: '未处理',
	level: '1',
	reason: '电机失速',
	suggest: '1、关闭电机     2、关闭电机     3断电'	
},
{
	time: '20170808-14:47',
	kind: '电机失速',
	remark: '未处理',
	level: '1',
	reason: '电机失速',
	suggest: '1、关闭电机     2、关闭电机     3断电'	
},
];

function detailFormatter(index, row) {
	return '<b>处理建议 :</b>' + json[0].suggest + '&nbsp;&nbsp;&nbsp;';
}

$('#table').bootstrapTable({
	idField: 'username',
	pageSize: 5,
	pageList: [10, 25, 50],
	exportDataType: 'all',
	exportOptions: {
		fileName: '报警信息'
	},
	detailFormatter: detailFormatter,
	columns: [{
		field: 'time',
		title: '报警时间',
		align: 'center',
	}, {
		field: 'kind',
		title: '报警类别',
		align: 'center',
	}, {
		field: 'reason',
		title: '故障原因',
		align: 'center',
		sortable: true
	}, {
		field: 'level',
		title: '报警级别',
		align: 'center',
		sortable: true,
		visible: true,
	}, {
		field: 'remark',
		title: '备 注',
		align: 'center'
	}],
	data: json
});