
import { useState } from "react";
import { ExternalLink, Github, Code, Database, Server, Globe } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import Layout from "@/components/Layout";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Quiz App Platform",
      shortDescription: "Intelligent quiz generation system with adaptive learning algorithms",
      fullDescription: "A comprehensive educational platform that uses AI to generate personalized quizzes based on user performance and learning patterns. Features include real-time analytics, progress tracking, and adaptive difficulty adjustment. Built with FastAPI backend for efficient API handling and React frontend for smooth user experience.",
      image: "https://res.cloudinary.com/dys5eyjxp/image/upload/v1751254183/Screenshot_3_q6h67h.png",
      techStack: ["Python", "FastAPI", "PostgreSQL", "React", "OpenAI API", "Docker", "Stripe"],
      features: [
        "AI-powered quiz generation",
        "Adaptive learning algorithms", 
        "Real-time performance analytics",
        "User progress tracking",
        "Responsive design"
      ],
      challenges: "Implementing efficient AI algorithms for question generation while maintaining low response times",
      liveUrl: "https://quiz-app-react-frontend-eight.vercel.app/",
      codeUrl: "private"
    },
    {
      id: 2,
      title: "E-commerce Store",
      shortDescription: "Full-featured online store with payment processing and inventory management",
      fullDescription: "A complete e-commerce solution featuring product catalog, shopping cart, secure payment processing with Stripe, inventory management, and order tracking. Includes admin dashboard for store management and customer analytics. Built with focus on security and scalability.",
      image: "https://res.cloudinary.com/dys5eyjxp/image/upload/v1751253730/WhatsApp_Image_2025-06-25_at_1.23.46_AM_sallje.jpg",
      techStack: ["Python", "FastAPI", "FireBase", "React", "Hooks"],
      features: [
        "Product catalog and search",
        "Shopping cart and checkout",
        "Stripe payment integration",
        "Inventory management",
        "Order tracking system",
        "Admin dashboard"
      ],
      challenges: "Implementing secure payment processing and handling complex inventory tracking across multiple product variants",
      liveUrl: "https://teste-comerce-store.vercel.app/",
      codeUrl: "private"
    },
    {
      id: 3,
      title: "Freelancer CRM Dashboard",
      shortDescription: "Project management and client relationship tool for freelancers",
      fullDescription: "A comprehensive CRM system designed specifically for freelancers to manage clients, projects, invoices, and time tracking. Features include automated invoice generation, project timeline management, client communication history, and financial reporting. Built with clean UI/UX for optimal productivity.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      techStack: ["Python", "Django", "PostgreSQL", "React", "TypeScript", "Chart.js"],
      features: [
        "Client and project management",
        "Time tracking and invoicing",
        "Financial reporting and analytics",
        "Communication history",
        "Automated notifications",
        "Document storage"
      ],
      challenges: "Creating intuitive workflows for complex project management while maintaining data integrity across related entities",
      liveUrl: "#",
      codeUrl: "private"
    },
    {
      id: 4,
      title: "Data Automation Tool",
      shortDescription: "ETL pipeline for processing and analyzing large datasets",
      fullDescription: "An automated data processing pipeline that extracts data from multiple sources, transforms it according to business rules, and loads it into data warehouses. Features include scheduled jobs, data validation, error handling, and monitoring dashboard. Designed to handle large volumes of data efficiently.",
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=600&h=400&fit=crop",
      techStack: ["Python", "Pandas", "SQLAlchemy", "Celery", "Redis", "PostgreSQL", "Docker"],
      features: [
        "Multi-source data extraction",
        "Automated data transformation",
        "Scheduled processing jobs",
        "Data validation and cleaning",
        "Error handling and logging",
        "Monitoring dashboard"
      ],
      challenges: "Optimizing data processing performance while ensuring data accuracy and handling various data formats",
      liveUrl: "#",
      codeUrl: "private"
    }
  ];

  return (
    <Layout>
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl font-bold mb-4">My Projects</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A collection of real-world applications I've built for clients, 
              showcasing my expertise in full-stack development and problem-solving.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={project.id} className="group hover:scale-[1.02] transition-transform animate-fade-in" style={{ animationDelay: `${index * 200}ms` }}>
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {project.title}
                    <div className="flex items-center space-x-2">
                      {project.liveUrl !== "#" && (
                        <Button variant="ghost" size="icon" asChild>
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </Button>
                      )}
                      {project.codeUrl === "private" ? (
                        <Badge variant="secondary" className="text-xs">Private Code</Badge>
                      ) : (
                        <Button variant="ghost" size="icon" asChild>
                          <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardTitle>
                  <CardDescription>{project.shortDescription}</CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech) => (
                      <Badge key={tech} variant="outline">{tech}</Badge>
                    ))}
                  </div>
                  
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" className="w-full">
                        View Details
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle className="text-2xl">{project.title}</DialogTitle>
                        <DialogDescription className="text-base">
                          {project.fullDescription}
                        </DialogDescription>
                      </DialogHeader>
                      
                      <div className="space-y-6">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-64 object-cover rounded-lg"
                        />
                        
                        <div>
                          <h4 className="font-semibold mb-3 flex items-center">
                            <Code className="h-4 w-4 mr-2" />
                            Key Features
                          </h4>
                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {project.features.map((feature, idx) => (
                              <li key={idx} className="flex items-center text-sm">
                                <div className="w-2 h-2 bg-primary rounded-full mr-2 flex-shrink-0" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold mb-3 flex items-center">
                            <Server className="h-4 w-4 mr-2" />
                            Technology Stack
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {project.techStack.map((tech) => (
                              <Badge key={tech} variant="secondary">{tech}</Badge>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold mb-3 flex items-center">
                            <Database className="h-4 w-4 mr-2" />
                            Technical Challenges
                          </h4>
                          <p className="text-muted-foreground">{project.challenges}</p>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t">
                          {project.liveUrl !== "#" && (
                            <Button asChild className="flex-1">
                              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="h-4 w-4 mr-2" />
                                View Live Site
                              </a>
                            </Button>
                          )}
                          {project.codeUrl === "private" ? (
                            <Badge variant="outline" className="flex-1 justify-center py-2">
                              Code Available Upon Request
                            </Badge>
                          ) : (
                            <Button variant="outline" asChild className="flex-1">
                              <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                                <Github className="h-4 w-4 mr-2" />
                                View Code
                              </a>
                            </Button>
                          )}
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <Card className="p-8 bg-gradient-to-r from-tech-blue/10 to-tech-green/10">
              <h2 className="text-2xl font-bold mb-4">Interested in Working Together?</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                These projects represent just a sample of what I can deliver. 
                Each one was built with attention to detail, security, and scalability in mind.
              </p>
              <Button size="lg" asChild>
                <a href="/contact">Let's Discuss Your Project</a>
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
