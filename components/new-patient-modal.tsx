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
import { Plus } from "lucide-react"

interface NewPatientModalProps {
  trigger?: React.ReactNode
  onSuccess?: () => void
}

export default function NewPatientModal({ trigger, onSuccess }: NewPatientModalProps) {
  const [open, setOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulación de envío de formulario
    setTimeout(() => {
      setIsSubmitting(false)
      toast({
        title: "Paciente registrado",
        description: "El paciente ha sido registrado correctamente.",
      })
      setOpen(false)
      if (onSuccess) onSuccess()
    }, 1500)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Nuevo paciente
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Registrar nuevo paciente</DialogTitle>
          <DialogDescription>Completa el formulario para añadir un nuevo paciente a tu base de datos</DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 py-4">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Información personal</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">Nombre</Label>
                <Input id="firstName" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Apellidos</Label>
                <Input id="lastName" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="birthdate">Fecha de nacimiento</Label>
                <Input id="birthdate" type="date" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="gender">Género</Label>
                <Select>
                  <SelectTrigger id="gender">
                    <SelectValue placeholder="Seleccionar género" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Masculino</SelectItem>
                    <SelectItem value="female">Femenino</SelectItem>
                    <SelectItem value="other">Otro</SelectItem>
                    <SelectItem value="prefer-not-to-say">Prefiero no decirlo</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Información de contacto</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Teléfono</Label>
                <Input id="phone" type="tel" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="address">Dirección</Label>
                <Input id="address" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="city">Ciudad</Label>
                <Input id="city" />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Información médica</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="allergies">Alergias</Label>
                <Input id="allergies" placeholder="Ninguna conocida" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="conditions">Condiciones médicas</Label>
                <Input id="conditions" placeholder="Diabetes, hipertensión, etc." />
              </div>
              <div className="space-y-2">
                <Label htmlFor="medications">Medicación actual</Label>
                <Input id="medications" placeholder="Nombre, dosis, frecuencia" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="diagnosis">Diagnóstico inicial</Label>
                <Select>
                  <SelectTrigger id="diagnosis">
                    <SelectValue placeholder="Seleccionar diagnóstico" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="nail">Uña encarnada</SelectItem>
                    <SelectItem value="diabetic">Pie diabético</SelectItem>
                    <SelectItem value="plantar">Fascitis plantar</SelectItem>
                    <SelectItem value="fungal">Hongos</SelectItem>
                    <SelectItem value="callus">Callosidades</SelectItem>
                    <SelectItem value="biomechanical">Estudio biomecánico</SelectItem>
                    <SelectItem value="other">Otro</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="notes">Notas adicionales</Label>
              <Textarea id="notes" placeholder="Información relevante sobre el paciente" className="min-h-[100px]" />
            </div>
          </div>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>
              Cancelar
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Registrando..." : "Registrar paciente"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

