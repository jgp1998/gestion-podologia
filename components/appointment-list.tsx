"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CalendarIcon, Clock, MoreHorizontal, Edit, Trash2, CheckCircle, XCircle, MessageSquare } from "lucide-react"
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
import { toast } from "@/hooks/use-toast"

interface Appointment {
  id: string
  patientName: string
  patientId: string
  date: string
  time: string
  duration: number
  type: string
  status: "scheduled" | "confirmed" | "completed" | "cancelled"
  notes: string
}

interface AppointmentListProps {
  appointments: Appointment[]
}

export default function AppointmentList({ appointments }: AppointmentListProps) {
  const [selectedAppointment, setSelectedAppointment] = useState<Appointment | null>(null)
  const [confirmDialogOpen, setConfirmDialogOpen] = useState(false)
  const [cancelDialogOpen, setCancelDialogOpen] = useState(false)

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr)
    return date.toLocaleDateString("es-ES", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const getStatusBadge = (status: Appointment["status"]) => {
    switch (status) {
      case "scheduled":
        return (
          <Badge variant="outline" className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300">
            Programada
          </Badge>
        )
      case "confirmed":
        return (
          <Badge variant="outline" className="bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300">
            Confirmada
          </Badge>
        )
      case "completed":
        return (
          <Badge variant="outline" className="bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300">
            Completada
          </Badge>
        )
      case "cancelled":
        return (
          <Badge variant="outline" className="bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300">
            Cancelada
          </Badge>
        )
    }
  }

  const handleConfirmAppointment = () => {
    if (selectedAppointment) {
      // Aquí iría la lógica para confirmar la cita en la base de datos
      toast({
        title: "Cita confirmada",
        description: `La cita con ${selectedAppointment.patientName} ha sido confirmada.`,
      })
      setConfirmDialogOpen(false)
      setSelectedAppointment(null)
    }
  }

  const handleCancelAppointment = () => {
    if (selectedAppointment) {
      // Aquí iría la lógica para cancelar la cita en la base de datos
      toast({
        title: "Cita cancelada",
        description: `La cita con ${selectedAppointment.patientName} ha sido cancelada.`,
        variant: "destructive",
      })
      setCancelDialogOpen(false)
      setSelectedAppointment(null)
    }
  }

  const handleSendReminder = (appointment: Appointment) => {
    // Aquí iría la lógica para enviar un recordatorio al paciente
    toast({
      title: "Recordatorio enviado",
      description: `Se ha enviado un recordatorio a ${appointment.patientName}.`,
    })
  }

  return (
    <div className="space-y-4">
      {appointments.length === 0 ? (
        <div className="text-center py-8 text-muted-foreground">No hay citas programadas para este período.</div>
      ) : (
        appointments.map((appointment) => (
          <div
            key={appointment.id}
            className="flex flex-col md:flex-row md:items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors"
          >
            <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4 md:mb-0">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <CalendarIcon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-medium">{appointment.patientName}</h3>
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-sm text-muted-foreground">
                  <span className="flex items-center">
                    <CalendarIcon className="mr-1 h-3 w-3" />
                    {formatDate(appointment.date)}
                  </span>
                  <span className="flex items-center">
                    <Clock className="mr-1 h-3 w-3" />
                    {appointment.time} ({appointment.duration} min)
                  </span>
                </div>
                <p className="text-sm mt-1">{appointment.type}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 ml-16 md:ml-0">
              {getStatusBadge(appointment.status)}
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
                  <DropdownMenuItem
                    onClick={() => {
                      setSelectedAppointment(appointment)
                      setConfirmDialogOpen(true)
                    }}
                  >
                    <CheckCircle className="mr-2 h-4 w-4" />
                    Confirmar cita
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => {
                      setSelectedAppointment(appointment)
                      setCancelDialogOpen(true)
                    }}
                  >
                    <XCircle className="mr-2 h-4 w-4" />
                    Cancelar cita
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => handleSendReminder(appointment)}>
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Enviar recordatorio
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Edit className="mr-2 h-4 w-4" />
                    Editar cita
                  </DropdownMenuItem>
                  <DropdownMenuItem className="text-destructive focus:text-destructive">
                    <Trash2 className="mr-2 h-4 w-4" />
                    Eliminar cita
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        ))
      )}

      {/* Diálogo de confirmación */}
      <Dialog open={confirmDialogOpen} onOpenChange={setConfirmDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirmar cita</DialogTitle>
            <DialogDescription>
              ¿Estás seguro de que deseas confirmar esta cita? Se enviará una notificación al paciente.
            </DialogDescription>
          </DialogHeader>
          {selectedAppointment && (
            <div className="py-4">
              <p>
                <strong>Paciente:</strong> {selectedAppointment.patientName}
              </p>
              <p>
                <strong>Fecha:</strong> {formatDate(selectedAppointment.date)}
              </p>
              <p>
                <strong>Hora:</strong> {selectedAppointment.time}
              </p>
              <p>
                <strong>Tipo:</strong> {selectedAppointment.type}
              </p>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setConfirmDialogOpen(false)}>
              Cancelar
            </Button>
            <Button onClick={handleConfirmAppointment}>Confirmar</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Diálogo de cancelación */}
      <Dialog open={cancelDialogOpen} onOpenChange={setCancelDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Cancelar cita</DialogTitle>
            <DialogDescription>
              ¿Estás seguro de que deseas cancelar esta cita? Se enviará una notificación al paciente.
            </DialogDescription>
          </DialogHeader>
          {selectedAppointment && (
            <div className="py-4">
              <p>
                <strong>Paciente:</strong> {selectedAppointment.patientName}
              </p>
              <p>
                <strong>Fecha:</strong> {formatDate(selectedAppointment.date)}
              </p>
              <p>
                <strong>Hora:</strong> {selectedAppointment.time}
              </p>
              <p>
                <strong>Tipo:</strong> {selectedAppointment.type}
              </p>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setCancelDialogOpen(false)}>
              Volver
            </Button>
            <Button variant="destructive" onClick={handleCancelAppointment}>
              Cancelar cita
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

