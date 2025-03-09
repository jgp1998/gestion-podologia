"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "@/hooks/use-toast"

export default function PatientForm() {
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
      // Aquí se resetearía el formulario
    }, 1500)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
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

      <div className="flex justify-end gap-2">
        <Button type="button" variant="outline">
          Cancelar
        </Button>
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Registrando..." : "Registrar paciente"}
        </Button>
      </div>
    </form>
  )
}

