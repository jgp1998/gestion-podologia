"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
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
import { toast } from "@/hooks/use-toast"
import { Plus, Calendar } from "lucide-react"
import { format } from "date-fns"
import { es } from "date-fns/locale"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar as CalendarComponent } from "@/components/ui/calendar"
import { cn } from "@/lib/utils"
import { useEffect } from "react"

interface NewInvoiceModalProps {
  trigger?: React.ReactNode
  patientId?: string
  onSuccess?: () => void
}

export default function NewInvoiceModal({ trigger, patientId, onSuccess }: NewInvoiceModalProps) {
  const [open, setOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [selectedPatient, setSelectedPatient] = useState<string | undefined>(patientId)
  const [selectedService, setSelectedService] = useState<string>("")
  const [amount, setAmount] = useState<string>("")
  const [invoiceDate, setInvoiceDate] = useState<Date>(new Date())
  const [dueDate, setDueDate] = useState<Date | undefined>(new Date(new Date().setDate(new Date().getDate() + 15)))
  const [notes, setNotes] = useState<string>("")
  const [status, setStatus] = useState<string>("pending")

  // Actualizar el paciente seleccionado si se proporciona un ID
  useEffect(() => {
    if (patientId) {
      setSelectedPatient(patientId)
    }
  }, [patientId])

  // Actualizar el monto basado en el servicio seleccionado
  const handleServiceChange = (value: string) => {
    setSelectedService(value)

    // Establecer el monto según el servicio seleccionado
    switch (value) {
      case "consultation":
        setAmount("60")
        break
      case "followup":
        setAmount("45")
        break
      case "treatment":
        setAmount("80")
        break
      case "biomechanical":
        setAmount("120")
        break
      case "orthotic":
        setAmount("150")
        break
      default:
        setAmount("")
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Validación básica
    if (!selectedPatient || !selectedService || !amount || !invoiceDate || !dueDate) {
      toast({
        title: "Error",
        description: "Por favor, completa todos los campos obligatorios.",
        variant: "destructive",
      })
      setIsSubmitting(false)
      return
    }

    // Simulación de envío de formulario
    setTimeout(() => {
      setIsSubmitting(false)
      toast({
        title: "Factura creada",
        description: "La factura ha sido creada correctamente.",
      })
      setOpen(false)
      resetForm()
      if (onSuccess) onSuccess()
    }, 1500)
  }

  const resetForm = () => {
    setSelectedPatient(patientId)
    setSelectedService("")
    setAmount("")
    setInvoiceDate(new Date())
    setDueDate(new Date(new Date().setDate(new Date().getDate() + 15)))
    setNotes("")
    setStatus("pending")
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Nueva factura
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>Crear nueva factura</DialogTitle>
          <DialogDescription>Completa el formulario para generar una factura para un paciente</DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 py-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="patient">Paciente</Label>
              <Select value={selectedPatient} onValueChange={setSelectedPatient} required>
                <SelectTrigger id="patient">
                  <SelectValue placeholder="Seleccionar paciente" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="P001">Ana García</SelectItem>
                  <SelectItem value="P002">Carlos Rodríguez</SelectItem>
                  <SelectItem value="P003">María López</SelectItem>
                  <SelectItem value="P004">José Martínez</SelectItem>
                  <SelectItem value="P005">Laura Sánchez</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="service">Servicio</Label>
              <Select value={selectedService} onValueChange={handleServiceChange} required>
                <SelectTrigger id="service">
                  <SelectValue placeholder="Seleccionar servicio" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="consultation">Consulta inicial (60€)</SelectItem>
                  <SelectItem value="followup">Seguimiento (45€)</SelectItem>
                  <SelectItem value="treatment">Tratamiento de uña encarnada (80€)</SelectItem>
                  <SelectItem value="biomechanical">Estudio biomecánico (120€)</SelectItem>
                  <SelectItem value="orthotic">Plantillas personalizadas (150€)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="amount">Importe (€)</Label>
              <Input
                id="amount"
                type="number"
                min="0"
                step="0.01"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="status">Estado</Label>
              <Select value={status} onValueChange={setStatus} required>
                <SelectTrigger id="status">
                  <SelectValue placeholder="Seleccionar estado" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pending">Pendiente</SelectItem>
                  <SelectItem value="paid">Pagada</SelectItem>
                  <SelectItem value="overdue">Vencida</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="date">Fecha de emisión</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !invoiceDate && "text-muted-foreground",
                    )}
                  >
                    <Calendar className="mr-2 h-4 w-4" />
                    {invoiceDate ? format(invoiceDate, "PPP", { locale: es }) : "Seleccionar fecha"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <CalendarComponent
                    mode="single"
                    selected={invoiceDate}
                    onSelect={(date) => date && setInvoiceDate(date)}
                    initialFocus
                    locale={es}
                  />
                </PopoverContent>
              </Popover>
            </div>

            <div className="space-y-2">
              <Label htmlFor="dueDate">Fecha de vencimiento</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn("w-full justify-start text-left font-normal", !dueDate && "text-muted-foreground")}
                  >
                    <Calendar className="mr-2 h-4 w-4" />
                    {dueDate ? format(dueDate, "PPP", { locale: es }) : "Seleccionar fecha"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <CalendarComponent
                    mode="single"
                    selected={dueDate}
                    onSelect={(date) => date && setDueDate(date)}
                    initialFocus
                    locale={es}
                    fromDate={invoiceDate}
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="notes">Notas</Label>
            <Textarea
              id="notes"
              placeholder="Añade notas o detalles adicionales para esta factura"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="min-h-[100px]"
            />
          </div>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>
              Cancelar
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Creando..." : "Crear factura"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

