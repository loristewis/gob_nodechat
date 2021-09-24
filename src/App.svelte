<script lang="ts">
	import { onMount } from "svelte";
	import { socket, updateUsersList, updateCurrentUser, updateMessagesList, userConnected, messagesList } from "./store.js";

	import { normalizeMessage, normalizeUser } from "./helpers/normalizers";
	import LoginScreen from "./components/users/LoginScreen.svelte";
	import ChatScreen from "./components/ChatScreen.svelte";

	onMount(() => {
		socket.on("connect", () => {
			console.log("socket.id →", socket.id); // x8WIv7-mJelg7on_ALbx
			console.log("Connected →", socket.connected);
		});
		socket.on("disconnect", () => {
			console.log("socket.id →", socket.id); // undefined
			console.log("Connected →", socket.connected);
		});

		/* Récupérer les utilisateurs au lancement */
		socket.emit("getUsers");
		socket.on("users", (users) => {
			users.forEach(user => {
				normalizeUser(user)
			})

			updateUsersList(users);

			const currentUser = users.find(el => el.id === socket.id);
			updateCurrentUser(currentUser);
		});
	});
</script>

<div>
	{#if (!$userConnected)}
		<LoginScreen />
	{:else}
		<ChatScreen />
	{/if}
</div>

<style lang="scss">
	:global(*) {
		box-sizing: border-box;
	}

	:global(body) {
		background: $colorDark;
		font-family: 'Open Sans', sans-serif;
	}

	:global(input) {
		margin: 0;
	}

	div {
		height: 100vh;
		width: 100vw;
		display: grid;
		grid-template-columns: $sidebarWidth 1fr;

	}
</style>
