<script lang="ts">
	import { invalidate } from '$app/navigation';
	import { page } from '$app/stores';
</script>

<h1 class="mx-auto text-center text-3xl pt-20 font-bold">{$page?.error?.message}</h1>
<p class="mx-auto text-center">An error occurred.</p>

<button
	class="btn btn-info mx-auto text-center"
	on:click={async () => await invalidate('app:random')}
>
	<span class="btn-label"> Refresh </span>
</button>
