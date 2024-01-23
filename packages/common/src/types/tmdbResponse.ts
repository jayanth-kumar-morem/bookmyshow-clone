import { z, ZodType} from 'zod';

const MovieSchema = z.object({
    adult: z.boolean(),
    backdrop_path: z.string().nullable(),
    genre_ids: z.array(z.number()),
    id: z.number(),
    original_language: z.string(),
    original_title: z.string(),
    overview: z.string(),
    popularity: z.number(),
    poster_path: z.string().nullable(),
    release_date: z.string(),
    title: z.string(),
    video: z.boolean(),
    vote_average: z.number(),
    vote_count: z.number(),
})

export const MovieSchemaType: ZodType<z.infer<typeof MovieSchema>> = MovieSchema;

const TMDBNowPlayingResponseSchema = z.object({
    dates: z.object({
        maximum: z.string(),
        minimum: z.string(),
    }),
    page: z.number(),
    results: z.array(MovieSchema),
    total_pages: z.number(),
    total_results: z.number(),
})

export const TMDBNowPlayingResponseSchemaType: ZodType<z.infer<typeof TMDBNowPlayingResponseSchema>> = TMDBNowPlayingResponseSchema;