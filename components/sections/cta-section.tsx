import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function CtaSection() {
    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <div className="bg-primary text-primary-foreground rounded-xl p-8 md:p-12 text-center max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Comienza a optimizar tu clínica hoy mismo</h2>
                    <p className="text-xl mb-8 opacity-90">
                        Prueba Gestión Podología gratis durante 14 días. No se requiere tarjeta de crédito.
                    </p>
                    <Button size="lg" variant="secondary" asChild>
                        <Link href="/register">
                            Comenzar prueba gratuita <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>)
}