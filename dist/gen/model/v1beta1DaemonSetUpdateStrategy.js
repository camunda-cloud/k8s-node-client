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
class V1beta1DaemonSetUpdateStrategy {
    static getAttributeTypeMap() {
        return V1beta1DaemonSetUpdateStrategy.attributeTypeMap;
    }
}
V1beta1DaemonSetUpdateStrategy.discriminator = undefined;
V1beta1DaemonSetUpdateStrategy.attributeTypeMap = [
    {
        "name": "rollingUpdate",
        "baseName": "rollingUpdate",
        "type": "V1beta1RollingUpdateDaemonSet"
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "string"
    }
];
exports.V1beta1DaemonSetUpdateStrategy = V1beta1DaemonSetUpdateStrategy;
//# sourceMappingURL=v1beta1DaemonSetUpdateStrategy.js.map