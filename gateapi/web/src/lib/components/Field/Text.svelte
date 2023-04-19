<script lang="ts">
    export let name: string
    export let id: string
    export let label: string
    export let placeholder: string = ""
    export let outsideValue: string = ""
    let value: string = ""

    function handleChange(ev: Event) {
        const target = ev.target as HTMLInputElement
        value = target.value
    }
</script>

<div>
    <label for={id}>
        <p class="text-dark-slate-blue font-medium">{label}</p>
        <input 
            type="text" 
            placeholder={placeholder} 
            id={id} 
            name={name} 
            on:input={handleChange}
            value={outsideValue || value}
            class="fieldBase"
        />
    </label>
</div>