import * as $Eci20180808 from '@alicloud/eci20180808';

export interface ICreateContainerGroup {
	regionId: string;
	containerGroupName: string;
	container: $Eci20180808.CreateContainerGroupRequestContainer[];
	[key: string]: any;
}

export interface IDeleteContainerGroup {
	regionId: string;
	containerGroupId: string;
	[key: string]: any;
}

export interface IRestartContainerGroup {
	regionId: string;
	containerGroupId: string;
	[key: string]: any;
}

export interface IDescribeContainerGroup {
	regionId: string;
	nextToken?: string;
	[key: string]: any;
}

export interface IExecContainerCommand {
	regionId: string;
	containerGroupId: string;
	containerName: string;
	command: string;
	[key: string]: any;
}
