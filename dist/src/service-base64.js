"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class ServiceBase64Class {
    /**
     * is base64 image
     * @param  {string} value
     * @returns boolean
     */
    isBase64Image(value) {
        let base64HeaderRegex = /data:image\/([a-zA-Z]*);base64,([^\"]*)/;
        return base64HeaderRegex.test(value) ? true : false;
    }
    /**
     * is url
     * @param  {string} value
     * @returns boolean
     */
    isUrl(value) {
        let urlRegex = /^(ws|wss|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/i;
        return urlRegex.test(value) ? true : false;
    }
    /**
     * get base64
     * @param  {File} file
     * @returns Promise
     */
    getBase64(file) {
        return __awaiter(this, void 0, void 0, function* () {
            let result;
            if (file) {
                result = yield new Promise((resolve, reject) => {
                    try {
                        let reader = new FileReader();
                        reader.readAsDataURL(file);
                        reader.onload = () => resolve(reader);
                        reader.onerror = () => reject('error occurred when read file');
                    }
                    catch (error) {
                        console.error('error occurred when read file');
                        resolve(null);
                    }
                });
            }
            else {
                console.error('file not exist', file);
                result = null;
            }
            return result;
        });
    }
    /**
     * file to base64
     * @param  {File} file
     * @param  {number=null} fileSize
     * @returns Promise
     */
    fileToBase64(file, fileSize = null) {
        return __awaiter(this, void 0, void 0, function* () {
            let result;
            if (file) {
                if (fileSize && fileSize > 0) {
                    if (file.size && file.size < fileSize) {
                        try {
                            result = yield this.getBase64(file);
                        }
                        catch (error) {
                            console.error('error occurred when read file');
                            result = null;
                        }
                    }
                    else {
                        console.error('file size is to large');
                        result = null;
                    }
                }
                else {
                    try {
                        result = yield this.getBase64(file);
                    }
                    catch (error) {
                        console.error('error occurred when read file');
                        result = null;
                    }
                }
            }
            else {
                console.error('file not exist', file);
                result = null;
            }
            return result;
        });
    }
    /**
     * url any type(ex: pdf, image, mp4...) to base64
     * @param  {string} url
     * @param  {Function=null} callback
     * @returns Promise
     */
    urlToBase64(url) {
        return __awaiter(this, void 0, void 0, function* () {
            let result;
            if (this.isUrl(url)) {
                result = yield new Promise((resolve, reject) => {
                    try {
                        let xhr = new XMLHttpRequest();
                        xhr.onload = () => {
                            let reader = new FileReader();
                            reader.onloadend = () => resolve(reader.result.toString());
                            reader.readAsDataURL(xhr.response);
                        };
                        xhr.onerror = reject;
                        xhr.open('GET', url);
                        xhr.responseType = 'blob';
                        xhr.send();
                    }
                    catch (error) {
                        console.error('error occurred when url to base64');
                        result = null;
                    }
                });
            }
            else {
                console.error('url error');
                result = null;
            }
            return result;
        });
    }
    /**
     * url image to base64
     * @param  {string} url
     * @returns Promise
     */
    urlImageToBase64(url) {
        return __awaiter(this, void 0, void 0, function* () {
            let result;
            if (this.isUrl(url)) {
                result = yield new Promise((resolve, reject) => {
                    try {
                        let img = new Image();
                        let base64;
                        img.setAttribute('crossOrigin', 'anonymous');
                        img.onload = () => {
                            let canvas = document.createElement('canvas');
                            canvas.width = 150;
                            canvas.height = 150;
                            let ctx = canvas.getContext('2d');
                            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
                            let dataURL = canvas.toDataURL('image/jpg');
                            base64 = dataURL.replace(/^data:image\/(png|jpg);base64,/, '');
                            resolve(base64);
                        };
                        img.onerror = () => reject('error occurred when url to file');
                        img.src = url;
                    }
                    catch (error) {
                        console.error('error occurred when url to file');
                        resolve(null);
                    }
                });
            }
            else {
                console.error('url error');
                result = null;
            }
            return result;
        });
    }
    /**
     * @param  {string} base64
     * @returns Blob
     */
    base64ToBlob(base64) {
        let parts = base64.split(';base64,');
        let contentType = parts[0].split(':')[1];
        let raw = window.atob(parts[1]);
        let rawLength = raw.length;
        let uInt8Array = new Uint8Array(rawLength);
        for (let i = 0; i < rawLength; ++i) {
            uInt8Array[i] = raw.charCodeAt(i);
        }
        return new Blob([uInt8Array], { type: contentType });
    }
    /**
     * @param  {string} base64
     * @returns string
     */
    getBase64ContentType(base64) {
        let parts = base64.split(';base64,');
        let contentType = parts[0].split(':')[1];
        return contentType;
    }
    /**
     * @param  {string} base64
     * @returns string
     */
    getBase64String(base64) {
        let parts = base64.split(';base64,');
        let base64String = parts[1];
        return base64String;
    }
    /**
     * @param  {string} contentType
     * @param  {string} base64
     * @returns string
     */
    getBase64FullString(contentType, base64) {
        return `data:${contentType};base64,${base64}`;
    }
    /**
     * @param  {string} base64
     * @param  {string|'png'|'jpg'='jpg'} fileType
     * @returns string
     */
    imageBase64Src(base64, fileType = EImageFileType.jpg) {
        return `data:image/${fileType};base64,${base64}`;
    }
}
exports.ServiceBase64Class = ServiceBase64Class;
var EImageFileType;
(function (EImageFileType) {
    EImageFileType["png"] = "png";
    EImageFileType["jpg"] = "jpg";
    EImageFileType["gif"] = "gif";
})(EImageFileType = exports.EImageFileType || (exports.EImageFileType = {}));
exports.ServiceBase64 = new ServiceBase64Class();
exports.imageEmpty = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==';
exports.personEmpty = 'data:image/png;base64,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';
