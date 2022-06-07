type slbSpec =
	| 'slb.s1.small'
	| 'slb.s2.small'
	| 'slb.s2.medium'
	| 'slb.s3.small'
	| 'slb.s3.medium'
	| 'slb.s3.large';

export interface ICreateLoadBalancer {
	regionId: string; //cn-qingdao
	loadBalancerName?: string;
	loadBalancerSpec?: slbSpec;
	vpcId?: string;
	[key: string]: any;
}

export interface IDescribeLoadBalancerAttributes {
	regionId?: string;
	loadBalancerId?: string;
	[key: string]: any;
}

export interface IDescribeLoadBalancers {
	regionId: string;
	loadBalancerStatus?: string;
	[key: string]: any;
}

export interface IDescribeRegions {
	[key: string]: any;
}

export interface IDeleteLoadBalancer {
	loadBalancerId: string;
	[key: string]: any;
}

export interface IDescribeTags {
	regionId: string;
	loadBalancerId?: string;
	pageSize?: number; // default: 50, max: 100
	[key: string]: any;
}
