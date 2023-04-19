<script lang="ts">
	import { username } from '../store'

  	import { goto } from '$app/navigation'
	
  	import Arrow from '$lib/icons/arrow.svelte'
	import TextInput from '$lib/components/Field/Text.svelte'
	
	let nameWritable: string = ""
	let name: string = ""
	let isName: boolean = true

	username.subscribe((e) => {
		nameWritable = e
	})

	function handleSubmit(ev) {
		const form = new FormData(ev.target)
		name = String(form.get("username"))

		if(name.length > 0){
			username.set(name)
			goto("/property-details")
			isName = true
		}

		isName = false

	}
	
</script>

<form
	on:submit|preventDefault={handleSubmit}
	class="div h-screen  flex justify-center items-center flex-col gap-24 -mt-14"
>
	<h1 class="text-[31px] font-semibold text-dark-slate-blue animate-fade-in text-center">
		Welcome to the ília case challenge
	</h1>
	<div class="max-w-[300px]">
		<p class="text-dark-slate-blue/75">type your name...</p>
		<TextInput name="username" label="" placeholder="" id="username" outsideValue={nameWritable} />
	</div>
	<div class=" flex justify-end">
		<button type="submit" class="rotate-[270deg] bg-white border-purple border-2 rounded-full py-3 px-2 flex items-center justify-center">
			<Arrow svgClass="" />
		</button>
	</div>
</form>
