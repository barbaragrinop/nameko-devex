<script lang="ts">
	import Arrow from '$lib/icons/arrow.svelte'

	export let name: string
	export let id: string
	export let label: string
	export let placeholder: string = ''
	export let options: { label: string; value: number }[] = []
  export let Icon: any = null

</script>

<label for={id}>
	<p class="text-dark-slate-blue font-medium">{label}</p>
	<div class="relative">
    <div class="absolute top-0 left-2 z-20 h-full px-2 flex items-center pointer-events-none w-[40px]">
      <Icon />
    </div>
		<select
			name={name}
			id={id}
			class="min-h-[41px] relative text-deep-purple leading-tight focus:outline-none
       focus:bg-white focus:border-gray-500 appearance-none bg-white py-2 pl-[50px] 
        pr-12 rounded border border-lavander-grey w-full">
			<option selected class="h-8">{placeholder}</option>
			{#each Object.entries(options) as [label, value]}
				<option  class="h-8 hover:bg-red-500 transition-colors" value={value}>{label}</option>
			{/each}
		</select>
		<div
			class="absolute pointer-events-none right-2 top-0 h-[41px] px-2 flex justify-center items-center"
		>
			<Arrow />
		</div>
	</div>
</label>

