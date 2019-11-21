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
* CustomResourceDefinitionStatus indicates the state of the CustomResourceDefinition
*/
class V1beta1CustomResourceDefinitionStatus {
    static getAttributeTypeMap() {
        return V1beta1CustomResourceDefinitionStatus.attributeTypeMap;
    }
}
V1beta1CustomResourceDefinitionStatus.discriminator = undefined;
V1beta1CustomResourceDefinitionStatus.attributeTypeMap = [
    {
        "name": "acceptedNames",
        "baseName": "acceptedNames",
        "type": "V1beta1CustomResourceDefinitionNames"
    },
    {
        "name": "conditions",
        "baseName": "conditions",
        "type": "Array<V1beta1CustomResourceDefinitionCondition>"
    },
    {
        "name": "storedVersions",
        "baseName": "storedVersions",
        "type": "Array<string>"
    }
];
exports.V1beta1CustomResourceDefinitionStatus = V1beta1CustomResourceDefinitionStatus;
//# sourceMappingURL=v1beta1CustomResourceDefinitionStatus.js.map