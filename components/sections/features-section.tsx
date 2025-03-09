import FeatureCard from "@/components/feature-card"
import { Calendar, Clock, ClipboardList, MessageSquare, CreditCard } from "lucide-react"
export default function FeaturesSection() {
    return (
        <section id="features" className="bg-muted/50 py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Características Principales</h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Todo lo que necesitas para gestionar tu clínica podológica de manera eficiente
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <FeatureCard
                        icon={<Calendar className="h-10 w-10 text-primary" />}
                        title="Gestión de Citas"
                        description="Programa, confirma y cancela citas fácilmente. Envía recordatorios automáticos a tus pacientes."
                    />
                    <FeatureCard
                        icon={<ClipboardList className="h-10 w-10 text-primary" />}
                        title="Historial Médico Digital"
                        description="Registra y actualiza datos médicos de cada paciente. Seguimiento de tratamientos con gráficos."
                    />
                    <FeatureCard
                        icon={<MessageSquare className="h-10 w-10 text-primary" />}
                        title="Comunicación con Pacientes"
                        description="Chat en tiempo real y recordatorios personalizados sobre el cuidado de los pies."
                    />
                    <FeatureCard
                        icon={<CreditCard className="h-10 w-10 text-primary" />}
                        title="Facturación y Pagos"
                        description="Integración con pasarelas de pago para facilitar la facturación de consultas."
                    />
                    <FeatureCard
                        icon={<Clock className="h-10 w-10 text-primary" />}
                        title="Recordatorios Automáticos"
                        description="Notificaciones por correo electrónico y alertas en caso de cambios en citas."
                    />
                    <FeatureCard
                        icon={<ClipboardList className="h-10 w-10 text-primary" />}
                        title="Informes y Estadísticas"
                        description="Visualiza el rendimiento de tu clínica con informes detallados y estadísticas."
                    />
                </div>
            </div>
        </section>
    )
}