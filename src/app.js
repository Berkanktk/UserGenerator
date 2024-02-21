const app = Vue.createApp({
    data() {
        return {
            title: '',
            firstName: '',
            lastName: '',
            email: '',
            gender: '',
            age: '',
            nat: '',
            picture: '',

            cell: '',
            phone: '',

            city: '',
            country: '',
            postcode: '',
            state: '',
            street: '',
            streetNo: '',

            username: '',
            password: '',
            uuid: '',
            pw_md5: '',
            pw_sha256: '',

            reg_date: '',

            json_arr: {}
        }
    },
    methods: {
        async getUser() {
            const res = await fetch('https://randomuser.me/api/');
            const { results } = await res.json();
            this.json_arr = results[0];

            // console.log(results); // debug

            this.title = results[0].name.title;
            this.firstName = results[0].name.first;
            this.lastName = results[0].name.last;
            this.email = results[0].email;
            this.gender = results[0].gender;
            this.age = results[0].dob.age;
            this.nat = results[0].nat;
            this.picture = results[0].picture.large;

            this.cell = results[0].cell;
            this.phone = results[0].phone;

            this.city = results[0].location.city;
            this.country = results[0].location.country;
            this.postcode = results[0].location.postcode;
            this.state = results[0].location.state;
            this.street = results[0].location.street.name;
            this.streetNo = results[0].location.street.number;

            this.username = results[0].login.username;
            this.password = results[0].login.password;
            this.uuid = results[0].login.uuid;
            this.pw_md5 = results[0].login.md5;
            this.pw_sha256 = results[0].login.sha256;

            this.reg_date = results[0].registered.date;
        },
        print() {
            const array = JSON.parse(JSON.stringify(this.json_arr));
            navigator.clipboard.writeText(JSON.stringify(array, null, 4)).then(
                () => alert("JSON copied to clipboard"));
        },

        copyToClipboard(text) {
            navigator.clipboard.writeText(text).then().catch(err => {
                console.error('Could not copy text: ', err);
            });
        },
    },
    mounted() {
        this.getUser();
    },
});
app.mount('#app');
