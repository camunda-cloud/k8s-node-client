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
* Represents a cinder volume resource in Openstack. A Cinder volume must exist before mounting to a container. The volume must also be in the same region as the kubelet. Cinder volumes support ownership management and SELinux relabeling.
*/
class V1CinderVolumeSource {
    static getAttributeTypeMap() {
        return V1CinderVolumeSource.attributeTypeMap;
    }
}
V1CinderVolumeSource.discriminator = undefined;
V1CinderVolumeSource.attributeTypeMap = [
    {
        "name": "fsType",
        "baseName": "fsType",
        "type": "string"
    },
    {
        "name": "readOnly",
        "baseName": "readOnly",
        "type": "boolean"
    },
    {
        "name": "secretRef",
        "baseName": "secretRef",
        "type": "V1LocalObjectReference"
    },
    {
        "name": "volumeID",
        "baseName": "volumeID",
        "type": "string"
    }
];
exports.V1CinderVolumeSource = V1CinderVolumeSource;
//# sourceMappingURL=v1CinderVolumeSource.js.map