<script lang="ts">
	import { invalidate } from '$app/navigation';

	export let data;
</script>

<div class="p-4 pt-12 flex flex-col max-w-lg leading-snug mx-auto items-center gap-8">
	<h1 class="font-bold text-3xl">Welcome to SvelteKit Universal</h1>

	<p>
		You are running a
		<span class="font-bold inline">{import.meta.env.PROD ? ' production ' : ' development '}</span>
		build, using the
		<span class="font-bold inline"> {import.meta.env.VITE_ADAPTER} </span> adapter.
	</p>

	<p>
		{#await data.value}
			<span class="font-mono"> Waiting for data... </span>
		{:then value}
			{@const { val, origin } = value}
			<span class="block font-mono"> foo: {val} </span>
			<span class="block font-mono"> Origin: {origin} </span>
			{#if origin === null}
				<span class="block text-info">
					The origin is null, since the node adapter is used and the API can therefore be called
					without a network request.
				</span>
			{/if}
		{:catch error}
			<p>API Failed! Insert local-first fallback here.</p>
			<span class="font-mono"> {error} </span>
		{/await}
	</p>

	<button class="btn btn-primary" on:click={async () => await invalidate('app:random')}>
		<span class="btn-label"> Refresh </span>
	</button>
</div>
