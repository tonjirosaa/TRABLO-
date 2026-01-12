function getCardType(titleLength) {
    if (titleLength >= 0 && titleLength <= 20) {
        return 'card-small-square';
    } else if (titleLength >= 21 && titleLength <= 40) {
        return 'card-small-rect';
    } else if (titleLength >= 41 && titleLength <= 60) {
        return 'card-medium-square';
    } else if (titleLength >= 61 && titleLength <= 80) {
        return 'card-medium-rect';
    } else {
        return 'card-large-rect';
    }
}

// Function to create a blog card dynamically
function createBlogCard(post) {
    const card = document.createElement('div');
    const cardType = getCardType(post.title.length);
    card.className = `card ${cardType}`;
    
    card.innerHTML = `
        <div class="card-image-container">
            <img src="${post.image}" alt="${post.title}" class="card-image">
        </div>
        <div class="card-content">
            <div class="card-header">
                <span class="category-tag">${post.category}</span>
                <h3 class="card-title">${post.title}</h3>
            </div>
            <p class="card-excerpt">${post.excerpt}</p>
            <div class="card-footer">
                <span class="card-meta">📅 ${post.date}</span>
                <a href="#" class="read-more">Read more →</a>
            </div>
        </div>
    `;
    
    return card;
}

// Sample blog posts with varying title lengths
const blogPosts = [
    {
        title: "Design Tips", // 11 chars - Small Square
        excerpt: "Quick tips to improve your design skills and create stunning visuals.",
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
        category: "Design",
        date: "Jan 7, 2026"
    },
    {
        title: "The Ultimate Guide to Photography", // 35 chars - Small Rectangle
        excerpt: "Master the art of photography with these comprehensive tips and techniques.",
        image: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=800&h=600&fit=crop",
        category: "Photography",
        date: "Jan 6, 2026"
    },
    {
        title: "Exploring the Hidden Gems of Southeast Asian Cuisine", // 53 chars - Medium Square
        excerpt: "Dive into the rich flavors and diverse culinary traditions that make Southeast Asian food truly exceptional. From street food to fine dining, discover the stories behind the dishes.",
        image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=600&fit=crop",
        category: "Food",
        date: "Jan 5, 2026"
    },
    {
        title: "How Modern Technology is Revolutionizing Healthcare and Medicine Today", // 72 chars - Medium Rectangle
        excerpt: "Discover the groundbreaking innovations transforming patient care, from AI diagnostics to telemedicine. The future of healthcare is here, and it's changing lives every day.",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
        category: "Tech",
        date: "Jan 4, 2026"
    },
    {
        title: "The Complete Beginner's Journey to Understanding Climate Change, Sustainability, and Environmental Conservation", // 110 chars - Large Rectangle
        excerpt: "An in-depth exploration of climate science, sustainable practices, and how individuals can make a meaningful impact. Learn about renewable energy, carbon footprints, and the global movement toward a greener future. This comprehensive guide covers everything from basic concepts to advanced strategies.",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
        category: "Environment",
        date: "Jan 3, 2026"
    },
    {
        title: "Coffee", // 6 chars - Small Square
        excerpt: "The perfect morning brew.",
        image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800&h=600&fit=crop",
        category: "Food",
        date: "Jan 2, 2026"
    },
    {
        title: "Minimalism in Modern Living", // 28 chars - Small Rectangle
        excerpt: "Embrace simplicity and find peace in a clutter-free lifestyle.",
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=600&fit=crop",
        category: "Lifestyle",
        date: "Jan 1, 2026"
    },
    {
        title: "The Science Behind Sleep and How It Affects Your Health", // 56 chars - Medium Square
        excerpt: "Understanding sleep cycles, REM stages, and why quality rest is crucial for mental and physical wellbeing. Learn practical tips to improve your sleep quality tonight.",
        image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=800&h=600&fit=crop",
        category: "Wellness",
        date: "Dec 31, 2025"
    },
    {
        title: "AI Revolution", // 14 chars - Small Square
        excerpt: "Artificial intelligence is reshaping our world.",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
        category: "Tech",
        date: "Dec 30, 2025"
    },
    {
        title: "Mastering the Art of Street Photography in Urban Environments", // 62 chars - Medium Rectangle
        excerpt: "Learn composition techniques, timing, and storytelling through candid moments captured in bustling city streets. From camera settings to legal considerations.",
        image: "https://images.unsplash.com/photo-1474649107449-ea4f014b7e9f?w=800&h=600&fit=crop",
        category: "Photography",
        date: "Dec 29, 2025"
    },
    {
        title: "Fitness Journey: From Beginner to Marathon Runner in 365 Days", // 63 chars - Medium Rectangle
        excerpt: "A personal account of transformation, dedication, and the science of endurance training. Follow the weekly progression and learn from mistakes.",
        image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&h=600&fit=crop",
        category: "Fitness",
        date: "Dec 28, 2025"
    },
    {
        title: "Cooking Basics for Students and Young Professionals Living Independently", // 73 chars - Medium Rectangle
        excerpt: "Essential recipes, kitchen tools, and time-saving techniques for busy individuals who want to eat healthy without breaking the bank or spending hours in the kitchen.",
        image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&h=600&fit=crop",
        category: "Food",
        date: "Dec 27, 2025"
    }
];

// Initialize and render all blog cards with smart ordering
function initializeBlog() {
    const grid = document.getElementById('blogGrid');
    
    // Sort posts by title length (longest first for priority placement)
    const sortedPosts = [...blogPosts].sort((a, b) => b.title.length - a.title.length);
    
    sortedPosts.forEach(post => {
        const card = createBlogCard(post);
        grid.appendChild(card);
    });
}

// PUBLIC API: Function to add new blog post dynamically
function addNewBlogPost(title, excerpt, image, category, date) {
    const newPost = { title, excerpt, image, category, date };
    const grid = document.getElementById('blogGrid');
    const card = createBlogCard(newPost);
    grid.appendChild(card);
    
    console.log(`New blog added: "${title}" (${title.length} chars) - Card type: ${getCardType(title.length)}`);
}

// Initialize the blog on page load
initializeBlog();

// Example: How to add a new blog post dynamically
// addNewBlogPost(
//     "Your New Blog Title Here",
//     "Your excerpt content...",
//     "https://images.unsplash.com/photo-xyz",
//     "Category",
//     "Jan 7, 2026"
// );