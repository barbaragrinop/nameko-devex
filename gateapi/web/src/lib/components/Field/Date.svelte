<script lang="ts">
	import Calendar from '$lib/icons/calendar.svelte'

    export let name: string
    export let id: string
    export let label: string

    let value: string

    function handleChange(ev: Event) {
        const target = ev.target as HTMLInputElement
        value = target.value
    }            
    // on:input={handleChange}
</script>

<div>
    <label for={id}>
        <p class="text-dark-slate-blue font-medium">{label}</p>
            <div class="relative">
                <div class="absolute top-0 left-0 z-10 w-[40px] h-[41px] rounded flex justify-center items-center">
                    <svelte:component this={Calendar} />
                </div>
                <input 
                    type="date"
                    id={id} 
                    name={name} 
                    value={value}
                    on:input={handleChange}
                    class={"fieldBase appearance-none pl-[40px] text-right absolute top-0 left-0 h-[40px] text-dark-slate-blue"}
                />
        </div>
    </label>
</div>


 
