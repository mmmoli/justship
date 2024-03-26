// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			session: import('@auth/core/types').Session | null;
			user: import('@auth/core/types').Session['user'] | undefined;
		}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
