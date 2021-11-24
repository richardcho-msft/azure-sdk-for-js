/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  env,
  record,
  RecorderEnvironmentSetup,
  Recorder,
  delay,
  isPlaybackMode
} from "@azure-tools/test-recorder";
import * as assert from "assert";
import { ClientSecretCredential } from "@azure/identity";
import { ComputeManagementClient } from "../src/computeManagementClient";
import { NetworkManagementClient,VirtualNetwork,Subnet,NetworkInterface } from "@azure/arm-network";

const recorderEnvSetup: RecorderEnvironmentSetup = {
  replaceableVariables: {
    AZURE_CLIENT_ID: "azure_client_id",
    AZURE_CLIENT_SECRET: "azure_client_secret",
    AZURE_TENANT_ID: "88888888-8888-8888-8888-888888888888",
    SUBSCRIPTION_ID: "azure_subscription_id"
  },
  customizationsOnRecordings: [
    (recording: any): any =>
      recording.replace(
        /"access_token":"[^"]*"/g,
        `"access_token":"access_token"`
      )
  ],
  queryParametersToSkip: []
};

export const testPollingOptions = {
  updateIntervalInMs: isPlaybackMode() ? 0 : undefined,
};

describe("Compute test", () => {
  let recorder: Recorder;
  let subscriptionId: string;
  let client: ComputeManagementClient;
  let network_client: NetworkManagementClient;
  let location: string;
  let resourceGroupName: string;
  let availabilitySetName: string;
  let network_name: string;
  let subnet_name: string;
  let interface_name: string;
  let virtual_machine_name: string;

  beforeEach(async function() {
    recorder = record(this, recorderEnvSetup);
    subscriptionId = env.SUBSCRIPTION_ID;
    // This is an example of how the environment variables are used
    const credential = new ClientSecretCredential(
      env.AZURE_TENANT_ID,
      env.AZURE_CLIENT_ID,
      env.AZURE_CLIENT_SECRET
    );
    client = new ComputeManagementClient(credential, subscriptionId);
    network_client = new NetworkManagementClient(credential,subscriptionId);
    location = "eastus";
    resourceGroupName = "myjstest";
    availabilitySetName = "availabilitySets123";
    network_name = "networknamex";
    subnet_name = "subnetnamex";
    interface_name = "interfacex";
    virtual_machine_name = "virtualmachinex";
  });

  afterEach(async function() {
    await recorder.stop();
  });

  //network_client.virtualNetworks.createOrUpdate
  async function createVirtualNetwork() {
    const parameter: VirtualNetwork = {
      location: location,
      addressSpace: {
        addressPrefixes: ["10.0.0.0/16"],
      },
    };
    const virtualNetworks_create_info = await network_client.virtualNetworks.beginCreateOrUpdateAndWait(
      resourceGroupName,
      network_name,
      parameter,
      testPollingOptions
    );

    const subnet_parameter: Subnet = {
      addressPrefix: "10.0.0.0/24",
    };
    const subnet__create_info = await network_client.subnets.beginCreateOrUpdateAndWait(
      resourceGroupName,
      network_name,
      subnet_name,
      subnet_parameter,
      testPollingOptions
    );
  }

  //network_client.networkInterfaces.createOrUpdate
  async function createNetworkInterface(
    group_name: any,
    location: any,
    nic_name: any
  ) {
    const parameter: NetworkInterface = {
      location: location,
      ipConfigurations: [
        {
          name: "MyIpConfig",
          subnet: {
            id:
              "/subscriptions/" +
              subscriptionId +
              "/resourceGroups/" +
              resourceGroupName +
              "/providers/Microsoft.Network/virtualNetworks/" +
              network_name +
              "/subnets/" +
              subnet_name,
          },
        },
      ],
    };
    const nic_info = await network_client.networkInterfaces.beginCreateOrUpdateAndWait(
      group_name,
      nic_name,
      parameter,
      testPollingOptions
    );
  }

  it("availabilitySets create test", async function() {
    const res = await client.availabilitySets.createOrUpdate(resourceGroupName, availabilitySetName, {
      platformFaultDomainCount: 2,
      platformUpdateDomainCount: 20,
      location: location,
    })
    assert.equal(res.name,availabilitySetName);
  });

  it("availabilitySets update test", async function() {
    const res = await client.availabilitySets.update(resourceGroupName, availabilitySetName, {
      platformFaultDomainCount: 2,
      platformUpdateDomainCount: 20
    })
    assert.equal(res.type,"Microsoft.Compute/availabilitySets");
  });

  it("availabilitySets get test", async function() {
    const res = await client.availabilitySets.get(resourceGroupName, availabilitySetName);
    assert.equal(res.name,availabilitySetName);
  });

  it("availabilitySets list test", async function() {
    const resArray = new Array();
    for await (const item of client.availabilitySets.list(resourceGroupName)) {
      resArray.push(item);
    }
    assert.equal(resArray.length,1);
  });

  it("availabilitySets delete test", async function() {
    const res = await client.availabilitySets.delete(resourceGroupName,availabilitySetName);
    const resArray = new Array();
    for await (const item of client.availabilitySets.list(resourceGroupName)) {
      resArray.push(item);
    }
    assert.equal(resArray.length,0);
  });

  it("virtualMachines create test", async function() {
    await createVirtualNetwork();
    await createNetworkInterface(resourceGroupName, location, interface_name);
    const res = await client.virtualMachines.beginCreateOrUpdateAndWait(resourceGroupName,virtual_machine_name,{
      location: location,
      hardwareProfile: {
        vmSize: "Standard_D2_v2",
      },
      storageProfile: {
        imageReference: {
          sku: "2016-Datacenter",
          publisher: "MicrosoftWindowsServer",
          version: "latest",
          offer: "WindowsServer",
        },
        osDisk: {
          caching: "ReadWrite",
          managedDisk: {
            storageAccountType: "Standard_LRS",
          },
          name: "myVMosdisk",
          createOption: "FromImage",
        },
        dataDisks: [
          {
            diskSizeGB: 1023,
            createOption: "Empty",
            lun: 0,
          },
          {
            diskSizeGB: 1023,
            createOption: "Empty",
            lun: 1,
          },
        ],
      },
      osProfile: {
        adminUsername: "testuser",
        computerName: "myVM",
        adminPassword: "Aa!1()-xyz",
        windowsConfiguration: {
          enableAutomaticUpdates: true, // need automatic update for reimage
        },
      },
      networkProfile: {
        networkInterfaces: [
          {
            id:
              "/subscriptions/" +
              subscriptionId +
              "/resourceGroups/" +
              resourceGroupName +
              "/providers/Microsoft.Network/networkInterfaces/" +
              interface_name +
              "",
            primary: true,
          },
        ],
      }
    }, testPollingOptions);
    assert.equal(res.name,virtual_machine_name);
  });

  it("virtualMachines get test", async function() {
    const res = await client.virtualMachines.get(resourceGroupName, virtual_machine_name);
    assert.equal(res.name,virtual_machine_name);
  });

  it("virtualMachines list test", async function() {
    const resArray = new Array();
    for await (const item of client.virtualMachines.list(resourceGroupName)) {
      resArray.push(item);
    }
    assert.equal(resArray.length,1);
  });

  it("virtualMachines update test", async function() {
    const res = await client.virtualMachines.beginUpdateAndWait(resourceGroupName, virtual_machine_name, {
      networkProfile: {
        networkInterfaces: [
          {
            id:
              "/subscriptions/" +
              subscriptionId +
              "/resourceGroups/" +
              resourceGroupName +
              "/providers/Microsoft.Network/networkInterfaces/" +
              interface_name +
              "",
            primary: true,
          },
        ],
      }
    }, testPollingOptions)
    assert.equal(res.type,"Microsoft.Compute/virtualMachines");
  });

  it("virtualMachines delete test", async function() {
    const res = await client.virtualMachines.beginDeleteAndWait(resourceGroupName,virtual_machine_name,testPollingOptions);
    const resArray = new Array();
    for await (const item of client.virtualMachines.list(resourceGroupName)) {
      resArray.push(item);
    }
    assert.equal(resArray.length,0);
  });
});
