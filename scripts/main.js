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

  // When the card is clicked
  $(".card").click(function () {
    // Toggle the price & description text
    $("#priceText").toggle();
    $("#descriptionText").toggle();

    // Resize the image to fit the additional content
    $(".card-img-top").toggleClass("small");
  });

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

  // Function to generate cruise package cards
function generateCruisePackages() {
  const container = $('.container .row');

  cruisePackages.forEach((package, index) => {
    const card = $('<div>').addClass('col-md-4 mb-4').html(`
      <div class="card">
        <img src="${package.image}" class="card-img-top" alt="${package.destination} Cruise">
        <div class="card-body">
          <h5 class="card-title">${package.destination} Cruise</h5>
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

  trips.forEach(trip => {
    const row = $('<tr>').html(`
      <td><img src="${trip.image}" alt="${trip.destination}" width="100"></td>
      <td>${trip.destination}</td>
      <td><button class="btn btn-danger btn--">Remove</button></td>
    `);

    container.append(row);
  });
}

// Call the functions to generate content
generateCruisePackages();
generateTrips();

// Add event listener to book buttons
$(document).on('click', '.book-button', function () {
  const destination = $(this).data('destination');
  addToWishlist(destination);
});

// Removing rows
$(document).on('click', '.btn-danger', function () {
  // Find parent row and remove it from table
  $(this).closest('tr').remove();
});
})