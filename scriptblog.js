// script.js
document.addEventListener('DOMContentLoaded', function () {
    const posts = [
        {
            title: "Why Learn Mathematics?",
            summary: "Mathematics enhances problem-solving skills and opens doors to various careers."
        },
        {
            title: "The Beauty of Numbers",
            summary: "Understanding the patterns in numbers can change how we perceive the world."
        }
    ];

    const postsContainer = document.getElementById('blog-posts');

    posts.forEach(post => {
        const postDiv = document.createElement('div');
        postDiv.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.summary}</p>
        `;
        postsContainer.appendChild(postDiv);
    });
});
