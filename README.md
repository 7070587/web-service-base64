# web-service-base64

The web-service-base64 provide a instance or class with common used base64-related tool.
This tool use frontend.

## Installation

1. Via npm

    ```bash
    npm install web-service-base64
    ```

2. In package.json:

    ```json
    {
        ...
        "dependencies": {
            "web-service-base64": "1.00.04",
            ...
        }
        ...
    }
    ```

    then install by npm:

    ```bash
    npm install
    ```

3. Update web-service-base64

    ```bash
    npm update web-service-base64
    ```

## Usage

#### General Use

```typescript
import { ServiceBase64 } from 'web-service-base64';
```

#### Variable Use

```typescript
import { personEmpty, imageEmpty } from 'web-service-base64';
```

#### Class

```typescript
import { ServiceBase64Class } from 'web-service-base64';

console.log(new ServiceBase64Class().isUrl('https://www.google.com.tw/?hl=zh-TW'));
class ServiceBase64Extend extends ServiceBase64Class {
    ...
}
```

## Properties

## Methods

#### isBase64Image

check string is base64

#### isUrl

check string is url

#### getBase64

file get base64

#### fileToBase64

file to base64

#### urlToBase64

url any type to base64

#### urlImageToBase64

url image to base64

#### base64ToBlob

base64 to blob

#### getBase64ContentType

get base64 content type

#### getBase64FullString

get base64 full string. Include content type. For example: data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAoA

#### imageBase64Src

get image base64 src

#### personEmpty

default person image base64



#### personEmpty

default person image base64

#### imageEmpty