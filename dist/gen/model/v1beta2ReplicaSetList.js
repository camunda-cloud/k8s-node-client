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
* ReplicaSetList is a collection of ReplicaSets.
*/
class V1beta2ReplicaSetList {
    static getAttributeTypeMap() {
        return V1beta2ReplicaSetList.attributeTypeMap;
    }
}
V1beta2ReplicaSetList.discriminator = undefined;
V1beta2ReplicaSetList.attributeTypeMap = [
    {
        "name": "apiVersion",
        "baseName": "apiVersion",
        "type": "string"
    },
    {
        "name": "items",
        "baseName": "items",
        "type": "Array<V1beta2ReplicaSet>"
    },
    {
        "name": "kind",
        "baseName": "kind",
        "type": "string"
    },
    {
        "name": "metadata",
        "baseName": "metadata",
        "type": "V1ListMeta"
    }
];
exports.V1beta2ReplicaSetList = V1beta2ReplicaSetList;
//# sourceMappingURL=v1beta2ReplicaSetList.js.map