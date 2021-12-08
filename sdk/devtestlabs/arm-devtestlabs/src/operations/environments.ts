/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { Environments } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { DevTestLabsClient } from "../devTestLabsClient";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  DtlEnvironment,
  EnvironmentsListNextOptionalParams,
  EnvironmentsListOptionalParams,
  EnvironmentsListResponse,
  EnvironmentsGetOptionalParams,
  EnvironmentsGetResponse,
  EnvironmentsCreateOrUpdateOptionalParams,
  EnvironmentsCreateOrUpdateResponse,
  EnvironmentsDeleteOptionalParams,
  DtlEnvironmentFragment,
  EnvironmentsUpdateOptionalParams,
  EnvironmentsUpdateResponse,
  EnvironmentsListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing Environments operations. */
export class EnvironmentsImpl implements Environments {
  private readonly client: DevTestLabsClient;

  /**
   * Initialize a new instance of the class Environments class.
   * @param client Reference to the service client
   */
  constructor(client: DevTestLabsClient) {
    this.client = client;
  }

  /**
   * List environments in a given user profile.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param userName The name of the user profile.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    labName: string,
    userName: string,
    options?: EnvironmentsListOptionalParams
  ): PagedAsyncIterableIterator<DtlEnvironment> {
    const iter = this.listPagingAll(
      resourceGroupName,
      labName,
      userName,
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
        return this.listPagingPage(
          resourceGroupName,
          labName,
          userName,
          options
        );
      }
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    labName: string,
    userName: string,
    options?: EnvironmentsListOptionalParams
  ): AsyncIterableIterator<DtlEnvironment[]> {
    let result = await this._list(
      resourceGroupName,
      labName,
      userName,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        labName,
        userName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listPagingAll(
    resourceGroupName: string,
    labName: string,
    userName: string,
    options?: EnvironmentsListOptionalParams
  ): AsyncIterableIterator<DtlEnvironment> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      labName,
      userName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * List environments in a given user profile.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param userName The name of the user profile.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    labName: string,
    userName: string,
    options?: EnvironmentsListOptionalParams
  ): Promise<EnvironmentsListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, labName, userName, options },
      listOperationSpec
    );
  }

  /**
   * Get environment.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param userName The name of the user profile.
   * @param name The name of the environment.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    labName: string,
    userName: string,
    name: string,
    options?: EnvironmentsGetOptionalParams
  ): Promise<EnvironmentsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, labName, userName, name, options },
      getOperationSpec
    );
  }

  /**
   * Create or replace an existing environment. This operation can take a while to complete.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param userName The name of the user profile.
   * @param name The name of the environment.
   * @param dtlEnvironment An environment, which is essentially an ARM template deployment.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    labName: string,
    userName: string,
    name: string,
    dtlEnvironment: DtlEnvironment,
    options?: EnvironmentsCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<EnvironmentsCreateOrUpdateResponse>,
      EnvironmentsCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<EnvironmentsCreateOrUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { resourceGroupName, labName, userName, name, dtlEnvironment, options },
      createOrUpdateOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
  }

  /**
   * Create or replace an existing environment. This operation can take a while to complete.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param userName The name of the user profile.
   * @param name The name of the environment.
   * @param dtlEnvironment An environment, which is essentially an ARM template deployment.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    labName: string,
    userName: string,
    name: string,
    dtlEnvironment: DtlEnvironment,
    options?: EnvironmentsCreateOrUpdateOptionalParams
  ): Promise<EnvironmentsCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      labName,
      userName,
      name,
      dtlEnvironment,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Delete environment. This operation can take a while to complete.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param userName The name of the user profile.
   * @param name The name of the environment.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    labName: string,
    userName: string,
    name: string,
    options?: EnvironmentsDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { resourceGroupName, labName, userName, name, options },
      deleteOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
  }

  /**
   * Delete environment. This operation can take a while to complete.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param userName The name of the user profile.
   * @param name The name of the environment.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    labName: string,
    userName: string,
    name: string,
    options?: EnvironmentsDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      labName,
      userName,
      name,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Allows modifying tags of environments. All other properties will be ignored.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param userName The name of the user profile.
   * @param name The name of the environment.
   * @param dtlEnvironment An environment, which is essentially an ARM template deployment.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    labName: string,
    userName: string,
    name: string,
    dtlEnvironment: DtlEnvironmentFragment,
    options?: EnvironmentsUpdateOptionalParams
  ): Promise<EnvironmentsUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, labName, userName, name, dtlEnvironment, options },
      updateOperationSpec
    );
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param userName The name of the user profile.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    labName: string,
    userName: string,
    nextLink: string,
    options?: EnvironmentsListNextOptionalParams
  ): Promise<EnvironmentsListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, labName, userName, nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/users/{userName}/environments",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DtlEnvironmentList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.expand,
    Parameters.filter,
    Parameters.top,
    Parameters.orderby
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.labName,
    Parameters.userName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/users/{userName}/environments/{name}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DtlEnvironment
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.expand],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.name,
    Parameters.labName,
    Parameters.userName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/users/{userName}/environments/{name}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.DtlEnvironment
    },
    201: {
      bodyMapper: Mappers.DtlEnvironment
    },
    202: {
      bodyMapper: Mappers.DtlEnvironment
    },
    204: {
      bodyMapper: Mappers.DtlEnvironment
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.dtlEnvironment,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.name,
    Parameters.labName,
    Parameters.userName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/users/{userName}/environments/{name}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.name,
    Parameters.labName,
    Parameters.userName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/users/{userName}/environments/{name}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.DtlEnvironment
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.dtlEnvironment1,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.name,
    Parameters.labName,
    Parameters.userName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DtlEnvironmentList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.expand,
    Parameters.filter,
    Parameters.top,
    Parameters.orderby
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.labName,
    Parameters.userName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
