"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
/**
* DEPRECATED - This group version of Deployment is deprecated by apps/v1/Deployment. See the release notes for more information. Deployment enables declarative updates for Pods and ReplicaSets.
*/
class V1beta2Deployment {
    static getAttributeTypeMap() {
        return V1beta2Deployment.attributeTypeMap;
    }
}
V1beta2Deployment.discriminator = undefined;
V1beta2Deployment.attributeTypeMap = [
    {
        "name": "apiVersion",
        "baseName": "apiVersion",
        "type": "string"
    },
    {
        "name": "kind",
        "baseName": "kind",
        "type": "string"
    },
    {
        "name": "metadata",
        "baseName": "metadata",
        "type": "V1ObjectMeta"
    },
    {
        "name": "spec",
        "baseName": "spec",
        "type": "V1beta2DeploymentSpec"
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "V1beta2DeploymentStatus"
    }
];
exports.V1beta2Deployment = V1beta2Deployment;
//# sourceMappingURL=v1beta2Deployment.js.map