export interface ICreateDBInstance {
	regionId: string;
	engine: string;
	engineVersion: string;
	DBInstanceClass: string;
	DBInstanceStorage: number;
	[key: string]: any;
}

export interface IDescribeDBInstances {
	regionId?: string;
	pageSize?: number; // 30(default), 50, 100
	[key: string]: any;
}

export interface IDescribeDBInstanceAttribute {
	DBInstanceId?: string;
	[key: string]: any;
}

export interface IRestartDBInstance {
	DBInstanceId: string;
	[key: string]: any;
}

export interface IDeleteDBInstance {
	DBInstanceId: string;
	[key: string]: any;
}
