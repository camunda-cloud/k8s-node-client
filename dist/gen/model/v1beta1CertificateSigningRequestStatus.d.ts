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
import { V1beta1CertificateSigningRequestCondition } from './v1beta1CertificateSigningRequestCondition';
export declare class V1beta1CertificateSigningRequestStatus {
    /**
    * If request was approved, the controller will place the issued certificate here.
    */
    'certificate'?: string;
    /**
    * Conditions applied to the request, such as approval or denial.
    */
    'conditions'?: Array<V1beta1CertificateSigningRequestCondition>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
