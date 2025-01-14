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
/**
* ManagedFieldsEntry is a workflow-id, a FieldSet and the group version of the resource that the fieldset applies to.
*/
export declare class V1ManagedFieldsEntry {
    /**
    * APIVersion defines the version of this resource that this field set applies to. The format is \"group/version\" just like the top-level APIVersion field. It is necessary to track the version of a field set because it cannot be automatically converted.
    */
    'apiVersion'?: string;
    /**
    * Fields identifies a set of fields.
    */
    'fields'?: object;
    /**
    * Manager is an identifier of the workflow managing these fields.
    */
    'manager'?: string;
    /**
    * Operation is the type of operation which lead to this ManagedFieldsEntry being created. The only valid values for this field are \'Apply\' and \'Update\'.
    */
    'operation'?: string;
    /**
    * Time is timestamp of when these fields were set. It should always be empty if Operation is \'Apply\'
    */
    'time'?: Date;
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
