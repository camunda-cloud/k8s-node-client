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
* UserInfo holds the information about the user needed to implement the user.Info interface.
*/
class V1UserInfo {
    static getAttributeTypeMap() {
        return V1UserInfo.attributeTypeMap;
    }
}
V1UserInfo.discriminator = undefined;
V1UserInfo.attributeTypeMap = [
    {
        "name": "extra",
        "baseName": "extra",
        "type": "{ [key: string]: Array<string>; }"
    },
    {
        "name": "groups",
        "baseName": "groups",
        "type": "Array<string>"
    },
    {
        "name": "uid",
        "baseName": "uid",
        "type": "string"
    },
    {
        "name": "username",
        "baseName": "username",
        "type": "string"
    }
];
exports.V1UserInfo = V1UserInfo;
//# sourceMappingURL=v1UserInfo.js.map