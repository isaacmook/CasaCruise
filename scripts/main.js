// When the document loads
$(document).ready(function () {

  console.log("Hello");

  // -----------------------------------------
  // Home Page

  // When the document loads, animate the hero image upwards
  $(".hero-image").animate({ top: '-=100px' });

  // -----------------------------------------
  // Browse Page

  // Hide all description text from the plant cards
  $("#descriptionText").hide();

});

// When the card is clicked
$(".card").click(function () {

  // Toggle the price & description text
  $("#priceText").toggle();
  $("#descriptionText").toggle();

  // Resize the image to fit the additional content
  $(".card-img-top").toggleClass("small");

});

//Adding content

// Sample data for cruise packages
const cruisePackages = [
  {
    title: 'Caribbean Cruise',
    description: 'Explore the stunning beaches and vibrant culture of the Caribbean islands.',
    image: '/assets/colin-lloyd-JW5j3o_HYgM-unsplash.jpg'
  },
  {
    title: 'Mediterranean Cruise',
    description: 'Experience the charm of the Mediterranean with its historic cities and stunning landscapes.',
    image: '/assets/nick-karvounis-GT4TGeuZZp0-unsplash.jpg'
  },
  {
    title: 'Alaska Cruise',
    description: 'Witness the beauty of Alaska\'s glaciers and wildlife on an unforgettable cruise.',
    image: '/assets/heather-shevlin-jomtL-cBB-E-unsplash.jpg'
  }
];

// Function to generate cruise package cards
function generateCruisePackages() {
  const container = $('.container .row');

  cruisePackages.forEach((package, index) => {
    const card = $('<div>').addClass('col-md-4 mb-4').html(`
      <div class="card">
        <img src="${package.image}" class="card-img-top" alt="${package.title}">
        <div class="card-body">
          <h5 class="card-title">${package.title}</h5>
          <p class="card-text">${package.description}</p>
          <button class="btn btn-primary book-button" data-index="${index}">Book</button>
        </div>
      </div>
    `);

    container.append(card);
  });
}

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

// Function to generate trip cards in the wishlist
function generateTrips() {
  const container = document.querySelector('.container tbody');

  trips.forEach(trip => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td><img src="${trip.image}" alt="${trip.destination}" width="100"></td>
      <td>${trip.destination}</td>
      <td><button class="btn btn-danger btn--">Remove</button></td>
    `;

    container.appendChild(row);
  });
}

// Function to handle adding a trip to the wishlist
function addToWishlist(index) {
  const container = document.querySelector('.container tbody');
  const trip = trips[index];

  const row = document.createElement('tr');
  row.innerHTML = `
    <td><img src="${trip.image}" alt="${trip.destination}" width="100"></td>
    <td>${trip.destination}</td>
    <td><button class="btn btn-danger btn--">Remove</button></td>
  `;

  container.appendChild(row);
}

// Call the functions to generate content
document.addEventListener('DOMContentLoaded', () => {
  generateCruisePackages();
  generateTrips();

  // Add event listener to book buttons
  const bookButtons = document.querySelectorAll('.book-button');
  bookButtons.forEach(button => {
    button.addEventListener('click', function () {
      const index = this.getAttribute('data-index');
      addToWishlist(index);
    });
  });
});


// Removing rows
$(document).ready(function () {
  $(".btn-danger").click(function () {
    // Find parent row and remove it from table
    $(this).closest("tr").remove();
  });
});

