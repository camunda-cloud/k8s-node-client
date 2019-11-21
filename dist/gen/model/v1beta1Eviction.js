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
* Eviction evicts a pod from its node subject to certain policies and safety constraints. This is a subresource of Pod.  A request to cause such an eviction is created by POSTing to .../pods/<pod name>/evictions.
*/
class V1beta1Eviction {
    static getAttributeTypeMap() {
        return V1beta1Eviction.attributeTypeMap;
    }
}
V1beta1Eviction.discriminator = undefined;
V1beta1Eviction.attributeTypeMap = [
    {
        "name": "apiVersion",
        "baseName": "apiVersion",
        "type": "string"
    },
    {
        "name": "deleteOptions",
        "baseName": "deleteOptions",
        "type": "V1DeleteOptions"
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
    }
];
exports.V1beta1Eviction = V1beta1Eviction;
//# sourceMappingURL=v1beta1Eviction.js.map