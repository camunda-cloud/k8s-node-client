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
import { V1NodeAffinity } from './v1NodeAffinity';
import { V1PodAffinity } from './v1PodAffinity';
import { V1PodAntiAffinity } from './v1PodAntiAffinity';
/**
* Affinity is a group of affinity scheduling rules.
*/
export declare class V1Affinity {
    'nodeAffinity'?: V1NodeAffinity;
    'podAffinity'?: V1PodAffinity;
    'podAntiAffinity'?: V1PodAntiAffinity;
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
