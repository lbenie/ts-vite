import { setupServer } from 'msw/node'
import { graphql, rest } from 'msw'
import { beforeAll, afterAll, afterEach } from 'vitest'

const posts = [
  {
    userId: 1,
    id: 1,
    title: 'first post title',
    body: 'first post body',
  },
]

export const restHandlers = [
  rest.get('https://rest-endpoint.example/path/to/posts', (req, res, ctx) =>
    res(ctx.status(200), ctx.json(posts)),
  ),
]

const graphqlHandlers = [
  graphql.query(
    'https://graphql-endpoint.example/api/v1/posts',
    (req, res, ctx) => res(ctx.data(posts)),
  ),
]

const server = setupServer(...restHandlers, ...graphqlHandlers)

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }))

afterAll(() => server.close())

afterEach(() => server.resetHandlers())
