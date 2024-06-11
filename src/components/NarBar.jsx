import React from "react";
import { Navbar, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button } from "@nextui-org/react";

function Nav_bar() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const menuItems = [
        "Home",
        "About",
        "Projects",
        "CV",
        "Contact",
      ];
    return(      
        <Navbar onMenuOpenChange={setIsMenuOpen}
        classNames={{
            item: [
                "flex",
                "relative",
                "h-full",
                "items-center",
                "data-[active=true]:after:content-['']",
                "data-[active=true]:after:absolute",
                "data-[active=true]:after:bottom-0",
                "data-[active=true]:after:left-0",
                "data-[active=true]:after:right-0",
                "data-[active=true]:after:h-[2px]",
                "data-[active=true]:after:rounded-[2px]",
                "data-[active=true]:after:bg-primary",
            ],
        }}>
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
            />
        </NavbarContent>        
        <NavbarContent >
          <NavbarItem isActive>
            <Link aria-current="page" href="#/">
              Home
            </Link>
          </NavbarItem>
          <NavbarItem >
            <Link href="#/about" color="foreground" >
              About
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#/projects">
              Projects
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#/cv">
              CV
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#/contact">
              Contact
            </Link>
          </NavbarItem>
        </NavbarContent>       
        <NavbarMenu>
          {menuItems.map((item, index) => (
              <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                    index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
                }
                className="w-full"
                href="#"
                size="lg"
                >
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>       
        </div>
      </Navbar>
           
        )
}

export default Nav_bar