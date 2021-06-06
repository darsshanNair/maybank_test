import GetLocation from 'react-native-get-location';
import { Location } from '../models/Address';
import { Location as LocationInfo } from 'react-native-get-location';
import { ILocationService } from './ILocationService';

class LocationService implements ILocationService {
  async getLatitudeAndLongitude(): Promise<Location> {
    var locationInfo = (await GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 15000,
    })) as LocationInfo;

    var location: Location = {
      lat: locationInfo.latitude.toString(),
      lng: locationInfo.longitude.toString(),
    };

    return location;
  }
}

export default LocationService;
