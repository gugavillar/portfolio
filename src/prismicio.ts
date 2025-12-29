import * as prismic from '@prismicio/client'
import * as prismicNext from '@prismicio/next'

import config from '../slicemachine.config.json'

/**
 * The project's Prismic repository name.
 */
export const repositoryName = config.repositoryName

/**
 * A list of Route Resolver objects that define how a document's `url` field is resolved.
 *
 * {@link https://prismic.io/docs/route-resolver#route-resolver}
 */
// TODO: Update the routes array to match your project's route structure.
const routes: prismic.ClientConfig['routes'] = [
	{
		path: '/:lang?',
		type: 'home',
	},
]

/**
 * Creates a Prismic client for the project's repository. The client is used to
 * query content from the Prismic API.
 *
 * @param config - Configuration for the Prismic client.
 */
export const createClient = (config: prismicNext.CreateClientConfig = {}) => {
	const client = prismic.createClient(repositoryName, {
		accessToken: process.env.PRISMIC_ACCESS_TOKEN,
		fetchOptions:
			process.env.NODE_ENV === 'production'
				? { cache: 'force-cache', next: { revalidate: 10, tags: ['prismic'] } }
				: { next: { revalidate: 5 } },
		routes,
		...config,
	})

	prismicNext.enableAutoPreviews({
		client,
	})

	return client
}
