import path from 'path';

import AliCloud from '../../src';

const instance = new AliCloud('accessKeyId', 'accessKeySecret');

const instanceOperations = {
	create: () => {
		instance.oss.create('unique-test-bucket-1234', {
			acl: 'public-read',
			dataRedundancyType: 'LRS',
			storageClass: 'Standard',
			timeout: 30000,
		});
	},

	listBuckets: async () => {
		try {
			const res = await instance.oss.listBuckets({});
			console.log('SUCCESS: ', res);
		} catch (err) {
			console.log('ERROR: ', err);
		}
	},

	deleteBucket: async () => {
		try {
			const res = await instance.oss.delete('unique-test-bucket-1234');
			console.log('SUCCESS: ', res);
		} catch (err) {
			console.log('ERROR: ', err);
		}
	},

	listBucketObjects: async () => {
		try {
			const res = await instance.oss.listBucketObjects(
				'unique-test-bucket-1234',
				{
					'max-keys': 100,
				}
			);
			console.log('SUCCESS: ', res);
		} catch (err) {
			console.log('ERROR: ', err);
		}
	},

	uploadLocalObject: async () => {
		const headers = {
			// Specify the caching behavior of the web page when the object is downloaded.
			'Cache-Control': 'no-cache',
			// Specify the name of the object when the object is downloaded.
			'Content-Disposition': 'oss_download.txt',
			// Specify the content encoding format of the object when the object is downloaded.
			'Content-Encoding': 'UTF-8',
			// Specify the expiration time.
			Expires: 'Wed, 08 Jul 2022 16:57:01 GMT',
			// Specify the storage class of the object.
			'x-oss-storage-class': 'Standard',
			// Specify the access control list (ACL) of the object.
			'x-oss-object-acl': 'private',
			// Set tags for the object. You can set multiple tags at a time.
			'x-oss-tagging': 'Tag1=1&Tag2=2',
			// Specify whether the CopyObject operation overwrites the object with the same name. In this example, this parameter is set to true, which indicates that the object with the same name cannot be overwritten.
			'x-oss-forbid-overwrite': 'true',
		};

		try {
			const res = await instance.oss.uploadLocalObject(
				'unique-test-bucket-1234',
				'test.txt',
				path.normalize('absolute-file-path'),
				{
					headers, //Optional, Specify the headers of the object on upload
					mime: 'text/plain', //Optional, Specify the content type on upload
					timeout: 30000, //Optional, Specify the timeout of the request on upload
				}
			);
			console.log('SUCCESS: ', res);
		} catch (err) {
			console.log('ERROR: ', err);
		}
	},
};

if (instance) {
	instanceOperations.create();
}
