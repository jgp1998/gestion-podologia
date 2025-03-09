"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Copy, Plus } from "lucide-react"
import { toast } from "@/hooks/use-toast"

export default function MessageTemplates() {
  const handleCopyTemplate = (template: string) => {
    navigator.clipboard.writeText(template)
    toast({
      title: "Plantilla copiada",
      description: "La plantilla ha sido copiada al portapapeles.",
    })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Plantillas de mensajes</CardTitle>
        <CardDescription>Mensajes predefinidos para comunicación rápida</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="reminders">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="reminders">Recordatorios</TabsTrigger>
            <TabsTrigger value="care">Cuidados</TabsTrigger>
            <TabsTrigger value="general">General</TabsTrigger>
          </TabsList>

          <TabsContent value="reminders" className="mt-4 space-y-3">
            <div className="border rounded-lg p-3 hover:bg-muted/50 transition-colors">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-medium">Recordatorio de cita</h4>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() =>
                    handleCopyTemplate(
                      "Estimado/a [Nombre], le recordamos que tiene una cita programada para el [Fecha] a las [Hora]. Por favor, confirme su asistencia. Gracias.",
                    )
                  }
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                Estimado/a [Nombre], le recordamos que tiene una cita programada para el [Fecha] a las [Hora]. Por
                favor, confirme su asistencia. Gracias.
              </p>
            </div>

            <div className="border rounded-lg p-3 hover:bg-muted/50 transition-colors">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-medium">Seguimiento post-tratamiento</h4>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() =>
                    handleCopyTemplate(
                      "Estimado/a [Nombre], esperamos que se encuentre bien después de su tratamiento. Le recordamos seguir las indicaciones para una mejor recuperación. Si tiene alguna duda, no dude en contactarnos.",
                    )
                  }
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                Estimado/a [Nombre], esperamos que se encuentre bien después de su tratamiento. Le recordamos seguir las
                indicaciones para una mejor recuperación. Si tiene alguna duda, no dude en contactarnos.
              </p>
            </div>

            <div className="border rounded-lg p-3 hover:bg-muted/50 transition-colors">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-medium">Recordatorio de medicación</h4>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() =>
                    handleCopyTemplate(
                      "Estimado/a [Nombre], le recordamos que debe aplicar la medicación recetada [Frecuencia] durante [Duración]. Es importante seguir el tratamiento completo para obtener los mejores resultados.",
                    )
                  }
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                Estimado/a [Nombre], le recordamos que debe aplicar la medicación recetada [Frecuencia] durante
                [Duración]. Es importante seguir el tratamiento completo para obtener los mejores resultados.
              </p>
            </div>
          </TabsContent>

          <TabsContent value="care" className="mt-4 space-y-3">
            <div className="border rounded-lg p-3 hover:bg-muted/50 transition-colors">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-medium">Cuidado de pies diabéticos</h4>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() =>
                    handleCopyTemplate(
                      "Recuerde revisar sus pies diariamente, mantenerlos limpios y secos, usar calzado adecuado y evitar caminar descalzo. Ante cualquier herida o cambio de coloración, contacte inmediatamente con nuestra clínica.",
                    )
                  }
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                Recuerde revisar sus pies diariamente, mantenerlos limpios y secos, usar calzado adecuado y evitar
                caminar descalzo. Ante cualquier herida o cambio de coloración, contacte inmediatamente con nuestra
                clínica.
              </p>
            </div>

            <div className="border rounded-lg p-3 hover:bg-muted/50 transition-colors">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-medium">Ejercicios para fascitis plantar</h4>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() =>
                    handleCopyTemplate(
                      "Para aliviar su fascitis plantar, realice estos ejercicios 3 veces al día: 1) Estiramiento de pantorrilla, 2) Estiramiento de arco del pie, 3) Rodar una pelota de tenis bajo el pie. Cada ejercicio debe mantenerse 30 segundos y repetirse 3 veces.",
                    )
                  }
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                Para aliviar su fascitis plantar, realice estos ejercicios 3 veces al día: 1) Estiramiento de
                pantorrilla, 2) Estiramiento de arco del pie, 3) Rodar una pelota de tenis bajo el pie. Cada ejercicio
                debe mantenerse 30 segundos y repetirse 3 veces.
              </p>
            </div>

            <div className="border rounded-lg p-3 hover:bg-muted/50 transition-colors">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-medium">Cuidado post-tratamiento de uña</h4>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() =>
                    handleCopyTemplate(
                      "Después del tratamiento de uña encarnada: 1) Mantenga el vendaje seco y limpio durante 24h, 2) Aplique el antiséptico recetado 2 veces al día, 3) Use calzado amplio, 4) Evite actividades deportivas por 3-5 días. Ante cualquier dolor intenso o inflamación, contáctenos.",
                    )
                  }
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                Después del tratamiento de uña encarnada: 1) Mantenga el vendaje seco y limpio durante 24h, 2) Aplique
                el antiséptico recetado 2 veces al día, 3) Use calzado amplio, 4) Evite actividades deportivas por 3-5
                días. Ante cualquier dolor intenso o inflamación, contáctenos.
              </p>
            </div>
          </TabsContent>

          <TabsContent value="general" className="mt-4 space-y-3">
            <div className="border rounded-lg p-3 hover:bg-muted/50 transition-colors">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-medium">Bienvenida</h4>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() =>
                    handleCopyTemplate(
                      "Estimado/a [Nombre], bienvenido/a a Gestión Podología. Estamos encantados de poder atenderle. Si tiene alguna duda sobre nuestros servicios, no dude en consultarnos. Atentamente, Dr. [Tu Nombre].",
                    )
                  }
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                Estimado/a [Nombre], bienvenido/a a Gestión Podología. Estamos encantados de poder atenderle. Si tiene alguna
                duda sobre nuestros servicios, no dude en consultarnos. Atentamente, Dr. [Tu Nombre].
              </p>
            </div>

            <div className="border rounded-lg p-3 hover:bg-muted/50 transition-colors">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-medium">Agradecimiento</h4>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() =>
                    handleCopyTemplate(
                      "Gracias por confiar en nuestros servicios. Su opinión es muy importante para nosotros. Si está satisfecho/a con la atención recibida, le agradecemos que nos recomiende. ¡Que tenga un buen día!",
                    )
                  }
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                Gracias por confiar en nuestros servicios. Su opinión es muy importante para nosotros. Si está
                satisfecho/a con la atención recibida, le agradecemos que nos recomiende. ¡Que tenga un buen día!
              </p>
            </div>

            <div className="border rounded-lg p-3 hover:bg-muted/50 transition-colors">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-medium">Horario de atención</h4>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() =>
                    handleCopyTemplate(
                      "Le informamos que nuestro horario de atención es de lunes a viernes de 9:00 a 13:00 y de 16:00 a 20:00. Sábados de 10:00 a 14:00. Para cualquier urgencia fuera de este horario, puede contactarnos al teléfono de emergencias.",
                    )
                  }
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                Le informamos que nuestro horario de atención es de lunes a viernes de 9:00 a 13:00 y de 16:00 a 20:00.
                Sábados de 10:00 a 14:00. Para cualquier urgencia fuera de este horario, puede contactarnos al teléfono
                de emergencias.
              </p>
            </div>
          </TabsContent>
        </Tabs>

        <Button variant="outline" className="w-full mt-4">
          <Plus className="mr-2 h-4 w-4" />
          Crear nueva plantilla
        </Button>
      </CardContent>
    </Card>
  )
}

