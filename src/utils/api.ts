const BACKEND_URI = "http://localhost:5000"

export default {
    getUserByName: async (name: string) => await (await fetch(`${BACKEND_URI}/user/${name}`)).json(),
    getUsers: async () => await (await fetch(`${BACKEND_URI}/users`)).json(),
    doRoll: async() => await (await fetch(`${BACKEND_URI}/`)).json(),
    buyCard: async(cardID: string) => await (await fetch(`${BACKEND_URI}/card/${cardID}`)).json(),
    getCards: async() => await (await fetch(`${BACKEND_URI}/cards`)).json()
}