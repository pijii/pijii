function reload() {
    location.reload();
}

let currentIndex = 0;

function slideImages() {
    const slides = document.querySelector('.slides');
    const totalImages = slides.children.length;
    currentIndex = (currentIndex + 1) % totalImages;
    slides.style.transform = `translateX(-${currentIndex * 100}vw)`;
}

setInterval(slideImages, 5000); 

function toggleMenu() {
    const sidebarMenu = document.getElementById('sidebarMenu');
    sidebarMenu.classList.toggle('open');
}

function rooms() {
  const roomElement = document.getElementById("room");
  if (roomElement.style.display === "none") {
      roomElement.style.display = "block";
  } else {
      roomElement.style.display = "none";
  }
}

function filterResorts() {
    const input = document.querySelector('#searchbar').value.toLowerCase();
    const dropdown = document.getElementById('dropdownMenu');
    const items = dropdown.querySelectorAll('.dropdown-item');
    
    let hasMatch = false;
    items.forEach(item => {
      const fullText = item.querySelector('.resort-info').textContent + " - " + item.querySelector('.resort-location').textContent;
      if (fullText.toLowerCase().includes(input)) {
        item.style.display = 'flex';
        hasMatch = true;
      } else {
        item.style.display = 'none';
      }
    });
    
    // Show dropdown if there is a match, otherwise hide
    dropdown.style.display = hasMatch ? 'block' : 'none';
  }

  function selectResort(fullName) {
    document.querySelector('#searchbar').value = fullName;
    document.getElementById('dropdownMenu').style.display = 'none';
  }

  // Hide dropdown when clicking outside the search container
  document.addEventListener('click', function(event) {
    const searchContainer = document.getElementById('searchbar');
    const dropdown = document.getElementById('dropdownMenu');
    
    if (!searchContainer.contains(event.target)) {
      dropdown.style.display = 'none';
    }
});

function rooms() {
  const roomElement = document.getElementById("room");
  if (roomElement.style.display === "none") {
      roomElement.style.display = "block";
  } else {
      roomElement.style.display = "none";
  }
}

window.addEventListener('click', function(event) {
  const room = document.getElementById('room');
  const allowedElements = [
    document.getElementById('buttonRoom'),
    document.getElementById('numAdult'),
    document.getElementById('numChildren'),
    document.getElementById('numRooms'),
    document.querySelector('.people'),
    document.querySelector('.arrow')
  ];

  // If the clicked element is not the #room div or any of the allowed elements, hide the room
  if (!room.contains(event.target) && !allowedElements.includes(event.target)) {
    room.style.display = 'none';
  }
});


function addcount(room, color,) {
  const roomCount = document.getElementById(room);
  const button = document.querySelector(color);
  const count = parseFloat(roomCount.innerHTML);

  const numAdult = document.querySelector('#numAdult');
  const numRooms = document.querySelector('#numRooms');
  const udjust = document.getElementById('numChildren');
  const number = count + 1;

  if (count >= 1) {
    roomCount.innerText ++;

    if (room == 'roomCount') {  
      if (number == 1) {
        numRooms.innerText = number + ' Room';
      } else {
        numRooms.innerText = number + ' Rooms';
      }
    }

    if (room == 'AdultCount') {  
      if (number == 1) {
        numAdult.innerText = number + ' Adult';
      } else {
        numAdult.innerText = number + ' Adults';
      }

      if (number == 2) {
        udjust.style.left = '46.5%';
      } else if (number >= 10) {
        udjust.style.left = '49.5%';
      }
    }

    if (count > 0) {
      button.style.backgroundColor = 'white';
    }
  
    if (count >= 9) {
      roomCount.style.left = '70.6%';
    } else (
      roomCount.style.left = '73%'
    )
  }
}

function minuscount(room, color,) {
  const roomCount = document.getElementById(room);
  const button = document.querySelector(color);
  const count = parseFloat(roomCount.innerHTML);

  const numAdult = document.getElementById('numAdult');
  const numRooms = document.getElementById('numRooms');
  const udjust = document.getElementById('numChildren');
  const number = count - 1;

  if (count == 2) {
    button.style.backgroundColor = 'lightgrey';
  }

  if (count != 1) {
    roomCount.innerText --;

    if (room == 'roomCount') {  
      if (number == 1) {
        numRooms.innerText = number + ' Room';
      } else {
        numRooms.innerText = number + ' Rooms';
      }
    }

    if (room == 'AdultCount') {  
      if (number == 1) {
        numAdult.innerText = number + ' Adult';
      } else {
        numAdult.innerText = number + ' Adults';
      }

      if (number <= 10) {
        udjust.style.left = '46.5%';

        if (number == 1) {
          udjust.style.left = '44%';
        }
      }

    }

    if (count >= 11) {
      roomCount.style.left = '70.6%';
    } else {
      roomCount.style.left = '73%'
    }
  } 
}

function addcountchild(room, color) {
  const roomCount = document.getElementById(room);
  const button = document.querySelector(color);
  const count = parseFloat(roomCount.innerHTML);

  const numChild = document.getElementById('numChildren');
  const number = count + 1;

  if (count >= 0) {
    roomCount.innerText ++;
    
     
    if (number == 1) {
      numChild.innerText = ', ' + number + ' Children';
    } else if (number == 1) {
      numChild.innerText = '';
    } else {
      numChild.innerText = ', ' + number + ' Childrens';
    }
  

    if (count > -1) {
      button.style.backgroundColor = 'white';
    }
  
    if (count >= 9) {
      roomCount.style.left = '70.6%';
    } else (
      roomCount.style.left = '73%'
    )
  }
}

function minuscountchild(room, color) {
  const roomCount = document.getElementById(room);
  const button = document.querySelector(color);
  const count = parseFloat(roomCount.innerHTML);

  const numChild = document.getElementById('numChildren');
  const number = count - 1;

  if (count == 1) {
    button.style.backgroundColor = 'lightgrey';
  }

  if (count != 0) {
    roomCount.innerText --;

    if (number == 1) {
      numChild.innerText = ', ' + number + ' Children';
    } else if (number == 0) {
      numChild.innerText = '';
    } else {

      numChild.innerText = ', ' + number + ' Childrens';
    }
  

    if (count >= 11) {
      roomCount.style.left = '70.6%';
    } else {
      roomCount.style.left = '73%'
    }
  } 
}


let lastButtonId = null; // To keep track of the last button clicked

function toggleCalendar(buttonId) {
  const buttonType = document.querySelector(buttonId);
  const calendar = document.getElementById('calendar');

  // Set the `left` position based on which button is clicked
  if (buttonType.classList.contains('calendar1')) {
    calendar.style.left = '23%';
  } else if (buttonType.classList.contains('calendar2')) {
    calendar.style.left = '26%';
  }

  // Toggle display only if the same button is clicked twice
  if (lastButtonId === buttonId) {
    // Toggle display on double-click of the same button
    calendar.style.display = (calendar.style.display === 'none') ? 'block' : 'none';
  } else {
    // Ensure the calendar is visible when a different button is clicked
    calendar.style.display = 'block';
  }

  // Update the last button clicked
  lastButtonId = buttonId;
}


// Current month reference
let currentMonth = new Date();  

// Initialize selected dates
let checkInDate = null; 
let checkOutDate = null;

// Update the display of the button with the selected date
function updateButtonDisplay() {
    const realDate1 = document.getElementById('realDate1');
    const realDay1 = document.getElementById('realDay1');
    const realDate2 = document.getElementById('realDate2');
    const realDay2 = document.getElementById('realDay2');

    if (checkInDate) {
        realDate1.textContent = `${checkInDate.toLocaleString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}`;
        realDay1.textContent = checkInDate.toLocaleString('en-US', { weekday: 'long' });
    } else {
        realDate1.textContent = "Check-in Date";
        realDay1.textContent = "Day";
    }

    if (checkOutDate) {
        realDate2.textContent = `${checkOutDate.toLocaleString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}`;
        realDay2.textContent = checkOutDate.toLocaleString('en-US', { weekday: 'long' });
    } else {
        realDate2.textContent = "Check-out Date";
        realDay2.textContent = "Day";
    }
}

// Handle the selection of check-in and check-out dates
function handleDateSelection(event, isCheckIn) {
    const selectedDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), event.target.textContent);

    if (isCheckIn) {
        checkInDate = selectedDate;
        if (checkOutDate && selectedDate > checkOutDate) {
            checkOutDate = null; // Reset check-out if it's before the check-in
        }
    } else {
        checkOutDate = selectedDate;
        if (checkInDate && selectedDate < checkInDate) {
            checkInDate = null; // Reset check-in if it's after the check-out
        }
    }

    updateButtonDisplay();
    highlightDateRange();
    generateCalendar(0); // Regenerate the calendar to show the updated range
}

// Highlight the selected date range
function highlightDateRange() {
    const datesContainer1 = document.getElementById("dates1");
    const datesContainer2 = document.getElementById("dates2");
    
    // Clear previous highlights
    const allDates = document.querySelectorAll(".date");
    allDates.forEach(date => date.classList.remove("selected-range"));

    if (checkInDate && checkOutDate) {
        const allDatesLeft = datesContainer1.querySelectorAll(".date");
        const allDatesRight = datesContainer2.querySelectorAll(".date");

        // Highlight the selected range in the left calendar
        allDatesLeft.forEach(date => {
            const dateText = parseInt(date.textContent);
            if (checkInDate && checkOutDate && dateText >= checkInDate.getDate() && dateText <= checkOutDate.getDate()) {
                date.classList.add("selected-range");
            }
        });

        // Highlight the selected range in the right calendar
        allDatesRight.forEach(date => {
            const dateText = parseInt(date.textContent);
            if (checkInDate && checkOutDate && dateText >= checkInDate.getDate() && dateText <= checkOutDate.getDate()) {
                date.classList.add("selected-range");
            }
        });
    }
}

// Add event listeners for date clicks
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById("dates1").addEventListener("click", (e) => {
      if (e.target.classList.contains("date") && !e.target.classList.contains("empty")) {
          handleDateSelection(e, true); // Set as check-in date
      }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const dates2 = document.getElementById("dates2");
  if (dates2) {
      dates2.addEventListener("click", (e) => {
          if (e.target.classList.contains("date") && !e.target.classList.contains("empty")) {
              handleDateSelection(e, false); // Set as check-out date
          }
      });
  }
});


// Generate the calendar for both months
function generateCalendar(offset) {
    const month = currentMonth.getMonth() + offset; 
    const year = currentMonth.getFullYear();

    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDay = firstDay.getDay();

    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const monthYearHeader = `${monthNames[firstDay.getMonth()]} ${year}`;

    document.getElementById("monthYear1").textContent = monthYearHeader;
    document.getElementById("monthYear2").textContent = monthNames[(firstDay.getMonth()) % 12] + " " + year;

    const datesContainer1 = document.getElementById("dates1");
    datesContainer1.innerHTML = ''; 

    for (let i = 0; i < startingDay; i++) {
        const emptyCell = document.createElement("div");
        emptyCell.classList.add("date", "empty");
        datesContainer1.appendChild(emptyCell);
    }

    for (let day = 1; day <= daysInMonth; day++) {
        const dayCell = document.createElement("div");
        dayCell.textContent = day;
        dayCell.classList.add("date");
        datesContainer1.appendChild(dayCell);
    }

    const nextMonth = new Date(year, month + 1, 1);
    const nextMonthFirstDay = new Date(nextMonth.getFullYear(), nextMonth.getMonth(), 1);
    const nextMonthStartingDay = nextMonthFirstDay.getDay();
    const nextMonthLastDay = new Date(nextMonth.getFullYear(), nextMonth.getMonth() + 1, 0).getDate();

    const datesContainer2 = document.getElementById("dates2");
    datesContainer2.innerHTML = ''; 

    for (let i = 0; i < nextMonthStartingDay; i++) {
        const emptyCell = document.createElement("div");
        emptyCell.classList.add("date", "empty");
        datesContainer2.appendChild(emptyCell);
    }

    for (let day = 1; day <= nextMonthLastDay; day++) {
        const dayCell = document.createElement("div");
        dayCell.textContent = day;
        dayCell.classList.add("date");
        datesContainer2.appendChild(dayCell);
    }
}

// Initial calendar generation
document.addEventListener("DOMContentLoaded", () => {
  generateCalendar(0);
});

// Synchronize navigation across both months
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("prev").addEventListener("click", () => {
      currentMonth.setMonth(currentMonth.getMonth() - 1); 
      generateCalendar(0); 
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const nextButton = document.getElementById("next");
  if (nextButton) {
      nextButton.addEventListener("click", () => {
          currentMonth.setMonth(currentMonth.getMonth() + 1); 
          generateCalendar(0); 
      });
  }
});

window.addEventListener('click', function(event) {
  const calendar = document.getElementById('calendar');
  const allowedElements = [
    document.getElementById('calendar1'),
    document.getElementById('calendar2'),
    document.getElementById('realDate1'),
    document.getElementById('realDate2'),
    document.getElementById('realDay1'),
    document.getElementById('realDay2'),
    document.querySelector('.calendar1'),
    document.querySelector('.calendar2'),
    document.querySelector('.date'),
    document.querySelector('.date empty'),
  ];

  // If the clicked element is not the calendar or any of the allowed elements, hide the calendar
  if (!calendar.contains(event.target) && !allowedElements.includes(event.target)) {
    calendar.style.display = 'none';
  }
});

function toggleBook() {
  const adultVal = document.getElementById('numAdult');
  const adultNum = document.getElementById('num-adult');
  const roomVal = document.getElementById('numRooms');
  const roomNum = document.getElementById('num-room');
  const childVal = document.getElementById('numChildren');
  const childNum = document.getElementById('num-child');
  const childText = childVal.textContent;

  adultNum.innerText = adultVal.innerText;
  roomNum.innerText = roomVal.innerText;
  childNum.textContent = childText.slice(2)

  const checkInVal = document.getElementById('realDate1');
  const checkIn = document.getElementById('putCheckin');
  const inDayVal = document.getElementById('realDay1');
  const inDay = document.getElementById('putDay1');
  const checkOutVal = document.getElementById('realDate2');
  const checkOut = document.getElementById('putCheckout');
  const outDayVal = document.getElementById('realDay2');
  const outDay = document.getElementById('putDay2');

  checkIn.innerText = checkInVal.innerText;
  inDay.innerText = inDayVal.innerText;
  checkOut.innerText = checkOutVal.innerText;
  outDay.innerText = outDayVal.innerText;

  const resortNameVal = document.getElementById('searchbar');
  const resortName = document.getElementById('Rname');
  const image = document.getElementById('resort_image');

  resortName.innerText = resortNameVal.value;

  if (resortNameVal.value.includes('Amanpulo - Pamalican Island, Palawan')) {
    image.src = 'Pics/Picture1.png';
  } else if (resortNameVal.value.includes('Balesin Island Club - Polillo, Quezon')) {
    image.src = 'Pics/Picture2.png';
  } else if (resortNameVal.value.includes('Crimson Resort and Spa - Mactan, Cebu')) {
    image.src = 'Pics/Picture3.png';
  } else if (resortNameVal.value.includes('El Nido Resorts')) {
    image.src = 'Pics/Picture4.png';
  } else if (resortNameVal.value.includes('Huma Island Resort and Spa - Busuanga, Palawan')) {
    image.src = 'Pics/Picture5.png';
  } else if (resortNameVal.value.includes('Misibis Bay - Cagraray Island, Albay')) {
    image.src = 'Pics/Picture6.png';
  } else if (resortNameVal.value.includes('Pearl Farm Beach Resort - Samal Island, Davao')) {
    image.src = 'Pics/Picture7.png';
  } else if (resortNameVal.value.includes('Shangri-La’s Boracay Resort & Spa')) {
    image.src = 'Pics/Picture8.png';
  } else if (resortNameVal.value.includes('The Bellevue Resort - Panglao, Bohol')) {
    image.src = 'Pics/Picture9.png';
  } else if (resortNameVal.value.includes('Two Seasons Coron Island Resort - Coron, Palawan')) {
    image.src = 'Pics/Picture10.png';
  }

  const receipt = document.getElementById('receipt');
  const overlay = document.getElementById('background-overlay');

  if (receipt.style.display === 'none') {
    receipt.style.display = 'block';
    overlay.style.display = 'block';
  } else {
    receipt.style.display = 'none';
    overlay.style.display = 'none';
  }
}

function back() {
  const receipt = document.getElementById('receipt')
  const overlay = document.getElementById('background-overlay');

  if (receipt.style.display === 'none') {
    receipt.style.display = 'block';
    overlay.style.display = 'block';
  } else {
    receipt.style.display = 'none';
    overlay.style.display = 'none';
  }
}

function confirm() {
  const receipt = document.getElementById('receipt')
  const message = document.querySelector('.bookingMess')
  const overlay = document.getElementById('background-overlay');

  if (receipt.style.display === 'block') {
    receipt.style.display = 'none';
    overlay.style.display = 'none';
    message.style.display = 'block';
    setTimeout(() => {
      message.style.display = 'none';
      location.reload();
  }, 2000);
  }
}

function cancel() {
  const xButton = document.getElementById('infoContainer');
  const overlay = document.getElementById('background-overlay');

  if (xButton.style.display === 'none') {
    xButton.style.display = 'block';
    overlay.style.display = 'block';
  } else {
    xButton.style.display = 'none';
    overlay.style.display = 'none';
  }
}

function clickInfo(Resort) {
  const container = document.getElementById('infoContainer');
  const resortNmae = document.getElementById('resort-name');
  const parainfo = document.getElementById('paraInfo');
  const overlay = document.getElementById('background-overlay');
  const image = document.getElementById('drag_image');

  if (container.style.display === 'none') {
    container.style.display = 'block';
    overlay.style.display = 'block';
  } else {
    container.style.display = 'none';
    overlay.style.display = 'none';
  }

  switch (Resort) {
    case 'Amanpulo':
      resortNmae.innerText = 'Amanpulo (Pamalican Island, Palawan)';
      parainfo.innerHTML = 'Super private and high-end, perfect for those who want peace and nature. Known for its white sand beaches, diving spots, and activities like snorkeling and island hopping.';
      image.src = 'Pics/Picture1.png';
      break;
    case 'Balesin':
      resortNmae.innerText = 'Balesin Island Club (Polillo, Quezon)';
      parainfo.innerHTML = 'Members-only resort with villages inspired by places like Bali, Greece, and France. Perfect for travelers who want a world tour vibe in one island.';
      image.src = 'Pics/Picture2.png';
      break;
    case 'Crimson':
      resortNmae.innerText = 'Crimson Resort and Spa (Mactan, Cebu)';
      parainfo.innerHTML = 'Ideal for families, with a beachfront, pool, and lots of water sports. Great for those who want relaxation but with activities nearby.';
      image.src = 'Pics/Picture3.png';
      break;
    case 'El':
      resortNmae.innerText = 'El Nido Resorts (El Nido, Palawan)';
      parainfo.innerHTML = 'Eco-friendly, with incredible views and activities like kayaking and diving. Perfect for nature lovers and adventure seekers.';
      image.src = 'Pics/Picture4.png';
      break;
    case 'Huma':
      resortNmae.innerText = 'Huma Island Resort and Spa (Busuanga, Palawan)';
      parainfo.innerHTML = 'Known for its overwater villas with private jacuzzis. Ideal for couples or anyone wanting a romantic getaway.';
      image.src = 'Pics/Picture5.png';
      break;
    case 'Misibis':
      resortNmae.innerText = 'Misibis Bay (Cagraray Island, Albay)';
      parainfo.innerHTML = 'A luxury resort with both land and water activities like ATV rides and jet skiing. Ideal for those who want a mix of adventure and relaxation.';
      image.src = 'Pics/Picture6.png';
      break;
    case 'Pearl':
      resortNmae.innerText = 'Pearl Farm Beach Resort (Samal Island, Davao)';
      parainfo.innerHTML = 'Known for its traditional Filipino feel with stilted cottages and beach views. Great for cultural experiences and relaxation.';
      image.src = 'Pics/Picture7.png';
      break;
    case 'Shangri':
      resortNmae.innerText = 'Shangri-La’s Boracay Resort & Spa (Boracay, Aklan)';
      parainfo.innerHTML = 'High-end resort with a private beach. Perfect for those who want a luxurious experience with Boracay’s famous white sand.';
      image.src = 'Pics/Picture8.png';
      reak;
    case 'Bellevue':
      resortNmae.innerText = 'The Bellevue Resort (Panglao, Bohol)';
      parainfo.innerHTML = 'Family-friendly, with beautiful beach views and diving spots nearby. Good for those exploring Bohol’s scenic spots.';
      image.src = 'Pics/Picture9.png';
      break;
    case 'Seasons':
      resortNmae.innerText = 'Two Seasons Coron Island Resort (Coron, Palawan)';
      parainfo.innerHTML = 'Known for its secluded location and diving spots. Great for those who want a peaceful escape with marine adventures.';
      image.src = 'Pics/Picture10.png';
      break;
    }
}

function goToClass2() {
  // Select the element with class "class2"
  const targetElement = document.querySelector('.Header');
  
  // Scroll to the element
  targetElement.scrollIntoView({ behavior: 'smooth' });
}

function toggleAbout() {
  const team = document.querySelector('.team');

  if (team.style.display === 'none') {
    team.style.display = 'block';
    team.scrollIntoView({ behavior: 'smooth'})
  } else {
    team.style.display = 'none';
  }
}


function dragimage() {
  const image = document.getElementById('drag_image');
    image.style.left = '0%';
}

function backimage() {
  const image = document.getElementById('drag_image');
    image.style.left = '100%';
}

function slideright() {
  const image = document.getElementById('scroller');
    image.style.left = '0%';
}

function slideleft() {
  const image = document.getElementById('scroller');
    image.style.left = '-100%';
}

function slideleft2() {
  const image = document.getElementById('teamScroll');
  
  // Check the current position and adjust accordingly
  const currentLeft = parseFloat(image.style.left) || 0; // Default to 0 if not set

  if (currentLeft === -197) {
    image.style.left = '-98%';
  } else if (currentLeft === -98) {
    image.style.left = '0%';
  } else if (currentLeft === 0) {
    image.style.left = '-197';
  }
}

function slideright2() {
  const image = document.getElementById('teamScroll');
  
  // Check the current position and adjust accordingly
  const currentLeft = parseFloat(image.style.left) || 0; // Default to 0 if not set

  if (currentLeft === 0) {
    image.style.left = '-98%';
  } else if (currentLeft === -98) {
    image.style.left = '-197%';
  } else if (currentLeft === -197) {
    image.style.left = '0%';
  }
}

function facebook(name) {

  switch(name) {
    case 'peejay':
      window.location.href='https://www.facebook.com/peejaykyutlang'
      break;
    case 'aizen':
      window.location.href='https://www.facebook.com/profile.php?id=100082914608922'
      break;
    case 'scarlet':
      window.location.href='https://www.facebook.com/scarlet.filomeno.54'
      break;
    case 'elaine':
      window.location.href='https://www.facebook.com/jacob09.elainecute'
      break;
    case 'aaron':
      window.location.href='https://www.facebook.com/AaronDejesus.11'
      break;   
    case 'ralph':
      window.location.href='https://www.facebook.com/Ralpheboysheesh'
      break; 
    case 'khemsy':
      window.location.href='https://www.facebook.com/rhazer.balilo'
      break; 
    case 'rome':
      window.location.href='https://www.facebook.com/profile.php?id=100058628446251'
      break; 
    case 'alwin':
      window.location.href='https://www.facebook.com/alwinkerby.bagsic'
      break; 
    case 'darell':
      window.location.href='https://www.facebook.com/DarellAntonioDeguzman23'
      break; 
  }
}