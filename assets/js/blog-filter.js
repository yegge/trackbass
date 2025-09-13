document.addEventListener('DOMContentLoaded', () => {
  // Example: Filter blog posts by category and draft status
  const posts = document.querySelectorAll('.blog-post');
  posts.forEach(post => {
    const category = post.dataset.category;
    const isDraft = post.dataset.draft === 'true';
    if (isDraft) post.style.display = 'none';
    // Add category filtering logic
  });
});