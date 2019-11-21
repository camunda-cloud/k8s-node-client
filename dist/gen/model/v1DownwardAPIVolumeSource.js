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
* DownwardAPIVolumeSource represents a volume containing downward API info. Downward API volumes support ownership management and SELinux relabeling.
*/
class V1DownwardAPIVolumeSource {
    static getAttributeTypeMap() {
        return V1DownwardAPIVolumeSource.attributeTypeMap;
    }
}
V1DownwardAPIVolumeSource.discriminator = undefined;
V1DownwardAPIVolumeSource.attributeTypeMap = [
    {
        "name": "defaultMode",
        "baseName": "defaultMode",
        "type": "number"
    },
    {
        "name": "items",
        "baseName": "items",
        "type": "Array<V1DownwardAPIVolumeFile>"
    }
];
exports.V1DownwardAPIVolumeSource = V1DownwardAPIVolumeSource;
//# sourceMappingURL=v1DownwardAPIVolumeSource.js.map