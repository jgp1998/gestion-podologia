import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Search, Filter, FileText, Users } from "lucide-react"
import PatientList from "@/components/patient-list"
import NewPatientModal from "@/components/new-patient-modal"

export default function PatientsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <div className="container py-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Historial Médico Digital</h1>
              <p className="text-muted-foreground">Gestiona los datos médicos y tratamientos de tus pacientes</p>
            </div>
            <div className="flex gap-2">
              <NewPatientModal />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle>Directorio de pacientes</CardTitle>
                  <CardDescription>Busca y filtra pacientes para acceder a sus historiales médicos</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col md:flex-row gap-4 mb-4">
                    <div className="flex-1 relative">
                      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input type="search" placeholder="Buscar por nombre, ID o diagnóstico..." className="pl-8" />
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="icon">
                        <Filter className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <Tabs defaultValue="all">
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="all">Todos</TabsTrigger>
                      <TabsTrigger value="recent">Recientes</TabsTrigger>
                      <TabsTrigger value="active">En tratamiento</TabsTrigger>
                    </TabsList>
                    <TabsContent value="all" className="mt-4">
                      <PatientList />
                    </TabsContent>
                    <TabsContent value="recent" className="mt-4">
                      <PatientList filter="recent" />
                    </TabsContent>
                    <TabsContent value="active" className="mt-4">
                      <PatientList filter="active" />
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Estadísticas de pacientes</CardTitle>
                  <CardDescription>Resumen de tu base de pacientes</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <span>Total de pacientes</span>
                      </div>
                      <span className="font-bold">245</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-muted-foreground" />
                        <span>Historiales actualizados</span>
                      </div>
                      <span className="font-bold">198</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <span>Nuevos este mes</span>
                      </div>
                      <span className="font-bold">12</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Diagnósticos frecuentes</CardTitle>
                  <CardDescription>Los diagnósticos más comunes en tu clínica</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span>Uña encarnada</span>
                      <span className="font-bold">28%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: "28%" }}></div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span>Pie diabético</span>
                      <span className="font-bold">22%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: "22%" }}></div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span>Fascitis plantar</span>
                      <span className="font-bold">18%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: "18%" }}></div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span>Hongos</span>
                      <span className="font-bold">15%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: "15%" }}></div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span>Callosidades</span>
                      <span className="font-bold">12%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: "12%" }}></div>
                    </div>
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

