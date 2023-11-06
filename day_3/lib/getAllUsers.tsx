import React from 'react'

export default async function getAllUsers() {

const userData = fetch("https://jsonplaceholder.typicode.com/users");
const users = await userData;
if(!users){
 throw new Error("api not found");
}
return users.json();
}
