/**
 * Interface representing a user's details.
 */
export class IUserList {
  id: string = '';
  name: string = '';
  username: string = '';
  email: string = '';
  phone: string = '';
  website: string = '';
  address: IUserAddress = new IUserAddress();
  company: IUserCompany = new IUserCompany();
}

/**
 * Interface representing a user's address details.
 */
export class IUserAddress {
  street: string = ''
  suite: string = ''
  city: string = ''
  zipcode: string = ''
  geo: IGeographicCoordinates = new IGeographicCoordinates();
}

/**
 * Interface representing geographic coordinates.
 */
export class IGeographicCoordinates {
  lat: string = '';
  lng: string = '';
}

/**
 * Interface representing a user's company details.
 */
export class IUserCompany {
  name: string = '';
  catchPhrase: string = '';
  bs: string = '';
}
