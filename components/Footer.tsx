import { personalInfo } from "@/data/content";

const Footer = () => {
    return (
        <footer className="py-12 px-6 border-t border-border">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-sm text-muted-foreground">
                <p>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>

                <div className="flex gap-8">
                    <a href={personalInfo.linkedin} target="_blank" className="hover:text-primary transition-colors">LinkedIn</a>
                    <a href={`mailto:${personalInfo.email}`} className="hover:text-primary transition-colors">Email</a>
                </div>

                <p className="flex items-center gap-2">
                    Built with <span className="text-primary text-base">♥</span> in India
                </p>
            </div>
        </footer>
    );
};

export default Footer;
