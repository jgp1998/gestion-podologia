import TestimonialCard from "@/components/testimonial-card"
export default function TestimonialSection() {
    return (
        <section id="testimonials" className="bg-muted/50 py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Lo que dicen nuestros usuarios</h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Profesionales que ya confían en Gestión Podología para gestionar sus clínicas
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <TestimonialCard
                        quote="Gestión Podología ha transformado la gestión de mi clínica. Ahora puedo dedicar más tiempo a mis pacientes y menos a la administración."
                        author="Dra. María Rodríguez"
                        role="Podóloga, Clínica PodoSalud"
                    />
                    <TestimonialCard
                        quote="La función de recordatorios automáticos ha reducido drásticamente las citas perdidas. Mis pacientes están encantados con el sistema."
                        author="Dr. Carlos Méndez"
                        role="Director, Centro Podológico Avanzado"
                    />
                    <TestimonialCard
                        quote="El historial médico digital me permite acceder a toda la información de mis pacientes de forma rápida y segura. Totalmente recomendado."
                        author="Dra. Laura Sánchez"
                        role="Podóloga independiente"
                    />
                </div>
            </div>
        </section>
    )
}