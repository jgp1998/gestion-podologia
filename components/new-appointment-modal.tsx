"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon, Plus } from "lucide-react"
import { format } from "date-fns"
import { es } from "date-fns/locale"
import { cn } from "@/lib/utils"
import { toast } from "@/hooks/use-toast"
import NewPatientModal from "@/components/new-patient-modal"

interface NewAppointmentModalProps {
  trigger?: React.ReactNode
  patientId?: string
  onSuccess?: () => void
}

export default function NewAppointmentModal({ trigger, patientId, onSuccess }: NewAppointmentModalProps) {
  const [open, setOpen] = useState(false)
  const [date, setDate] = useState<Date>()
  const [selectedPatient, setSelectedPatient] = useState<string | undefined>(patientId)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showNewPatient, setShowNewPatient] = useState(false)

  // Si se proporciona un patientId, actualizar el estado cuando cambie
  useEffect(() => {
    if (patientId) {
      setSelectedPatient(patientId)
    }
  }, [patientId])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulación de envío de formulario
    setTimeout(() => {
      setIsSubmitting(false)
      toast({
        title: "Cita programada",
        description: "La cita ha sido programada correctamente.",
      })
      setOpen(false)
      if (onSuccess) onSuccess()
    }, 1500)
  }

  const handlePatientSelect = (value: string) => {
    if (value === "new") {
      setShowNewPatient(true)
    } else {
      setSelectedPatient(value)
    }
  }

  const handleNewPatientSuccess = () => {
    setShowNewPatient(false)
    // Aquí se podría establecer el ID del nuevo paciente creado
    toast({
      title: "Paciente seleccionado",
      description: "El nuevo paciente ha sido seleccionado para la cita.",
    })
  }

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          {trigger || (
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Nueva cita
            </Button>
          )}
        </DialogTrigger>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>Programar nueva cita</DialogTitle>
            <DialogDescription>Completa el formulario para programar una nueva cita</DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-6 py-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="patient">Paciente</Label>
                <Select value={selectedPatient} onValueChange={handlePatientSelect} required>
                  <SelectTrigger id="patient">
                    <SelectValue placeholder="Seleccionar paciente" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="P001">Ana García</SelectItem>
                    <SelectItem value="P002">Carlos Rodríguez</SelectItem>
                    <SelectItem value="P003">María López</SelectItem>
                    <SelectItem value="P004">José Martínez</SelectItem>
                    <SelectItem value="P005">Laura Sánchez</SelectItem>
                    <SelectItem value="new">+ Nuevo paciente</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="appointmentType">Tipo de cita</Label>
                <Select required>
                  <SelectTrigger id="appointmentType">
                    <SelectValue placeholder="Seleccionar tipo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="initial">Consulta inicial</SelectItem>
                    <SelectItem value="followup">Seguimiento</SelectItem>
                    <SelectItem value="treatment">Tratamiento</SelectItem>
                    <SelectItem value="emergency">Urgencia</SelectItem>
                    <SelectItem value="biomechanical">Estudio biomecánico</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="date">Fecha</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP", { locale: es }) : "Seleccionar fecha"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar mode="single" selected={date} onSelect={setDate} initialFocus locale={es} />
                  </PopoverContent>
                </Popover>
              </div>

              <div className="space-y-2">
                <Label htmlFor="time">Hora</Label>
                <Select required>
                  <SelectTrigger id="time">
                    <SelectValue placeholder="Seleccionar hora" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="09:00">09:00</SelectItem>
                    <SelectItem value="09:30">09:30</SelectItem>
                    <SelectItem value="10:00">10:00</SelectItem>
                    <SelectItem value="10:30">10:30</SelectItem>
                    <SelectItem value="11:00">11:00</SelectItem>
                    <SelectItem value="11:30">11:30</SelectItem>
                    <SelectItem value="12:00">12:00</SelectItem>
                    <SelectItem value="12:30">12:30</SelectItem>
                    <SelectItem value="16:00">16:00</SelectItem>
                    <SelectItem value="16:30">16:30</SelectItem>
                    <SelectItem value="17:00">17:00</SelectItem>
                    <SelectItem value="17:30">17:30</SelectItem>
                    <SelectItem value="18:00">18:00</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="duration">Duración (minutos)</Label>
                <Select defaultValue="30" required>
                  <SelectTrigger id="duration">
                    <SelectValue placeholder="Seleccionar duración" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="15">15 minutos</SelectItem>
                    <SelectItem value="30">30 minutos</SelectItem>
                    <SelectItem value="45">45 minutos</SelectItem>
                    <SelectItem value="60">60 minutos</SelectItem>
                    <SelectItem value="90">90 minutos</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="reminder">Recordatorio</Label>
                <Select defaultValue="email" required>
                  <SelectTrigger id="reminder">
                    <SelectValue placeholder="Tipo de recordatorio" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="email">Email</SelectItem>
                    <SelectItem value="sms">SMS</SelectItem>
                    <SelectItem value="both">Email y SMS</SelectItem>
                    <SelectItem value="none">Sin recordatorio</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="notes">Notas</Label>
              <Textarea
                id="notes"
                placeholder="Añade notas o instrucciones especiales para el paciente"
                className="min-h-[100px]"
              />
            </div>

            <DialogFooter>
              <Button type="button" variant="outline" onClick={() => setOpen(false)}>
                Cancelar
              </Button>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Programando..." : "Programar cita"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* Modal para crear nuevo paciente */}
      {showNewPatient && (
        <NewPatientModal
          trigger={<></>} // Trigger vacío porque lo controlamos programáticamente
          onSuccess={handleNewPatientSuccess}
        />
      )}
    </>
  )
}

