import Dds20151201, * as $Dds20151201 from '@alicloud/dds20151201';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import * as $tea from '@alicloud/tea-typescript';

import BaseModule from '../../common';
import {
	ICreateDBInstance,
	IDeleteDBInstance,
	IDescribeDBInstanceAttribute,
	IDescribeDBInstances,
	IRestartDBInstance,
} from './interfaces';
import { ddsRegions } from './utils';

class Client extends BaseModule {
	private _client: Dds20151201;

	/**
	 * @param accessKeyId
	 * @param accessKeySecret
	 * @return Client
	 * @throws Exception
	 */
	protected _createClient(
		accessKeyId: string,
		accessKeySecret: string,
		_regionId: ddsRegions
	): Dds20151201 {
		const config = new $OpenApi.Config({
			accessKeyId: accessKeyId,
			accessKeySecret: accessKeySecret,
		});
		config.endpoint = 'mongodb.aliyuncs.com';
		return new Dds20151201(config);
	}

	constructor(
		accessKeyId: string,
		accessKeySecret: string,
		regionId: ddsRegions
	) {
		super(accessKeyId, accessKeySecret, regionId);
		this._client = this._createClient(accessKeyId, accessKeySecret, regionId);
	}

	createDBInstance(params: ICreateDBInstance): Promise<any> {
		const createInstanceRequest = new $Dds20151201.CreateDBInstanceRequest({
			...params,
		});
		return this._client.createDBInstance(createInstanceRequest);
	}

	listDBInstances(params: IDescribeDBInstances): Promise<any> {
		const describeDBInstancesRequest =
			new $Dds20151201.DescribeDBInstancesRequest({ ...params });
		return this._client.describeDBInstances(describeDBInstancesRequest);
	}

	describeDBInstance(params: IDescribeDBInstanceAttribute): Promise<any> {
		const describeDBInstanceAttributeRequest =
			new $Dds20151201.DescribeDBInstanceAttributeRequest({ ...params });
		return this._client.describeDBInstanceAttribute(
			describeDBInstanceAttributeRequest
		);
	}

	restartDBInstance(params: IRestartDBInstance): Promise<any> {
		const restartDBInstanceRequest = new $Dds20151201.RestartDBInstanceRequest({
			...params,
		});
		return this._client.restartDBInstance(restartDBInstanceRequest);
	}

	deleteDBInstance(params: IDeleteDBInstance): Promise<any> {
		const deleteDBInstanceRequest = new $Dds20151201.DeleteDBInstanceRequest({
			...params,
		});
		return this._client.deleteDBInstance(deleteDBInstanceRequest);
	}
}

export default Client;
