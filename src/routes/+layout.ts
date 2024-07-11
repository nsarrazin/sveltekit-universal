import { PUBLIC_API_BASE } from '$env/static/public';

// prerender only for static adapter
export const prerender = !!PUBLIC_API_BASE;

// SSR only on node adapter
export const ssr = !PUBLIC_API_BASE;
