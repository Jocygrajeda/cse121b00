// Your API endpoint from Wger Workout Manager API
const apiUrl = 'https://wger.de/api/v2/exercise/';

// Function to fetch exercise data from the API
function fetchExercises() {
    $.ajax({
        url: apiUrl,
        method: 'GET',
        success: function (data) {
            // Populate exercise options in the dropdown
            const exerciseSelect = document.getElementById('exercise');
            data.results.forEach(exercise => {
                const option = document.createElement('option');
                option.value = exercise.id;
                option.text = exercise.name;
                exerciseSelect.add(option);
            });
        },
        error: function (error) {
            console.error('Error fetching data:', error);
        }
    });
}

// Call the fetchExercises function when the page loads
fetchExercises();

// Function to log a workout
function logWorkout() {
    const selectedExercise = document.getElementById('exercise').value;
    const duration = document.getElementById('duration').value;

    // Perform actions to log the workout, update progress, etc.
    console.log('Exercise ID:', selectedExercise);
    console.log('Duration:', duration);
}

// Example code to create a simple line chart
const ctx = document.getElementById('fitnessChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5'],
        datasets: [{
            label: 'Workout Progress',
            data: [30, 45, 60, 75, 90], // Replace with your actual data
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 2,
            fill: false
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});