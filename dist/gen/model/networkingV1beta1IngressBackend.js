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
* IngressBackend describes all endpoints for a given service and port.
*/
class NetworkingV1beta1IngressBackend {
    static getAttributeTypeMap() {
        return NetworkingV1beta1IngressBackend.attributeTypeMap;
    }
}
NetworkingV1beta1IngressBackend.discriminator = undefined;
NetworkingV1beta1IngressBackend.attributeTypeMap = [
    {
        "name": "serviceName",
        "baseName": "serviceName",
        "type": "string"
    },
    {
        "name": "servicePort",
        "baseName": "servicePort",
        "type": "object"
    }
];
exports.NetworkingV1beta1IngressBackend = NetworkingV1beta1IngressBackend;
//# sourceMappingURL=networkingV1beta1IngressBackend.js.map