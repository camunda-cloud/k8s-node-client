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
* ScaleStatus represents the current status of a scale subresource.
*/
class V1ScaleStatus {
    static getAttributeTypeMap() {
        return V1ScaleStatus.attributeTypeMap;
    }
}
V1ScaleStatus.discriminator = undefined;
V1ScaleStatus.attributeTypeMap = [
    {
        "name": "replicas",
        "baseName": "replicas",
        "type": "number"
    },
    {
        "name": "selector",
        "baseName": "selector",
        "type": "string"
    }
];
exports.V1ScaleStatus = V1ScaleStatus;
//# sourceMappingURL=v1ScaleStatus.js.map