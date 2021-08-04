/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as Models from "./models";
import * as msRest from "@azure/ms-rest-js";
import { TokenCredential } from "@azure/core-auth";
import * as msRestAzure from "@azure/ms-rest-azure-js";

const packageName = "@azure/arm-resources";
const packageVersion = "4.2.1";

export class ResourceManagementClientContext extends msRestAzure.AzureServiceClient {
  credentials: msRest.ServiceClientCredentials | TokenCredential;
  subscriptionId: string;
  apiVersion?: string;

  /**
   * Initializes a new instance of the ResourceManagementClient class.
   * @param credentials Credentials needed for the client to connect to Azure. Credentials
   * implementing the TokenCredential interface from the @azure/identity package are recommended. For
   * more information about these credentials, see
   * {@link https://www.npmjs.com/package/@azure/identity}. Credentials implementing the
   * ServiceClientCredentials interface from the older packages @azure/ms-rest-nodeauth and
   * @azure/ms-rest-browserauth are also supported.
   * @param subscriptionId The ID of the target subscription.
   * @param [options] The parameter options
   */
  constructor(
    credentials: msRest.ServiceClientCredentials | TokenCredential,
    subscriptionId: string,
    options?: Models.ResourceManagementClientOptions
  ) {
    if (credentials == undefined) {
      throw new Error("'credentials' cannot be null.");
    }
    if (subscriptionId == undefined) {
      throw new Error("'subscriptionId' cannot be null.");
    }

    if (!options) {
      options = {};
    }
    if (!options.userAgent) {
      const defaultUserAgent = msRestAzure.getDefaultUserAgentValue();
      options.userAgent = `${packageName}/${packageVersion} ${defaultUserAgent}`;
    }

    super(credentials, options);

    this.apiVersion = "2021-01-01";
    this.acceptLanguage = "en-US";
    this.longRunningOperationRetryTimeout = 30;
    this.baseUri = options.baseUri || this.baseUri || "https://management.azure.com";
    this.requestContentType = "application/json; charset=utf-8";
    this.credentials = credentials;
    this.subscriptionId = subscriptionId;

    if (options.acceptLanguage !== null && options.acceptLanguage !== undefined) {
      this.acceptLanguage = options.acceptLanguage;
    }
    if (
      options.longRunningOperationRetryTimeout !== null &&
      options.longRunningOperationRetryTimeout !== undefined
    ) {
      this.longRunningOperationRetryTimeout = options.longRunningOperationRetryTimeout;
    }
  }
}
