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
* HorizontalPodAutoscaler is a list of horizontal pod autoscaler objects.
*/
class V2beta1HorizontalPodAutoscalerList {
    static getAttributeTypeMap() {
        return V2beta1HorizontalPodAutoscalerList.attributeTypeMap;
    }
}
V2beta1HorizontalPodAutoscalerList.discriminator = undefined;
V2beta1HorizontalPodAutoscalerList.attributeTypeMap = [
    {
        "name": "apiVersion",
        "baseName": "apiVersion",
        "type": "string"
    },
    {
        "name": "items",
        "baseName": "items",
        "type": "Array<V2beta1HorizontalPodAutoscaler>"
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
exports.V2beta1HorizontalPodAutoscalerList = V2beta1HorizontalPodAutoscalerList;
//# sourceMappingURL=v2beta1HorizontalPodAutoscalerList.js.map