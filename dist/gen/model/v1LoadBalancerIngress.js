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
* LoadBalancerIngress represents the status of a load-balancer ingress point: traffic intended for the service should be sent to an ingress point.
*/
class V1LoadBalancerIngress {
    static getAttributeTypeMap() {
        return V1LoadBalancerIngress.attributeTypeMap;
    }
}
V1LoadBalancerIngress.discriminator = undefined;
V1LoadBalancerIngress.attributeTypeMap = [
    {
        "name": "hostname",
        "baseName": "hostname",
        "type": "string"
    },
    {
        "name": "ip",
        "baseName": "ip",
        "type": "string"
    }
];
exports.V1LoadBalancerIngress = V1LoadBalancerIngress;
//# sourceMappingURL=v1LoadBalancerIngress.js.map