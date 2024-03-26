<script lang="ts">
	import { page } from '$app/stores';
	import { SigninButton } from '~features/auth/signin-button';
	import { SignoutButton } from '~features/auth/signout-button';
	const session = $page.data.session;
</script>

<div class="flex items-center">
	{#if !!session}
		<pre class="text-sm">{session.user?.name}</pre>
		<SignoutButton />
	{:else}
		<SigninButton />
	{/if}
</div>
