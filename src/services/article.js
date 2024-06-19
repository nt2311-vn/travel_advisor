import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const rapidApiKey = import.meta.env.VITE_RAPID_API_ARTICLE_KEY;
const rapidApiHost = import.meta.env.VITE_RAPID_API_ARTICLE_HOST;

export const articleApi = createApi({
	reducerPath: "articleApi",
	baseQuery: fetchBaseQuery({
		baseUrl:
			"https://article-extractor-and-summarizer.p.rapidapi.com/summarize",
		prepareHeaders: (headers) => {
			headers.set("x-rapidapi-key", rapidApiKey);
			headers.set("x-rapidapi-host", rapidApiHost);
			return headers;
		},
	}),
	endpoints: (builder) => ({
		getSummary: builder.query({ query: (params) => "test" }),
	}),
});
