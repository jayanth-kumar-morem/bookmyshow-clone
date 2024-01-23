export * from './tmdbResponse';

export type LocationInfo = {
  city: string;
  country_calling_code: string;
  country_code: string;
  country_name: string;
  country_tld: string;
  currency: string;
  currency_name: string;
  ip: string;
  languages: string;
  network: string;
  org: string;
  postal: string;
  region: string;
  region_code: string;
  timezone: string;
  utc_offset: string;
  version: string;
};

export interface CountryType {
    iso_3166_1: string;
    english_name: string;
    suggested?: boolean;
  };
