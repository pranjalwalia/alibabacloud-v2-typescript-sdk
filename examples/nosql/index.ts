require('dotenv').config();
import AliCloud from '../../src';
import {
	ICreateDBInstance,
	IDescribeDBInstances,
} from '../../src/modules/nosql/interfaces';

const { accessKeyId, accessKeySecret } = process.env;

const instance = new AliCloud(
	accessKeyId || 'LTAI5t6qJNPkyRb6srqM8Mxk',
	accessKeySecret || 'T1evDHwVE56JLera3Q0TaEWR6pK1PP'
);
/*
Relevant Links:
    https://next.api.aliyun.com/document/Dds/2015-12-01/CreateDBInstance
    https://www.alibabacloud.com/help/doc-detail/71901.html
*/

const ddsOperations = {
	create: async (): Promise<void> => {
		try {
			const res = await instance.nosql.createDBInstance({
				regionId: 'ap-southeast-1',
				engine: 'MongoDB',
				engineVersion: '4.2',
				DBInstanceClass: 'dds.mongo.standard',
				DBInstanceStorage: 10, // GB
			});
			console.log(res);
		} catch (err) {
			console.error(err);
		}
	},

	delete: async (): Promise<void> => {
		try {
			const res = await instance.nosql.deleteDBInstance({
				DBInstanceId: 'dds-gs58537d0d9724c4',
			});
			console.log(res);
		} catch (err) {
			console.error(err);
		}
	},

	list: async (): Promise<void> => {
		try {
			const res = await instance.nosql.listDBInstances({});
			console.log(JSON.stringify(res.body.DBInstances));
		} catch (err) {
			console.error(err);
		}
	},

	describe: async (): Promise<void> => {
		try {
			const res = await instance.nosql.describeDBInstance({
				DBInstanceId: 'dds-gs5581f86ac37b14',
			});
			console.log(JSON.stringify(res.body.DBInstances));
		} catch (err) {
			console.error(err);
		}
	},
};

if (instance) {
	// ddsOperations.create();
	// ddsOperations.list();
	// ddsOperations.describe();
	// ddsOperations.delete();
}
