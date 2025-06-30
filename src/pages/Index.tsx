
import { ArrowRight, Code, Database, Server, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";

const Index = () => {
  const stats = [
    { label: "Years Experience", value: "2+" },
    { label: "Client Projects", value: "4+" },
    { label: "Technologies", value: "15+" },
    { label: "Availability", value: "Open" },
  ];

  const techStack = [
    { name: "Python", icon: Code, color: "tech-blue" },
    { name: "FastAPI", icon: Server, color: "tech-green" },
    { name: "PostgreSQL", icon: Database, color: "tech-purple" },
    { name: "React.js", icon: Terminal, color: "tech-orange" },
  ];

  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 tech-gradient opacity-50"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-3 h-3 bg-tech-green rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-tech-green">Available for Freelance</span>
                </div>
                
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
                  <span className="gradient-text">Mohamad Megahed</span>
                  <br />
                  <span className="text-foreground">Abo-Elsouod</span>
                </h1>
                
                <h2 className="text-xl lg:text-2xl text-muted-foreground mb-6">
                  Full Stack Developer (Python-Focused)
                </h2>
                
                <p className="text-lg text-muted-foreground mb-8 max-w-xl">
                  Building secure, scalable backend systems — and clean UIs when needed. 
                  Specialized in Python, FastAPI, and modern web technologies with 2+ years 
                  of real-world client experience.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="group">
                    <Link to="/projects">
                      View My Work
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link to="/contact">Get In Touch</Link>
                  </Button>
                </div>
              </div>
              
              <div className="animate-fade-in animation-delay-300">
                <div className="relative">
                  <div className="w-full h-96 bg-gradient-to-br from-tech-blue/20 to-tech-green/20 rounded-2xl flex items-center justify-center">
                    <img 
                      src="https://res.cloudinary.com/dys5eyjxp/image/upload/v1751252603/1707341392881_gjliss.jpg" 
                      alt="Mohamad Megahed Abo-Elsouod" 
                      className="w-64 h-64 object-cover rounded-full border-4 border-background shadow-2xl"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-tech-green/20 rounded-full animate-float"></div>
                  <div className="absolute -top-4 -left-4 w-16 h-16 bg-tech-blue/20 rounded-full animate-float animation-delay-1000"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-card/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center animate-slide-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Core Technologies</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Specialized in backend development with Python and FastAPI, 
                complemented by modern frontend technologies when needed.
              </p>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {techStack.map((tech, index) => (
                <Card key={index} className="group hover:scale-105 transition-transform cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <tech.icon className={`h-12 w-12 mx-auto mb-4 text-${tech.color} group-hover:scale-110 transition-transform`} />
                    <h3 className="font-semibold">{tech.name}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-tech-blue/10 to-tech-green/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Build Something Amazing?</h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Let's discuss how I can help bring your project to life with clean, 
              scalable code and professional execution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/contact">Start a Project</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/about">Learn More About Me</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Index;
