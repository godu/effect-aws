export const config: Record<string, { command: string; input: string }> = {
  "client-account": {
    command: "ListRegions",
    input: '{"AccountId": "000000000000"}',
  },
  "client-cloudsearch": {
    command: "CreateDomain",
    input:
      '{"DomainName": "my-search"}',
  },
  "client-cloudtrail": {
    command: "LookupEvents",
    input:
      '{"LookupAttributes": [{"AttributeKey": "EventName", "AttributeValue": "ConsoleLogin"}]}',
  },
  "client-cloudwatch": {
    command: "ListDashboards",
    input: '{"DashboardNamePrefix": "production-"}',
  },
  "client-cloudwatch-events": {
    command: "ListEventBuses",
    input: '{"NamePrefix": "production-"}',
  },
  "client-cloudwatch-logs": {
    command: "DescribeLogGroups",
    input: '{"logGroupNamePrefix": "production-"}',
  },
  "client-cognito-identity-provider": {
    command: "CreateGroup",
    input: '{"GroupName": "Admin", "UserPoolId": "us-west-2_0AbCdeFgH"}',
  },
  "client-ec2": {
    command: "DescribeInstances",
    input: '{"InstanceIds": ["i-1234567890abcdef0"]}',
  },
  "client-elasticache": {
    command: "DescribeCacheClusters",
    input: '{"ShowCacheNodeInfo": true}',
  },
  "client-iam": {
    command: "ListGroups",
    input: '{"PathPrefix": "admin/"}',
  },
  "client-kinesis": {
    command: "ListShards",
    input: '{"StreamName": "my-stream"}',
  },
  "client-kms": {
    command: "DescribeKey",
    input: '{"KeyId": "my-key"}',
  },
  "client-mq": {
    command: "ListBrokers",
    input: '{"MaxResults": 5}',
  },
  "client-opensearch": {
    command: "ListDomainNames",
    input: '{"EngineType": "OpenSearch"}',
  },
  "client-opensearchserverless": {
    command: "ListCollections",
    input: '{"collectionFilters":{"status": "ACTIVE"}}',
  },
  "client-rds": {
    command: "DescribeDBClusters",
    input: '{"IncludeShared": true}',
  },
  "client-sns": {
    command: "Publish",
    input: '{"TopicArn": "test", "Message": "test"}',
  },
  "client-sts": {
    command: "AssumeRole",
    input:
      '{"RoleArn": "arn:aws:iam::000000000000:role/TestRole", "RoleSessionName": "test"}',
  },
};
