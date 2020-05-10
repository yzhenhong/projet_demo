let rou = [
		{
			"checked": false,
			"child": [
				{
					"checked": false,
					"child": null,
					"component": "home/index",
					"name": "index",
					"parentId": 48,
					"parentName": null,
					"path": "/home/index",
					"redirect": null,
					"show": "1",
					"sort": 0,
					"title": "首页"
				},
			],
			"component": "layout",
			"name": "home",
			"parentId": 0,
			"parentName": null,
			"path": "/home",
			"redirect": null,
			"show": "1",
			"sort": 0,
			"title": "首页"
		},
		{
			"checked": false,
			"child": [
				{
					"checked": false,
					"child": null,
					"component": "monitoring/service",
					"name": "service",
					"parentId": 48,
					"parentName": null,
					"path": "/monitoring/service",
					"redirect": null,
					"show": "1",
					"sort": 0,
					"title": "服务监测"
				},
				{
					"checked": false,
					"child": null,
					"component": "monitoring/quality",
					"name": "quality",
					"parentId": 48,
					"parentName": null,
					"path": "/monitoring/quality",
					"redirect": null,
					"show": "1",
					"sort": 0,
					"title": "服务质量监控"
				},
				{
					"checked": false,
					"child": null,
					"component": "monitoring/report",
					"name": "report",
					"parentId": 48,
					"parentName": null,
					"path": "/monitoring/report",
					"redirect": null,
					"show": "1",
					"sort": 0,
					"title": "自助报表设计"
				}
			],
			"component": "layout",
			"name": "monitoring",
			"parentId": 0,
			"parentName": null,
			"path": "/monitoring",
			"redirect": null,
			"show": "1",
			"sort": 1,
			"title": "运行监测"
		},
		{
			"checked": false,
			"child": [
				{
					"checked": false,
					"child": null,
					"component": "management/configuration",
					"name": "configuration",
					"parentId": 48,
					"parentName": null,
					"path": "/management/configuration",
					"redirect": null,
					"show": "1",
					"sort": 0,
					"title": "渠道配置"
				},
				{
					"checked": false,
					"child": null,
					"component": "management/service-authority",
					"name": "service-authority",
					"parentId": 48,
					"parentName": null,
					"path": "/management/service-authority",
					"redirect": null,
					"show": "1",
					"sort": 0,
					"title": "业务权限配置"
				},
			],
			"component": "layout",
			"name": "management",
			"parentId": 0,
			"parentName": null,
			"path": "/management",
			"redirect": null,
			"show": "1",
			"sort": 2,
			"title": "渠道管理"
		}
	]


module.exports = {
	rou,
}