/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.15.5
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { V1NodeConfigSource } from './v1NodeConfigSource';
import { V1Taint } from './v1Taint';
/**
* NodeSpec describes the attributes that a node is created with.
*/
export declare class V1NodeSpec {
    'configSource'?: V1NodeConfigSource;
    /**
    * Deprecated. Not all kubelets will set this field. Remove field after 1.13. see: https://issues.k8s.io/61966
    */
    'externalID'?: string;
    /**
    * PodCIDR represents the pod IP range assigned to the node.
    */
    'podCIDR'?: string;
    /**
    * ID of the node assigned by the cloud provider in the format: <ProviderName>://<ProviderSpecificNodeID>
    */
    'providerID'?: string;
    /**
    * If specified, the node\'s taints.
    */
    'taints'?: Array<V1Taint>;
    /**
    * Unschedulable controls node schedulability of new pods. By default, node is schedulable. More info: https://kubernetes.io/docs/concepts/nodes/node/#manual-node-administration
    */
    'unschedulable'?: boolean;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
