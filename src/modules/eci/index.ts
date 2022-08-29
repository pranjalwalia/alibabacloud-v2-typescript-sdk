import Eci20180808, * as $Eci20180808 from '@alicloud/eci20180808';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import * as $tea from '@alicloud/tea-typescript';

// ref: https://github.com/blizzardzheng/aliyun-eci-node-sdk/tree/403a323d71900cf669c1e5c79d7b75b6a57deb08
import BaseModule from '../../common';
import {
	ICreateContainerGroup,
	IDeleteContainerGroup,
	IDescribeContainerGroup,
	IExecContainerCommand,
	IRestartContainerGroup,
} from './interfaces';

class Eci extends BaseModule {
	private _client: Eci20180808;

	protected _createClient(
		accessKeyId: string,
		accessKeySecret: string,
		regionId: string | null
	) {
		const config = new $OpenApi.Config({
			accessKeyId,
			accessKeySecret,
			regionId: regionId || 'cn-hangzhou', //default regionId, to be overriden via setRegion()
		});
		config.endpoint = 'eci.aliyuncs.com';
		return new Eci20180808(config);
	}

	public setRegion(region: string) {
		const config = new $OpenApi.Config({
			accessKeyId: this._accessKeyId,
			accessKeySecret: this._accessKeySecret,
			regionId: region,
		});
		config.endpoint = 'eci.aliyuncs.com';
		this._client = new Eci20180808(config);
		return this._client;
	}

	constructor(
		accessKeyId: string,
		accessKeySecret: string,
		regionId: string | null
	) {
		super(accessKeyId, accessKeySecret, regionId || 'cn-hangzhou');
		this._client = this._createClient(accessKeyId, accessKeySecret, regionId);
	}

	public createContainerGroup(params: ICreateContainerGroup): Promise<any> {
		const createContainerGroupRequest =
			new $Eci20180808.CreateContainerGroupRequest({ ...params });
		return this._client.createContainerGroup(createContainerGroupRequest);
	}

	public deleteContainerGroup(params: IDeleteContainerGroup): Promise<any> {
		const deleteContainerGroupRequest =
			new $Eci20180808.DeleteContainerGroupRequest({ ...params });
		return this._client.deleteContainerGroup(deleteContainerGroupRequest);
	}

	public restartContainerGroup(params: IRestartContainerGroup): Promise<any> {
		const restartContainerGroupRequest =
			new $Eci20180808.RestartContainerGroupRequest({ ...params });
		return this._client.restartContainerGroup(restartContainerGroupRequest);
	}

	public describeContainerGroups(
		params: IDescribeContainerGroup
	): Promise<any> {
		const describeContainerGroupsRequest =
			new $Eci20180808.DescribeContainerGroupsRequest({ ...params });
		return this._client.describeContainerGroups(describeContainerGroupsRequest);
	}

	/**
	 * @param regionId: cn-hangzhou
	 * @param containerGroupId: The ID of the container group.
	 * @param containerName: The name of the container.
	 * @param command: A sequence of commands to execute inside the container. Up to 20 commands, and a single command can be up to 256 characters long. When executing multiple commands, the string needs to be passed in JSON format, for example: ["/bin/sh", "-c", "ls -a"].
	 */
	public execContainerCommand(params: IExecContainerCommand): Promise<any> {
		const execContainerGroupCommandRequest =
			new $Eci20180808.ExecContainerCommandRequest({ ...params });
		return this._client.execContainerCommand(execContainerGroupCommandRequest);
	}
}

export default Eci;
