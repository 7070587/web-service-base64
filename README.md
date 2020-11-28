# vue-base64-way

The vue-base64-way provide a instance or class with common used base64-related tool.
This tool use frontend.

## Installation

1. Via npm

    ```bash
    npm install vue-base64-way
    ```

2. In package.json:

    ```json
    {
        ...
        "dependencies": {
            "vue-base64-way": "1.00.00",
            ...
        }
        ...
    }
    ```

    then install by npm:

    ```bash
    npm install
    ```

3. Update vue-base64-way

    ```bash
    npm update vue-base64-way
    ```

## Usage

#### General Use

```typescript
import { ServiceBase64 } from 'vue-base64-way';
```

#### Variable Use

```typescript
import { personEmpty, imageEmpty } from 'vue-base64-way';
```

#### Class

```typescript
import { ServiceBase64Class } from 'vue-base64-way';

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

#### imageEmpty

default empty image base64

## Other Notes

1. [npm url](https://www.npmjs.com/package/vue-base64-way)
2. [git](https://github.com/7070587/vue-base64-way)
