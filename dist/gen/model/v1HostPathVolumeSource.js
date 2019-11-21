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
* Represents a host path mapped into a pod. Host path volumes do not support ownership management or SELinux relabeling.
*/
class V1HostPathVolumeSource {
    static getAttributeTypeMap() {
        return V1HostPathVolumeSource.attributeTypeMap;
    }
}
V1HostPathVolumeSource.discriminator = undefined;
V1HostPathVolumeSource.attributeTypeMap = [
    {
        "name": "path",
        "baseName": "path",
        "type": "string"
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "string"
    }
];
exports.V1HostPathVolumeSource = V1HostPathVolumeSource;
//# sourceMappingURL=v1HostPathVolumeSource.js.map