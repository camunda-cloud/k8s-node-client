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
import { V1beta1NonResourceAttributes } from './v1beta1NonResourceAttributes';
import { V1beta1ResourceAttributes } from './v1beta1ResourceAttributes';
/**
* SubjectAccessReviewSpec is a description of the access request.  Exactly one of ResourceAuthorizationAttributes and NonResourceAuthorizationAttributes must be set
*/
export declare class V1beta1SubjectAccessReviewSpec {
    /**
    * Extra corresponds to the user.Info.GetExtra() method from the authenticator.  Since that is input to the authorizer it needs a reflection here.
    */
    'extra'?: {
        [key: string]: Array<string>;
    };
    /**
    * Groups is the groups you\'re testing for.
    */
    'group'?: Array<string>;
    'nonResourceAttributes'?: V1beta1NonResourceAttributes;
    'resourceAttributes'?: V1beta1ResourceAttributes;
    /**
    * UID information about the requesting user.
    */
    'uid'?: string;
    /**
    * User is the user you\'re testing for. If you specify \"User\" but not \"Group\", then is it interpreted as \"What if User were not a member of any groups
    */
    'user'?: string;
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
