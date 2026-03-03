"use client"

import * as React from "react"
import Link from "next/link"
import { BookOpen, HelpCircle, Info, ShieldCheck, MessageSquareHeart, Sparkles } from "lucide-react"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"

const MenuList = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList className="flex items-center gap-2">
        
        {/* CONÓCENOS */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent hover:bg-pink-50 dark:hover:bg-pink-900/30 transition-colors">
            Conócenos
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[280px] gap-1 p-3 border-t-2 border-pink-500">
              <ListItem href="/nosotros" title="Nosotros" icon={<Info className="w-4 h-4 text-pink-500" />} />
              <ListItem href="/testimonios" title="Testimonios" icon={<MessageSquareHeart className="w-4 h-4 text-pink-500" />} />
              <ListItem href="/garantia" title="Garantía" icon={<ShieldCheck className="w-4 h-4 text-pink-500" />} />
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* CATEGORÍAS */}
        <NavigationMenuItem className="hidden md:flex">
          <NavigationMenuTrigger className="bg-transparent hover:bg-pink-50 dark:hover:bg-pink-900/30 transition-colors">
            Categorías
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="w-[450px] p-5 border-t-2 border-pink-500">
              <div className="flex items-center gap-2 mb-4 text-pink-600 dark:text-pink-400 font-bold text-xs uppercase tracking-widest border-b border-gray-100 dark:border-slate-800 pb-2">
                <Sparkles className="w-4 h-4" /> Selección LabialRod
              </div>
              <ul className="grid grid-cols-2 gap-x-6 gap-y-2">
                {components.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  />
                ))}
              </ul>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* BLOG - CORREGIDO SIN LEGACYBEHAVIOR */}
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link href="/blog" className={cn(
              navigationMenuTriggerStyle(), 
              "text-pink-600 dark:text-pink-400 font-bold hover:bg-pink-50 dark:hover:bg-pink-900/30 transition-all flex items-center gap-2 bg-transparent cursor-pointer"
            )}>
              <BookOpen className="w-4 h-4" />
              Blog
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        {/* FAQ - CORREGIDO SIN LEGACYBEHAVIOR */}
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link href="/faq" className={cn(
              navigationMenuTriggerStyle(), 
              "flex items-center gap-2 text-gray-600 dark:text-slate-300 hover:text-pink-600 dark:hover:text-pink-400 bg-transparent cursor-pointer"
            )}>
              <HelpCircle className="w-4 h-4" />
              FAQ
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

      </NavigationMenuList>
    </NavigationMenu>
  )
}

const components = [
  { title: "Labiales", href: "/category/labiales" },
  { title: "Cremas", href: "/category/cremas" },
  { title: "Gloss", href: "/category/gloss" },
  { title: "Kits de Regalo", href: "/category/regalos" },
  { title: "Accesorios", href: "/category/accesorios" },
  { title: "Suscripciones", href: "/category/suscripciones" },
]

function ListItem({ className, title, href, icon, ...props }: any) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className={cn(
            "flex items-center gap-3 select-none rounded-lg p-3 leading-none no-underline outline-none transition-all hover:bg-pink-50 dark:hover:bg-pink-900/30 group",
            className
          )}
          {...props}
        >
          {icon && <span className="group-hover:scale-110 transition-transform">{icon}</span>}
          <div className="text-sm font-medium leading-none text-gray-900 dark:text-slate-100 group-hover:text-pink-600 dark:group-hover:text-pink-400">
            {title}
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}

export default MenuList