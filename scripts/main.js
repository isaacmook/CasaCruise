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