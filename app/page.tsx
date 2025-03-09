import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ClipboardList, MessageSquare, CreditCard, ArrowRight } from "lucide-react"
import FeatureCard from "@/components/feature-card"
import PricingCard from "@/components/pricing-card"
import TestimonialCard from "@/components/testimonial-card"
import ThemeToggle from "@/components/theme-toggle"
import Image from "next/image"
export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="container mx-auto px-4 py-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="font-bold text-2xl text-primary">Gestion Podologia</span>
        </div>
        <div className="flex items-center gap-4">
          <ThemeToggle />
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
          <div className="flex items-center gap-2">
            <Button variant="outline" asChild>
              <Link href="/login">Iniciar Sesión</Link>
            </Button>
            <Button asChild>
              <Link href="/register">Registrarse</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
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
              <Link href="#demo">Ver demostración</Link>
            </Button>
          </div>
        </div>
        <div className="flex-1">
        <Image 
            src="/podologia.jpg"
            alt="Gestión Podología Dashboard"
            className="rounded-lg shadow-xl w-full"
            width={200} // Reemplaza con el tamaño deseado
            height={300} // Reemplaza con el tamaño deseado
          />
        </div>
      </section>

      {/* Features Section */}
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

      {/* Pricing Section */}
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

      {/* Testimonials Section */}
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

      {/* CTA Section */}
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
      </section>

      {/* Footer */}
      <footer className="bg-background border-t py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Gestión Podología</h3>
              <p className="text-muted-foreground">
                Plataforma de gestión integral para podólogos y clínicas podológicas.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Producto</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#features" className="text-muted-foreground hover:text-primary transition-colors">
                    Características
                  </Link>
                </li>
                <li>
                  <Link href="#pricing" className="text-muted-foreground hover:text-primary transition-colors">
                    Precios
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Seguridad
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Recursos</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Documentación
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Guías
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Empresa</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Sobre nosotros
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Contacto
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Política de privacidad
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground">
              © {new Date().getFullYear()} Gestión Podología. Todos los derechos reservados.
            </p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <span className="sr-only">Twitter</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <span className="sr-only">Facebook</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

