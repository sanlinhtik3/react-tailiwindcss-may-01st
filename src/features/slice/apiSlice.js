import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: 'noteapi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://note-api-zeta.vercel.app/api/note'}),
    endpoints: (builder) => ({
        getNotes: builder.query({
            query: () => ""
        }),
        getNote: builder.query({
            query: (id) => `?id=${id}`
        })
    })
})

export const {useGetNotesQuery, useGetNoteQuery} = apiSlice;
