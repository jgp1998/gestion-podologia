import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar } from "@/components/ui/calendar"
import { Badge } from "@/components/ui/badge"
import { Clock, Filter, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import AppointmentList from "@/components/appointment-list"
import NewAppointmentModal from "@/components/new-appointment-modal"
import LinkVolver from "@/components/link-url"

export default function AppointmentsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <span className="font-bold text-xl text-primary">Gestión Podologia</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="/dashboard" className="text-muted-foreground hover:text-primary transition-colors">
              Dashboard
            </a>
            <a href="/dashboard/appointments" className="text-primary font-medium">
              Citas
            </a>
            <a href="/dashboard/patients" className="text-muted-foreground hover:text-primary transition-colors">
              Pacientes
            </a>
            <a href="/dashboard/messages" className="text-muted-foreground hover:text-primary transition-colors">
              Mensajes
            </a>
            <a href="/dashboard/billing" className="text-muted-foreground hover:text-primary transition-colors">
              Facturación
            </a>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm">
              <span className="sr-only">Perfil</span>
              <span>Dr. Juan Pérez</span>
            </Button>

            <LinkVolver />
          </div>

        </div>
      </header>
      <main className="flex-1">
        <div className="container py-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Gestión de Citas</h1>
              <p className="text-muted-foreground">Programa, gestiona y realiza seguimiento de tus citas</p>
            </div>
            <div className="flex gap-2">
              <NewAppointmentModal />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle>Buscador de citas</CardTitle>
                  <CardDescription>Busca y filtra citas por paciente, fecha o estado</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col md:flex-row gap-4 mb-4">
                    <div className="flex-1 relative">
                      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input type="search" placeholder="Buscar por nombre de paciente..." className="pl-8" />
                    </div>
                    <div className="flex gap-2">
                      <Select>
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="Estado" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">Todos</SelectItem>
                          <SelectItem value="scheduled">Programada</SelectItem>
                          <SelectItem value="confirmed">Confirmada</SelectItem>
                          <SelectItem value="completed">Completada</SelectItem>
                          <SelectItem value="cancelled">Cancelada</SelectItem>
                        </SelectContent>
                      </Select>
                      <Button variant="outline" size="icon">
                        <Filter className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <Tabs defaultValue="upcoming">
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="upcoming">Próximas</TabsTrigger>
                      <TabsTrigger value="today">Hoy</TabsTrigger>
                      <TabsTrigger value="past">Pasadas</TabsTrigger>
                    </TabsList>
                    <TabsContent value="upcoming" className="mt-4">
                      <AppointmentList
                        appointments={[
                          {
                            id: "1",
                            patientName: "Ana García",
                            patientId: "P001",
                            date: "2025-03-10",
                            time: "10:30",
                            duration: 30,
                            type: "Tratamiento de uña encarnada",
                            status: "confirmed",
                            notes: "Primera sesión",
                          },
                          {
                            id: "2",
                            patientName: "Carlos Rodríguez",
                            patientId: "P002",
                            date: "2025-03-10",
                            time: "11:30",
                            duration: 45,
                            type: "Revisión general",
                            status: "scheduled",
                            notes: "Paciente con diabetes",
                          },
                          {
                            id: "3",
                            patientName: "María López",
                            patientId: "P003",
                            date: "2025-03-11",
                            time: "09:00",
                            duration: 60,
                            type: "Tratamiento de hongos",
                            status: "confirmed",
                            notes: "Seguimiento de tratamiento",
                          },
                          {
                            id: "4",
                            patientName: "José Martínez",
                            patientId: "P004",
                            date: "2025-03-12",
                            time: "16:00",
                            duration: 30,
                            type: "Eliminación de callosidades",
                            status: "scheduled",
                            notes: "",
                          },
                          {
                            id: "5",
                            patientName: "Laura Sánchez",
                            patientId: "P005",
                            date: "2025-03-13",
                            time: "12:00",
                            duration: 45,
                            type: "Estudio biomecánico",
                            status: "confirmed",
                            notes: "Traer calzado deportivo",
                          },
                        ]}
                      />
                    </TabsContent>
                    <TabsContent value="today" className="mt-4">
                      <AppointmentList
                        appointments={[
                          {
                            id: "6",
                            patientName: "Pedro Gómez",
                            patientId: "P006",
                            date: "2025-03-09",
                            time: "14:30",
                            duration: 30,
                            type: "Revisión general",
                            status: "confirmed",
                            notes: "",
                          },
                          {
                            id: "7",
                            patientName: "Sofía Fernández",
                            patientId: "P007",
                            date: "2025-03-09",
                            time: "15:30",
                            duration: 45,
                            type: "Tratamiento de uña encarnada",
                            status: "confirmed",
                            notes: "Segunda sesión",
                          },
                          {
                            id: "8",
                            patientName: "Miguel Torres",
                            patientId: "P008",
                            date: "2025-03-09",
                            time: "16:30",
                            duration: 30,
                            type: "Consulta inicial",
                            status: "confirmed",
                            notes: "Nuevo paciente",
                          },
                        ]}
                      />
                    </TabsContent>
                    <TabsContent value="past" className="mt-4">
                      <AppointmentList
                        appointments={[
                          {
                            id: "9",
                            patientName: "Ana García",
                            patientId: "P001",
                            date: "2025-03-02",
                            time: "10:30",
                            duration: 30,
                            type: "Consulta inicial",
                            status: "completed",
                            notes: "Programar seguimiento",
                          },
                          {
                            id: "10",
                            patientName: "Carlos Rodríguez",
                            patientId: "P002",
                            date: "2025-03-03",
                            time: "11:30",
                            duration: 45,
                            type: "Revisión general",
                            status: "completed",
                            notes: "Mejoría notable",
                          },
                          {
                            id: "11",
                            patientName: "José Martínez",
                            patientId: "P004",
                            date: "2025-03-05",
                            time: "16:00",
                            duration: 30,
                            type: "Seguimiento",
                            status: "cancelled",
                            notes: "Cancelado por el paciente",
                          },
                        ]}
                      />
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Calendario</CardTitle>
                  <CardDescription>Vista mensual de tus citas</CardDescription>
                </CardHeader>
                <CardContent>
                  <Calendar mode="single" className="rounded-md border" />
                  <div className="mt-4 space-y-2">
                    <h3 className="font-medium">Leyenda</h3>
                    <div className="flex items-center gap-2">
                      <Badge
                        variant="outline"
                        className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-900"
                      >
                        Programada
                      </Badge>
                      <Badge
                        variant="outline"
                        className="bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 hover:bg-green-100 dark:hover:bg-green-900"
                      >
                        Confirmada
                      </Badge>
                      <Badge
                        variant="outline"
                        className="bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300 hover:bg-red-100 dark:hover:bg-red-900"
                      >
                        Cancelada
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Recordatorios automáticos</CardTitle>
                  <CardDescription>Configura los recordatorios para tus pacientes</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span>24 horas antes</span>
                      </div>
                      <Select defaultValue="email">
                        <SelectTrigger className="w-[140px]">
                          <SelectValue placeholder="Método" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="email">Email</SelectItem>
                          <SelectItem value="sms">SMS</SelectItem>
                          <SelectItem value="both">Ambos</SelectItem>
                          <SelectItem value="none">Ninguno</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span>2 horas antes</span>
                      </div>
                      <Select defaultValue="sms">
                        <SelectTrigger className="w-[140px]">
                          <SelectValue placeholder="Método" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="email">Email</SelectItem>
                          <SelectItem value="sms">SMS</SelectItem>
                          <SelectItem value="both">Ambos</SelectItem>
                          <SelectItem value="none">Ninguno</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span>Después de la cita</span>
                      </div>
                      <Select defaultValue="email">
                        <SelectTrigger className="w-[140px]">
                          <SelectValue placeholder="Método" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="email">Email</SelectItem>
                          <SelectItem value="sms">SMS</SelectItem>
                          <SelectItem value="both">Ambos</SelectItem>
                          <SelectItem value="none">Ninguno</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <Button className="w-full mt-2">Guardar configuración</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

