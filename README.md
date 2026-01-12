# Freelance Devs - React Website

A modern, responsive website for a freelance development company built with React.

## Features

- 🏠 **Home Page** - Hero section with stats, services overview, why choose us, and testimonials
- 💼 **Services Page** - Detailed service offerings and features
- 📂 **Portfolio Page** - Showcase of completed projects
- 📧 **Contact Page** - Contact form, information, and FAQ section
- 📱 **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- 🎨 **Modern UI** - Clean design with orange and blue color scheme

## Tech Stack

- React 18
- React Router DOM 6
- CSS3 with Flexbox/Grid
- Google Fonts (Inter)

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd sgptl
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open your browser and visit:
```
http://localhost:3000
```

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (one-way operation)

## Project Structure

```
sgptl/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar/
│   │   ├── Footer/
│   │   ├── Hero/
│   │   ├── ServicesSection/
│   │   ├── WhyChooseUs/
│   │   └── Testimonials/
│   ├── pages/
│   │   ├── Home/
│   │   ├── Services/
│   │   ├── Portfolio/
│   │   └── Contact/
│   ├── App.js
│   ├── index.js
│   └── index.css
└── package.json
```

## Customization

### Images

Currently, the website uses placeholder images from Unsplash. To use your own images:

1. Add your images to `public/images/` directory
2. Update image URLs in the components:
   - Hero section: `src/components/Hero/Hero.js`
   - Services page: `src/pages/Services/Services.js`
   - Portfolio page: `src/pages/Portfolio/Portfolio.js`
   - Contact page: `src/pages/Contact/Contact.js`

### Colors

The main color scheme uses:
- Primary Orange: `#ff6b35`
- Dark Blue: `#2c2c54`
- Light Gray: `#f8f9fa`

To change colors, update the CSS files in each component directory.

### Content

Update the text content in each component file:
- Company name and logo in `Navbar.js` and `Footer.js`
- Service descriptions in `ServicesSection.js` and `Services.js`
- Project information in `Portfolio.js`
- Contact information in `Contact.js`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available for personal and commercial use.

## Contact

For questions or support, please contact us through the website contact form.
