// No longer need animated counters, but can add simple card fade-in

// University Search Tool Demo (replace with real data/API later)
const demoUniversities = [
  { name: "Boston University", minGPA: 3.0, budget: 35000, major: "Computer Science" },
  { name: "University of Texas", minGPA: 2.5, budget: 25000, major: "Engineering" },
  { name: "University of Florida", minGPA: 2.7, budget: 20000, major: "Business" },
  { name: "San Jose State University", minGPA: 2.8, budget: 18000, major: "Computer Science" },
  { name: "Pace University", minGPA: 2.5, budget: 21000, major: "Other" }
];

const searchForm = document.getElementById('searchForm');
if (searchForm) {
  searchForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const gpa = parseFloat(document.getElementById('gpa').value);
    const budget = parseInt(document.getElementById('budget').value, 10);
    const major = document.getElementById('major').value;
    const matches = demoUniversities.filter(u =>
      gpa >= u.minGPA &&
      budget >= u.budget &&
      (u.major === major || major === "Other")
    );
    let html = "";
    if (matches.length) {
      html = `<div class="alert alert-success"><strong>Matching Universities:</strong><ul>`;
      matches.forEach(u => {
        html += `<li>${u.name} <span class="badge bg-gold text-dark">${u.major}</span></li>`;
      });
      html += `</ul></div>
      <a href="contact.html" class="btn btn-gold mt-2">Want a detailed shortlist? Book a free consultation &rarr;</a>`;
    } else {
      html = `<div class="alert alert-warning">No matches found. Try adjusting your GPA or budget, or <a href="contact.html">contact us</a> for personalized advice.</div>`;
    }
    document.getElementById('searchResults').innerHTML = html;
  });
}
