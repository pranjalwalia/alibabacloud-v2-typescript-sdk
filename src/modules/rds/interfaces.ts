export interface ICreateDBInstance {
	regionId: string;
	engine: string; //MySQL SQLServer PostgreSQL PPAS MariaDB
	engineVersion: string;
	DBInstanceClass: string;
	DBInstanceStorage: number;
	DBInstanceNetType: string;
	securityIPList: string;
	payType: string;
	[key: string]: any;
}

export interface ICreateDatabase {
	DBInstanceId: string;
	DBName: string;
	characterSetName: string;
	[key: string]: any;
}

export interface IDescribeDBInstances {
	regionId: string;
	[key: string]: any;
}

export interface IListDatabases {
	DBInstanceId: string;
	pageSize?: number; // 30 (default), 50, 100
	[key: string]: any;
}

export interface IDeleteDatabase {
	DBInstanceId: string;
	DBName: string;
	[key: string]: any;
}

export interface IRestartRDSInstance {
	DBInstanceId: string;
	[key: string]: any;
}

export interface IDeleteRDSInstance {
	DBInstanceId: string;
	[key: string]: any;
}
