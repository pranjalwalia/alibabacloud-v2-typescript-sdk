import AliCloud from '../../src';

describe('unit tests for ali-wrapper', (): void => {
	const ACCESS_KEY_ID = 'accessKeyId';
	const ACCESS_KEY_SECRET = 'accessKeySecret';
	const ENDPOINT = 'ecs.cn-qingdao.aliyuncs.com';
	let instance;
	beforeEach((): void => {
		instance = new AliCloud(ACCESS_KEY_ID, ACCESS_KEY_SECRET);
	});

	describe('Test Suite: Check for Instantiation of correct properties at root level SLB', (): void => {
		test('should bind the correct methods for SLB', (): void => {
			const expectedModules = [
				'_accessKeyId',
				'_accessKeySecret',
				'_regionId',
				'_client',
			];
			expect(Object.keys(instance.slb)).toEqual(
				expect.arrayContaining(expectedModules)
			);
		});

		test('should configure endpoint of client to always point to slb.aliyuncs.com', (): void => {
			const endpointValues = new Set(
				Object.values(instance.slb._client._endpointMap)
			);
			expect(endpointValues.size == 2);
			expect(endpointValues[0] == 'slb.aliyuncs.com');
			expect(endpointValues[1] == 'slb-api.cn-qingdao-nebula.aliyuncs.com');
			expect(instance.slb._endpoint == endpointValues[0]);
		});
	});
});
