
<script context="module" lang="ts">
  import { formDataValues, username } from "../../store"




</script>

<svelte:head>
	<title>Property Rental</title>
</svelte:head>

<main>
	<div
		class=" min-w-screen bg-snow-white flex justify-center items-center pt-12"
	>
		<div class="w-[80%] h-[90%] mb-12">
            <h1 class="text-[31px] mb-6">{$username}, here is the data.</h1>
            
            <div class="grid grid-cols-12 gap-4">
                {#if $formDataValues.propertyname}
                    <div class="col-span-12">
                        <strong>Property name</strong>
                        <p>{$formDataValues.propertyname}</p>
                    </div>
                {/if}

                {#if $formDataValues.address}
                    <div class="col-span-12">
                        <strong>Address</strong>
                        <p>{$formDataValues.address}</p>
                    </div>
                {/if}

                {#if $formDataValues.propertytype}
                    <div class="col-span-12">
                        <strong>Property type</strong>
                        <p>{$formDataValues.propertytype}</p>
                    </div>
                {/if}

                {#if $formDataValues.unitname}
                    <div class="col-span-12">
                        <strong>Unit name</strong>
                        <p>{$formDataValues.unitname}</p>
                    </div>
                {/if}

                {#if $formDataValues.rent}
                    <div class="col-span-12">
                        <strong>Rent</strong>
                        <p>$ {$formDataValues.rent}</p>
                    </div>
                {/if}


                {#if $formDataValues.deposit}
                    <div class="col-span-12">
                        <strong>Deposit</strong>
                        <p>{$formDataValues.deposit}</p>
                    </div>
                {/if}


                {#if $formDataValues.leaselength}
                    <div class="col-span-12">
                        <strong>Lease length</strong>
                        <p>{$formDataValues.leaselength}</p>
                    </div>
                {/if}


                {#if $formDataValues.numberofbeds}
                    <div class="col-span-12">
                        <strong>Number of beds</strong>
                        <p>{$formDataValues.numberofbeds}</p>
                    </div>
                {/if}

                {#if $formDataValues.numberofbaths}
                    <div class="col-span-12">
                        <strong>Number of baths</strong>
                        <p>{$formDataValues.numberofbaths}</p>
                    </div>
                {/if}


                {#if $formDataValues.sqft}
                    <div class="col-span-12">
                        <strong>Square Foot</strong>
                        <p>{$formDataValues.sqft}</p>
                    </div>
                {/if}

                {#if $formDataValues.movingdate}
                    <div class="col-span-12">
                        <strong>Available on</strong>
                        <p>{$formDataValues.movingdate}</p>
                    </div>
                {/if}


                {#if $formDataValues.vacancy}
                    <div class="col-span-12">
                        <strong>Vacancy</strong>
                        <p>{$formDataValues.vacancy}</p>
                    </div>
                {/if}


            </div>
        </div>
	</div>
</main>
