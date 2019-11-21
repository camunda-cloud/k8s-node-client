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
* ServerAddressByClientCIDR helps the client to determine the server address that they should use, depending on the clientCIDR that they match.
*/
class V1ServerAddressByClientCIDR {
    static getAttributeTypeMap() {
        return V1ServerAddressByClientCIDR.attributeTypeMap;
    }
}
V1ServerAddressByClientCIDR.discriminator = undefined;
V1ServerAddressByClientCIDR.attributeTypeMap = [
    {
        "name": "clientCIDR",
        "baseName": "clientCIDR",
        "type": "string"
    },
    {
        "name": "serverAddress",
        "baseName": "serverAddress",
        "type": "string"
    }
];
exports.V1ServerAddressByClientCIDR = V1ServerAddressByClientCIDR;
//# sourceMappingURL=v1ServerAddressByClientCIDR.js.map