/* tslint:disable */
/* eslint-disable */
/**
 * REST api to TON blockchain explorer
 * Provide access to indexed TON blockchain
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: support@tonkeeper.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { SizeLimitsConfig } from './SizeLimitsConfig';
import {
    SizeLimitsConfigFromJSON,
    SizeLimitsConfigFromJSONTyped,
    SizeLimitsConfigToJSON,
} from './SizeLimitsConfig';

/**
 * The size limits and some other characteristics of accounts and messages.
 * @export
 * @interface BlockchainConfig43
 */
export interface BlockchainConfig43 {
    /**
     * 
     * @type {SizeLimitsConfig}
     * @memberof BlockchainConfig43
     */
    sizeLimitsConfig: SizeLimitsConfig;
}

/**
 * Check if a given object implements the BlockchainConfig43 interface.
 */
export function instanceOfBlockchainConfig43(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "sizeLimitsConfig" in value;

    return isInstance;
}

export function BlockchainConfig43FromJSON(json: any): BlockchainConfig43 {
    return BlockchainConfig43FromJSONTyped(json, false);
}

export function BlockchainConfig43FromJSONTyped(json: any, ignoreDiscriminator: boolean): BlockchainConfig43 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'sizeLimitsConfig': SizeLimitsConfigFromJSON(json['size_limits_config']),
    };
}

export function BlockchainConfig43ToJSON(value?: BlockchainConfig43 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'size_limits_config': SizeLimitsConfigToJSON(value.sizeLimitsConfig),
    };
}
