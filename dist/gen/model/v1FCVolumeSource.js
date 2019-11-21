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
* Represents a Fibre Channel volume. Fibre Channel volumes can only be mounted as read/write once. Fibre Channel volumes support ownership management and SELinux relabeling.
*/
class V1FCVolumeSource {
    static getAttributeTypeMap() {
        return V1FCVolumeSource.attributeTypeMap;
    }
}
V1FCVolumeSource.discriminator = undefined;
V1FCVolumeSource.attributeTypeMap = [
    {
        "name": "fsType",
        "baseName": "fsType",
        "type": "string"
    },
    {
        "name": "lun",
        "baseName": "lun",
        "type": "number"
    },
    {
        "name": "readOnly",
        "baseName": "readOnly",
        "type": "boolean"
    },
    {
        "name": "targetWWNs",
        "baseName": "targetWWNs",
        "type": "Array<string>"
    },
    {
        "name": "wwids",
        "baseName": "wwids",
        "type": "Array<string>"
    }
];
exports.V1FCVolumeSource = V1FCVolumeSource;
//# sourceMappingURL=v1FCVolumeSource.js.map