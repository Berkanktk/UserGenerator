const app = Vue.createApp({
    data() {
        return {
            title: 'Ms',
            firstName: 'Berkan',
            lastName: 'Kütük',
            email: 'berkan@kutuk.dev',
            gender: 'male',
            age: '21',
            nat: 'DK',
            picture: '../assets/berkan.png',

            cell: '31416922',
            phone: '31416922',

            city: 'Odense',
            country: 'Denmark',
            postcode: '5230',
            state: 'Syddanmark',
            street: 'Cool street',
            streetNo: '1337',

            username: 'Berkanktk',
            password: 'helloworld',
            uuid: 'ab72a9ec-5fff-4ae4-806f-dc43fcc59861',
            pw_md5: 'fc5e038d38a57032085441e7fe7010b0',
            pw_sha256: '936a185caaa266bb9cbe981e9e05cb78cd732b0b3280eb944412bb6f8f8f07af',

            reg_age: '21',
            reg_date: '2018-10-31T21:29:59.315',

            json_arr: {}

        }
    },
    methods: {
        async getUser() {
            const res = await fetch('https://randomuser.me/api/')
            const { results } = await res.json()
            this.json_arr = results[0]

            // console.log(results)

            this.title = results[0].name.title
            this.firstName = results[0].name.first
            this.lastName = results[0].name.last
            this.email = results[0].email
            this.gender = results[0].gender
            this.age = results[0].dob.age
            this.nat = results[0].nat
            this.picture = results[0].picture.large

            this.cell = results[0].cell
            this.phone = results[0].phone

            this.city = results[0].location.city
            this.country = results[0].location.country
            this.postcode = results[0].location.postcode
            this.state = results[0].location.state
            this.street = results[0].location.street.name
            this.streetNo = results[0].location.street.number

            this.username = results[0].login.username
            this.password = results[0].login.password
            this.uuid = results[0].login.uuid
            this.pw_md5 = results[0].login.md5
            this.pw_sha256 = results[0].login.sha256

            this.reg_age = results[0].registered.age
            this.reg_date = results[0].registered.date
        },
        print() {
            const array = JSON.parse(JSON.stringify(this.json_arr))
            navigator.clipboard.writeText(JSON.stringify(array)).then(
                r => alert("JSON copied to clipboard "));
        }
    },
})
app.mount('#app')