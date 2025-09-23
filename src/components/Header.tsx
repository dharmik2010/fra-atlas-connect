import { Button } from "@/components/ui/button";
import { Map, Menu, Search, User } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <a className="mr-6 flex items-center space-x-2" href="/">
            <Map className="h-6 w-6 text-primary" />
            <span className="hidden font-bold sm:inline-block">
              FRA Atlas
            </span>
          </a>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <a
              className="transition-colors hover:text-foreground/80 text-foreground/60"
              href="#features"
            >
              Features
            </a>
            <a
              className="transition-colors hover:text-foreground/80 text-foreground/60"
              href="#dashboard"
            >
              Dashboard
            </a>
            <a
              className="transition-colors hover:text-foreground/80 text-foreground/60"
              href="#about"
            >
              About
            </a>
          </nav>
        </div>
        <Button variant="outline" size="icon" className="mr-2 px-0 text-base hover:bg-transparent focus:bg-transparent active:bg-transparent md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <Button variant="outline" className="relative w-full justify-start text-sm text-muted-foreground sm:pr-12 md:w-40 lg:w-64">
              <Search className="mr-2 h-4 w-4" />
              Search villages...
            </Button>
          </div>
          <nav className="flex items-center">
            <Button variant="outline" size="sm" className="ml-2">
              <User className="mr-2 h-4 w-4" />
              Login
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;