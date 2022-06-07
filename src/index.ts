import 'source-map-support/register';

import Oss from './modules/oss';

export default class AliCloud {
	public oss: Oss;

	private _accessKeyId: string;
	private _accessKeySecret: string;

	constructor(accessKeyId: string, accessKeySecret: string) {
		this._accessKeyId = accessKeyId;
		this._accessKeySecret = accessKeySecret;

		this.oss = new Oss(accessKeyId, accessKeySecret, 'oss-cn-hangzhou');
	}
}
