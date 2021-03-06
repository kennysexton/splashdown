// List of cities
const citiesArray = ["Hong Kong, Hong Kong", "Singapore", "Bangkok, Thailand", "London, United Kingdom", "Paris, France", "Macau", "New York City, USA", "Shenzhen, China", "Kuala Lumpur, Malaysia", "Antalya, Turkey", "Istanbul, Turkey", "Dubai, United Arab Emirates", "Seoul, South Korea", "Rome, Italy", "Phuket, Thailand", "Guangzhou, China", "Mecca, Saudi Arabia", "Pattaya, Thailand", "Taipei, Taiwan", "Miami, USA", "Prague, Czech Republic", "Shanghai, China", "Las Vegas, USA", "Milan, Italy", "Barcelona, Spain", "Moscow, Russia", "Amsterdam, Netherlands", "Vienna, Austria", "Venice, Italy", "Los Angeles, USA", "Lima, Peru", "Tokyo, Japan", "Johannesburg, South Africa", "Beijing, China", "Sofia, Bulgaria", "Orlando, USA", "Berlin, Germany", "Budapest, Hungary", "Ho Chi Minh City, Vietnam", "Florence, Italy", "Madrid, Spain", "Warsaw, Poland", "Doha, Qatar", "Nairobi, Kenya", "Delhi, India", "Mumbai, India", "Chennai, India", "Mexico City, Mexico", "Dublin, Ireland", "San Francisco, USA", "Hangzhou, China", "Denpasar, Indonesia", "Philadelphia, USA", "Muğla, Turkey", "Brussels, Belgium", "Burgas, Bulgaria", "Munich, Germany", "Zhuhai, China", "Sydney, Australia", "Edirne, Turkey", "Toronto, Canada", "Lisbon, Portugal", "Cancún, Mexico", "Buenos Aires, Argentina", "Cairo, Egypt", "Punta Cana, Domincan Republic", "Suzhou, China", "Djerba, Tunisia", "Agra, India", "Kraków, Poland", "Bucharest, Romania", "Siem Reap, Cambodia", "Jaipur, India", "Honolulu, USA", "Manama, Bahrain", "Dammam, Saudi Arabia", "Hanoi, Vietnam", "Andorra La Vella, Andorra", "Nice, France", "Zürich, Switzerland", "Jakarta, Indonesia", "Manila, Philippines", "Chiang Mai, Thailand", "Marrakech, Morocco", "Sharm El Sheikh, Egypt", "Frankfurt, Germany", "Abu Dhabi, United Arab Emirates", "Vancouver, Canada", "Guilin, China", "Melbourne, Australia", "Rio De Janeiro, Brazil", "Riyadh, Saudi Arabia", "Amman, Jordan", "Sousse, Tunisia", "Kiev, Ukraine", "Sharjah, United Arab Emirates", "Jeju-do, South Korea", "Krabi, Thailand", "Artvin, Turkey"]

// Gets a random city from a predefined list
export function getRandomCity() {
    var length = citiesArray.length;
    var randomNumber = Math.floor(Math.random() * length);
    console.log(`Shown City - ${citiesArray[randomNumber]} (${randomNumber})`)
    return citiesArray[randomNumber]
}

// Roud decimal
export function round(input) {
    var number = Math.round(input);
    return number;
}