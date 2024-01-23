import { Observable, Observer, firstValueFrom } from 'rxjs';
import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

// Create a single Axios instance
const api = axios.create({
  baseURL: process.env.TMDB_API_URL,
  headers: {
    "Authorization": `Bearer ${process.env.TMDB_API_KEY}`,
    "accept": "application/json"
  }
});

// Define a function to create an Observable for an API call
function createObservable<T>(
  config: AxiosRequestConfig
): Observable<AxiosResponse<T>> {
  return new Observable((observer: Observer<AxiosResponse<T>>) => {
    api.request<T>(config)
      .then((response: AxiosResponse<T>) => {
        observer.next(response);
        observer.complete();
      })
      .catch((error: AxiosError) => {
        observer.error(error);
      });
    });
}

export async function firstValueFromNewObservable<T>(
  config: AxiosRequestConfig
): Promise<axios.AxiosResponse<T, any>> {
  return await firstValueFrom(createObservable<T>(config));
}