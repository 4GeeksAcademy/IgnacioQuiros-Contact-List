const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contactList: [
			],
			myUrlApi: "https://playground.4geeks.com/contact/"
		},
		actions: {
			createUser: () => {
				const store = getStore();

				fetch(`${store.myUrlApi}agendas/IgnacioQuiros/`, {
					method: "GET"
				})
					.then(response => {
						if (response.status === 404) {
							return fetch(`${store.myUrlApi}agendas/IgnacioQuiros/`, {
								method: "POST"
							});
						} else if (response.ok) {
							return response.json();
						} else {
							throw new Error('Error veryfing user');
						}
					})
				getActions().getContactList();
			},
			getContactList: () => {
				const store = getStore();
				fetch(store.myUrlApi + "agendas/IgnacioQuiros/contacts")
					.then((response) => { return response.json() })
					.then((data) => {
						setStore({ contactList: data.contacts })
					})
					.catch(() => { "Error getting ContactList" })
			},
			deleteContact: (index) => {
				const store = getStore();
				const contact = store.contactList[index];

				fetch(`${store.myUrlApi}agendas/IgnacioQuiros/contacts/${contact.id}`, {
					method: "DELETE",
				})
					.then(() => {
						getActions().getContactList();
					})
					.catch(error => console.error("error deleting contact" + error));
			},
			addContact: (name, phone, email, address) => {
				const store = getStore();
				let newContact = {
					"name": name,
					"phone": phone,
					"email": email,
					"address": address
				};
				fetch(`${store.myUrlApi}agendas/IgnacioQuiros/contacts`, {
					method: "POST",
					body: JSON.stringify(newContact),
					headers: { "Content-Type": "application/json" }
				})
					.then((response) => {
						if (!response.ok) {
							return response.json().then(error => {
								throw new Error(`Error adding contact: ${error.message}`);
							});
						}
						return response.json();
					})
					.then(() => {
						getActions().getContactList();
					})
					.catch((error) => {
						console.error("error adding contact:", error);
					});
			},
			modifyContact: (index, name, phone, email, address) => {
				const store = getStore();
				let modifiedContact = {
					"name": name,
					"phone": phone,
					"email": email,
					"address": address
				};
				fetch(`${store.myUrlApi}agendas/IgnacioQuiros/contacts/${store.contactList[index].id}`, {
					method: "PUT",
					body: JSON.stringify(modifiedContact),
					headers: { "Content-Type": "application/json" }
				})
					.then((response) => {
						if (!response.ok) {
							return response.json().then(error => {
								throw new Error(`error modifying contact: ${error.message}`);
							});
						}
						return response.json();
					})
					.then(() => {
						getActions().getContactList();
					})
					.catch((error) => {
						console.error("error modifying contact:", error);
					});
			}
		}
	};
};

export default getState;
