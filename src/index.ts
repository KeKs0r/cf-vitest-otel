import { instrument, type ResolveConfigFn } from '@microlabs/otel-cf-workers';
/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Bind resources to your worker in `wrangler.toml`. After adding bindings, a type definition for the
 * `Env` object can be regenerated with `npm run cf-typegen`.
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

const config: ResolveConfigFn = (env: Env, _trigger) => {
	return {
		exporter: {
			url: 'https://typedwebhook.tools/webhook/d3be1cb0-9a7b-4007-87ea-643778507e48',
		},
		service: { name: 'cf-otel-vitest' },
	};
};

export default instrument(
	{
		async fetch(request, env, ctx): Promise<Response> {
			return new Response('Hello World!');
		},
	} satisfies ExportedHandler<Env>,
	config,
);
