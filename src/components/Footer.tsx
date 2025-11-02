import logo from "@/assets/urban-breathe-logo.png";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = [
    { name: "Terms of Service", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Careers", href: "#" },
  ];

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6">
          {/* Logo and Brand */}
          <div className="flex items-center gap-3">
            <img src={logo} alt="Urban Breathe Logo" className="h-10 w-10 brightness-0 invert" />
            <span className="text-xl font-bold">Urban Breathe</span>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="hover:text-primary transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-sm text-center opacity-80">
            <p>&copy; {currentYear} Urban Breathe. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
