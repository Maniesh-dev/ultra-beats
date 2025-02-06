import { BellIcon, HomeIcon, UserIcon, PartyPopperIcon, AwardIcon, BookMarkedIcon, Music2Icon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ModeToggle from "./ModeToggle";
import MusicPlayer from "./MusicPlayer";

async function DesktopNavbar() {

  return ( <>
    <div className="hidden md:flex items-center space-x-4">

      <Button variant="ghost" className="flex items-center gap-2" asChild>
        <Link href="/">
          <HomeIcon className="w-4 h-4" />
          <span className="hidden lg:inline">Home</span>
        </Link>
      </Button>

      <Button variant="ghost" className="flex items-center gap-2" asChild>
        <Link href="#recent-event">
          <PartyPopperIcon className="w-4 h-4" />
          <span className="hidden lg:inline">Recent Event</span>
        </Link>
      </Button>

      <Button variant="ghost" className="flex items-center gap-2" asChild>
        <Link href="#awards">
          <AwardIcon className="w-4 h-4" />
          <span className="hidden lg:inline">Awards</span>
        </Link>
      </Button>
      
      <Button variant="ghost" className="flex items-center gap-2" asChild>
        <Link href="#about">
          <BookMarkedIcon className="w-4 h-4" />
          <span className="hidden lg:inline">About us</span>
        </Link>
      </Button>

      <ModeToggle />
    </div>
    <Button variant="outline" className="flex items-center rounded-full" asChild>
      <div>
        <MusicPlayer />
      </div>
    </Button>
    </>
  );
}
export default DesktopNavbar;