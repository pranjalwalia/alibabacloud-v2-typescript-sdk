import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import Slb20140515, * as $Slb20140515 from '@alicloud/slb20140515';
import * as $tea from '@alicloud/tea-typescript';

import BaseModule from '../../common';
import { slbRegions } from './utils';

class Slb extends BaseModule {
	private _client: Slb20140515;

	/**
	 * @param accessKeyId
	 * @param accessKeySecret
	 * @return Client
	 * @throws Exception
	 */
	protected _createClient(
		accessKeyId: string,
		accessKeySecret: string,
		regionId: slbRegions
	): Slb20140515 {
		const config = new $OpenApi.Config({
			accessKeyId: accessKeyId,
			accessKeySecret: accessKeySecret,
		});
		config.endpoint =
			regionId != 'cn-huhehaote-nebula-1'
				? 'slb.aliyuncs.com'
				: 'slb-api.cn-qingdao-nebula.aliyuncs.com';
		return new Slb20140515(config);
	}

	constructor(
		accessKeyId: string,
		accessKeySecret: string,
		regionId: slbRegions
	) {
		super(accessKeyId, accessKeySecret, regionId);
		this._client = this._createClient(accessKeyId, accessKeySecret, regionId);
	}

	/**
	 * @param {string} regionId - Region in which load balancer instance is to be created, eg: 'cn-qingdao'
	 * @param {string} loadBalancerName - Name of the SLB instance
	 * @param {string} loadBalancerSpec - SLB specification: 'slb.s1.small'|'slb.s2.small'|'slb.s2.medium'|'slb.s3.small'|'slb.s3.medium'|'slb.s3.large'
	 * @param {Object} params - specify any other optional parameters
	 * @returns - Promise - createLoadBalancerRequest
	 * @throws - Exception on invalid param specification
	 * @interface - ICreateLoadBalancer
	 */
	createLoadBalancerInstance(
		regionId: string,
		loadBalancerName: string,
		loadBalancerSpec: string,
		params?: any
	): Promise<any> {
		const createLoadBalancerRequest =
			new $Slb20140515.CreateLoadBalancerRequest({
				regionId,
				loadBalancerName,
				loadBalancerSpec,
				...params,
			});
		return this._client.createLoadBalancer(createLoadBalancerRequest);
	}

	/**
	 * @param {string} regionId - Region in which load balancer instances are to be queried, eg: 'cn-qingdao'
	 * @param {Object} params - loadBalancerStatus: string, specify any other optional parameters
	 * @returns - Promise - describeLoadBalancersRequest
	 * @throws - Exception on invalid param specification
	 * @interface - IDescribeLoadBalancers
	 */
	describeLoadBalancers(regionId: string, params?: any): Promise<any> {
		const describeLoadBalancersRequest =
			new $Slb20140515.DescribeLoadBalancersRequest({ regionId, ...params });
		return this._client.describeLoadBalancers(describeLoadBalancersRequest);
	}

	/**
	 * @param {string} regionId - Region in which load balancer instance exists, eg: 'cn-qingdao'
	 * @param {string} loadBalancerId - Id of the load balancer instance whose attributes are to be queried
	 * @param {Object} specify any other optional parameters
	 * @returns - Promise - describeLoadBalancerAttribute
	 * @throws - Exception on invalid param specification
	 * @interface - IDescribeLoadBalancerAttributes
	 */
	describeLoadBalancerAttribute(
		regionId: string,
		loadBalancerId: string,
		params?: any
	): Promise<any> {
		const describeLoadBalancerRequest =
			new $Slb20140515.DescribeLoadBalancerAttributeRequest({
				regionId,
				loadBalancerId,
				...params,
			});
		return this._client.describeLoadBalancerAttribute(
			describeLoadBalancerRequest
		);
	}

	/**
	 * @description Describe the regions that support SLB instance creation
	 * @returns - Promise - describeRegions
	 */
	listAvailableRegions(): Promise<any> {
		const describeRegionsRequest = new $Slb20140515.DescribeRegionsRequest({});
		return this._client.describeRegions(describeRegionsRequest);
	}

	/**
	 * @param {string} loadBalancerId - Id of the load balancer instance to be deleted
	 * @param {Object} specify any other optional parameters
	 * @returns - Promise - deleteLoadBalancer
	 * @throws - Exception on invalid param specification
	 * @interface - IDeleteLoadBalancer
	 */
	deleteLoadBalancer(loadBalancerId: string, params?: any): Promise<any> {
		const deleteLoadBalancerRequest =
			new $Slb20140515.DeleteLoadBalancerRequest({ loadBalancerId, ...params });
		return this._client.deleteLoadBalancer(deleteLoadBalancerRequest);
	}

	/**
	 * @param {string} regionId - Region in which load balancer instance exists, eg: 'cn-qingdao'
	 * @param {string} loadBalancerId - Id of the load balancer instance to be queried
	 * @param {Object} params - pageSize: number, specify any other optional parameters
	 * @returns - Promise - describeTags
	 * @throws - Exception on invalid param specification
	 * @interface - IDescribeTags
	 */
	listTags(
		regionId: string,
		loadBalancerId: string,
		params?: any
	): Promise<any> {
		const listLoadBalancerTagsRequest = new $Slb20140515.DescribeTagsRequest({
			regionId,
			loadBalancerId,
			...params,
		});
		return this._client.describeTags(listLoadBalancerTagsRequest);
	}
}

export default Slb;
