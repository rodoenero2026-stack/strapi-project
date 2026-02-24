"use client"

import * as React from "react"
import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"



const MenuList = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>sobre nosotros</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="w-96">
              <ListItem href="/Shop" title="Tienda">
                accede a toda la tienda 
              </ListItem>
              <ListItem href="Offers" title="Ofertas">
                Las mejores ofertas de la tienda 
              </ListItem>
              <ListItem href="href" title="Accesorios">
                todo lo que buscas 
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className="hidden md:flex">
          <NavigationMenuTrigger>Productos de Belleza</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/Accesorios">Accesorios</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export default MenuList

const components: { title: string; href: string; description: string }[] = [
 {
    title: "Café en Grano",
    href: "/category/grano",
    description:
      "Granos selectos de las mejores fincas de Chiapas, tostados a la perfección para resaltar su aroma.",
  },
  {
    title: "Café Molido",
    href: "/category/molido",
    description:
      "La molienda ideal para tu método de extracción favorito, desde prensa francesa hasta espresso.",
  },
  {
    title: "Cápsulas",
    href: "/category/capsulas",
    description:
      "Toda la intensidad y sabor de nuestro café premium en un formato rápido y sencillo.",
  },
  {
    title: "Accesorios",
    href: "/category/accesorios",
    description: "Molinos, prensas y tazas diseñadas para elevar tu experiencia cafetera cada mañana.",
  },
  {
    title: "Kits de Regalo",
    href: "/category/regalos",
    description:
      "Selecciones especiales para compartir la pasión por el café con tus personas favoritas.",
  },
  {
    title: "Suscripciones",
    href: "/category/suscripciones",
    description:
      "Recibe tu café fresco automáticamente en la puerta de tu casa cada mes sin complicaciones.",
  },
]


function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="flex flex-col gap-1 text-sm">
            <div className="leading-none font-medium">{title}</div>
            <div className="text-muted-foreground line-clamp-2">{children}</div>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}

