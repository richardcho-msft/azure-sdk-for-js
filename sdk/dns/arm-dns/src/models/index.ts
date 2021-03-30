import * as coreHttp from "@azure/core-http";
import { LROSYM, LROResponseInfo } from "../lro/models";

/** Describes a DNS record set (a collection of DNS records with the same name and type). */
export interface RecordSet {
  /**
   * The ID of the record set.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly id?: string;
  /**
   * The name of the record set.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly name?: string;
  /**
   * The type of the record set.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly type?: string;
  /** The etag of the record set. */
  etag?: string;
  /** The metadata attached to the record set. */
  metadata?: { [propertyName: string]: string };
  /** The TTL (time-to-live) of the records in the record set. */
  ttl?: number;
  /**
   * Fully qualified domain name of the record set.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly fqdn?: string;
  /**
   * provisioning State of the record set.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly provisioningState?: string;
  /** A reference to an azure resource from where the dns resource value is taken. */
  targetResource?: SubResource;
  /** The list of A records in the record set. */
  aRecords?: ARecord[];
  /** The list of AAAA records in the record set. */
  aaaaRecords?: AaaaRecord[];
  /** The list of MX records in the record set. */
  mxRecords?: MxRecord[];
  /** The list of NS records in the record set. */
  nsRecords?: NsRecord[];
  /** The list of PTR records in the record set. */
  ptrRecords?: PtrRecord[];
  /** The list of SRV records in the record set. */
  srvRecords?: SrvRecord[];
  /** The list of TXT records in the record set. */
  txtRecords?: TxtRecord[];
  /** The CNAME record in the  record set. */
  cnameRecord?: CnameRecord;
  /** The SOA record in the record set. */
  soaRecord?: SoaRecord;
  /** The list of CAA records in the record set. */
  caaRecords?: CaaRecord[];
}

/** A reference to a another resource */
export interface SubResource {
  /** Resource Id. */
  id?: string;
}

/** An A record. */
export interface ARecord {
  /** The IPv4 address of this A record. */
  ipv4Address?: string;
}

/** An AAAA record. */
export interface AaaaRecord {
  /** The IPv6 address of this AAAA record. */
  ipv6Address?: string;
}

/** An MX record. */
export interface MxRecord {
  /** The preference value for this MX record. */
  preference?: number;
  /** The domain name of the mail host for this MX record. */
  exchange?: string;
}

/** An NS record. */
export interface NsRecord {
  /** The name server name for this NS record. */
  nsdname?: string;
}

/** A PTR record. */
export interface PtrRecord {
  /** The PTR target domain name for this PTR record. */
  ptrdname?: string;
}

/** An SRV record. */
export interface SrvRecord {
  /** The priority value for this SRV record. */
  priority?: number;
  /** The weight value for this SRV record. */
  weight?: number;
  /** The port value for this SRV record. */
  port?: number;
  /** The target domain name for this SRV record. */
  target?: string;
}

/** A TXT record. */
export interface TxtRecord {
  /** The text value of this TXT record. */
  value?: string[];
}

/** A CNAME record. */
export interface CnameRecord {
  /** The canonical name for this CNAME record. */
  cname?: string;
}

/** An SOA record. */
export interface SoaRecord {
  /** The domain name of the authoritative name server for this SOA record. */
  host?: string;
  /** The email contact for this SOA record. */
  email?: string;
  /** The serial number for this SOA record. */
  serialNumber?: number;
  /** The refresh value for this SOA record. */
  refreshTime?: number;
  /** The retry time for this SOA record. */
  retryTime?: number;
  /** The expire time for this SOA record. */
  expireTime?: number;
  /** The minimum value for this SOA record. By convention this is used to determine the negative caching duration. */
  minimumTtl?: number;
}

/** A CAA record. */
export interface CaaRecord {
  /** The flags for this CAA record as an integer between 0 and 255. */
  flags?: number;
  /** The tag for this CAA record. */
  tag?: string;
  /** The value for this CAA record. */
  value?: string;
}

/** An error response from the service. */
export interface CloudError {
  /** Cloud error body. */
  error?: CloudErrorBody;
}

/** An error response from the service. */
export interface CloudErrorBody {
  /** An identifier for the error. Codes are invariant and are intended to be consumed programmatically. */
  code?: string;
  /** A message describing the error, intended to be suitable for display in a user interface. */
  message?: string;
  /** The target of the particular error. For example, the name of the property in error. */
  target?: string;
  /** A list of additional details about the error. */
  details?: CloudErrorBody[];
}

/** The response to a record set List operation. */
export interface RecordSetListResult {
  /** Information about the record sets in the response. */
  value?: RecordSet[];
  /**
   * The continuation token for the next page of results.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly nextLink?: string;
}

/** Common properties of an Azure Resource Manager resource */
export interface Resource {
  /**
   * Resource ID.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly id?: string;
  /**
   * Resource name.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly name?: string;
  /**
   * Resource type.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly type?: string;
  /** Resource location. */
  location: string;
  /** Resource tags. */
  tags?: { [propertyName: string]: string };
}

/** Describes a request to update a DNS zone. */
export interface ZoneUpdate {
  /** Resource tags. */
  tags?: { [propertyName: string]: string };
}

/** The response to a Zone List or ListAll operation. */
export interface ZoneListResult {
  /** Information about the DNS zones. */
  value?: Zone[];
  /**
   * The continuation token for the next page of results.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly nextLink?: string;
}

/** Represents the properties of the Dns Resource Reference Request. */
export interface DnsResourceReferenceRequest {
  /** A list of references to azure resources for which referencing dns records need to be queried. */
  targetResources?: SubResource[];
}

/** Represents the properties of the Dns Resource Reference Result. */
export interface DnsResourceReferenceResult {
  /** The result of dns resource reference request. A list of dns resource references for each of the azure resource in the request */
  dnsResourceReferences?: DnsResourceReference[];
}

/** Represents a single Azure resource and its referencing DNS records. */
export interface DnsResourceReference {
  /** A list of dns Records */
  dnsResources?: SubResource[];
  /** A reference to an azure resource from where the dns resource value is taken. */
  targetResource?: SubResource;
}

/** Parameters supplied to update a record set. */
export interface RecordSetUpdateParameters {
  /** Specifies information about the record set being updated. */
  recordSet?: RecordSet;
}

/** Describes a DNS zone. */
export type Zone = Resource & {
  /** The etag of the zone. */
  etag?: string;
  /**
   * The maximum number of record sets that can be created in this DNS zone.  This is a read-only property and any attempt to set this value will be ignored.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly maxNumberOfRecordSets?: number;
  /**
   * The maximum number of records per record set that can be created in this DNS zone.  This is a read-only property and any attempt to set this value will be ignored.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly maxNumberOfRecordsPerRecordSet?: number;
  /**
   * The current number of record sets in this DNS zone.  This is a read-only property and any attempt to set this value will be ignored.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly numberOfRecordSets?: number;
  /**
   * The name servers for this DNS zone. This is a read-only property and any attempt to set this value will be ignored.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly nameServers?: string[];
  /** The type of this DNS zone (Public or Private). */
  zoneType?: ZoneType;
  /** A list of references to virtual networks that register hostnames in this DNS zone. This is a only when ZoneType is Private. */
  registrationVirtualNetworks?: SubResource[];
  /** A list of references to virtual networks that resolve records in this DNS zone. This is a only when ZoneType is Private. */
  resolutionVirtualNetworks?: SubResource[];
};
/** Defines values for RecordType. */
export type RecordType =
  | "A"
  | "AAAA"
  | "CAA"
  | "CNAME"
  | "MX"
  | "NS"
  | "PTR"
  | "SOA"
  | "SRV"
  | "TXT";
/** Defines values for ZoneType. */
export type ZoneType = "Public" | "Private";

/** Optional parameters. */
export interface RecordSetsUpdateOptionalParams
  extends coreHttp.OperationOptions {
  /** The etag of the record set. Omit this value to always overwrite the current record set. Specify the last-seen etag value to prevent accidentally overwriting concurrent changes. */
  ifMatch?: string;
}

/** Contains response data for the update operation. */
export type RecordSetsUpdateResponse = RecordSet & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: RecordSet;
  };
};

/** Optional parameters. */
export interface RecordSetsCreateOrUpdateOptionalParams
  extends coreHttp.OperationOptions {
  /** The etag of the record set. Omit this value to always overwrite the current record set. Specify the last-seen etag value to prevent accidentally overwriting any concurrent changes. */
  ifMatch?: string;
  /** Set to '*' to allow a new record set to be created, but to prevent updating an existing record set. Other values will be ignored. */
  ifNoneMatch?: string;
}

/** Contains response data for the createOrUpdate operation. */
export type RecordSetsCreateOrUpdateResponse = RecordSet & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: RecordSet;
  };
};

/** Optional parameters. */
export interface RecordSetsDeleteOptionalParams
  extends coreHttp.OperationOptions {
  /** The etag of the record set. Omit this value to always delete the current record set. Specify the last-seen etag value to prevent accidentally deleting any concurrent changes. */
  ifMatch?: string;
}

/** Contains response data for the get operation. */
export type RecordSetsGetResponse = RecordSet & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: RecordSet;
  };
};

/** Optional parameters. */
export interface RecordSetsListByTypeOptionalParams
  extends coreHttp.OperationOptions {
  /** The maximum number of record sets to return. If not specified, returns up to 100 record sets. */
  top?: number;
  /** The suffix label of the record set name that has to be used to filter the record set enumerations. If this parameter is specified, Enumeration will return only records that end with .<recordSetNameSuffix> */
  recordsetnamesuffix?: string;
}

/** Contains response data for the listByType operation. */
export type RecordSetsListByTypeResponse = RecordSetListResult & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: RecordSetListResult;
  };
};

/** Optional parameters. */
export interface RecordSetsListByDnsZoneOptionalParams
  extends coreHttp.OperationOptions {
  /** The maximum number of record sets to return. If not specified, returns up to 100 record sets. */
  top?: number;
  /** The suffix label of the record set name that has to be used to filter the record set enumerations. If this parameter is specified, Enumeration will return only records that end with .<recordSetNameSuffix> */
  recordsetnamesuffix?: string;
}

/** Contains response data for the listByDnsZone operation. */
export type RecordSetsListByDnsZoneResponse = RecordSetListResult & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: RecordSetListResult;
  };
};

/** Optional parameters. */
export interface RecordSetsListAllByDnsZoneOptionalParams
  extends coreHttp.OperationOptions {
  /** The maximum number of record sets to return. If not specified, returns up to 100 record sets. */
  top?: number;
  /** The suffix label of the record set name that has to be used to filter the record set enumerations. If this parameter is specified, Enumeration will return only records that end with .<recordSetNameSuffix> */
  recordSetNameSuffix?: string;
}

/** Contains response data for the listAllByDnsZone operation. */
export type RecordSetsListAllByDnsZoneResponse = RecordSetListResult & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: RecordSetListResult;
  };
};

/** Optional parameters. */
export interface RecordSetsListByTypeNextOptionalParams
  extends coreHttp.OperationOptions {
  /** The maximum number of record sets to return. If not specified, returns up to 100 record sets. */
  top?: number;
  /** The suffix label of the record set name that has to be used to filter the record set enumerations. If this parameter is specified, Enumeration will return only records that end with .<recordSetNameSuffix> */
  recordsetnamesuffix?: string;
}

/** Contains response data for the listByTypeNext operation. */
export type RecordSetsListByTypeNextResponse = RecordSetListResult & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: RecordSetListResult;
  };
};

/** Optional parameters. */
export interface RecordSetsListByDnsZoneNextOptionalParams
  extends coreHttp.OperationOptions {
  /** The maximum number of record sets to return. If not specified, returns up to 100 record sets. */
  top?: number;
  /** The suffix label of the record set name that has to be used to filter the record set enumerations. If this parameter is specified, Enumeration will return only records that end with .<recordSetNameSuffix> */
  recordsetnamesuffix?: string;
}

/** Contains response data for the listByDnsZoneNext operation. */
export type RecordSetsListByDnsZoneNextResponse = RecordSetListResult & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: RecordSetListResult;
  };
};

/** Optional parameters. */
export interface RecordSetsListAllByDnsZoneNextOptionalParams
  extends coreHttp.OperationOptions {
  /** The maximum number of record sets to return. If not specified, returns up to 100 record sets. */
  top?: number;
  /** The suffix label of the record set name that has to be used to filter the record set enumerations. If this parameter is specified, Enumeration will return only records that end with .<recordSetNameSuffix> */
  recordSetNameSuffix?: string;
}

/** Contains response data for the listAllByDnsZoneNext operation. */
export type RecordSetsListAllByDnsZoneNextResponse = RecordSetListResult & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: RecordSetListResult;
  };
};

/** Optional parameters. */
export interface ZonesCreateOrUpdateOptionalParams
  extends coreHttp.OperationOptions {
  /** The etag of the DNS zone. Omit this value to always overwrite the current zone. Specify the last-seen etag value to prevent accidentally overwriting any concurrent changes. */
  ifMatch?: string;
  /** Set to '*' to allow a new DNS zone to be created, but to prevent updating an existing zone. Other values will be ignored. */
  ifNoneMatch?: string;
}

/** Contains response data for the createOrUpdate operation. */
export type ZonesCreateOrUpdateResponse = Zone & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: Zone;
  };
};

/** Optional parameters. */
export interface ZonesDeleteOptionalParams extends coreHttp.OperationOptions {
  /** The etag of the DNS zone. Omit this value to always delete the current zone. Specify the last-seen etag value to prevent accidentally deleting any concurrent changes. */
  ifMatch?: string;
}

/** Contains response data for the get operation. */
export type ZonesGetResponse = Zone & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: Zone;
  };
};

/** Optional parameters. */
export interface ZonesUpdateOptionalParams extends coreHttp.OperationOptions {
  /** The etag of the DNS zone. Omit this value to always overwrite the current zone. Specify the last-seen etag value to prevent accidentally overwriting any concurrent changes. */
  ifMatch?: string;
}

/** Contains response data for the update operation. */
export type ZonesUpdateResponse = Zone & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: Zone;
  };
};

/** Optional parameters. */
export interface ZonesListByResourceGroupOptionalParams
  extends coreHttp.OperationOptions {
  /** The maximum number of record sets to return. If not specified, returns up to 100 record sets. */
  top?: number;
}

/** Contains response data for the listByResourceGroup operation. */
export type ZonesListByResourceGroupResponse = ZoneListResult & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: ZoneListResult;
  };
};

/** Optional parameters. */
export interface ZonesListOptionalParams extends coreHttp.OperationOptions {
  /** The maximum number of DNS zones to return. If not specified, returns up to 100 zones. */
  top?: number;
}

/** Contains response data for the list operation. */
export type ZonesListResponse = ZoneListResult & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: ZoneListResult;
  };
};

/** Optional parameters. */
export interface ZonesListByResourceGroupNextOptionalParams
  extends coreHttp.OperationOptions {
  /** The maximum number of record sets to return. If not specified, returns up to 100 record sets. */
  top?: number;
}

/** Contains response data for the listByResourceGroupNext operation. */
export type ZonesListByResourceGroupNextResponse = ZoneListResult & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: ZoneListResult;
  };
};

/** Optional parameters. */
export interface ZonesListNextOptionalParams extends coreHttp.OperationOptions {
  /** The maximum number of DNS zones to return. If not specified, returns up to 100 zones. */
  top?: number;
}

/** Contains response data for the listNext operation. */
export type ZonesListNextResponse = ZoneListResult & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: ZoneListResult;
  };
};

/** Contains response data for the getByTargetResources operation. */
export type DnsResourceReferenceGetByTargetResourcesResponse = DnsResourceReferenceResult & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: DnsResourceReferenceResult;
  };
};

/** Optional parameters. */
export interface DnsManagementClientOptionalParams
  extends coreHttp.ServiceClientOptions {
  /** server parameter */
  $host?: string;
  /** Api Version */
  apiVersion?: string;
  /** Overrides client endpoint. */
  endpoint?: string;
}
