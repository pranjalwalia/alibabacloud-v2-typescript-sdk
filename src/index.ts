import 'source-map-support/register';

import Oss from './modules/oss';
import Slb from './modules/slb';

export default class AliCloud {
	public oss: Oss;
	public slb: Slb;

	private _accessKeyId: string;
	private _accessKeySecret: string;

	constructor(accessKeyId: string, accessKeySecret: string) {
		this._accessKeyId = accessKeyId;
		this._accessKeySecret = accessKeySecret;

		this.oss = new Oss(accessKeyId, accessKeySecret, 'oss-cn-hangzhou');
		this.slb = new Slb(accessKeyId, accessKeySecret, 'cn-hangzhou'); //slb.aliyuncs.com
	}
}
