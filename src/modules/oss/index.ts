import OSS from 'ali-oss';

import BaseModule from '../../common';

class Oss extends BaseModule {
	private _client: OSS;

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

	public listBuckets(params: OSS.ListBucketsQueryType): Promise<any> {
		return this._client.listBuckets(params);
	}

	public create(name: string, params?: OSS.PutBucketOptions): Promise<any> {
		if (params && Object.keys(params).length > 0) {
			return this._client.putBucket(name, { ...params });
		}
		return this._client.putBucket(name);
	}

	public delete(name: string): Promise<any> {
		return this._client.deleteBucket(name);
	}

	public describeBucket(name: string): Promise<any> {
		return this._client.getBucketInfo(name);
	}

	public listBucketObjects(
		name: string,
		params: OSS.ListObjectsQuery
	): Promise<any> {
		return this._overrideClient(name).list(params, {});
	}
}

export default Oss;
