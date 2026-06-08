import type { Project } from "@/types/portfolio";

export const projects: Project[] = [
  {
    id: "plant-health",
    title: "AI Driven Plant Health Monitoring System",
    description:
      "Machine learning platform that predicts plant health using a practical Random Forest classification workflow.",
    role: "Full stack AI product design and model integration",
    challenge: "Convert plant imagery and context into fast, readable health guidance.",
    architecture: "React frontend, Flask inference API, MongoDB history store, JWT auth",
    outcome: "Automated triage and reporting so users can review plant health faster.",
    image: "/images/projects/plant-health.svg",
    tags: ["AI", "ML", "Full Stack"],
    features: [
      "Model-backed classification",
      "Random Forest",
      "Explainable AI",
      "PDF Reports",
      "Prediction History",
      "Confidence Scoring",
    ],
    technologies: ["Python", "Flask", "React.js", "MongoDB", "Scikit Learn", "JWT"],
    github: "https://github.com/ShabeehaSarook/AI-Driven-Plant-Health-System",
  },
  {
    id: "real-estate",
    title: "Real Estate Price Prediction System",
    description:
      "End-to-end regression platform that predicts property prices using a leakage-safe Scikit-learn workflow and production-ready deployment layers.",
    role: "Data science engineering and full-stack deployment",
    challenge:
      "Predict market value from high-dimensional property data while keeping the pipeline reproducible and leakage-free.",
    architecture: "Python ML pipeline, ColumnTransformer preprocessing, Flask API, Streamlit interface",
    outcome:
      "Delivered a regression system with strong predictive performance and an interactive interface for rapid model testing.",
    image: "/images/projects/real-estate.svg",
    tags: ["Data Science", "Regression", "Predictive AI"],
    features: [
      "100,000+ records and 19 features",
      "ColumnTransformer pipeline",
      "R2 ~ 0.997",
      "Flask + Streamlit deployment",
    ],
    technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "Flask", "Streamlit"],
    github: "https://github.com/ShabeehaSarook/Flat-prediction",
  },
  {
    id: "ocean-view-resort",
    title: "Ocean View Resort Web Application",
    description:
      "Portfolio-ready resort web application with an organized structure, reusable components, and a maintainable repository workflow.",
    role: "Web application structure and component organization",
    challenge:
      "Create a clean project foundation that is easy to extend, validate, and review in a portfolio context.",
    architecture:
      "Organized repository structure with reusable UI components and validation-aware implementation practices",
    outcome:
      "Delivered a presentation-ready codebase that highlights project organization and maintainable development habits.",
    image: "/images/projects/ocean-view-resort.svg",
    tags: ["Web App", "GitHub", "Reusable UI"],
    features: [
      "Organized repository structure",
      "Reusable components",
      "Validation awareness",
      "Maintainable code practices",
    ],
    technologies: ["GitHub", "Component Design", "Validation", "Maintainability"],
    github: "https://github.com/ShabeehaSarook/Ocean-View-Resort",
  },
  {
    id: "pahana-edu",
    title: "Pahana Edu Billing System",
    description:
      "MVC-based billing system with DAO-driven structure and secure admin workflows.",
    role: "Java application structure and transaction flow",
    challenge: "Keep billing operations organized while preserving admin control paths.",
    architecture: "JSP, Servlets, DAO layer, MySQL persistence, Apache Tomcat runtime",
    outcome: "Structured billing workflows with clearer separation of concerns.",
    image: "/images/projects/billing.svg",
    tags: ["Java", "MVC"],
    features: ["MVC", "Billing", "DAO", "Authentication"],
    technologies: ["Java", "JSP", "Servlets", "MySQL", "Apache Tomcat"],
    github: "https://github.com/ShabeehaSarook/PhahanaEdu",
  },
];
