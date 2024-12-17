fetch("./data/blogs.json")
    .then(response => {
        if (!response.ok) throw new Error("Failed to load blog data.");
        return response.json();
    })
    .then(blogs => {
        let blogCards = ''; // Temporary variable to store all cards
        blogs.forEach(blog => {
            blogCards += `
                <div class="col-md-4 mb-4">
                    <div class="card h-100 shadow-sm">
                        <div class="card-body">
                            <h5 class="card-title">${blog.title}</h5>
                            <p class="card-text text-muted">${blog.date}</p>
                            <p class="card-text">${blog.excerpt}</p>
                            <a href="${blog.link}" class="btn btn-primary">Read More</a>
                        </div>
                    </div>
                </div>
            `;
        });
        blogContainer.innerHTML = blogCards; // Assign all at once
    })
    .catch(error => {
        blogContainer.innerHTML = `<p class="text-danger">Error: ${error.message}</p>`;
    });
