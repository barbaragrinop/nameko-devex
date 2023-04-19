<script lang="ts">
	import type { SvelteComponent } from 'svelte'
	import type { Properties } from 'src/types/Properties'

	export let isActive: boolean
	export let Icon: typeof SvelteComponent = null
	export let description: string

	let activeStyleDiv = 'border-royal-blue bg-lavender'
	let inactiveStyleDiv = 'border-lavender-grey bg-white'

	// $: isActive = activeProperty.description === description
	$: styleDiv = isActive ? activeStyleDiv : inactiveStyleDiv

</script>


<div
	class={`${styleDiv} group border cursor-pointer rounded transition-colors hover:border-royal-blue hover:bg-lavender ease duration-300 px-6 py-6 flex gap-3 items-center justify-center`}
>
	<svelte:component
		this={Icon}
		svgClass={`${
			isActive ? 'fill-royal-blue' : 'fill-dark-slate-blue'
		} group-hover:fill-royal-blue`}
	/>
	<span
		class={`font-medium group-hover:text-royal-blue ${
			isActive ? 'text-royal-blue' : 'text-dark-slate-blue'
		}`}
	>
		{description}
	</span>
</div>
