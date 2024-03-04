/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  Alert,
  ReplicationAlertSettingsListOptionalParams,
  ReplicationAlertSettingsGetOptionalParams,
  ReplicationAlertSettingsGetResponse,
  ConfigureAlertRequest,
  ReplicationAlertSettingsCreateOptionalParams,
  ReplicationAlertSettingsCreateResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a ReplicationAlertSettings. */
export interface ReplicationAlertSettings {
  /**
   * Gets the list of email notification(alert) configurations for the vault.
   * @param resourceName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param options The options parameters.
   */
  list(
    resourceName: string,
    resourceGroupName: string,
    options?: ReplicationAlertSettingsListOptionalParams,
  ): PagedAsyncIterableIterator<Alert>;
  /**
   * Gets the details of the specified email notification(alert) configuration.
   * @param resourceName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param alertSettingName The name of the email notification configuration.
   * @param options The options parameters.
   */
  get(
    resourceName: string,
    resourceGroupName: string,
    alertSettingName: string,
    options?: ReplicationAlertSettingsGetOptionalParams,
  ): Promise<ReplicationAlertSettingsGetResponse>;
  /**
   * Create or update an email notification(alert) configuration.
   * @param resourceName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param alertSettingName The name of the email notification(alert) configuration.
   * @param request The input to configure the email notification(alert).
   * @param options The options parameters.
   */
  create(
    resourceName: string,
    resourceGroupName: string,
    alertSettingName: string,
    request: ConfigureAlertRequest,
    options?: ReplicationAlertSettingsCreateOptionalParams,
  ): Promise<ReplicationAlertSettingsCreateResponse>;
}
