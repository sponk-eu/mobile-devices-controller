import { DeviceType } from "./enums";
import { IDevice } from "./device";
export declare class DeviceController {
    static getDivices(query: any): Promise<IDevice[]>;
    /**
     *
     * @param query should be like IDevice
     */
    static getDevices(query: any): Promise<IDevice[]>;
    static startDevice(device: IDevice, options?: any): Promise<IDevice>;
    static runApp(device: IDevice, appFullPath: any): void;
    static kill(device: IDevice): Promise<void>;
    static killAll(type: DeviceType): void;
    static filter(devices: Array<IDevice>, searchQuery: any): IDevice[];
    private static copyProperties(from);
    private static getAllDevicesByPlatform(platform, verbose?);
    private static getDevicesByPlatformAndName(platform, name?, verbose?);
    private static mapDevicesToArray(platform);
}
