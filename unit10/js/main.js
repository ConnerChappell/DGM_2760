document.querySelector('header > h1').textContent = "Hotel Booking"
document.querySelector('header > h2').textContent = 'Find Your Next Stay'

async function getHotelData() {
    try {
        const response = await fetch("hotel.json")
        return await response.json()
    } catch (error) {
        console.error(error)
    }
}

let hotelData = {}
getHotelData().then(data => hotelData = data)

document.querySelector("#fourSeasons").addEventListener("click", hotelInfo)
document.querySelector("#broadmoor").addEventListener("click", hotelInfo)
document.querySelector("#ritz").addEventListener("click", hotelInfo)

function hotelInfo(event) {
    let hotelChoice = hotelData.hotels.find(hotel => {
        return event.target.id === hotel.name.toLowerCase()
    })
    document.querySelector('#hotelName').textContent = `${hotelChoice.name} Hotel`
    document.querySelector("#address").textContent = hotelChoice.address
    document.querySelector("#rooms").textContent = hotelChoice.rooms
    document.querySelector("#gym").textContent = hotelChoice.gym
    document.querySelector("#type").textContent = hotelChoice.roomTypes
    document.querySelector("#picture").src = hotelChoice.picture
}