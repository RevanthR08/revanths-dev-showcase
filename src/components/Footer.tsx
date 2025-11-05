const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-border/50">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-muted-foreground">
              © 2025 Revanth. All rights reserved.
            </p>
          </div>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a 
              href="mailto:revanthofficial08@gmail.com" 
              className="hover:text-primary transition-colors"
            >
              revanthofficial08@gmail.com
            </a>
            <a 
              href="tel:+919566768327" 
              className="hover:text-primary transition-colors"
            >
              +91 9566768327
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
