import { Platform } from "./lib/enums";
import { IDevice } from "./lib/device";
export { Platform, DeviceType, Status, AndroidKeyEvent } from "./lib/enums";
export { IDevice, Device } from "./lib/device";
export { AndroidController, AndroidDevice } from "./lib/android-controller";
export { IOSController, IOSDevice } from "./lib/ios-controller";
export { DeviceController } from "./lib/device-controller";
export declare function getAndroidDevices(verbose?: boolean): Promise<void>;
export declare function getIOSDevices(): Promise<void>;
export declare function getDevices(platform: Platform): Promise<void>;
export declare function startEmulator(emulator: IDevice, options?: any): Promise<void>;
export declare function startSimulator(simulator: IDevice, options?: any): Promise<void>;
export declare function startDevice(device: IDevice, options?: any): Promise<void>;
/**
 * Still not impleneted
 */
export declare function killAllEmulators(): void;
export declare function killAllSimulators(): void;
export declare function killEmulator(emulator: IDevice): void;
export declare function killSimulator(simulator: IDevice): void;
/**
 * Still not implemented
 */
export declare function restartDevice(device: IDevice): Promise<void>;
