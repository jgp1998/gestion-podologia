"use client"

import { useState } from "react"
import ThemeToggle from "@/components/theme-toggle"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { Menu } from "lucide-react"


export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const closeMenu = () => {
        setIsMenuOpen(false)
    }

    return (
        <header className="container mx-auto px-4 py-6 flex items-center justify-between">
            <div className="flex items-center gap-2">
                <span className="font-bold text-2xl text-primary">Gestión Podología</span>
            </div>
            <div className="flex items-center gap-4">
                <ThemeToggle />

                {/* Navegación para escritorio */}
                <nav className="hidden md:flex items-center gap-6">
                    <Link href="#features" className="text-muted-foreground hover:text-primary transition-colors">
                        Características
                    </Link>
                    <Link href="#pricing" className="text-muted-foreground hover:text-primary transition-colors">
                        Precios
                    </Link>
                    <Link href="#testimonials" className="text-muted-foreground hover:text-primary transition-colors">
                        Testimonios
                    </Link>
                </nav>

                <div className="hidden md:flex items-center gap-2">
                    <Button variant="outline" asChild>
                        <Link href="/login">Iniciar Sesión</Link>
                    </Button>
                    <Button asChild>
                        <Link href="/register">Registrarse</Link>
                    </Button>
                </div>

                {/* Menú móvil */}
                <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                    <SheetTrigger asChild className="md:hidden">
                        <Button variant="ghost" size="icon" aria-label="Menú">
                            <Menu className="h-6 w-6" />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="w-[80%] sm:w-[350px]">
                        <SheetTitle className="DialogTitle">Edit profile</SheetTitle>
                        <div className="flex flex-col h-full">
                            <div className="flex justify-end mb-6">
                                {/* <Button variant="ghost" size="icon" onClick={closeMenu} aria-label="Cerrar menú">
                  <X className="h-6 w-6" />
                </Button> */}
                            </div>
                            <nav className="flex flex-col gap-6 mb-8">
                                <Link
                                    href="#features"
                                    className="text-lg font-medium hover:text-primary transition-colors"
                                    onClick={closeMenu}
                                >
                                    Características
                                </Link>
                                <Link
                                    href="#pricing"
                                    className="text-lg font-medium hover:text-primary transition-colors"
                                    onClick={closeMenu}
                                >
                                    Precios
                                </Link>
                                <Link
                                    href="#testimonials"
                                    className="text-lg font-medium hover:text-primary transition-colors"
                                    onClick={closeMenu}
                                >
                                    Testimonios
                                </Link>
                            </nav>

                            <div className="mt-auto flex flex-col gap-3">
                                <Button variant="outline" asChild className="w-full">
                                    <Link href="/login" onClick={closeMenu}>
                                        Iniciar Sesión
                                    </Link>
                                </Button>
                                <Button asChild className="w-full">
                                    <Link href="/register" onClick={closeMenu}>
                                        Registrarse
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    )
}
