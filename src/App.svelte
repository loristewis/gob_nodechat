<script lang="ts">
	import { socket } from "./store.js";
	import MessagesList from "./components/messages/MessagesList.svelte";
	import UsersList from "./components/users/UsersList.svelte";
	import NewMessageForm from "./components/messages/NewMessageForm.svelte";
	import SetUsernameForm from "./components/users/SetUsernameForm.svelte";

	socket.on("connect", () => {
		console.log(socket.id); // x8WIv7-mJelg7on_ALbx
		console.log(socket.connected);
	});
	socket.on("disconnect", () => {
		console.log(socket.id); // undefined
		console.log(socket.connected);
	});

	/*
	 * Récupérer les utilisateurs
	 */
	// socket.emit("getUsers");
	// socket.on("user", usersListener);
	//
	// function usersListener(user) {
	// 	console.log("user", user);
	// }
	//
	export let name: string;
	//
	// socket.emit("setUsername", name);

	// socket.on('user', function (user) {
	// 	console.info(user);
	// });

	// if (socket.connected) {
	// 	socket.emit();
	// } else {
	//
	// }
</script>

<div>
	<aside>
		<SetUsernameForm />
		<NewMessageForm />
		<UsersList />
	</aside>

	<main>
		<MessagesList />
	</main>
</div>

<style>
	div {
		display: grid;
		grid-gap: 16px;
		grid-template-columns: 1fr 2fr;
	}

	main {
		padding: 0;
		margin: 0;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}
</style>
