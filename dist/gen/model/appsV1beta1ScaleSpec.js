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
* ScaleSpec describes the attributes of a scale subresource
*/
class AppsV1beta1ScaleSpec {
    static getAttributeTypeMap() {
        return AppsV1beta1ScaleSpec.attributeTypeMap;
    }
}
AppsV1beta1ScaleSpec.discriminator = undefined;
AppsV1beta1ScaleSpec.attributeTypeMap = [
    {
        "name": "replicas",
        "baseName": "replicas",
        "type": "number"
    }
];
exports.AppsV1beta1ScaleSpec = AppsV1beta1ScaleSpec;
//# sourceMappingURL=appsV1beta1ScaleSpec.js.map