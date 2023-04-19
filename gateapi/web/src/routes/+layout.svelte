<script lang="ts">
  import { onMount } from 'svelte'
	import '../app.css';
  import { username } from '../store'
  import { goto } from '$app/navigation'

	onMount(() => {
		username.subscribe((value) => {
			if (!value || value.length <= 0) {
				goto('/');
			}
		});
	});
</script>

<nav class="min-w-screen bg-dark-slate-blue h-16 mx-auto px-12 flex items-center justify-end">
	<span class="text-white font-bold text-3xl">ília</span>
</nav>
<main>
	<slot />
</main>