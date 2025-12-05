export type PortfolioItem = {
  name: string; // Name of the project
  type: string; // Type of project
  live: string; // Live URL for the project or GitHub if no live version exists
  code?: string; // URL to the code repository (optional)
  image: string; // Path or URL to the image
};

export const portfolioData = [
  {
    name: "Blog",
    type: "frontend",
    live: "https://next-blog-eta-puce.vercel.app/",
    image:
      "https://res.cloudinary.com/streed/image/upload/v1737607947/samples/blog.png",
  },
  {
    name: "Ticket Management",
    type: "frontend",
    live: "https://support-ticket-management.vercel.app/",
    image:
      "https://res.cloudinary.com/streed/image/upload/v1740031025/Screenshot_2025-02-20_at_11.53.01_AM_mude7m.png",
  },

  {
    name: "Ticket Booking",
    type: "frontend",
    live: "https://ticket-booking-2023.netlify.app/",
    image:
      "https://res.cloudinary.com/streed/image/upload/v1737607602/samples/booking_au5gbl.png",
  },
  {
    name: "Admin Deahboard",
    type: "frontend",
    live: "https://dashboard-web2023.netlify.app/",
    image:
      "https://res.cloudinary.com/streed/image/upload/v1737607601/samples/dashboard_qabsaw.png",
  },
  {
    name: "Social Media",
    type: "frontend",
    live: "https://social-media-2023.netlify.app/",
    image:
      "https://res.cloudinary.com/streed/image/upload/v1737607603/samples/socialmedia_q39xca.png",
  },
  {
    name: "Tmdb Movie Shower",
    type: "frontend",
    live: "https://tmdb-movie-opal.vercel.app/",
    image:
      "https://res.cloudinary.com/streed/image/upload/v1738112981/Screenshot_2025-01-29_at_7.09.23_AM_ps1ygg.png",
  },
  {
    name: "Product Show",
    type: "frontend",
    live: "https://tmdb-24.vercel.app",
    image:
      "https://res.cloudinary.com/streed/image/upload/v1738113553/Screenshot_2025-01-29_at_7.18.57_AM_yu6ee1.png",
  },
  {
    name: "Gym",
    type: "frontend",
    live: "https://gym-web-2023.netlify.app/",
    image:
      "https://res.cloudinary.com/streed/image/upload/v1737607602/samples/gym_yrnwoy.png",
  },
  {
    name: "Restaurant",
    type: "frontend",
    live: "https://restaurant-menu-bay.vercel.app/",
    image:
      "https://res.cloudinary.com/streed/image/upload/v1737607604/samples/restaurant_bjzoqg.png",
  },
  {
    name: "Pizza",
    type: "frontend",
    live: "https://food-ordering-dusky.vercel.app/",
    image:
      "https://res.cloudinary.com/streed/image/upload/v1738113771/Screenshot_2025-01-29_at_7.22.38_AM_zb4jho.png",
  },
  {
    name: "Grocery",
    type: "frontend",
    live: "https://grocery-frontend-three.vercel.app/",
    image:
      "https://res.cloudinary.com/streed/image/upload/v1737607603/samples/grocery_mweo1l.png",
  },
  {
    name: "Image Gallery",
    type: "frontend",
    live: "https://img-gallery-pink.vercel.app/",
    image:
      "https://res.cloudinary.com/streed/image/upload/v1737607602/samples/gallery_rgh8pm.png",
  },
  {
    name: "Netflix-clone",
    type: "frontend",
    live: "https://next-ntflix-clone.vercel.app/",
    image:
      "https://res.cloudinary.com/streed/image/upload/v1737607603/samples/netflix_mdmukd.png",
  },
  {
    name: "Todo App",
    type: "frontend",
    live: "https://notesomething.netlify.app/",
    image:
      "https://res.cloudinary.com/streed/image/upload/v1737607602/samples/todo_zb69sm.png",
  },
  {
    name: "Country Search",
    type: "frontend",
    live: "https://searchccountry.netlify.app/",
    image:
      "https://res.cloudinary.com/streed/image/upload/v1737607601/samples/countryapp_mwsx0j.png",
  },

  {
    name: "Store Api",
    type: "backend",
    live: "https://github.com/Talalmahmud/next-ntflix-clone.git",
    image:
      "https://res.cloudinary.com/streed/image/upload/v1737607602/samples/ecommerce_rhbdbi.webp",
  },
  {
    name: "Task Manager",
    type: "backend",
    live: "https://github.com/Talalmahmud/next-ntflix-clone.git",
    image:
      "https://res.cloudinary.com/streed/image/upload/v1737607602/samples/ecommerce_rhbdbi.webp",
  },
  // {
  //   name: "E-commerce",
  //   type: "backend",
  //   live: "https://dashboard-rho-sandy.vercel.app/",
  //   code: "https://github.com/Talalmahmud/ecommerce.git",
  //   image: "portfolioimages/ecommerce.webp",
  // },

  //   {
  //     name: "Chat Api",
  //     type: "mern",
  //     live: "https://github.com/Talalmahmud/next-ntflix-clone.git",
  //     code: "https://github.com/Talalmahmud/next-ntflix-clone.git",
  //     image: "../../../assets/chatapp.jpg",
  //   },
];
