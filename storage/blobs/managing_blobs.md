---
uti: com.xamarin.workbook
platforms:
- Console
packages:
- id: Microsoft.Data.Services.Client
  version: 5.8.1
- id: Newtonsoft.Json
  version: 9.0.1
- id: WindowsAzure.Storage
  version: 8.0.0
- id: System.Spatial
  version: 5.8.1
- id: Microsoft.Data.OData
  version: 5.8.1
- id: Microsoft.Data.Edm
  version: 5.8.1
- id: Microsoft.Azure.KeyVault.Core
  version: 2.0.4
---

# Demo

Connect to Storage Account

```csharp
#r "Microsoft.WindowsAzure.Storage"
```

```csharp
using Microsoft.WindowsAzure.Storage;
using Microsoft.WindowsAzure.Storage.Blob;
```

```csharp
string storageConnectionString = "<enter connection string here>";
```

```csharp
CloudStorageAccount storageAccount = CloudStorageAccount.Parse(storageConnectionString);
```

```csharp
CloudBlobClient blobClient = storageAccount.CreateCloudBlobClient();
```

```csharp
string containerName = "images";
CloudBlobContainer container = blobClient.GetContainerReference(containerName);
```

```csharp
string containerUri = container.Uri.ToString();
```

```csharp
var blob = await container.GetBlobReferenceFromServerAsync("Microsoft_logo.png");
string blobTag = blob.Properties.ContentType;
```

```csharp
var blobs = await container.ListBlobsSegmentedAsync(new BlobContinuationToken());
int blobCount = blobs.Results.Count();
```
