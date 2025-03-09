import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarIcon, ClipboardList, MessageSquare, Users, TrendingUp, Clock } from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <span className="font-bold text-xl text-primary">Gestión Podología</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/dashboard" className="text-primary font-medium">
              Dashboard
            </Link>
            <Link href="/dashboard/appointments" className="text-muted-foreground hover:text-primary transition-colors">
              Citas
            </Link>
            <Link href="/dashboard/patients" className="text-muted-foreground hover:text-primary transition-colors">
              Pacientes
            </Link>
            <Link href="/dashboard/messages" className="text-muted-foreground hover:text-primary transition-colors">
              Mensajes
            </Link>
            <Link href="/dashboard/billing" className="text-muted-foreground hover:text-primary transition-colors">
              Facturación
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm">
              <span className="sr-only">Perfil</span>
              <span>Dr. Juan Pérez</span>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <div className="container py-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
              <p className="text-muted-foreground">Bienvenido de nuevo, Dr. Juan Pérez</p>
            </div>
            <div className="flex gap-2">
              <Button>
                <CalendarIcon className="mr-2 h-4 w-4" />
                Nueva cita
              </Button>
              <Button variant="outline">
                <Users className="mr-2 h-4 w-4" />
                Nuevo paciente
              </Button>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Citas hoy</CardTitle>
                <CalendarIcon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12</div>
                <p className="text-xs text-muted-foreground">+4% respecto a ayer</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Pacientes activos</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">245</div>
                <p className="text-xs text-muted-foreground">+12% respecto al mes pasado</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Mensajes sin leer</CardTitle>
                <MessageSquare className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">8</div>
                <p className="text-xs text-muted-foreground">3 nuevos desde ayer</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Ingresos mensuales</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$4,250</div>
                <p className="text-xs text-muted-foreground">+8% respecto al mes pasado</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7 mt-4">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Próximas citas</CardTitle>
                <CardDescription>Tienes 5 citas programadas para hoy</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3, 4, 5].map((_, i) => (
                    <div key={i} className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0">
                      <div className="flex items-center gap-4">
                        <div className="rounded-full bg-primary/10 p-2">
                          <Clock className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium">Ana García</p>
                          <p className="text-sm text-muted-foreground">Tratamiento de uña encarnada</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">10:30 AM</p>
                        <p className="text-sm text-muted-foreground">30 min</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Actividad reciente</CardTitle>
                <CardDescription>Últimas actualizaciones en tu clínica</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="rounded-full bg-primary/10 p-2 h-fit">
                      <Users className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Nuevo paciente registrado</p>
                      <p className="text-sm text-muted-foreground">
                        Carlos Martínez se ha registrado como nuevo paciente
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">Hace 2 horas</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="rounded-full bg-primary/10 p-2 h-fit">
                      <CalendarIcon className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Cita reprogramada</p>
                      <p className="text-sm text-muted-foreground">
                        La cita de María López ha sido reprogramada para mañana
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">Hace 4 horas</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="rounded-full bg-primary/10 p-2 h-fit">
                      <ClipboardList className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Historial actualizado</p>
                      <p className="text-sm text-muted-foreground">
                        Se ha actualizado el historial médico de Juan Rodríguez
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">Hace 6 horas</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-4">
            <Tabs defaultValue="appointments">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="appointments">Citas</TabsTrigger>
                <TabsTrigger value="patients">Pacientes</TabsTrigger>
                <TabsTrigger value="messages">Mensajes</TabsTrigger>
                <TabsTrigger value="reports">Informes</TabsTrigger>
              </TabsList>
              <TabsContent value="appointments" className="mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Gestión de Citas</CardTitle>
                    <CardDescription>Visualiza y gestiona todas tus citas programadas</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Contenido del panel de citas...</p>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="patients" className="mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Gestión de Pacientes</CardTitle>
                    <CardDescription>Administra los historiales médicos y datos de tus pacientes</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Contenido del panel de pacientes...</p>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="messages" className="mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Centro de Mensajes</CardTitle>
                    <CardDescription>Comunícate con tus pacientes de forma eficiente</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Contenido del panel de mensajes...</p>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="reports" className="mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Informes y Estadísticas</CardTitle>
                    <CardDescription>Analiza el rendimiento de tu clínica con datos detallados</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Contenido del panel de informes...</p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
    </div>
  )
}

