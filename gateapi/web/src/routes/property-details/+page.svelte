<script context="module" lang="ts">

	export const activeProperty = writable<string | null>('')

	import { username, formDataValues } from '../../store'

	import { ROUTES } from '../routes'
	import { writable } from 'svelte/store'
	
	import { applyAction, enhance } from '$app/forms'

	import Bath from '$lib/icons/bath.svelte'
	import Property1 from '$lib/icons/property.svelte'
	import Property2 from '$lib/icons/property.png'
	import Dollar from '$lib/icons/dolar.svelte'
	import Bed from '$lib/icons/bed.svelte'
	import SingleFamily from '$lib/icons/single-family.svelte'
	import MultiFamily from '$lib/icons/multi-family.svelte'
	import Condo from '$lib/icons/cond.svelte'
	import Profile from '$lib/icons/profile.svelte'

	import InputText from '$lib/components/Field/Text.svelte'
	import NumberInput from '$lib/components/Field/Number.svelte'
	import SelectInput from '$lib/components/Field/Select.svelte'
	import DateInput from '$lib/components/Field/Date.svelte'
	import Button from '$lib/components/Button/Button.svelte'
	import Card from '$lib/components/Card/Card.svelte'
	import Label from '$lib/components/Label/Label.svelte'

	import type { SelectField } from '../../types/Select'
	import type { Properties } from '../../types/Properties'
  	import type { Form } from 'src/types/Form'
  import { goto } from '$app/navigation'


	let formValues:Form = {} as Form

	const optionsSelect: SelectField[] = [
		{ label: '1', value: 1 },
		{ label: '2', value: 2 },
		{ label: '3', value: 3 },
		{ label: '4', value: 4 },
		{ label: '5', value: 5 },
	]

	const propertiesType: Properties[] = [
		{ description: 'Single-Family', IconTypeProperties: SingleFamily },
		{ description: 'Multi-Family', IconTypeProperties: MultiFamily },
		{ description: 'Townhome', IconTypeProperties: SingleFamily },
		{ description: 'Condo', IconTypeProperties: Condo },
	]

	function handleClickGetActiveProperty(property: Properties) {
		activeProperty.set(property.description)
	}

	function handleKeyDownGetActiveProperty(event, property) {
		if (event.key === 'Enter' || event.key === ' ') {
			handleClickGetActiveProperty(property)
		}
	}
</script>

<svelte:head>
	<title>Property Rental </title>
</svelte:head>

<main>
	<div
		class=" min-w-screen bg-snow-white flex justify-center items-center pt-12"
	>
		<div class="w-[80%] h-[90%] mb-12">
			<form class="grid grid-cols-12 gap-3 mb-8" 
				method="POST"
				use:enhance={() => {
					return async ({ result }) => {
						// @ts-ignore
						formDataValues.set(result.data?.dataFromForm)
						await applyAction(result)	
						goto("/page-two")					
					}
				}}
			>
				<div class="col-span-12 md:col-span-6 flex flex-col justify-between">
					<h1 class="text-[32px]">Property details</h1>
					<p class="my-3">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, {$username}
					</p>

					<div class="flex w-full my-10 justify-center md:hidden">
						<img alt="" src={Property2} />
					</div>


					<InputText
						name="propertyname"
						id="propertyname"
						label="Property Name"
					/>				
				</div>


				<div class="md:flex md:col-span-6 w-full justify-center hidden relative">
					<Property1 />
				</div>

				<div class="col-span-12 lg:col-span-6">
					<InputText name="address" id="address" label="Address" />
				</div>

	
				
				<div class="col-span-6">
					<input type="text" bind:value={$activeProperty} name="propertytype" class="hidden" />
				</div>
				<div class="col-span-12 my-3">
					<Label>Property Type</Label>
				</div>
				{#each propertiesType as property}
					<div
						class="col-span-12 sm:col-span-6 lg:col-span-3"
						on:click={() => handleClickGetActiveProperty(property)}
						on:keydown={(ev) => handleKeyDownGetActiveProperty(ev, property)}
					>
						<Card
							description={property.description}
							Icon={property.IconTypeProperties}
							isActive={$activeProperty === property.description}
						/>
					</div>
				{/each}

				<div class="col-span-12 mt-3">
					<Label>Unit Info</Label>
					<div
						class="bg-white w-full p-7 rounded drop-shadow-sm flex flex-col gap-7"
					>
						<div class="grid grid-cols-12 gap-3">
							<div class="col-span-12 sm:col-span-6 lg:col-span-3">
								<InputText
									name="unitname"
									id="unitname"
									label="Unit name"
									placeholder="Name and/or number"
								/>
							</div>
							<div class="col-span-12 sm:col-span-6 lg:col-span-3 mb-11">
								<NumberInput
									name="rent"
									id="rent"
									label="Rent"
									withicon
									Icon={Dollar}
									legend="/mo"
								/>
							</div>
							<div class="col-span-12 sm:col-span-6 lg:col-span-3 mb-11">
								<NumberInput
									name="deposit"
									id="deposit"
									label="Deposit"
									withicon
									Icon={Dollar}
									legend="/mo"
								/>
							</div>
							<div class="col-span-12 sm:col-span-6 lg:col-span-3">
								<NumberInput
									name="leaselength"
									id="leaselength"
									label="Lease Length (months)"
								/>
							</div>
						</div>
						<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
							<div class="grid-cols-1 divide-x">
								<SelectInput
									name="numberofbeds"
									id="numberofbeds"
									label="Beds"
									placeholder={'Select'}
									options={optionsSelect}
									Icon={Bed}
								/>
							</div>
							<div class="grid-cols-1 divide-x">
								<SelectInput
									name="numberofbaths"
									id="numberofbaths"
									label="Baths"
									placeholder={'Select'}
									options={optionsSelect}
									Icon={Bath}
								/>
							</div>
							<div class="grid-cols-1 divide-x">
								<NumberInput name="sqft" id="sqft" label="Sq. Ft." />
							</div>
							<div class="grid-cols-1 divide-x mb-11">
								<DateInput name="movingdate" id="movingdate" label="Available on" />
							</div>
							<div class="grid-cols-1 divide-x">
								<SelectInput
									name="vacancy"
									id="vacancy"
									label="Vacancy"
									placeholder={'Select'}
									options={optionsSelect}
									Icon={Profile}
								/>
							</div>
						</div>
					</div>
				</div>

				<div class="col-span-12 sm:col-span-5 sm:mt-0 lg:col-span-3 sm:my-4 ">
					<Button color="white" title="Back" />
				</div>
				<div class="sm:col-span-2 sm:flex hidden lg:col-span-6"  />
				<div class="col-span-12 sm:col-span-5 sm:mt-0 sm:my-4 lg:col-span-3">
					<Button color="purple" type="submit" title="Continue" />
				</div>
			</form>
		</div>
	</div>
</main>
