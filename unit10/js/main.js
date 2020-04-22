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
document.querySelector("#theBroadmoor").addEventListener("click", hotelInfo)
document.querySelector("#ritzCarlton").addEventListener("click", hotelInfo)

function hotelInfo(event) {
    let hotelChoice = hotelData.hotels.find(hotel => {
        return event.target.id.toLowerCase() === hotel.name.toLowerCase().replace(/\s/g, '')
    })
    document.querySelector("#hotelName").textContent = `${hotelChoice.name} Hotel`
    document.querySelector("#address").textContent = hotelChoice.address
    document.querySelector("#rooms").textContent = hotelChoice.rooms
    document.querySelector("#gym").textContent = hotelChoice.gym
    document.querySelector("#type").textContent = hotelChoice.roomTypes
    document.querySelector("#picture").src = hotelChoice.picture
}