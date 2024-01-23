import {TMDBNowPlayingResponseSchemaType} from "@repo/common";
import { firstValueFromNewObservable } from "@repo/axios";

export async function GetNowPlayingMovies({region, page=1}:{region:string, page?:number}) {
  const apiCallConfig = {
    method: 'GET',
    url: '/movie/now_playing',
    params: {
      page: page,
      region: region,
    },
  };

  try {
    const response = await firstValueFromNewObservable(apiCallConfig) ;
    console.log("response.data ==> "+response.data + typeof(response.data));
    let data = TMDBNowPlayingResponseSchemaType.parse(response.data);
    console.log({data});
    return data;
  } catch (error) {
    console.log({error});
  }
}