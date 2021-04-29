export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Location;
}

interface Location {
  lat: string;
  lng: string;
}
