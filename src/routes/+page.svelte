<script>
	console.log("jj")
</script>

<form method="POST">
	<input type="text" placeholder="Username" value="admin" required>

	<!-- ?? element name warning -->
	<!-- svelte-ignore a11y-autofocus "business use" -->
	<input type="password" autofocus required>

	<button type="submit">Login</button>
</form>

<style>
	form { background-color: white; padding: 20px; border-radius: 5px; box-shadow: 0 0 10px rgba(0,0,0,0.1); }
	input { display: block; margin: 10px 0; padding: 5px; width: 200px; }
	button { background-color: darkslategray; color: white; border: none; padding: 6px 12px; cursor: pointer; }
</style>
