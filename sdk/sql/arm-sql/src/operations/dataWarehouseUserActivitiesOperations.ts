/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { DataWarehouseUserActivitiesOperations } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { SqlManagementClient } from "../sqlManagementClient";
import {
  DataWarehouseUserActivities,
  DataWarehouseUserActivitiesListByDatabaseNextOptionalParams,
  DataWarehouseUserActivitiesListByDatabaseOptionalParams,
  DataWarehouseUserActivityName,
  DataWarehouseUserActivitiesGetOptionalParams,
  DataWarehouseUserActivitiesGetResponse,
  DataWarehouseUserActivitiesListByDatabaseResponse,
  DataWarehouseUserActivitiesListByDatabaseNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing DataWarehouseUserActivitiesOperations operations. */
export class DataWarehouseUserActivitiesOperationsImpl
  implements DataWarehouseUserActivitiesOperations {
  private readonly client: SqlManagementClient;

  /**
   * Initialize a new instance of the class DataWarehouseUserActivitiesOperations class.
   * @param client Reference to the service client
   */
  constructor(client: SqlManagementClient) {
    this.client = client;
  }

  /**
   * List the user activities of a data warehouse which includes running and suspended queries
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param options The options parameters.
   */
  public listByDatabase(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    options?: DataWarehouseUserActivitiesListByDatabaseOptionalParams
  ): PagedAsyncIterableIterator<DataWarehouseUserActivities> {
    const iter = this.listByDatabasePagingAll(
      resourceGroupName,
      serverName,
      databaseName,
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
        return this.listByDatabasePagingPage(
          resourceGroupName,
          serverName,
          databaseName,
          options
        );
      }
    };
  }

  private async *listByDatabasePagingPage(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    options?: DataWarehouseUserActivitiesListByDatabaseOptionalParams
  ): AsyncIterableIterator<DataWarehouseUserActivities[]> {
    let result = await this._listByDatabase(
      resourceGroupName,
      serverName,
      databaseName,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listByDatabaseNext(
        resourceGroupName,
        serverName,
        databaseName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listByDatabasePagingAll(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    options?: DataWarehouseUserActivitiesListByDatabaseOptionalParams
  ): AsyncIterableIterator<DataWarehouseUserActivities> {
    for await (const page of this.listByDatabasePagingPage(
      resourceGroupName,
      serverName,
      databaseName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets the user activities of a data warehouse which includes running and suspended queries
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param dataWarehouseUserActivityName The activity name of the data warehouse.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    dataWarehouseUserActivityName: DataWarehouseUserActivityName,
    options?: DataWarehouseUserActivitiesGetOptionalParams
  ): Promise<DataWarehouseUserActivitiesGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serverName,
        databaseName,
        dataWarehouseUserActivityName,
        options
      },
      getOperationSpec
    );
  }

  /**
   * List the user activities of a data warehouse which includes running and suspended queries
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param options The options parameters.
   */
  private _listByDatabase(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    options?: DataWarehouseUserActivitiesListByDatabaseOptionalParams
  ): Promise<DataWarehouseUserActivitiesListByDatabaseResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serverName, databaseName, options },
      listByDatabaseOperationSpec
    );
  }

  /**
   * ListByDatabaseNext
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param nextLink The nextLink from the previous successful call to the ListByDatabase method.
   * @param options The options parameters.
   */
  private _listByDatabaseNext(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    nextLink: string,
    options?: DataWarehouseUserActivitiesListByDatabaseNextOptionalParams
  ): Promise<DataWarehouseUserActivitiesListByDatabaseNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serverName, databaseName, nextLink, options },
      listByDatabaseNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/dataWarehouseUserActivities/{dataWarehouseUserActivityName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DataWarehouseUserActivities
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion2],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.databaseName,
    Parameters.dataWarehouseUserActivityName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByDatabaseOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/dataWarehouseUserActivities",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DataWarehouseUserActivitiesListResult
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion2],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.databaseName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByDatabaseNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DataWarehouseUserActivitiesListResult
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion2],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.databaseName,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
