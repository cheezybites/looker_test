// main.js

// Data Studio Community Visualizations API
const dscc = require('@google/dscc');

// Function to create and render a refresh button
function drawViz() {
  const container = document.getElementById('viz-container');

  // Clear existing content (if any)
  container.innerHTML = '';

  // Create the refresh button element
  const button = document.createElement('button');
  button.innerHTML = 'Refresh Data';
  button.style.padding = '10px';
  button.style.backgroundColor = '#4CAF50';
  button.style.color = 'white';
  button.style.border = 'none';
  button.style.cursor = 'pointer';

  // Append the button to the container
  container.appendChild(button);

  // Add the click event listener to refresh the visualization
  button.addEventListener('click', function () {
    // Trigger Looker Studio's built-in refresh mechanism
    location.reload(); // Refresh the page to load new data
  });
}

// Subscribe to data changes (in case data changes and you need to re-render)
dscc.subscribeToData(drawViz);
