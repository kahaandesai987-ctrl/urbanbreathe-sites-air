import { Calendar, Users, Video } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";

export const Courses = () => {
  const courses = [
    {
      title: "Sustainable Urban Design Fundamentals",
      description: "Learn the core principles of creating energy-efficient and climate-conscious urban spaces",
      date: "March 15, 2025",
      type: "Workshop",
      duration: "4 weeks",
      icon: Users,
    },
    {
      title: "Advanced Ventilation Modeling",
      description: "Master airflow simulation techniques for optimal building performance",
      date: "April 8, 2025",
      type: "Training Session",
      duration: "2 weeks",
      icon: Video,
    },
    {
      title: "Climate Analytics for City Planners",
      description: "Utilize data-driven insights to make informed decisions about urban development",
      date: "May 20, 2025",
      type: "Webinar Series",
      duration: "6 sessions",
      icon: Calendar,
    },
  ];

  return (
    <section id="courses" className="py-20 md:py-32 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            Upcoming Courses
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Join our training sessions, webinars, and workshops to advance your skills in 
            sustainable design and climate analytics
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {courses.map((course, index) => (
            <Card 
              key={index} 
              className="shadow-soft hover:shadow-hover transition-all duration-300 border-border animate-slide-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardHeader>
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-primary mb-4">
                  <course.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl mb-2">{course.title}</CardTitle>
                <CardDescription className="text-base">{course.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span>{course.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-foreground">{course.type}</span>
                    <span>•</span>
                    <span>{course.duration}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant="default">
                  Register Now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
