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
* AzureFile represents an Azure File Service mount on the host and bind mount to the pod.
*/
class V1AzureFilePersistentVolumeSource {
    static getAttributeTypeMap() {
        return V1AzureFilePersistentVolumeSource.attributeTypeMap;
    }
}
V1AzureFilePersistentVolumeSource.discriminator = undefined;
V1AzureFilePersistentVolumeSource.attributeTypeMap = [
    {
        "name": "readOnly",
        "baseName": "readOnly",
        "type": "boolean"
    },
    {
        "name": "secretName",
        "baseName": "secretName",
        "type": "string"
    },
    {
        "name": "secretNamespace",
        "baseName": "secretNamespace",
        "type": "string"
    },
    {
        "name": "shareName",
        "baseName": "shareName",
        "type": "string"
    }
];
exports.V1AzureFilePersistentVolumeSource = V1AzureFilePersistentVolumeSource;
//# sourceMappingURL=v1AzureFilePersistentVolumeSource.js.map