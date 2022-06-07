import AliCloud from '../../src';

describe('unit tests for ali-wrapper', (): void => {
	const ACCESS_KEY_ID = 'accessKeyId';
	const ACCESS_KEY_SECRET = 'accessKeySecret';
	const ENDPOINT = 'ecs.cn-qingdao.aliyuncs.com';
	let instance;
	beforeEach((): void => {
		instance = new AliCloud(ACCESS_KEY_ID, ACCESS_KEY_SECRET);
	});

	describe('Test Suite: Check for Instantiation of correct properties at root level OSS', (): void => {
		test('should bind the correct methods for OSS', (): void => {
			const expectedModules = [
				'_accessKeyId',
				'_accessKeySecret',
				'_regionId',
				'_client',
			];
			expect(Object.keys(instance.oss)).toEqual(
				expect.arrayContaining(expectedModules)
			);
		});

		test('Test Suite: Check for region update in OSS', (): void => {
			instance.oss.setRegion('oss-cn-qingdao');
			expect(instance.oss._regionId).toEqual('oss-cn-qingdao');
		});
	});
});
