import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search, Send, PaperclipIcon } from "lucide-react"
import ChatInterface from "@/components/chat-interface"
import MessageTemplates from "@/components/message-templates"

export default function MessagesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <div className="container py-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Comunicación con Pacientes</h1>
              <p className="text-muted-foreground">Gestiona tus conversaciones y envía recordatorios a tus pacientes</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-1 space-y-6">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle>Conversaciones</CardTitle>
                  <CardDescription>Tus chats recientes con pacientes</CardDescription>
                  <div className="relative mt-2">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input type="search" placeholder="Buscar paciente..." className="pl-8" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 p-2 rounded-md bg-primary/10 cursor-pointer">
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                        <span className="font-medium text-primary">AG</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-center">
                          <p className="font-medium truncate">Ana García</p>
                          <p className="text-xs text-muted-foreground">10:30</p>
                        </div>
                        <p className="text-sm truncate text-muted-foreground">¿A qué hora es mi cita mañana?</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-2 rounded-md hover:bg-muted/50 cursor-pointer">
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                        <span className="font-medium text-primary">CR</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-center">
                          <p className="font-medium truncate">Carlos Rodríguez</p>
                          <p className="text-xs text-muted-foreground">Ayer</p>
                        </div>
                        <p className="text-sm truncate text-muted-foreground">Gracias por la atención, doctor.</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-2 rounded-md hover:bg-muted/50 cursor-pointer">
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                        <span className="font-medium text-primary">ML</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-center">
                          <p className="font-medium truncate">María López</p>
                          <p className="text-xs text-muted-foreground">Lun</p>
                        </div>
                        <p className="text-sm truncate text-muted-foreground">
                          ¿Puedo cambiar mi cita para el viernes?
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-2 rounded-md hover:bg-muted/50 cursor-pointer">
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                        <span className="font-medium text-primary">JM</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-center">
                          <p className="font-medium truncate">José Martínez</p>
                          <p className="text-xs text-muted-foreground">Dom</p>
                        </div>
                        <p className="text-sm truncate text-muted-foreground">
                          ¿Qué ejercicios debo hacer para mi fascitis?
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-2 rounded-md hover:bg-muted/50 cursor-pointer">
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                        <span className="font-medium text-primary">LS</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-center">
                          <p className="font-medium truncate">Laura Sánchez</p>
                          <p className="text-xs text-muted-foreground">Sáb</p>
                        </div>
                        <p className="text-sm truncate text-muted-foreground">
                          Las plantillas me están funcionando muy bien.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <MessageTemplates />
            </div>

            <div className="lg:col-span-2 space-y-6">
              <Card className="flex flex-col h-[calc(100vh-13rem)]">
                <CardHeader className="pb-3 border-b">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="font-medium text-primary">AG</span>
                    </div>
                    <div>
                      <CardTitle>Ana García</CardTitle>
                      <CardDescription>Última actividad: Hoy, 10:30</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow overflow-y-auto p-0">
                  <ChatInterface />
                </CardContent>
                <div className="p-4 border-t">
                  <div className="flex gap-2">
                    <Button variant="outline" size="icon" className="shrink-0">
                      <PaperclipIcon className="h-4 w-4" />
                      <span className="sr-only">Adjuntar archivo</span>
                    </Button>
                    <Input placeholder="Escribe un mensaje..." className="flex-grow" />
                    <Button size="icon" className="shrink-0">
                      <Send className="h-4 w-4" />
                      <span className="sr-only">Enviar mensaje</span>
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

