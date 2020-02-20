// App.svelte
<script>
	import Nested from './Nested.svelte';
</script>

<Nested answer={42}/>
<Nested/>

// Nested.svelte
<script>
	export let answer = 'a mystery';
</script>

<p>The answer is {answer}</p>
