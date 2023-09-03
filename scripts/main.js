// When the document loads
$(document).ready(function () {

  console.log("Welcome");

  // -----------------------------------------
  // Home Page

  // When the document loads, animate the hero image upwards
  $(".hero-image").animate({ top: '-=100px' });

  // -----------------------------------------
  // Browse Page

  // Hide all description text from the plant cards
  $("#descriptionText").hide();

  // Clear the wishlist table on document load
  $('.container tbody').empty();

  // Sample data for trips
  const trips = [
    {
      image: '/assets/colin-lloyd-JW5j3o_HYgM-unsplash.jpg',
      destination: 'Caribbean'
    },
    {
      image: '/assets/nick-karvounis-GT4TGeuZZp0-unsplash.jpg',
      destination: 'Mediterranean'
    },
    {
      image: '/assets/heather-shevlin-jomtL-cBB-E-unsplash.jpg',
      destination: 'Alaska',
    }
  ];

  // Array to store booked trips
  const bookedTrips = [];

  // Function to generate cruise package cards
  function generateCruisePackages() {
    const container = $('.container .row');

    trips.forEach((trip, index) => {
      const card = $('<div>').addClass('col-md-4 mb-4').html(`
        <div class="card">
          <img src="${trip.image}" class="card-img-top" alt="${trip.destination} Cruise">
          <div class="card-body">
            <h5 class="card-title">${trip.destination} Cruise</h5>
            <button class="btn btn-primary book-button" data-destination="${index}">Book</button>
          </div>
        </div>
      `);

      container.append(card);
    });
  }

  // Function to generate trip cards in the wishlist
  function generateTrips() {
    const container = $('.container tbody');

    container.empty(); // Clear existing rows

    bookedTrips.forEach((trip, index) => {
      const row = $('<tr>').html(`
        <td><img src="${trip.image}" alt="${trip.destination}" width="100"></td>
        <td>${trip.destination}</td>
        <td><button class="btn btn-danger btn--remove" data-index="${index}">Remove</button></td>
      `);

      container.append(row);
    });
  }

  
  generateTrips();

  // Add event listener to book buttons
  $(document).on('click', '.book-button', function () {
    const destinationIndex = $(bookedTrips).data('destination');
    const selectedTrip = trips[destinationIndex];
    bookedTrips.push(selectedTrip);
    generateTrips(); // Update the table with the new trip
  });

  // Remove trips
  $(document).on('click', '.btn--remove', function () {
    const removeIndex = $(this).data('index');
    bookedTrips.splice(removeIndex, 1);
    generateTrips(); // Update the table after removal
  });

});

// Sample data for trips
const trips = [
  {
    title: 'Caribbean Cruise',
    description: 'Explore the stunning beaches and vibrant culture of the Caribbean islands.',
    duration: 7,
    destinations: 1,
    roundTrip: true,
    price: 1000,
  },
  
  {
      title: 'Mediterranean Cruise',
      description: 'Experience the charm of the Mediterranean with its historic cities and stunning landscapes.',
      duration: 11,
      destinations: 1,
      roundTrip: true,
      price: 3500,
    },

    {
      title: 'Alaska Cruise',
      description: "Witness the beauty of Alaska's glaciers and wildlife on an unforgettable cruise.",
      duration: 17,
      destinations: 1,
      roundTrip: true,
      price: 5000,
    },
];

// Function to generate trip cards
function generateTripCards() {
  const container = document.getElementById('trip-cards');
  container.innerHTML = ''; // Clear existing cards

  trips.forEach((trip, index) => {
    const card = document.createElement('div');
    card.className = 'col-md-4 mb-4';
    card.innerHTML = `
      <div class="card">
        <img src="/assets/trip-image-${index}.jpg" class="card-img-top" alt="${trip.title}">
        <div class="card-body">
          <h5 class="card-title">${trip.title}</h5>
          <p class="card-text">${trip.description}</p>
          <p>Duration: ${trip.duration} days</p>
          <p>Destinations: ${trip.destinations}</p>
          <p>Price: $${trip.price}</p>
          <button class="btn btn-primary book-button" data-index="${index}">Book</button>
        </div>
      </div>
    `;

    container.appendChild(card);
  });
}

// Filter trips by duration
function filterByDuration(duration) {
  return trips.filter(trip => trip.duration <= duration);
}

// Filter trips by destinations
function filterByDestinations(destinations) {
  return trips.filter(trip => trip.destinations === destinations);
}

// Filter round trips
function filterRoundTrips() {
  return trips.filter(trip => trip.roundTrip);
}

// Filter top 5 cheapest trips
function filterTopCheapest() {
  return trips.sort((a, b) => a.price - b.price).slice(0, 5);
}

// Function to update trip cards based on filter criteria
function updateTripCards(filteredTrips) {
  generateTripCards(filteredTrips);
}

// Event listener for the 'book' button click
document.addEventListener('click', function (event) {
  if (event.target.classList.contains('book-button')) {
    const index = event.target.dataset.index;
    alert(`Booked trip: ${trips[index].title}`);
  }
});

// Initial generation of trip cards
generateTripCards(trips);
