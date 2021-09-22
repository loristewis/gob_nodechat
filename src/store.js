// import { writable } from 'svelte/store';
import { io } from "socket.io-client";

export const socket = io("https://whispering-chamber-09886.herokuapp.com/");

// export const userConnected = writable(false)
