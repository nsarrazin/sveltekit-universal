<script lang="ts">
	import { invalidate } from '$app/navigation';

	export let data;
</script>

<div class="p-4 pt-12 flex flex-col items-center gap-3">
	<h1 class="font-bold text-3xl">Welcome to SvelteKit Universal</h1>

	<p>Prod: {import.meta.env.PROD}</p>
	<p>Adapter: {import.meta.env.VITE_ADAPTER}</p>

	<p>
		{#await data.value}
			<span class="font-mono"> Loading... </span>
		{:then value}
			{@const { val, origin } = value}
			<span class="block font-mono"> Value: {val} </span>
			<span class="block font-mono"> Origin: {origin} </span>
		{:catch error}
			<p>API Failed! Insert local-first fallback here</p>
			<span class="font-mono"> {error} </span>
		{/await}
	</p>

	<button class="btn btn-primary" on:click={async () => await invalidate('app:random')}>
		<span class="btn-label"> Refresh </span>
	</button>
</div>
