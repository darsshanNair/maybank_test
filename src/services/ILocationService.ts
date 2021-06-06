import { Location } from '../models/Address';

export abstract class ILocationService {
  // Get latitude and longitude information for device
  abstract getLatitudeAndLongitude(): Promise<Location>;
}
