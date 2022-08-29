/* eslint-disable @typescript-eslint/ban-ts-comment */
import AliCloud from '../../src';
import {
	ICreateContainerGroup,
	IDeleteContainerGroup,
	IDescribeContainerGroup,
	IRestartContainerGroup,
} from '../../src/modules/eci/interfaces';

const instance = new AliCloud('key', 'secret');

const EciContainerGroupOperations = {
	createContainerGroup: async (
		params: ICreateContainerGroup,
		instance: AliCloud
	): Promise<void> => {
		try {
			const res = await instance.eci.createContainerGroup(params);
			console.log(JSON.stringify(res));
		} catch (err) {
			console.log(`Error: ${err}`);
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			console.log(err.stack);
		}
	},

	restartContainerGroup: async (
		params: IRestartContainerGroup,
		instance: AliCloud
	): Promise<void> => {
		try {
			const res = await instance.eci.restartContainerGroup(params);
			console.log(JSON.stringify(res));
		} catch (err) {
			console.log(`Error: ${err}`);
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			console.log(err.stack);
		}
	},

	describeContainerGroup: async (
		params: IDescribeContainerGroup,
		instance: AliCloud
	): Promise<void> => {
		try {
			const res = await instance.eci.describeContainerGroups(params);
			console.log(JSON.stringify(res));
		} catch (err) {
			console.log(`Error: ${err}`);
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			console.log(err.stack);
		}
	},

	deleteContainerGroup: async (
		params: IDeleteContainerGroup,
		instance: AliCloud
	): Promise<void> => {
		try {
			const res = await instance.eci.deleteContainerGroup(params);
			console.log(JSON.stringify(res));
		} catch (err) {
			console.log(`Error: ${err}`);
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			console.log(err.stack);
		}
	},
};

if (instance) {
	// instance.eci.setRegion('cn-hangzhou');
	// EciContainerGroupOperations.createContainerGroup(
	// 	{
	// 		regionId: 'cn-hangzhou',
	// 		containerGroupName: 'test-group-1',
	// 		container: [
	// 			// @ts-ignore
	// 			{
	// 				command: ['/bin/sh', '-c', 'echo 1'],
	// 				cpu: 1,
	// 				memory: 512,
	// 				image: 'ubuntu',
	// 				name: 'test-container-1',
	// 			},
	// 		],
	// 	},
	// 	instance
	// );
	// EciContainerGroupOperations.describeContainerGroup(
	// 	{ regionId: 'cn-hangzhou' },
	// 	instance
	// );
	// EciContainerGroupOperations.restartContainerGroup(
	// 	{ regionId: 'cn-hangzhou', containerGroupId: 'eci-bp1ikor0s871wa5pahke' },
	// 	instance
	// );
	// EciContainerGroupOperations.deleteContainerGroup(
	// 	{ regionId: 'cn-hangzhou', containerGroupId: 'eci-bp1ikor0s871wa5pahke' },
	// 	instance
	// );
}
