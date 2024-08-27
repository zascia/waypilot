import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
  reducerPath: 'routesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_LOCAL_SERVER_URL,
  }),
  endpoints: (build) => ({
    /*// A query endpoint with no arguments
    getRoutes: build.query({
      query: () => '/routes',
    }),*/
    // A mutation endpoint
    getRoutes: build.mutation({
      query: (routeCoords) => ({
        url: '/find',
        method: 'POST',
        body: routeCoords,
      }),
    }),
    // JUST EXAMPLE A query endpoint with an argument
    userById: build.query({
      query: (userId) => `/users/${userId}`,
    }),
    // JUST EXAMPLE A mutation endpoint
    updateTodo: build.mutation({
      query: (updatedTodo) => ({
        url: `/todos/${updatedTodo.id}`,
        method: 'POST',
        body: updatedTodo,
      }),
    }),
  }),
})

export const { useGetRoutesMutation, useUserByIdQuery, useUpdateTodoMutation } =
  api
