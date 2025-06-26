// 📚 script.js: Loads lessons onto the homepage dynamically

// Fetch the list of lessons from the JSON data file
fetch('data/lessons.json')
  .then(res => res.json())
  .then(lessons => {
    const container = document.getElementById('lesson-list');

    // Loop through each lesson and create a card
    container.innerHTML = lessons.map(lesson => `
      <div class="lesson-card">
        <h3>${lesson.title}</h3>
        <p>${lesson.summary}</p>
        <a href="lesson.html?id=${lesson.id}">View Lesson →</a>
      </div>
    `).join('');
  })
  .catch(error => {
    console.error('Error loading lessons:', error);
    document.getElementById('lesson-list').innerHTML = "<p>Error loading lessons.</p>";
  });
