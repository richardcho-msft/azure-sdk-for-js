/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { PrivateLinkResourceOperations } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { BatchManagementClientContext } from "../batchManagementClientContext";
import {
  PrivateLinkResource,
  PrivateLinkResourceListByBatchAccountNextOptionalParams,
  PrivateLinkResourceListByBatchAccountOptionalParams,
  PrivateLinkResourceListByBatchAccountResponse,
  PrivateLinkResourceGetOptionalParams,
  PrivateLinkResourceGetResponse,
  PrivateLinkResourceListByBatchAccountNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing PrivateLinkResourceOperations operations. */
export class PrivateLinkResourceOperationsImpl
  implements PrivateLinkResourceOperations {
  private readonly client: BatchManagementClientContext;

  /**
   * Initialize a new instance of the class PrivateLinkResourceOperations class.
   * @param client Reference to the service client
   */
  constructor(client: BatchManagementClientContext) {
    this.client = client;
  }

  /**
   * Lists all of the private link resources in the specified account.
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param accountName The name of the Batch account.
   * @param options The options parameters.
   */
  public listByBatchAccount(
    resourceGroupName: string,
    accountName: string,
    options?: PrivateLinkResourceListByBatchAccountOptionalParams
  ): PagedAsyncIterableIterator<PrivateLinkResource> {
    const iter = this.listByBatchAccountPagingAll(
      resourceGroupName,
      accountName,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listByBatchAccountPagingPage(
          resourceGroupName,
          accountName,
          options
        );
      }
    };
  }

  private async *listByBatchAccountPagingPage(
    resourceGroupName: string,
    accountName: string,
    options?: PrivateLinkResourceListByBatchAccountOptionalParams
  ): AsyncIterableIterator<PrivateLinkResource[]> {
    let result = await this._listByBatchAccount(
      resourceGroupName,
      accountName,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listByBatchAccountNext(
        resourceGroupName,
        accountName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listByBatchAccountPagingAll(
    resourceGroupName: string,
    accountName: string,
    options?: PrivateLinkResourceListByBatchAccountOptionalParams
  ): AsyncIterableIterator<PrivateLinkResource> {
    for await (const page of this.listByBatchAccountPagingPage(
      resourceGroupName,
      accountName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Lists all of the private link resources in the specified account.
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param accountName The name of the Batch account.
   * @param options The options parameters.
   */
  private _listByBatchAccount(
    resourceGroupName: string,
    accountName: string,
    options?: PrivateLinkResourceListByBatchAccountOptionalParams
  ): Promise<PrivateLinkResourceListByBatchAccountResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, options },
      listByBatchAccountOperationSpec
    );
  }

  /**
   * Gets information about the specified private link resource.
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param accountName The name of the Batch account.
   * @param privateLinkResourceName The private link resource name. This must be unique within the
   *                                account.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    accountName: string,
    privateLinkResourceName: string,
    options?: PrivateLinkResourceGetOptionalParams
  ): Promise<PrivateLinkResourceGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, privateLinkResourceName, options },
      getOperationSpec
    );
  }

  /**
   * ListByBatchAccountNext
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param accountName The name of the Batch account.
   * @param nextLink The nextLink from the previous successful call to the ListByBatchAccount method.
   * @param options The options parameters.
   */
  private _listByBatchAccountNext(
    resourceGroupName: string,
    accountName: string,
    nextLink: string,
    options?: PrivateLinkResourceListByBatchAccountNextOptionalParams
  ): Promise<PrivateLinkResourceListByBatchAccountNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, nextLink, options },
      listByBatchAccountNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByBatchAccountOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}/privateLinkResources",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ListPrivateLinkResourcesResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.maxresults],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.accountName1
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}/privateLinkResources/{privateLinkResourceName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PrivateLinkResource
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.accountName1,
    Parameters.privateLinkResourceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByBatchAccountNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ListPrivateLinkResourcesResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.maxresults],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.accountName1,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
