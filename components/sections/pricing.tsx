import PricingCard from "@/components/pricing-card"
export default function Pricing() {
    return (
        <section id="pricing" className="py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Planes Simples y Transparentes</h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Elige el plan que mejor se adapte a las necesidades de tu clínica
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    <PricingCard
                        title="Básico"
                        price="20"
                        description="Ideal para podólogos independientes"
                        features={[
                            "Gestión de citas básica",
                            "Historial médico digital",
                            "Recordatorios por email",
                            "Soporte por email",
                        ]}
                        buttonText="Comenzar gratis"
                        buttonVariant="outline"
                    />
                    <PricingCard
                        title="Profesional"
                        price="35"
                        description="Perfecto para clínicas pequeñas"
                        features={[
                            "Todo lo del plan Básico",
                            "Chat en tiempo real",
                            "Facturación integrada",
                            "Informes avanzados",
                            "Soporte prioritario",
                        ]}
                        buttonText="Comenzar gratis"
                        buttonVariant="default"
                        highlighted={true}
                    />
                    <PricingCard
                        title="Empresarial"
                        price="50"
                        description="Para clínicas con múltiples podólogos"
                        features={[
                            "Todo lo del plan Profesional",
                            "Múltiples usuarios",
                            "API personalizada",
                            "Integración con otros sistemas",
                            "Soporte 24/7",
                        ]}
                        buttonText="Contactar ventas"
                        buttonVariant="outline"
                    />
                </div>
            </div>
        </section>
    )
}