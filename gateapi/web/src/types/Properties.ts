import type { SvelteComponent } from "svelte"

export interface Properties {
    description: string
    IconTypeProperties: typeof SvelteComponent
}