<script lang="ts">
	import { page } from '$app/stores';
</script>

<h1 class="mx-auto text-center text-3xl pt-5 font-bold">{$page?.error?.message}</h1>
<p class="mx-auto text-center">An error occurred.</p>
