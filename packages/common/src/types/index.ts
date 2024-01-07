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

export type MovieType = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number,
  poster_path: string;
  release_date: Date;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};