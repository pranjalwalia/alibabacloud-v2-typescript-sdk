import 'source-map-support/register';

import Eci from './modules/eci';
import Ecs from './modules/ecs';
import Nosql from './modules/nosql';
import Oss from './modules/oss';
import Rds from './modules/rds';
import Slb from './modules/slb';

export default class AliCloud {
	public oss: Oss;
	public slb: Slb;
	public rds: Rds;
	public nosql: Nosql;
	public ecs: Ecs;
	public eci: Eci;

	private _accessKeyId: string;
	private _accessKeySecret: string;

	constructor(accessKeyId: string, accessKeySecret: string) {
		this._accessKeyId = accessKeyId;
		this._accessKeySecret = accessKeySecret;

		this.ecs = new Ecs(accessKeyId, accessKeySecret, 'cn-hongkong');
		this.eci = new Eci(accessKeyId, accessKeySecret, 'cn-hangzhou');
		this.oss = new Oss(accessKeyId, accessKeySecret, 'oss-ap-south-1');
		this.slb = new Slb(accessKeyId, accessKeySecret, 'cn-hangzhou'); //slb.aliyuncs.com
		this.rds = new Rds(accessKeyId, accessKeySecret, 'cn-hangzhou'); //rds.aliyuncs.com
		this.nosql = new Nosql(accessKeyId, accessKeySecret, 'cn-hangzhou'); //mongodb.aliyuncs.com
	}
}
