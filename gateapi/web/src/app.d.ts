/// <reference types="@sveltejs/kit" />

// See https://kit.svelte.dev/docs/types#the-app-namespace
// for information about these interfaces
declare namespace App {
	interface Locals {
		userid: string;
	}

	export interface ISelectField {
		label: string
		value: number
	}

	// interface Platform {}

	// interface Session {}

	// interface Stuff {}
}
