import Link from "next/link";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";
import { Button } from "./ui/button";
import { BookMarkedIcon, ContactIcon } from "lucide-react";
async function Navbar() {
  
  return (
    <nav className="sticky top-0 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-primary font-mono tracking-wider">
              <span className="text-orange-600 font-bold">ULTRA</span> BEATS
            </Link>
          </div>

          <DesktopNavbar />
          <MobileNavbar />
          <div className="hidden md:flex" >
            <Button variant="default" className="flex items-center gap-2" asChild>
              <Link href="#contact">
                <ContactIcon className="w-4 h-4" />
                <span className="hidden lg:inline">Contact</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;