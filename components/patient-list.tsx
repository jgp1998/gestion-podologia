"use client"

import { Button } from "@/components/ui/button"
import { MoreHorizontal, Edit, Trash2, FileText, Calendar, MessageSquare } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface PatientListProps {
  filter?: "all" | "recent" | "active"
}

export default function PatientList({ filter = "all" }: PatientListProps) {
  const [selectedPatient, setSelectedPatient] = useState<any | null>(null)
  const [viewMedicalRecord, setViewMedicalRecord] = useState(false)

  // Datos de ejemplo
  const patients = [
    {
      id: "P001",
      name: "Ana García",
      age: 45,
      phone: "612-345-6789",
      email: "ana.garcia@example.com",
      lastVisit: "2025-03-02",
      nextVisit: "2025-03-16",
      diagnosis: "Uña encarnada",
      status: "active",
      medicalRecord: {
        allergies: "Ninguna conocida",
        conditions: "Hipertensión",
        medications: "Enalapril 10mg",
        notes: "Paciente con historial de problemas en las uñas de los pies.",
        treatments: [
          { date: "2025-03-02", procedure: "Tratamiento de uña encarnada", notes: "Primera sesión. Buena evolución." },
          {
            date: "2025-02-15",
            procedure: "Consulta inicial",
            notes: "Diagnóstico de uña encarnada en el dedo gordo del pie derecho.",
          },
        ],
      },
    },
    {
      id: "P002",
      name: "Carlos Rodríguez",
      age: 62,
      phone: "623-456-7890",
      email: "carlos.rodriguez@example.com",
      lastVisit: "2025-03-03",
      nextVisit: "2025-03-17",
      diagnosis: "Pie diabético",
      status: "active",
      medicalRecord: {
        allergies: "Penicilina",
        conditions: "Diabetes tipo 2",
        medications: "Metformina 850mg, Insulina",
        notes: "Paciente diabético con problemas circulatorios en extremidades inferiores.",
        treatments: [
          {
            date: "2025-03-03",
            procedure: "Revisión de pie diabético",
            notes: "Se observa mejoría en la circulación.",
          },
          { date: "2025-02-20", procedure: "Tratamiento preventivo", notes: "Limpieza y cuidado de pies." },
        ],
      },
    },
    {
      id: "P003",
      name: "María López",
      age: 35,
      phone: "634-567-8901",
      email: "maria.lopez@example.com",
      lastVisit: "2025-02-28",
      nextVisit: "2025-03-11",
      diagnosis: "Fascitis plantar",
      status: "active",
      medicalRecord: {
        allergies: "Ninguna conocida",
        conditions: "Ninguna",
        medications: "Ninguna",
        notes: "Paciente con dolor en el talón al caminar, especialmente por las mañanas.",
        treatments: [
          { date: "2025-02-28", procedure: "Terapia física", notes: "Ejercicios de estiramiento recomendados." },
          { date: "2025-02-14", procedure: "Consulta inicial", notes: "Diagnóstico de fascitis plantar." },
        ],
      },
    },
    {
      id: "P004",
      name: "José Martínez",
      age: 50,
      phone: "645-678-9012",
      email: "jose.martinez@example.com",
      lastVisit: "2025-03-05",
      nextVisit: null,
      diagnosis: "Callosidades",
      status: "inactive",
      medicalRecord: {
        allergies: "Sulfamidas",
        conditions: "Artritis",
        medications: "Ibuprofeno 600mg",
        notes: "Paciente con callosidades recurrentes debido a calzado inadecuado.",
        treatments: [
          {
            date: "2025-03-05",
            procedure: "Eliminación de callosidades",
            notes: "Procedimiento completado sin complicaciones.",
          },
          { date: "2025-01-20", procedure: "Consulta inicial", notes: "Diagnóstico de callosidades en ambos pies." },
        ],
      },
    },
    {
      id: "P005",
      name: "Laura Sánchez",
      age: 28,
      phone: "656-789-0123",
      email: "laura.sanchez@example.com",
      lastVisit: "2025-03-01",
      nextVisit: "2025-03-15",
      diagnosis: "Estudio biomecánico",
      status: "active",
      medicalRecord: {
        allergies: "Ninguna conocida",
        conditions: "Ninguna",
        medications: "Ninguna",
        notes: "Paciente deportista con molestias al correr.",
        treatments: [
          {
            date: "2025-03-01",
            procedure: "Estudio biomecánico",
            notes: "Se recomienda el uso de plantillas personalizadas.",
          },
          { date: "2025-02-15", procedure: "Consulta inicial", notes: "Evaluación inicial para estudio biomecánico." },
        ],
      },
    },
  ]

  // Filtrar pacientes según el filtro seleccionado
  const filteredPatients = () => {
    switch (filter) {
      case "recent":
        return patients.slice(0, 3) // Simplemente mostramos los 3 primeros como ejemplo
      case "active":
        return patients.filter((patient) => patient.status === "active")
      default:
        return patients
    }
  }

  const formatDate = (dateStr: string | null) => {
    if (!dateStr) return "No programada"
    const date = new Date(dateStr)
    return date.toLocaleDateString("es-ES", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <div className="space-y-4">
      {filteredPatients().map((patient) => (
        <div
          key={patient.id}
          className="flex flex-col md:flex-row md:items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors"
        >
          <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4 md:mb-0">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="font-bold text-primary">{patient.name.charAt(0)}</span>
            </div>
            <div>
              <h3 className="font-medium">{patient.name}</h3>
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-sm text-muted-foreground">
                <span>ID: {patient.id}</span>
                <span>{patient.age} años</span>
                <span>{patient.diagnosis}</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-sm mt-1">
                <span className="text-muted-foreground">Última visita: {formatDate(patient.lastVisit)}</span>
                {patient.nextVisit && (
                  <Badge variant="outline" className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300">
                    Próxima: {formatDate(patient.nextVisit)}
                  </Badge>
                )}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 ml-16 md:ml-0">
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setSelectedPatient(patient)
                setViewMedicalRecord(true)
              }}
            >
              <FileText className="mr-2 h-4 w-4" />
              Historial
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <MoreHorizontal className="h-4 w-4" />
                  <span className="sr-only">Acciones</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Acciones</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Calendar className="mr-2 h-4 w-4" />
                  Programar cita
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Enviar mensaje
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Edit className="mr-2 h-4 w-4" />
                  Editar paciente
                </DropdownMenuItem>
                <DropdownMenuItem className="text-destructive focus:text-destructive">
                  <Trash2 className="mr-2 h-4 w-4" />
                  Eliminar paciente
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      ))}

      {/* Diálogo de historial médico */}
      <Dialog open={viewMedicalRecord} onOpenChange={setViewMedicalRecord}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>Historial Médico - {selectedPatient?.name}</DialogTitle>
            <DialogDescription>
              ID: {selectedPatient?.id} | {selectedPatient?.age} años | {selectedPatient?.diagnosis}
            </DialogDescription>
          </DialogHeader>

          {selectedPatient && (
            <Tabs defaultValue="summary" className="mt-4">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="summary">Resumen</TabsTrigger>
                <TabsTrigger value="treatments">Tratamientos</TabsTrigger>
                <TabsTrigger value="info">Información</TabsTrigger>
              </TabsList>

              <TabsContent value="summary" className="space-y-4 mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Información médica</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="font-medium">Alergias:</p>
                        <p>{selectedPatient.medicalRecord.allergies}</p>
                      </div>
                      <div>
                        <p className="font-medium">Condiciones médicas:</p>
                        <p>{selectedPatient.medicalRecord.conditions}</p>
                      </div>
                      <div>
                        <p className="font-medium">Medicación actual:</p>
                        <p>{selectedPatient.medicalRecord.medications}</p>
                      </div>
                      <div>
                        <p className="font-medium">Diagnóstico actual:</p>
                        <p>{selectedPatient.diagnosis}</p>
                      </div>
                    </div>
                    <div>
                      <p className="font-medium">Notas:</p>
                      <p>{selectedPatient.medicalRecord.notes}</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Últimos tratamientos</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {selectedPatient.medicalRecord.treatments.slice(0, 3).map((treatment, index) => (
                        <div key={index} className="border-b pb-4 last:border-0 last:pb-0">
                          <div className="flex justify-between">
                            <p className="font-medium">{treatment.procedure}</p>
                            <p className="text-sm text-muted-foreground">{formatDate(treatment.date)}</p>
                          </div>
                          <p className="text-sm mt-1">{treatment.notes}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="treatments" className="space-y-4 mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Historial de tratamientos</CardTitle>
                    <CardDescription>Registro completo de todos los tratamientos realizados</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {selectedPatient.medicalRecord.treatments.map((treatment, index) => (
                        <div key={index} className="border-b pb-4 last:border-0 last:pb-0">
                          <div className="flex justify-between">
                            <p className="font-medium">{treatment.procedure}</p>
                            <p className="text-sm text-muted-foreground">{formatDate(treatment.date)}</p>
                          </div>
                          <p className="text-sm mt-1">{treatment.notes}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <div className="flex justify-end">
                  <Button>
                    <FileText className="mr-2 h-4 w-4" />
                    Añadir nuevo tratamiento
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="info" className="space-y-4 mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Información de contacto</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="font-medium">Teléfono:</p>
                        <p>{selectedPatient.phone}</p>
                      </div>
                      <div>
                        <p className="font-medium">Email:</p>
                        <p>{selectedPatient.email}</p>
                      </div>
                      <div>
                        <p className="font-medium">Última visita:</p>
                        <p>{formatDate(selectedPatient.lastVisit)}</p>
                      </div>
                      <div>
                        <p className="font-medium">Próxima visita:</p>
                        <p>{formatDate(selectedPatient.nextVisit)}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="flex justify-end gap-2">
                  <Button variant="outline">
                    <Calendar className="mr-2 h-4 w-4" />
                    Programar cita
                  </Button>
                  <Button>
                    <Edit className="mr-2 h-4 w-4" />
                    Editar información
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          )}

          <DialogFooter>
            <Button variant="outline" onClick={() => setViewMedicalRecord(false)}>
              Cerrar
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

