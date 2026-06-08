# 🎨 Shabeeha's Professional Portfolio

A modern, premium, and fully responsive personal portfolio website showcasing the work of **Shabeeha**, a talented Software Engineer specializing in MERN Stack development and AI solutions.

![Portfolio](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=for-the-badge&logo=tailwind-css)

## ✨ Features

### 🎯 Premium User Interface
- **Professional Loading Screen** with animated spinner
- **Scroll Progress Bar** at the top showing page scroll position
- **Sticky Navigation** with smooth scrolling and hover effects
- **Dark/Light Mode Toggle** with smooth transitions
- **Glassmorphism Design** throughout with blurred cards and soft shadows
- **Section Dividers** with gradient lines for visual separation
- **Scroll to Top Button** (FAB) that appears after scrolling down
- **Responsive Mobile Menu** with staggered animations

### 📱 Fully Responsive Design
- Mobile-first approach
- Perfect on all screen sizes (mobile, tablet, desktop)
- Touch-optimized buttons and interactions
- Enhanced mobile spacing and typography
- Minimum 48px touch targets for accessibility

### 🎭 Advanced Animations
- **Framer Motion** powered animations
- Fade-in effects on scroll
- Scale, rotate, and translate hover effects
- Staggered list animations
- Loading screen transitions
- Smooth page transitions
- Badge pulse animations
- Shine effects on hover

### 🎨 Design Elements
- **Blue & White Gradient Theme** with purple accents
- **Animated Gradient Background** in hero section
- **Floating Icons** (Code, Database, CPU) with bounce animations
- **Section Badges** with subtle animations
- **Gradient Text** for emphasis
- **Premium Typography** with proper hierarchy
- **Custom Scrollbar** with gradient styling

## 📂 Structure

### Sections

#### 1. **Hero Section**
- Full-screen landing with animated gradient background
- Large greeting: "Hi, I'm Shabeeha"
- Professional title and tagline
- Two CTA buttons: "View Projects" and "Contact Me"
- Floating animated tech icons
- Smooth scroll indicator

#### 2. **About Section**
- Professional summary
- Key highlights in animated cards:
  - MERN stack expertise
  - AI/ML with 95% accuracy
  - Problem-solving skills
  - Agile teamwork

#### 3. **Projects Section** (3-Column Grid)
Two featured projects with detailed cards:

1. **AI Plant Health Monitoring System**
   - 95% accuracy ML model
   - Random Forest algorithm
   - Flask API + React frontend
   - Tech: Python, Flask, React.js, scikit-learn, OpenCV

2. **Pahana Edu Billing System**
   - MVC-based billing system
   - DAO-driven structure
   - Tech: Java, JSP, Servlets, MySQL, Apache Tomcat

**Each card includes:**
- Title and description
- Top 3 key features
- Technology badges with gradients
- GitHub and Demo buttons
- Hover animations (scale + lift)

#### 4. **Skills Section**
Five categorized skill cards with custom gradient colors:
- **Frontend** (Blue-Cyan): React.js, Next.js, HTML5, CSS3, Tailwind, JavaScript
- **Backend** (Purple-Pink): Node.js, Express.js, Flask, REST APIs, JWT
- **Database** (Green-Emerald): MongoDB, MySQL, SQLite
- **Languages** (Orange-Red): JavaScript, Python, Java, PHP
- **Tools** (Indigo-Purple): Git, GitHub, Android Studio, NetBeans, VS Code

#### 5. **Experience & Achievements**
- Problem Solver
- Agile Practitioner
- Team Collaborator
- Continuous Learner

#### 6. **Contact Section**
- Contact info cards (Email, Phone, Location)
- Social media links (GitHub, LinkedIn)
- Professional contact form
- Animated submit button

#### 7. **Footer**
- Brand name with gradient
- Social media icons
- Copyright information

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd portfolio

# Install dependencies
npm install

# Run development server
npm run dev
```

The portfolio will be available at **http://localhost:3000**

### Build for Production

```bash
# Create optimized production build
npm run build

# Start production server
npm start
```

## 🎨 Customization

### Update Personal Information

Edit `app/page.tsx` and modify the `portfolioData` object:

```typescript
const portfolioData = {
  name: "Your Name",
  title: "Your Title | Your Specialty",
  tagline: "Your tagline here",
  location: "Your City, Country",
  email: "your.email@example.com",
  phone: "+XX XXX XXX XXXX",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  // ... more fields
}
```

### Update Projects

Modify the `projects` array:

```typescript
projects: [
  {
    title: "Project Name",
    description: "Description",
    features: ["Feature 1", "Feature 2", "Feature 3"],
    technologies: ["Tech1", "Tech2"],
    github: "https://github.com/yourusername/project",
    demo: "https://project-demo.com"
  }
]
```

### Update Skills

Modify the `skills` object:

```typescript
skills: {
  frontend: ["Skill1", "Skill2"],
  backend: ["Skill1", "Skill2"],
  // ... more categories
}
```

### Customize Colors & Theme

Edit `app/globals.css`:
- Change gradient colors
- Modify glassmorphism opacity
- Update animation timings
- Customize scrollbar

### Add Profile Photo

Replace the animated Code icon in Hero section with your photo:

```tsx
<img 
  src="/profile.jpg" 
  alt="Your Name" 
  className="w-full h-full rounded-full object-cover"
/>
```

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Font**: System fonts (San Francisco, Segoe UI, Roboto)

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## ♿ Accessibility Features

- Semantic HTML structure
- ARIA labels where needed
- Keyboard navigation support
- Focus visible states
- Minimum 48px touch targets on mobile
- Color contrast compliance

## 🎯 Performance Features

- Next.js automatic code splitting
- Image optimization (when images added)
- CSS optimization with Tailwind
- Fast loading with minimal dependencies
- Smooth 60fps animations

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your repository
4. Deploy automatically

### Deploy to Netlify

1. Push code to GitHub
2. Go to [Netlify](https://netlify.com)
3. Connect repository
4. Build command: `npm run build`
5. Publish directory: `.next`

## 📄 License

All rights reserved © 2024 Shabeeha

## 🙏 Credits

Design and Development by AI Assistant for **Shabeeha**

---

## 🎉 Features Summary

✅ Professional loading screen  
✅ Scroll progress indicator  
✅ Sticky navigation with animations  
✅ Dark/Light mode toggle  
✅ Glassmorphism design  
✅ Section dividers  
✅ Scroll to top button  
✅ Animated hero section  
✅ 3-column project grid  
✅ Categorized skill cards  
✅ Achievement highlights  
✅ Contact form  
✅ Premium footer  
✅ Fully responsive  
✅ Smooth animations  
✅ SEO optimized  
✅ Accessibility compliant  

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**

**Ready to impress recruiters and showcase your work!** 🚀
