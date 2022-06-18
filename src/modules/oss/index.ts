import OSS from 'ali-oss';

import BaseModule from '../../common';

class Oss extends BaseModule {
	private _client: OSS;

	/**
	 * @param accessKeyId
	 * @param accessKeySecret
	 * @return Client
	 * @throws Exception
	 */
	protected _createClient(
		accessKeyId: string,
		accessKeySecret: string,
		regionId: string | null
	): OSS {
		const config = {
			accessKeyId,
			accessKeySecret,
			region: regionId ? regionId : 'oss-ap-south-1',
		};
		return new OSS(config);
	}

	/**
	 *
	 * @param region - set OSS region, default is 'oss-ap-south-1'
	 * @description - https://www.alibabacloud.com/help/en/object-storage-service/latest/regions-and-endpoints
	 * @returns {void}
	 */
	public setRegion(region: string) {
		this._regionId = region;
		this._client = new OSS({
			accessKeyId: this._accessKeyId,
			accessKeySecret: this._accessKeySecret,
			region,
		});
		return this._client;
	}

	constructor(
		accessKeyId: string,
		accessKeySecret: string,
		region: string | null
	) {
		super(accessKeyId, accessKeySecret, region || 'oss-ap-south-1');
		this._client = this._createClient(accessKeyId, accessKeySecret, region);
	}

	private _overrideClient(name: string) {
		const config = {
			accessKeyId: this._accessKeyId,
			accessKeySecret: this._accessKeySecret,
			bucket: name,
		};
		if (this._regionId) {
			return new OSS({ ...config, region: this._regionId });
		}
		return new OSS({ ...config });
	}

	/**
	 * @param {Object} params - [OPTIONAL] Empty Object required to call this method.
	 * @param {String | number} params.'max-keys'- [OPTIONAL] max buckets, defaults to 100, limit 1000
	 * @param {string | undefined} params.prefix - [OPTIONAL] search buckets using prefix key
	 * @returns - Promise - listBuckets associated with account
	 * @throws - Exception on invalid param specification
	 * @interface - OSS.ListBucketsQueryType
	 */
	public listBuckets(params: OSS.ListBucketsQueryType): Promise<any> {
		return this._client.listBuckets(params);
	}

	/**
	 * @param {String} name - Name of the bucket to create.
	 * @param {String} params.acl - 'public-read-write', 'public-read', 'private'
	 * @param {String} params.dataRedundancyType - 'LRS', 'ZRS'
	 * @param {number} params.timeout - in ms
	 * @param {String} params.storageClass - 'Standard', 'IA', 'Archive'
	 * @returns - Promise - create a bucket in the region specified in the constructor.
	 * @throws - Exception on invalid param specification
	 * @interface - OSS.PutBucketOptions
	 */
	public create(name: string, params?: OSS.PutBucketOptions): Promise<any> {
		if (params && Object.keys(params).length > 0) {
			return this._client.putBucket(name, { ...params });
		}
		return this._client.putBucket(name);
	}

	/**
	 * @param {String} name - Name of the bucket to delete.
	 * @returns - Promise - delete a bucket in the region specified in the constructor.
	 * @throws - Exception on invalid param specification
	 */
	public delete(name: string): Promise<any> {
		return this._client.deleteBucket(name);
	}

	/**
	 * @param {String} name - Name of the bucket to describe.
	 * @returns - Promise - delete a bucket in the region specified in the constructor.
	 * @throws - Exception on invalid param specification
	 */
	public describeBucket(name: string): Promise<any> {
		return this._client.getBucketInfo(name);
	}

	/**
	 * @param {String} name - Name of the bucket to delete.
	 * @param {Object} params - Object required to specify request params.
	 * @param {String | undefined} params.prefix - [OPTIONAL] search object using prefix key
	 * @param {String | number} params.'max-keys' - max objects, default is 100, limit to 1000
	 * @returns - Promise - list all objects stored in the bucket.
	 * @throws - Exception on invalid param specification
	 * @interface - OSS.ListObjectsQuery
	 */
	public listBucketObjects(
		name: string,
		params: OSS.ListObjectsQuery
	): Promise<any> {
		return this._overrideClient(name).list(params, {});
	}

	/**
	 * @param {String} name - Name of the bucket to delete.
	 * @param {String} bucketName - Name of the bucket to upload to.
	 * @param {String} objectName - Name of the object when uploaded to the bucket.
	 * @param {String} filePath - Absolute path to the file to upload.
	 * @param {Object} params - [OPTIONAL] Object required to specify request params.
	 * @param {number | undefined} params.timeout - [OPTIONAL] the operation timeout in ms
	 * @param {String | number} params.mime - custom mime, will send with Content-Type entity header
	 * @param {Object} params.headers - [OPTIONAL] Specify the headers of the object on upload, ref: examples
	 * @returns - Promise - list all objects stored in the bucket.
	 * @throws - Exception on invalid param specification
	 * @interface - OSS.ListObjectsQuery
	 */
	public uploadLocalObject(
		bucketName: string,
		objectName: string,
		file: any,
		params?: OSS.PutObjectOptions | undefined
	): Promise<any> {
		return this._overrideClient(bucketName).put(objectName, file, params);
	}
}

export default Oss;
