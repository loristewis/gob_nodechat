<script lang="ts">
	import { io } from "socket.io-client";
	const socket = io("https://server-domain.com");

	socket.on("connect", () => {
		console.log(socket.id); // x8WIv7-mJelg7on_ALbx
		console.log(socket.connected);
	});

	socket.on("disconnect", () => {
		console.log(socket.id); // undefined
		console.log(socket.connected);
	});

	if (socket.connected) {
		socket.emit();
	} else {
		//
	}

	export let name: string;
</script>

<main>
	<h1>Hello {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
