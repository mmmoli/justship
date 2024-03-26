<script lang="ts">
	import { signOut } from '@auth/sveltekit/client';
	import { Button } from '~ui/button';

	function handleClick() {
		signOut();
	}
</script>

<Button variant="link" on:click={handleClick}>Sign Out</Button>
