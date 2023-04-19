import { writable } from "svelte/store"
import type { Form } from "./types/Form"


export const username = writable<string>("")

export const formDataValues = writable<Form>({} as Form)