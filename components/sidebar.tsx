"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  LayoutDashboard,
  Calendar,
  Users,
  MessageSquare,
  CreditCard,
  Settings,
  ChevronLeft,
  Menu,
  LogOut,
} from "lucide-react"

export default function Sidebar() {
  const pathname = usePathname()
  const [collapsed, setCollapsed] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  const toggleSidebar = () => {
    setCollapsed(!collapsed)
  }

  const toggleMobileSidebar = () => {
    setMobileOpen(!mobileOpen)
  }

  const menuItems = [
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: <LayoutDashboard className="h-5 w-5" />,
    },
    {
      title: "Citas",
      href: "/dashboard/appointments",
      icon: <Calendar className="h-5 w-5" />,
    },
    {
      title: "Pacientes",
      href: "/dashboard/patients",
      icon: <Users className="h-5 w-5" />,
    },
    {
      title: "Mensajes",
      href: "/dashboard/messages",
      icon: <MessageSquare className="h-5 w-5" />,
    },
    {
      title: "Facturación",
      href: "/dashboard/billing",
      icon: <CreditCard className="h-5 w-5" />,
    },
    {
      title: "Configuración",
      href: "/dashboard/settings",
      icon: <Settings className="h-5 w-5" />,
    },
  ]

  return (
    <>
      {/* Mobile menu button */}
      <Button variant="ghost" size="icon" className="md:hidden fixed top-4 left-4 z-50" onClick={toggleMobileSidebar}>
        <Menu className="h-5 w-5" />
      </Button>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="md:hidden fixed inset-0 bg-background/80 backdrop-blur-sm z-40"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={cn(
          "fixed top-0 left-0 z-40 h-full bg-card border-r transition-all duration-300 ease-in-out flex flex-col",
          collapsed ? "w-[70px]" : "w-[250px]",
          mobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0",
        )}
      >
        <div className="flex items-center justify-between h-16 px-4 border-b">
          <div className={cn("flex items-center", collapsed && "justify-center w-full")}>
            <span className={cn("font-bold text-xl text-primary", collapsed && "hidden")}>Gestión Podologia</span>
            <span className={cn("hidden font-bold text-xl text-primary", collapsed && "block")}>PC</span>
          </div>
          <Button variant="ghost" size="icon" onClick={toggleSidebar} className="hidden md:flex">
            <ChevronLeft className={cn("h-5 w-5 transition-transform", collapsed && "rotate-180")} />
          </Button>
        </div>

        <div className="py-4 flex-1">
          <ul className="space-y-2 px-2">
            {menuItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center px-3 py-2 rounded-md transition-colors",
                    "hover:bg-muted",
                    pathname === item.href
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "text-muted-foreground",
                    collapsed && "justify-center",
                  )}
                >
                  {item.icon}
                  <span className={cn("ml-3", collapsed && "hidden")}>{item.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Botón de cerrar sesión */}
        <div className="mt-auto border-t py-4 px-2">
          <Link
            href="/"
            className={cn(
              "flex items-center px-3 py-2 rounded-md transition-colors text-muted-foreground hover:bg-destructive hover:text-destructive-foreground",
              collapsed && "justify-center",
            )}
          >
            <LogOut className="h-5 w-5" />
            <span className={cn("ml-3", collapsed && "hidden")}>Cerrar sesión</span>
          </Link>
        </div>
      </div>
    </>
  )
}

