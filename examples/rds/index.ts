require('dotenv').config();
import AliCloud from '../../src';
const { accessKeyId, accessKeySecret } = process.env;
const instance = new AliCloud(
	accessKeyId || 'key',
	accessKeySecret || 'secret'
);

/*
Relevant Links:
    1. console: https://rdsnext.console.aliyun.com/rdsList/cn-hangzhou/basic
    2. RDS instance attributes: https://next.api.alibabacloud.com/document/Rds/2014-08-15/DescribeDBInstanceAttribute
    3. RDS instance types: https://help.aliyun.com/document_detail/276975.htm
*/

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
