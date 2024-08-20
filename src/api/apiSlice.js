import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
  baseQuery: fetchBaseQuery({
    // Fill in your own server starting URL here
    baseUrl: '/',
  }),
  endpoints: (build) => ({
    // A query endpoint with no arguments
    getRoutes: build.query({
      query: () => '/routes',
    }),
    // A query endpoint with an argument
    userById: build.query({
      query: (userId) => `/users/${userId}`,
    }),
    // A mutation endpoint
    updateTodo: build.mutation({
      query: (updatedTodo) => ({
        url: `/todos/${updatedTodo.id}`,
        method: 'POST',
        body: updatedTodo,
      }),
    }),
  }),
})

export const { useGetRoutesQuery, useUserByIdQuery, useUpdateTodoMutation } =
  api
