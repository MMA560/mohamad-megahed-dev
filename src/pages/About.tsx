
import { CheckCircle, Code, Database, Server, Globe, Shield, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/Layout";

const About = () => {
  const skills = {
    backend: [
      "Python", "FastAPI", "Django", "PostgreSQL", "MySQL", "MongoDB", 
      "Redis", "SQLAlchemy", "Alembic", "OAuth", "JWT"
    ],
    frontend: [
      "React.js", "TypeScript", "JavaScript", "HTML5", "CSS3", 
      "Tailwind CSS", "Bootstrap", "Responsive Design"
    ],
    devops: [
      "Docker", "AWS", "Heroku", "Render", "Git", "GitHub Actions", 
      "Linux", "Nginx", "API Integration"
    ],
    tools: [
      "Stripe", "RESTful APIs", "GraphQL", "WebSockets", "Celery", 
      "Pytest", "Postman", "VS Code"
    ]
  };

  const workStyle = [
    {
      icon: Code,
      title: "Clean Architecture",
      description: "Well-structured code with proper separation of concerns and maintainable design patterns."
    },
    {
      icon: Shield,
      title: "Security First",
      description: "Implementing best practices for authentication, authorization, and data protection."
    },
    {
      icon: Zap,
      title: "Performance Focused",
      description: "Optimized databases, efficient queries, and scalable API designs for fast response times."
    },
    {
      icon: Globe,
      title: "Full-Stack Capable",
      description: "Can handle both backend logic and frontend implementation when projects require it."
    }
  ];

  return (
    <Layout>
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl font-bold mb-4">About Me</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A backend-focused full-stack developer with a passion for building 
              secure, scalable systems that solve real-world problems.
            </p>
          </div>

          {/* Bio Section */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div className="animate-slide-in">
              <h2 className="text-2xl font-bold mb-6">My Journey</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  With over 2 years of hands-on experience in full-stack development, 
                  I've specialized in building robust backend systems using Python and FastAPI. 
                  My journey began with a fascination for how data flows through applications 
                  and has evolved into a comprehensive skill set covering the entire development lifecycle.
                </p>
                <p>
                  I've had the privilege of working with real clients across various industries, 
                  delivering everything from e-commerce platforms to AI-driven educational tools. 
                  Each project has strengthened my commitment to writing clean, maintainable code 
                  and implementing security best practices.
                </p>
                <p>
                  While my expertise lies in backend development, I'm equally comfortable 
                  building clean, responsive frontends when projects require it. This full-stack 
                  capability allows me to take projects from concept to deployment independently.
                </p>
              </div>
            </div>

            <div className="animate-slide-in animation-delay-300">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">Quick Facts</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-tech-green" />
                    <span>2+ years of professional development experience</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-tech-green" />
                    <span>4+ completed client projects</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-tech-green" />
                    <span>Backend-first with frontend capabilities</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-tech-green" />
                    <span>Available for remote freelance work</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-tech-green" />
                    <span>Clean Git history and documentation</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Work Style */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-center mb-8">My Approach</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {workStyle.map((item, index) => (
                <Card key={index} className="text-center group hover:scale-105 transition-transform">
                  <CardContent className="p-6">
                    <item.icon className="h-12 w-12 mx-auto mb-4 text-primary group-hover:scale-110 transition-transform" />
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Skills Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-center mb-8">Technical Skills</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center space-x-2">
                    <Server className="h-5 w-5 text-tech-blue" />
                    <span>Backend</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.backend.map((skill) => (
                      <Badge key={skill} variant="secondary">{skill}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center space-x-2">
                    <Code className="h-5 w-5 text-tech-green" />
                    <span>Frontend</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.frontend.map((skill) => (
                      <Badge key={skill} variant="secondary">{skill}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center space-x-2">
                    <Database className="h-5 w-5 text-tech-purple" />
                    <span>DevOps</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.devops.map((skill) => (
                      <Badge key={skill} variant="secondary">{skill}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center space-x-2">
                    <Globe className="h-5 w-5 text-tech-orange" />
                    <span>Tools & APIs</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.tools.map((skill) => (
                      <Badge key={skill} variant="secondary">{skill}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Availability */}
          <Card className="text-center p-8 bg-gradient-to-r from-tech-blue/10 to-tech-green/10">
            <h2 className="text-2xl font-bold mb-4">Currently Available</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              I'm open to new freelance opportunities and remote positions. 
              Whether you need a complete web application or want to enhance your existing system, 
              I'm ready to deliver high-quality solutions.
            </p>
            <div className="flex items-center justify-center space-x-2">
              <div className="w-3 h-3 bg-tech-green rounded-full animate-pulse"></div>
              <span className="font-medium text-tech-green">Available for Freelance Work</span>
            </div>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default About;
