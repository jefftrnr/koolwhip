# Kool Whip Band Website

## Overview

This is a full-stack web application for the rock band "Kool Whip" from Marin County, CA built with React, Express, and PostgreSQL database. The site features a clean, professional rock aesthetic optimized for iOS/mobile, providing band information, show listings, music streaming, booking requests, integrated social feed system, and admin area for band management.

## User Preferences

Preferred communication style: Simple, everyday language.
Design preference: Darker, cleaner theme suitable for rock band - not cutesy
Mobile optimization: Must be clean and professional for iOS users
Geographic focus: Marin County, North of San Francisco
Contact email: mcdaniel-family@att.net (for all booking and inquiries)
Contact phone: 1 (415) 259 1828

## System Architecture

### Frontend Architecture
- **React 18** with TypeScript for the client-side application
- **Vite** as the build tool and development server
- **TailwindCSS** for styling with custom design tokens
- **Wouter** for client-side routing (lightweight React Router alternative)
- **TanStack Query** for server state management and API caching
- **Shadcn/ui** component library with Radix UI primitives
- **Custom CSS variables** for the band's rock color palette (dark background, charcoal, steel gray, rust orange, electric orange, neon green, blood red, silver)

### Backend Architecture
- **Express.js** server with TypeScript
- **RESTful API** design with endpoints for contact forms, email subscriptions, and booking requests
- **Middleware stack** includes JSON parsing, URL encoding, and request logging
- **Error handling** with structured error responses

### Data Storage Solutions
- **PostgreSQL** database with Drizzle ORM
- **Neon Database** as the cloud PostgreSQL provider
- **Database schema** includes tables for users, email subscribers, contact submissions, booking requests, and shows
- **Type-safe database operations** using Drizzle with Zod validation

## Key Components

### Pages Structure
- **Home**: Hero section with call-to-actions, fan quotes, upcoming shows preview, social feed
- **About**: Band story, achievements, timeline
- **Band Members**: Individual profiles with photos and quotes
- **Music**: Featured tracks, streaming platform links, album artwork
- **Shows**: Complete listing of upcoming performances with venue details
- **Social**: Integrated social feed with Instagram-like posts from band members
- **Booking**: Professional booking request form with detailed event information
- **Contact**: General contact form and social media links
- **Admin**: Band member management interface for creating posts and managing content

### UI Components
- **Navigation**: Fixed header with mobile-responsive menu
- **Footer**: Social media links and band branding
- **Forms**: Email signup modal, contact form, booking request form
- **Layout Components**: Hero sections, quote displays, Instagram feed integration

### API Endpoints
- `POST /api/subscribe` - Email newsletter subscription
- `POST /api/contact` - General contact form submission
- `POST /api/booking` - Booking request submission
- `GET /api/shows` - Retrieve upcoming shows
- `GET /api/social-posts` - Retrieve social feed posts
- `POST /api/social-posts` - Create new social post (admin)
- `PUT /api/social-posts/:id` - Update social post (admin)
- `DELETE /api/social-posts/:id` - Delete social post (admin)
- `GET /api/band-members` - Retrieve band member profiles
- `POST /api/band-members` - Create band member (admin)

## Data Flow

1. **Client Requests**: React components make API calls using TanStack Query
2. **Server Processing**: Express routes handle requests with Zod validation
3. **Database Operations**: Drizzle ORM performs type-safe database operations
4. **Response Handling**: Structured JSON responses with error handling
5. **State Management**: TanStack Query manages caching and synchronization

## External Dependencies

### Third-Party Services
- **Unsplash** for placeholder images (band photos, venue shots, album artwork)
- **Google Fonts** (Fredoka One for headers, Inter for body text)
- **Social Media Platforms** (Instagram, Facebook, YouTube, Spotify)

### UI Libraries
- **Radix UI** primitives for accessible components
- **Lucide React** for icons
- **Class Variance Authority** for component variants
- **React Hook Form** with Hookform Resolvers for form management

### Development Tools
- **ESBuild** for server-side bundling
- **PostCSS** with Autoprefixer for CSS processing
- **Replit-specific** plugins for development environment integration

## Deployment Strategy

### Build Process
1. **Client Build**: Vite builds the React application to `dist/public`
2. **Server Build**: ESBuild bundles the Express server to `dist/index.js`
3. **Database Migration**: Drizzle Kit handles schema migrations

### Environment Configuration
- **Development**: `NODE_ENV=development` with hot reloading via Vite
- **Production**: `NODE_ENV=production` with static file serving
- **Database**: `DATABASE_URL` environment variable for PostgreSQL connection

### Hosting Considerations
- **Static Assets**: Client build files served from `dist/public`
- **API Routes**: Express server handles all `/api/*` requests
- **Database**: Cloud-hosted PostgreSQL via Neon Database
- **CDN**: Images and assets can be served via CDN for better performance

## Recent Changes (July 19, 2025)

### Social Feed Integration
- Built complete social feed system with Instagram-like interface
- Added PostgreSQL database with tables for band members, social posts, reactions, and comments
- Created admin interface for band members to create and manage posts
- Integrated social feed into home page replacing static Instagram section
- Added new `/social` page for full social feed experience
- Added new `/admin` page for content management

### Professional UI Enhancement (July 19, 2025)
- Upgraded color palette with deeper reds and warmer tones for better visual appeal
- Implemented sophisticated glass morphism effects throughout the site
- Added premium glow effects and professional hover animations
- Enhanced navigation with backdrop blur and improved spacing
- Upgraded button styling with gradients and modern transitions
- Improved card layouts with better shadows and visual depth

### Live Performance Focus (July 19, 2025)
- Redesigned music page to emphasize live performances over streaming
- Removed Spotify and Apple Music references since they're primarily a live band
- Added focus on YouTube live videos and SoundCloud recordings
- Enhanced call-to-action sections directing users to live shows

### Content Organization (July 19, 2025)
- Moved band group photo from band members page to about page for better context
- Removed duplicate band photo from band members section
- Enhanced admin interface messaging for band member posting capabilities
- Improved layout hierarchy and content flow across pages

### Logo Integration (July 19, 2025)
- Incorporated official Kool Whip pin-up style logo into navigation and hero sections
- Updated color palette to match logo's red and cream aesthetic
- Enhanced brand consistency throughout the website
- Added hover animations and scaling effects for logo elements

### Authentic Content Integration (July 19, 2025)
- Replaced placeholder images with real band photos from actual performances
- Added authentic live performance photo from Big Rock venue as hero background
- Integrated real band member group photo throughout the site
- Fixed image path issues to ensure proper loading of all assets
- Created social media posts using actual band content and performance photos

### Premium Design Transformation (August 19, 2025)
- Completely redesigned homepage with luxury aesthetic and professional polish
- Implemented advanced glassmorphism effects with premium-glass styling
- Added sophisticated text shadows, luxury shadows, and professional gradients
- Enhanced hero section with larger logo, improved typography, and better spacing
- Upgraded buttons with shimmer effects, better animations, and premium styling
- Transformed all cards and sections with professional spacing and advanced visual effects
- Added subtle overlay to hero background for better text contrast
- Elevated overall design from basic to high-end professional appearance

### Ultra-Minimal Luxury Redesign (August 21, 2025)
- Implemented professional band website techniques based on industry research
- Complete transformation to ultra-minimal, sophisticated aesthetic matching high-end artists
- **Typography Revolution**: Luxury typography with extreme letter spacing, light weights, and cinematic text styling
- **Minimal Hero Design**: Stripped-down logo presentation, ultra-wide character spacing, elegant status indicators
- **Sophisticated Color Palette**: Deep blacks, elegant monochrome gradients, strategic rust-orange accents
- **Professional Navigation**: Minimalist button styling with subtle border animations and refined hover states
- **List-Based Layouts**: Clean, data-driven show listings and navigation sections replacing card-heavy designs
- **Cinematic Backgrounds**: Advanced parallax effects and atmospheric gradients
- **Refined Animations**: Subtle, professional micro-interactions with sophisticated easing curves
- **Industry Standards**: Implementing techniques used by top-tier music artists and luxury brands

### Comprehensive Gallery Integration (August 21, 2025)
- **Professional Gallery Page**: Ultra-minimal luxury design with photo filtering system (Live, Band, Venues, Artwork)
- **Expanded Photo Collection**: Added 16 authentic performance photos from various venues and contexts
- **Lightbox Modal**: Sophisticated full-size photo viewing with elegant close animations
- **Homepage Logo Enhancement**: Optimized logo size (w-48 to lg:w-96) and removed redundant text branding
- **Photo Integration**: Spread authentic performance photos throughout site sections (shows, music, about pages)
- **Venue Diversity**: Photos showcase indoor venues (brick walls), outdoor festivals, covered stages, holiday performances
- **Professional Grid Layout**: Responsive photo grid with sophisticated hover animations and staggered load animations

### Mobile Optimization (August 21, 2025)
- **Responsive Logo Sizing**: Hero logo scales from w-48 on mobile to lg:w-96 on desktop for optimal viewing
- **Mobile Navigation**: Improved responsive navigation with smaller logo and better spacing on mobile devices
- **Responsive Spacing**: Updated padding and margins to be mobile-first with proper breakpoints (px-4 sm:px-6 lg:px-8)
- **Typography Scaling**: Text sizes scale appropriately across devices with sm: and lg: breakpoints
- **Touch-Friendly Interface**: Optimized button sizes and interactive elements for mobile touch interfaces
- **Container Optimization**: Consistent responsive container spacing across all pages for better mobile experience

### Gallery Video Support and Path Fixes (October 23, 2025)
- **Video Integration**: Added full video support to gallery with play icon overlay and lightbox playback
- **Path Repairs**: Fixed 8 broken photo paths by replacing with actual photos from attached_assets folder
- **Sequential IDs**: Renumbered all gallery items 1-36 to resolve React duplicate key warnings
- **Consistent Data Attributes**: Standardized data-testid pattern across all gallery items (photos and videos)
- **Gallery Composition**: 36 total items (35 photos + 1 video clip) all loading successfully
- **Video Features**: HTML5 video with autoplay in lightbox, muted preview, playback controls
- **Video Brightness Enhancement**: Applied brightness(1.1) and contrast(1.05) filters to video thumbnail for better visibility and visual parity with photo thumbnails

### Gallery Photo Restoration (October 24, 2025)
- **Photo Recovery**: Restored 4 previously replaced photos to gallery (IMG_5833, IMG_1885, IMG_9233, IMG_9232)
- **Gallery Expansion**: Gallery expanded from 36 to 41 total items (40 photos + 1 video)
- **Complete Collection**: All 8 user-requested photos confirmed present and loading correctly
- **Verified Functionality**: Automated testing confirms all photos display properly with lightbox functionality
- **Gallery Reorganization**: Moved all 8 requested photos to middle section (IDs 17-24) for better prominence and grouping
- **New Photo Addition**: Added IMG_1079_1759954397488_1761266688681.jpeg to upper section at position 8

The application follows a monorepo structure with shared types and schemas, ensuring type safety across the full stack while maintaining the clean, professional rock aesthetic optimized for mobile users.