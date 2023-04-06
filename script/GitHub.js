class gitHub {
    constructor() {
        this.client_id = 'e9cead26fdb43653a87c';
        this.client_secret = 'e7e8e9a4c454e271843e8ffd06b90069d8329e71';
    }

    // Get users by name
    getUser(name) {
        return new Promise((resolve, reject) => {
            fetch(`https://api.github.com/users/${name}?client_id=${this.client_id}&client_secret=${this.client_secret}`)
                .then((response) => response.json())
                .then((user) => resolve(user))
                .catch((error) => reject(error));
        })
    }
}

