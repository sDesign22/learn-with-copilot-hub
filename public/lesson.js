// 🧠 lesson.js: Load lesson details based on ?id= from URL

// 1️⃣ Grab the lesson ID from the URL (e.g., lesson.html?id=2)
const params = new URLSearchParams(window.location.search);
const lessonId = parseInt(params.get('id'));

// 2️⃣ Fetch the lessons JSON
fetch('data/lessons.json')
  .then(res => res.json())
  .then(lessons => {
    const lesson = lessons.find(l => l.id === lessonId);
    const container = document.getElementById('lesson-container');

    // 3️⃣ Handle missing lesson
    if (!lesson) {
      container.innerHTML = "<p>Lesson not found.</p>";
      return;
    }

    // 4️⃣ Render lesson details into the page
    container.innerHTML = `
      <h2>${lesson.title}</h2>
      <p><strong>Category:</strong> ${lesson.category}</p>
      <p>${lesson.content || lesson.summary}</p>
      ${lesson.link ? `<p><a href="${lesson.link}" target="_blank">More resources</a></p>` : ""}
    `;
  })
  .catch(err => {
    console.error('Error loading lesson:', err);
    document.getElementById('lesson-container').innerHTML = "<p>Error loading lesson.</p>";
  });
