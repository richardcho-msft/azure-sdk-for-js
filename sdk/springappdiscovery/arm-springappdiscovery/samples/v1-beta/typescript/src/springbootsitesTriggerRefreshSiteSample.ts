/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { SpringAppDiscoveryManagementClient } from "@azure/arm-springappdiscovery";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Trigger refresh springbootsites action
 *
 * @summary Trigger refresh springbootsites action
 * x-ms-original-file: specification/offazurespringboot/resource-manager/Microsoft.OffAzureSpringBoot/preview/2023-01-01-preview/examples/springbootsites_TriggerRefreshSite_MaximumSet_Gen.json
 */
async function springbootsitesTriggerRefreshSiteMaximumSetGen() {
  const subscriptionId =
    process.env["SPRINGAPPDISCOVERY_SUBSCRIPTION_ID"] || "z";
  const resourceGroupName =
    process.env["SPRINGAPPDISCOVERY_RESOURCE_GROUP"] || "rgspringbootsites";
  const springbootsitesName = "czarpuxwoafaqsuptutcwyu";
  const credential = new DefaultAzureCredential();
  const client = new SpringAppDiscoveryManagementClient(
    credential,
    subscriptionId,
  );
  const result = await client.springbootsites.beginTriggerRefreshSiteAndWait(
    resourceGroupName,
    springbootsitesName,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Trigger refresh springbootsites action
 *
 * @summary Trigger refresh springbootsites action
 * x-ms-original-file: specification/offazurespringboot/resource-manager/Microsoft.OffAzureSpringBoot/preview/2023-01-01-preview/examples/springbootsites_TriggerRefreshSite_MinimumSet_Gen.json
 */
async function springbootsitesTriggerRefreshSiteMinimumSetGen() {
  const subscriptionId =
    process.env["SPRINGAPPDISCOVERY_SUBSCRIPTION_ID"] || "z";
  const resourceGroupName =
    process.env["SPRINGAPPDISCOVERY_RESOURCE_GROUP"] || "rgspringbootsites";
  const springbootsitesName = "czarpuxwoafaqsuptutcwyu";
  const credential = new DefaultAzureCredential();
  const client = new SpringAppDiscoveryManagementClient(
    credential,
    subscriptionId,
  );
  const result = await client.springbootsites.beginTriggerRefreshSiteAndWait(
    resourceGroupName,
    springbootsitesName,
  );
  console.log(result);
}

async function main() {
  springbootsitesTriggerRefreshSiteMaximumSetGen();
  springbootsitesTriggerRefreshSiteMinimumSetGen();
}

main().catch(console.error);
