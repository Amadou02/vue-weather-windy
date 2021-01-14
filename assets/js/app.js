var app = new Vue({
    el: "#app",
    data(){
        return {
            loading: true,
            info: null,
            city: 'Amiens',
            weatherIcons: {
                Rain: 'wi wi-rain',
                Clouds: 'wi wi-cloudy',
                Snow: 'wi wi-snow',
                Mist: 'wi wi-fog',
                Drizzle: 'wi wi-sleet'
            }
        }
    },
    methods: {
        loadData(){
            axios
                .get('https://api.openweathermap.org/data/2.5/weather?q='+this.city+'&appid=f229a76dfb5cd9e867097464bff832bf&lang=fr&units=metric')
                .then(response => {
                    console.log(response.data);
                    this.info = response.data;
                    this.loading = false;
                })
        },
        reset() {
            if(this.city == ''){
                this.city = 'Amiens'
            }
        }
    },
    computed: {
        className(){
            return this.weatherIcons[this.info.weather[0].main];
        }
    },
    mounted(){
        this.loadData();
    }
})