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
* AggregationRule describes how to locate ClusterRoles to aggregate into the ClusterRole
*/
class V1alpha1AggregationRule {
    static getAttributeTypeMap() {
        return V1alpha1AggregationRule.attributeTypeMap;
    }
}
V1alpha1AggregationRule.discriminator = undefined;
V1alpha1AggregationRule.attributeTypeMap = [
    {
        "name": "clusterRoleSelectors",
        "baseName": "clusterRoleSelectors",
        "type": "Array<V1LabelSelector>"
    }
];
exports.V1alpha1AggregationRule = V1alpha1AggregationRule;
//# sourceMappingURL=v1alpha1AggregationRule.js.map