import path from 'path';

import AliCloud from '../../src';

const instance = new AliCloud(
	'LTAI5t6qJNPkyRb6srqM8Mxk',
	'T1evDHwVE56JLera3Q0TaEWR6pK1PP'
);

const instanceOperations = {
	create: async () => {
		try {
			const res = await instance.rds.createDBInstance({
				DBInstanceClass: 'rds.mysql.t1.small',
				regionId: 'ap-southeast-1',
				engine: 'MySQL',
				engineVersion: '5.6',
				DBInstanceStorage: 10,
				DBInstanceNetType: 'Intranet',
				securityIPList: '0.0.0.0/0',
				payType: 'Postpaid',
				DBInstanceStorageType: 'local_ssd',
			});
			console.log(res);
		} catch (err) {
			console.error(err);
		}
	},
	delete: async () => {
		try {
			const res = await instance.rds.deleteRDSInstance({
				DBInstanceId: 'rm-1udg1v5w25c8gmpx3',
			});
			console.log(res);
		} catch (err) {
			console.error(err);
		}
	},
	list: async () => {
		try {
			const res = await instance.rds.listRDSInstances({
				regionId: 'ap-southeast-1',
			});
			console.log(res);
		} catch (err) {
			console.error(err);
		}
	},
};

if (instance) {
	// instanceOperations.create();
	// instanceOperations.list();
	// instanceOperations.delete();
}
