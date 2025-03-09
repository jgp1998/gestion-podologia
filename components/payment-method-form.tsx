"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "@/hooks/use-toast"

export default function PaymentMethodForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulación de envío de formulario
    setTimeout(() => {
      setIsSubmitting(false)
      toast({
        title: "Método de pago configurado",
        description: "La pasarela de pago ha sido configurada correctamente.",
      })
      // Aquí se resetearía el formulario
    }, 1500)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Configurar PayPal</CardTitle>
        <CardDescription>Configura PayPal como método de pago</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email de PayPal</Label>
            <Input id="email" type="email" placeholder="tu@email.com" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="clientId">Client ID</Label>
            <Input id="clientId" placeholder="Obtenido de la cuenta de desarrollador de PayPal" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="clientSecret">Client Secret</Label>
            <Input id="clientSecret" type="password" placeholder="••••••••••••••••" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="mode">Modo</Label>
            <select id="mode" className="w-full p-2 border rounded-md">
              <option value="sandbox">Sandbox (Pruebas)</option>
              <option value="live">Live (Producción)</option>
            </select>
          </div>
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Configurando..." : "Configurar PayPal"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

