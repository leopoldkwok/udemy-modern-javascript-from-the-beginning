const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

// Click
//clearBtn.addEventListener('click', runEvent);
// Doubleclick
//clearBtn.addEventListener('dblclick', runEvent);

// Mousedown
//clearBtn.addEventListener('mousedown', runEvent);

// MouseUp
//clearBtn.addEventListener('mouseup', runEvent);

// Mouse Enter
// card.addEventListener('mouseenter', runEvent);
// // Mouse Leave
// card.addEventListener('mouseleave', runEvent);
// // Mouse Leave
// card.addEventListener('mouseover', runEvent);
// // Mouse Leave
// card.addEventListener('mouseout', runEvent);

// Mouse move
card.addEventListener('mousemove', runEvent);

// Event Handler
function runEvent(e) {
  console.log(`EVENT TYPE: ${e.type}`);

  heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;

  document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
}