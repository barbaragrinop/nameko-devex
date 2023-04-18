<script lang="ts">
    export let name: string
    export let id: string
    export let label: string
    export let placeholder: string = ""
    export let withicon: boolean = false
    export let Icon: any = null
    export let legend: string = ""

    let value: number = 0

    function handleChange(ev: Event) {
        const target = ev.target as HTMLInputElement
        value = Number(target.value)
    }            
    // on:input={handleChange}
</script>

{#if !withicon}
    <div>
        <label for={id}>
            <p class="text-dark-slate-blue font-medium">{label}</p>
            <input 
                type="number" 
                placeholder={placeholder} 
                id={id} 
                name={name} 
                value={value}
                pattern="[0-9]*"
                inputmode="numeric"
                on:input={handleChange}
                class={"fieldBase appearance-none"}
            />
        </label>
    </div>
{/if}

{#if withicon}
    <div>
        <label for={id}>
            <p class="text-dark-slate-blue font-medium">{label}</p>
                <div class="relative">
                    <div class="absolute top-0 left-0 z-10 w-[40px] h-[41px] rounded 
                    flex justify-center items-center">
                        <svelte:component this={Icon} />
                    </div>
                    <input 
                        type="number" 
                        placeholder={placeholder} 
                        id={id} 
                        name={name} 
                        value={value}
                        pattern="[0-9]*"
                        step=".01"
                        inputmode="numeric"
                        on:input={handleChange}
                        class={"fieldBase appearance-none pl-[40px] pr-[53px] text-right absolute top-0"}
                    />
                    <span class="absolute top-0 right-2 text-deep-purple z-10 w-[40px] h-[41px] rounded flex justify-center items-center">
                        {legend}
                    </span>
            </div>
        </label>
    </div>
{/if}

