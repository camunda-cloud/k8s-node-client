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
* SubjectAccessReview checks whether or not a user or group can perform an action.
*/
class V1SubjectAccessReview {
    static getAttributeTypeMap() {
        return V1SubjectAccessReview.attributeTypeMap;
    }
}
V1SubjectAccessReview.discriminator = undefined;
V1SubjectAccessReview.attributeTypeMap = [
    {
        "name": "apiVersion",
        "baseName": "apiVersion",
        "type": "string"
    },
    {
        "name": "kind",
        "baseName": "kind",
        "type": "string"
    },
    {
        "name": "metadata",
        "baseName": "metadata",
        "type": "V1ObjectMeta"
    },
    {
        "name": "spec",
        "baseName": "spec",
        "type": "V1SubjectAccessReviewSpec"
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "V1SubjectAccessReviewStatus"
    }
];
exports.V1SubjectAccessReview = V1SubjectAccessReview;
//# sourceMappingURL=v1SubjectAccessReview.js.map