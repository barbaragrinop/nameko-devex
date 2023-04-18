<script lang="ts">
    export let title: string;
    export let type: "button" | "submit" | "reset" = "button";
    export let disabled: boolean = false;
    export let color: "purple" |  "white"

    let purpleStyle = "bg-purple text-white hover:drop-shadow-lg transition-all duration-300 ease-out .2s font-medium "
    let greyStyle = "bg-white  border border-dark-slate-blue font-medium text-dark-slate-blue hover:bg-dark-slate-blue hover:text-white transition-colors"
    let ofcStyle = color === "purple" ? purpleStyle : greyStyle
</script>


<button 
    type={type}
    disabled={disabled}
    class={`${ofcStyle} py-3 rounded-full w-full text-center uppercase`}
>
    {title}
</button>