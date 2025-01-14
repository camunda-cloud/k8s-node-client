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
* WindowsSecurityContextOptions contain Windows-specific options and credentials.
*/
class V1WindowsSecurityContextOptions {
    static getAttributeTypeMap() {
        return V1WindowsSecurityContextOptions.attributeTypeMap;
    }
}
V1WindowsSecurityContextOptions.discriminator = undefined;
V1WindowsSecurityContextOptions.attributeTypeMap = [
    {
        "name": "gmsaCredentialSpec",
        "baseName": "gmsaCredentialSpec",
        "type": "string"
    },
    {
        "name": "gmsaCredentialSpecName",
        "baseName": "gmsaCredentialSpecName",
        "type": "string"
    }
];
exports.V1WindowsSecurityContextOptions = V1WindowsSecurityContextOptions;
//# sourceMappingURL=v1WindowsSecurityContextOptions.js.map