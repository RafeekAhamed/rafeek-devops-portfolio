# Rafeek Ahamed M | DevOps Engineer | Azure Cloud Engineer

<p align="center">
  <a href="https://rafeek.rafeekahamed046.workers.dev/">
    <img src="https://img.shields.io/badge/Live%20Portfolio-Visit%20Website-22D3EE?style=for-the-badge" alt="Live Portfolio" />
  </a>
  <a href="https://github.com/RafeekAhamed">
    <img src="https://img.shields.io/badge/GitHub-View%20Repositories-181717?style=for-the-badge&logo=github" alt="GitHub Profile" />
  </a>
  <a href="https://www.linkedin.com/in/rafeek-ahamed-devops">
    <img src="https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge&logo=linkedin" alt="LinkedIn Profile" />
  </a>
</p>

<p align="center">
  A personal portfolio showcasing my DevOps and Azure Cloud engineering skills, hands-on projects, professional experience, certifications, and technical interests.
</p>

---

## 🌐 Portfolio & Professional Profiles

* **Live Portfolio:** https://rafeek.rafeekahamed046.workers.dev/
* **GitHub:** https://github.com/RafeekAhamed
* **LinkedIn:** https://www.linkedin.com/in/rafeek-ahamed-devops
* **LeetCode:** https://leetcode.com/u/rafeek-ahamed-m/
* **Credly:** https://www.credly.com/users/rafeek-ahamed-m

---

## 👨‍💻 About

I am a DevOps and Azure Cloud engineering professional interested in cloud infrastructure, CI/CD automation, containerization, Kubernetes, and infrastructure management.

This repository contains my personal portfolio website, which presents my technical skills, professional experience, selected projects, certifications, education, and contact information in a responsive interface.

### Primary Focus Areas

* Microsoft Azure
* Azure DevOps
* CI/CD pipelines and release management
* Docker and Kubernetes
* Terraform and Infrastructure as Code (IaC)
* Cloud infrastructure and operations
* Monitoring and troubleshooting
* Git, GitHub, YAML, and automation

---

## ✨ Portfolio Features

* Responsive design for desktop, laptop, tablet, and mobile
* Hero section with professional profile photo
* About section and technical skills
* Professional experience timeline
* Featured DevOps projects with GitHub links
* Certifications and education sections
* Contact information and professional profile links
* Responsive navigation with mobile menu
* GSAP animations and section reveal effects
* Custom 404 page
* SEO metadata and social sharing metadata
* Custom favicon
* Single-page application routing support
* Reduced-motion accessibility support

---

## 🛠️ Tech Stack

### Frontend

* React
* Vite
* JavaScript
* Tailwind CSS
* HTML5 and CSS

### Animation & UI

* GSAP
* `@gsap/react`
* Lucide React
* Responsive layouts
* Semantic HTML

### Development & Deployment

* Git
* GitHub
* Cloudflare

---

## 💼 Featured DevOps Projects

### 1. Terraform + Docker Infrastructure Automation

A project demonstrating Terraform-based infrastructure automation for a multi-environment Docker setup.

**Technologies:**

* Terraform
* Docker
* Nginx
* Flask
* PostgreSQL
* Docker networking
* Infrastructure as Code
* GitHub Actions

**Repository:**
https://github.com/RafeekAhamed/terraform-docker-infrastructure

---

### 2. Kubernetes Microservices Platform

A containerized microservices project demonstrating application deployment and workload management with Kubernetes.

**Technologies:**

* Kubernetes
* Docker
* Helm
* Services
* Ingress
* ConfigMaps and Secrets
* RBAC
* Health probes
* Rolling updates
* Horizontal Pod Autoscaling

**Repository:**
https://github.com/RafeekAhamed/kubernetes-microservices

---

### 3. Azure DevOps CI/CD Platform

An Azure-focused project demonstrating CI/CD concepts and application deployment workflow configuration.

**Technologies:**

* Microsoft Azure
* Azure DevOps
* Git
* YAML
* Docker
* Kubernetes
* CI/CD
* Application testing
* Deployment manifests

**Repository:**
https://github.com/RafeekAhamed/project1-azure-devops

---

## 📁 Project Structure

```text
rafeek-devops-portfolio/
├── public/
│   ├── profile.jpg
│   ├── favicon.svg
│   └── resume files, if included
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Certifications.jsx
│   │   ├── Contact.jsx
│   │   ├── DevOpsVisual.jsx
│   │   ├── Education.jsx
│   │   ├── Experience.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── NotFound.jsx
│   │   ├── Projects.jsx
│   │   ├── SectionReveal.jsx
│   │   └── Skills.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── deployment configuration
```

*This is a representative structure. Keep the file and folder names aligned with your actual repository.*

---

## ⚙️ Local Development

### Prerequisites

Install the following tools:

* Node.js
* npm
* Git

### 1. Clone the Repository

```bash
git clone https://github.com/RafeekAhamed/rafeek-devops-portfolio.git
cd rafeek-devops-portfolio
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Development Server

```bash
npm run dev
```

Open the local development URL displayed in your terminal.

---

## 🧪 Build and Validate

### Create a Production Build

```bash
npm run build
```

### Preview the Production Build

```bash
npm run preview
```

### Run ESLint

```bash
npm run lint
```

Run these checks after making changes to help identify build errors and code-quality issues.

---

## ☁️ Deployment

**Live Portfolio:**
https://rafeek.rafeekahamed046.workers.dev/

The portfolio is hosted on Cloudflare. If automatic Git deployment is enabled in the Cloudflare project, pushing changes to the configured branch can trigger a new deployment.

### Deployment Workflow

```text
Local Development
       ↓
   Git Commit
       ↓
   GitHub Push
       ↓
Cloudflare Deployment
       ↓
 Live Portfolio
```

Before pushing changes, validate the project:

```bash
npm run build
```

Then commit and push your changes:

```bash
git add .
git commit -m "Update portfolio"
git push origin main
```

Confirm that your Cloudflare project is configured to deploy from the repository and branch you are updating.

---

## 🔐 Environment Variables

The portfolio is not documented as requiring environment variables.

If you add integrations or external services in the future, store credentials securely and never commit API keys, passwords, tokens, or other secrets to Git.

---

## 📱 Responsive Design

The website is designed to support:

* Desktop
* Laptop
* Tablet
* Mobile

The navigation adapts to smaller screens to provide a mobile-friendly browsing experience.

---

## ♿ Accessibility

Accessibility considerations include:

* Semantic HTML
* Accessible navigation labels
* Keyboard focus states
* Appropriate `aria-label` attributes
* Reduced-motion support
* Responsive touch targets
* Accessible external links

Continue testing keyboard navigation, image alternative text, color contrast, and mobile layouts as the portfolio evolves.

---

## 🔎 SEO

The portfolio includes SEO and social-sharing features such as:

* Descriptive page title
* Meta description
* Author metadata
* Canonical URL
* Open Graph metadata
* Twitter metadata
* Robots metadata
* Theme color
* Favicon

Keep the canonical URL and metadata consistent with the live portfolio domain.

---

## 📜 License

This is a personal portfolio project.

Unless a separate license is provided, the original portfolio content and branding remain the property of their respective owner. Check the licensing terms of any third-party assets or dependencies you use.

---

## 📬 Contact

**Rafeek Ahamed M**
DevOps Engineer | Azure Cloud Engineer

* **Portfolio:** https://rafeek.rafeekahamed046.workers.dev/
* **GitHub:** https://github.com/RafeekAhamed
* **LinkedIn:** https://www.linkedin.com/in/rafeek-ahamed-devops
* **LeetCode:** https://leetcode.com/u/rafeek-ahamed-m/
* **Email:** [rafeekahamedm@gmail.com](mailto:rafeekahamedm@gmail.com)

---

<p align="center">
  Built with React, Vite, Tailwind CSS, GSAP, and JavaScript.
</p>
