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
* CronJobList is a collection of cron jobs.
*/
class V2alpha1CronJobList {
    static getAttributeTypeMap() {
        return V2alpha1CronJobList.attributeTypeMap;
    }
}
V2alpha1CronJobList.discriminator = undefined;
V2alpha1CronJobList.attributeTypeMap = [
    {
        "name": "apiVersion",
        "baseName": "apiVersion",
        "type": "string"
    },
    {
        "name": "items",
        "baseName": "items",
        "type": "Array<V2alpha1CronJob>"
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
exports.V2alpha1CronJobList = V2alpha1CronJobList;
//# sourceMappingURL=v2alpha1CronJobList.js.map