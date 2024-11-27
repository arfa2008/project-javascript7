
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
      description: "A web app that allows users to add and browse their favorite recipes. Built using HTML, CSS, with responsive design.",
      image: "Screenshot (11).png", 
      link: "https://fidalgo-restaurant.netlify.app/"
    },
    {
      title: "Resort design",
      description: "carsten offers a perfect blend of luxury and nature Escape, relax and designed for an unforgettable stay with responsive design.",
      image: "Screenshot (12).png", 
      link: "https://carsten-resort.netlify.app/"
    },
    {
      title: "shoe design",
      description: "All-birds offers a perfect blend of luxury and shoes with best collection for an unforgettable fit this design is madeup of complete bootstrap with responsive design.",
      image: "Screenshot (13).png", 
      link: "https://all-birds-shoe-website.netlify.app"
    },
    {
      title: "jio cinema",
      description: "A Jio Cinema clone is a video streaming app offering movies, shows, and web series on demand. It replicates features like user login, video categories, and recommendations.",
      image: "Screenshot (14).png", 
      link: "https://jio-cinema-clone.netlify.app/"
    },
    {
      title: "Buisness solution",
      description: "Arsha is a modern, responsive website template designed for corporate businesses. It features customizable sections for services, portfolios, and team members.",
      image: "Screenshot (15).png", 
      link: "https://arsha-website-templates.netlify.app/"
    },
    {
      title: "Nooni design",
      description: "Nooni is a sleek, modern website template for exploring products and services. It features easy navigation, product filters, and detailed descriptions.",
      image: "Screenshot (16).png", 
      link: "https://nooni-explore-your-choice.netlify.app/ "
    },
    {
      title: "search engine",
      description: "The Search Engine project is a web application that enables efficient information searching with filters and categories. It features a user-friendly interface.",
      image: "Screenshot (17).png", 
      link: "https://searchengine-js.netlify.app"
    },
    {
      title: "receipe app",
      description:"This recipe app lets users explore, save, and personalize their favorite recipes. It features a user-friendly interface for easy navigation and meal planning.",
      image: "Screenshot (18).png", 
      link: "https://reciepeproject-js.netlify.app"
    }
  ];
  
  // Function to generate project cards
  function generateProjectCards() {
    const projectsRow = document.getElementById('projects-row');
  
    projects.forEach(project => {
      const projectCard = `
        <div class="col-md-4">
          <div class="card project-card">
            <img src="${project.image}" class="card-img-top" alt="${project.title}">
            <div class="card-body">
              <h5 class="card-title">${project.title}</h5>
              <p class="card-text">${project.description}</p>
              <a href="${project.link}" class="btn btn-primary" target="_blank">View Project</a>
            </div>
          </div>
        </div>
      `;
  
      // Insert the generated card into the projects row
      projectsRow.innerHTML += projectCard;
    });
  }
  
  // Call the function to generate the project cards when the page loads
  window.onload = generateProjectCards;
  