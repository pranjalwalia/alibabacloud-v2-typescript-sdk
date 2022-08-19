import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import Rds20140815, * as $Rds20140815 from '@alicloud/rds20140815';
import * as $tea from '@alicloud/tea-typescript';

import BaseModule from '../../common';
import {
	ICreateDatabase,
	ICreateDBInstance,
	IDeleteDatabase,
	IDeleteRDSInstance,
	IDescribeDBInstances,
	IListDatabases,
	IRestartRDSInstance,
} from './interfaces';
import { rdsRegions } from './utils';

class Rds extends BaseModule {
	private _client: Rds20140815;

	/**
	 * @param accessKeyId
	 * @param accessKeySecret
	 * @return Client
	 * @throws Exception
	 */
	protected _createClient(
		accessKeyId: string,
		accessKeySecret: string,
		regionId: rdsRegions
	): Rds20140815 {
		const config = new $OpenApi.Config({
			accessKeyId: accessKeyId,
			accessKeySecret: accessKeySecret,
		});
		config.endpoint = 'rds.aliyuncs.com';
		return new Rds20140815(config);
	}

	constructor(
		accessKeyId: string,
		accessKeySecret: string,
		regionId: rdsRegions
	) {
		super(accessKeyId, accessKeySecret, regionId);
		this._client = this._createClient(accessKeyId, accessKeySecret, regionId);
	}

	createDBInstance(params: ICreateDBInstance): Promise<any> {
		const createInstanceRequest = new $Rds20140815.CreateDdrInstanceRequest({
			...params,
		});
		return this._client.createDBInstance(createInstanceRequest);
	}

	listRDSInstances(params: IDescribeDBInstances): Promise<any> {
		const describeDBInstancesRequest =
			new $Rds20140815.DescribeDBInstancesRequest({ ...params });
		return this._client.describeDBInstances(describeDBInstancesRequest);
	}

	restartRDSInstance(params: IRestartRDSInstance): Promise<any> {
		const restartDBInstanceRequest = new $Rds20140815.RestartDBInstanceRequest({
			...params,
		});
		return this._client.restartDBInstance(restartDBInstanceRequest);
	}

	deleteRDSInstance(params: IDeleteRDSInstance): Promise<any> {
		const deleteDBInstanceRequest = new $Rds20140815.DeleteDBInstanceRequest({
			...params,
		});
		return this._client.deleteDBInstance(deleteDBInstanceRequest);
	}

	createDatabase(params: ICreateDatabase): Promise<any> {
		const createDatabaseRequest = new $Rds20140815.CreateDatabaseRequest({
			...params,
		});
		return this._client.createDatabase(createDatabaseRequest);
	}

	listDatabases(params: IListDatabases): Promise<any> {
		const describeDatabasesRequest = new $Rds20140815.DescribeDatabasesRequest({
			...params,
		});
		return this._client.describeDatabases(describeDatabasesRequest);
	}

	deleteDatabase(params: IDeleteDatabase): Promise<any> {
		const deleteDatabaseRequest = new $Rds20140815.DeleteDatabaseRequest({
			...params,
		});
		return this._client.deleteDatabase(deleteDatabaseRequest);
	}
}

export default Rds;
