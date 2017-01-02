---
uti: com.xamarin.workbook
platform: Console
packages:
- id: WindowsAzure.Storage
  version: 8.0.0
---

# Demo

Connect to Storage Account

```csharp
using Microsoft.WindowsAzure.Storage;
using Microsoft.WindowsAzure.Storage.Blob;
using System.Linq;
string storageConnectionString = "";
CloudStorageAccount storageAccount = CloudStorageAccount.Parse(storageConnectionString);
CloudBlobClient blobClient = storageAccount.CreateCloudBlobClient();
string containerName = "images";
CloudBlobContainer container = blobClient.GetContainerReference(containerName);
container.CreateIfNotExists();
int blobCount = container.ListBlobs().Count();
```
