export declare class ServiceBase64Class {
    /**
     * is base64 image
     * @param  {string} value
     * @returns boolean
     */
    isBase64Image(value: string): boolean;
    /**
     * is url
     * @param  {string} value
     * @returns boolean
     */
    isUrl(value: string): boolean;
    /**
     * get base64
     * @param  {File} file
     * @returns Promise
     */
    getBase64(file: File): Promise<FileReader>;
    /**
     * file to base64
     * @param  {File} file
     * @param  {number=null} fileSize
     * @returns Promise
     */
    fileToBase64(file: File, fileSize?: number): Promise<FileReader>;
    /**
     * url any type(ex: pdf, image, mp4...) to base64
     * @param  {string} url
     * @param  {Function=null} callback
     * @returns Promise
     */
    urlToBase64(url: string): Promise<string>;
    /**
     * url image to base64
     * @param  {string} url
     * @returns Promise
     */
    urlImageToBase64(url: string): Promise<string>;
    /**
     * @param  {string} base64
     * @returns Blob
     */
    base64ToBlob(base64: string): Blob;
    /**
     * @param  {string} base64
     * @returns string
     */
    getBase64ContentType(base64: string): string;
    /**
     * @param  {string} base64
     * @returns string
     */
    getBase64String(base64: string): string;
    /**
     * @param  {string} contentType
     * @param  {string} base64
     * @returns string
     */
    getBase64FullString(contentType: string, base64: string): string;
    /**
     * @param  {string} base64
     * @param  {string|'png'|'jpg'='jpg'} fileType
     * @returns string
     */
    imageBase64Src(base64: string, fileType?: TImageFileType): string;
}
export declare enum EImageFileType {
    png = "png",
    jpg = "jpg",
    gif = "gif"
}
declare type TImageFileType = keyof typeof EImageFileType;
export declare const ServiceBase64: ServiceBase64Class;
export declare const imageEmpty: string;
export declare const personEmpty: string;
export {};
