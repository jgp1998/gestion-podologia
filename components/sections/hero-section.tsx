import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
export default function HeroSection() {
    return (
        <section className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                    Gestión integral para tu <span className="text-primary">clínica podológica</span>
                </h1>
                <p className="text-xl text-muted-foreground">
                    Optimiza la administración de citas, historiales médicos y comunicación con pacientes en una sola
                    plataforma.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" asChild>
                        <Link href="/register">
                            Comenzar prueba gratuita <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                        <Link href="/dashboard">Ver demostración</Link>
                    </Button>
                </div>
            </div>
            <div className="flex-1">
                <img
                    src="/podologia.png?height=500&width=600"
                    alt="Gestión Podología Dashboard"
                    className="rounded-lg shadow-xl w-full"
                />
            </div>
        </section>
    )
}