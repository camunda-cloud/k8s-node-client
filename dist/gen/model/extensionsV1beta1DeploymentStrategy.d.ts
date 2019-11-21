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
import { ExtensionsV1beta1RollingUpdateDeployment } from './extensionsV1beta1RollingUpdateDeployment';
/**
* DeploymentStrategy describes how to replace existing pods with new ones.
*/
export declare class ExtensionsV1beta1DeploymentStrategy {
    'rollingUpdate'?: ExtensionsV1beta1RollingUpdateDeployment;
    /**
    * Type of deployment. Can be \"Recreate\" or \"RollingUpdate\". Default is RollingUpdate.
    */
    'type'?: string;
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
