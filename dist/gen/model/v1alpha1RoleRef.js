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
* RoleRef contains information that points to the role being used
*/
class V1alpha1RoleRef {
    static getAttributeTypeMap() {
        return V1alpha1RoleRef.attributeTypeMap;
    }
}
V1alpha1RoleRef.discriminator = undefined;
V1alpha1RoleRef.attributeTypeMap = [
    {
        "name": "apiGroup",
        "baseName": "apiGroup",
        "type": "string"
    },
    {
        "name": "kind",
        "baseName": "kind",
        "type": "string"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    }
];
exports.V1alpha1RoleRef = V1alpha1RoleRef;
//# sourceMappingURL=v1alpha1RoleRef.js.map