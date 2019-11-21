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
* ConfigMapEnvSource selects a ConfigMap to populate the environment variables with.  The contents of the target ConfigMap\'s Data field will represent the key-value pairs as environment variables.
*/
class V1ConfigMapEnvSource {
    static getAttributeTypeMap() {
        return V1ConfigMapEnvSource.attributeTypeMap;
    }
}
V1ConfigMapEnvSource.discriminator = undefined;
V1ConfigMapEnvSource.attributeTypeMap = [
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "optional",
        "baseName": "optional",
        "type": "boolean"
    }
];
exports.V1ConfigMapEnvSource = V1ConfigMapEnvSource;
//# sourceMappingURL=v1ConfigMapEnvSource.js.map