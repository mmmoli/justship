<script lang="ts">
	import { signIn } from '@auth/sveltekit/client';
	import { Button } from '~ui/button';

	function handleClick() {
		signIn('github');
	}
</script>

<Button on:click={handleClick}>Sign In</Button>
