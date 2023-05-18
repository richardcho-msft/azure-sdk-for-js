/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  ClientEncryptionKeyCreateUpdateParameters,
  CosmosDBManagementClient
} from "@azure/arm-cosmosdb";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Create or update a ClientEncryptionKey. This API is meant to be invoked via tools such as the Azure Powershell (instead of directly).
 *
 * @summary Create or update a ClientEncryptionKey. This API is meant to be invoked via tools such as the Azure Powershell (instead of directly).
 * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/stable/2023-04-15/examples/CosmosDBSqlClientEncryptionKeyCreateUpdate.json
 */
async function cosmosDbClientEncryptionKeyCreateUpdate() {
  const subscriptionId = process.env["COSMOSDB_SUBSCRIPTION_ID"] || "subId";
  const resourceGroupName = process.env["COSMOSDB_RESOURCE_GROUP"] || "rgName";
  const accountName = "accountName";
  const databaseName = "databaseName";
  const clientEncryptionKeyName = "cekName";
  const createUpdateClientEncryptionKeyParameters: ClientEncryptionKeyCreateUpdateParameters = {
    resource: {
      encryptionAlgorithm: "AEAD_AES_256_CBC_HMAC_SHA256",
      id: "cekName",
      keyWrapMetadata: {
        name: "customerManagedKey",
        type: "AzureKeyVault",
        algorithm: "RSA-OAEP",
        value: "AzureKeyVault Key URL"
      },
      wrappedDataEncryptionKey: Buffer.from("U3dhZ2dlciByb2Nrcw==")
    }
  };
  const credential = new DefaultAzureCredential();
  const client = new CosmosDBManagementClient(credential, subscriptionId);
  const result = await client.sqlResources.beginCreateUpdateClientEncryptionKeyAndWait(
    resourceGroupName,
    accountName,
    databaseName,
    clientEncryptionKeyName,
    createUpdateClientEncryptionKeyParameters
  );
  console.log(result);
}

async function main() {
  cosmosDbClientEncryptionKeyCreateUpdate();
}

main().catch(console.error);
