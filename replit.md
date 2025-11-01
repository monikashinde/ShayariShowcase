# Dil ke Alfaaz - Bilingual Shayari Poetry Showcase

## Overview

Dil ke Alfaaz ("Words of the Heart") is a simple, elegant bilingual poetry showcase website that presents original shayari (Urdu/Hindi poetry) by Monika. The site features interactive flip cards that allow users to toggle between Hindi (Devanagari script) and English versions of each poem. Built with vanilla HTML, CSS, and JavaScript, the project emphasizes literary elegance, generous whitespace, and a warm brown/cornsilk color palette inspired by traditional poetry presentation.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Technology Stack:**
- Pure HTML5 for semantic structure
- CSS3 for styling and animations
- Vanilla JavaScript (ES6+) for interactivity
- No frameworks or build tools required

**File Structure:**
- `public/index.html` - Main HTML file containing all page structure
- `public/styles.css` - All styling including animations and responsive design
- `public/script.js` - JavaScript for navigation and dynamic card rendering
- `public/shayari.json` - Poetry data in JSON format

**Design System:**
- Custom CSS variables for warm brown/cornsilk color scheme
- Typography: Playfair Display (serif headers), Lato (body), Noto Sans Devanagari (Hindi script)
- Responsive grid layout using CSS Grid (adapts from 1 to 3 columns)
- CSS 3D transforms for card flip animations

**Page Structure:**
- Home page with hero section and about section
- Collection page with grid of poetry cards
- Hash-based navigation (#home, #collection)
- Sticky navigation header
- Footer with author attribution

**Interactive Features:**
- Click-to-flip cards showing Hindi on front, English on back
- Smooth 3D flip animation using CSS transforms
- Hash-based page navigation (no page reload)
- Responsive design for mobile, tablet, and desktop

### Backend Architecture

**Server Framework:**
- Express.js serving static files from `public/` directory
- Node.js runtime with ES modules (type: "module")
- Simple static file server with fallback to index.html

**Data Format:**
- `shayari.json` contains array of poetry objects
- Each object has: id, hindiTitle, hindiText, englishTitle, englishText, date
- Data fetched client-side via JavaScript Fetch API

**Schema Design:**
```typescript
Shayari {
  id: string
  hindiTitle: string
  hindiText: string
  englishTitle: string
  englishText: string
  date: string
}
```

### Development Workflow

**Running the Application:**
- `npm run dev` - Starts Express server serving static files on port 5000
- Server runs via `tsx server/index.ts`
- No build process required - pure static files

**File Serving:**
- All files served directly from `public/` directory
- Server provides fallback to index.html for hash routing
- shayari.json fetched via HTTP request from public folder

### Design Features

**Color Palette (Warm Brown/Cornsilk):**
- Background: #fefef9 (light cornsilk)
- Card: #ffffff (white)
- Primary: #8b5a3c (warm brown)
- Accent: #d4a574 (golden brown)
- Border: #e8d5c4 (light tan)

**Typography:**
- Headings: Playfair Display (serif)
- Body text: Lato (sans-serif)
- Hindi text: Noto Sans Devanagari

**Responsive Breakpoints:**
- Mobile: < 480px (single column)
- Tablet: 481-768px (single column)
- Desktop: > 768px (up to 3 columns)

## Recent Changes (November 2024)

Converted from React-based SPA to simple HTML/CSS/JS website:
- Removed React, Vite build process, and all frontend dependencies
- Created vanilla HTML/CSS/JS implementation in `public/` folder
- Simplified server to only serve static files
- Maintained all original design, features, and functionality
- Improved simplicity and reduced complexity