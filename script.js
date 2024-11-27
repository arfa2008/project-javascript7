// Sample data: You can replace this with your actual projects
const projects = [
    {
        title: "Animado design",
        description: "Animado website built using HTML, CSS, and Bootstrap. It showcases my skills and projects with responsive designs.",
        image: "Screenshot (9).png", // Replace with actual image paths
        link: "https://animado-arfa.netlify.app/" // Replace with actual links
    },
    {
        title: "Restaurant website",
        description: "Fidalgo Restaurant is a beautifully designed web application that allows users to explore, add, and browse their favorite recipes. Built with HTML, CSS, and responsive design principles, it offers a user-friendly experience for food enthusiasts looking to discover and save delicious meal ideas.",
        image: "Screenshot (11).png",
        link: "https://fidalgo-restaurant.netlify.app/"
    },
    {
        title: "Resort design",
        description: "Carsten Resort is a luxurious web application designed to showcase a perfect blend of nature and comfort. With a responsive layout, it provides users with an immersive experience to explore resort amenities and book their dream getaway.",
        image: "Screenshot (12).png",
        link: "https://carsten-resort.netlify.app/"
    },
    {
        title: "Shoe design",
        description: "All-birds offers a perfect blend of luxury and shoes with the best collection for an unforgettable fit. This design is made up of complete Bootstrap with responsive design.",
        image: "Screenshot (13).png",
        link: "https://all-birds-shoe-website.netlify.app"
    },
    {
        title: "Jio Cinema",
        description: "A Jio Cinema clone is a video streaming app offering movies, shows, and web series on demand. It replicates features like user login, video categories, and recommendations.",
        image: "Screenshot (14).png",
        link: "https://jio-cinema-clone.netlify.app/"
    },
    {
        title: "Business solution",
        description: "Arsha is a modern, responsive website template designed for corporate businesses. It features customizable sections for services, portfolios, and team members.",
        image: "Screenshot (15).png",
        link: "https://arsha-website-templates.netlify.app/"
    },
    {
        title: "Nooni design",
        description: "Nooni is a sleek, modern website template for exploring products and services. It features easy navigation, product filters, and detailed descriptions.",
        image: "Screenshot (16).png",
        link: "https://nooni-explore-your-choice.netlify.app/"
    },
    {
        title: "Search engine",
        description: "The Search Engine project is a web application that enables efficient information searching with filters and categories. It features a user-friendly interface.",
        image: "Screenshot (17).png",
        link: "https://searchengine-js.netlify.app"
    },
    {
        title: "Recipe app",
        description: "This recipe app lets users explore, save, and personalize their favorite recipes. It features a user-friendly interface for easy navigation and meal planning.",
        image: "Screenshot (18).png",
        link: "https://reciepeproject-js.netlify.app"
    }
];

// Function to generate project cards
function generateProjectCards() {
    const projectsRow = document.getElementById('projects-row');

    projects.forEach(project => {
        const projectCard = `
            <div class="project">
                <img src="${project.image}" alt="${project.title}">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <a href="${project.link}" class="view-project-btn" target="_blank">View Project</a>
            </div>
        `;

        // Insert the generated card into the projects row
        projectsRow.innerHTML += projectCard;
    });
}

// Call the function to generate the project cards when the page loads
window.onload = generateProjectCards;

// Function to scroll to a section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}
