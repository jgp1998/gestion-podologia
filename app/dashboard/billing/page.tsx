import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Search, Filter, CreditCard, Download, Plus } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import InvoiceList from "@/components/invoice-list"
import PaymentMethodForm from "@/components/payment-method-form"
import NewInvoiceModal from "@/components/new-invoice-modal"

export default function BillingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <span className="font-bold text-xl text-primary">Gestión Podologia</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="/dashboard" className="text-muted-foreground hover:text-primary transition-colors">
              Dashboard
            </a>
            <a href="/dashboard/appointments" className="text-muted-foreground hover:text-primary transition-colors">
              Citas
            </a>
            <a href="/dashboard/patients" className="text-muted-foreground hover:text-primary transition-colors">
              Pacientes
            </a>
            <a href="/dashboard/messages" className="text-muted-foreground hover:text-primary transition-colors">
              Mensajes
            </a>
            <a href="/dashboard/billing" className="text-primary font-medium">
              Facturación
            </a>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm">
              <span className="sr-only">Perfil</span>
              <span>Dr. Juan Pérez</span>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <div className="container py-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Facturación y Pagos</h1>
              <p className="text-muted-foreground">Gestiona facturas, pagos y métodos de pago</p>
            </div>
            <div className="flex gap-2">
              <NewInvoiceModal />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle>Facturas</CardTitle>
                  <CardDescription>Historial de facturas y pagos</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col md:flex-row gap-4 mb-4">
                    <div className="flex-1 relative">
                      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input type="search" placeholder="Buscar por paciente o número de factura..." className="pl-8" />
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="icon">
                        <Filter className="h-4 w-4" />
                      </Button>
                      <Button variant="outline">
                        <Download className="mr-2 h-4 w-4" />
                        Exportar
                      </Button>
                    </div>
                  </div>

                  <Tabs defaultValue="all">
                    <TabsList className="grid w-full grid-cols-4">
                      <TabsTrigger value="all">Todas</TabsTrigger>
                      <TabsTrigger value="pending">Pendientes</TabsTrigger>
                      <TabsTrigger value="paid">Pagadas</TabsTrigger>
                      <TabsTrigger value="overdue">Vencidas</TabsTrigger>
                    </TabsList>
                    <TabsContent value="all" className="mt-4">
                      <InvoiceList />
                    </TabsContent>
                    <TabsContent value="pending" className="mt-4">
                      <InvoiceList filter="pending" />
                    </TabsContent>
                    <TabsContent value="paid" className="mt-4">
                      <InvoiceList filter="paid" />
                    </TabsContent>
                    <TabsContent value="overdue" className="mt-4">
                      <InvoiceList filter="overdue" />
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Crear nueva factura</CardTitle>
                  <CardDescription>Genera una factura para un paciente</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="patient" className="text-sm font-medium">
                          Paciente
                        </label>
                        <select id="patient" className="w-full p-2 border rounded-md">
                          <option value="">Seleccionar paciente</option>
                          <option value="P001">Ana García</option>
                          <option value="P002">Carlos Rodríguez</option>
                          <option value="P003">María López</option>
                          <option value="P004">José Martínez</option>
                          <option value="P005">Laura Sánchez</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="service" className="text-sm font-medium">
                          Servicio
                        </label>
                        <select id="service" className="w-full p-2 border rounded-md">
                          <option value="">Seleccionar servicio</option>
                          <option value="consultation">Consulta inicial (60€)</option>
                          <option value="followup">Seguimiento (45€)</option>
                          <option value="treatment">Tratamiento de uña encarnada (80€)</option>
                          <option value="biomechanical">Estudio biomecánico (120€)</option>
                          <option value="orthotic">Plantillas personalizadas (150€)</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="date" className="text-sm font-medium">
                          Fecha
                        </label>
                        <Input id="date" type="date" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="dueDate" className="text-sm font-medium">
                          Fecha de vencimiento
                        </label>
                        <Input id="dueDate" type="date" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="notes" className="text-sm font-medium">
                        Notas
                      </label>
                      <textarea
                        id="notes"
                        className="w-full p-2 border rounded-md min-h-[100px]"
                        placeholder="Añade notas o detalles adicionales"
                      ></textarea>
                    </div>

                    <div className="flex justify-end gap-2">
                      <Button type="button" variant="outline">
                        Cancelar
                      </Button>
                      <Button type="submit">Crear factura</Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Resumen de facturación</CardTitle>
                  <CardDescription>Estado actual de tus facturas</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Badge
                          variant="outline"
                          className="bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300"
                        >
                          Pagadas
                        </Badge>
                      </div>
                      <span className="font-bold">1.250€</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Badge
                          variant="outline"
                          className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300"
                        >
                          Pendientes
                        </Badge>
                      </div>
                      <span className="font-bold">450€</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300">
                          Vencidas
                        </Badge>
                      </div>
                      <span className="font-bold">120€</span>
                    </div>
                    <div className="pt-2 border-t">
                      <div className="flex items-center justify-between font-bold">
                        <span>Total</span>
                        <span>1.820€</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Métodos de pago</CardTitle>
                  <CardDescription>Configura los métodos de pago aceptados</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 border rounded-md">
                      <div className="flex items-center gap-3">
                        <CreditCard className="h-5 w-5 text-primary" />
                        <div>
                          <p className="font-medium">Tarjeta de crédito/débito</p>
                          <p className="text-sm text-muted-foreground">Visa, Mastercard, American Express</p>
                        </div>
                      </div>
                      <Badge
                        variant="outline"
                        className="bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300"
                      >
                        Activo
                      </Badge>
                    </div>

                    <div className="flex items-center justify-between p-3 border rounded-md">
                      <div className="flex items-center gap-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-primary"
                        >
                          <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                          <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                        </svg>
                        <div>
                          <p className="font-medium">Transferencia bancaria</p>
                          <p className="text-sm text-muted-foreground">Pago directo a cuenta bancaria</p>
                        </div>
                      </div>
                      <Badge
                        variant="outline"
                        className="bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300"
                      >
                        Activo
                      </Badge>
                    </div>

                    <div className="flex items-center justify-between p-3 border rounded-md">
                      <div className="flex items-center gap-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-muted-foreground"
                        >
                          <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"></path>
                          <path d="M3 5v14a2 2 0 0 0 2 2h16v-5"></path>
                          <path d="M18 12a2 2 0 0 0 0 4h4v-4Z"></path>
                        </svg>
                        <div>
                          <p className="font-medium">Efectivo</p>
                          <p className="text-sm text-muted-foreground">Pago en clínica</p>
                        </div>
                      </div>
                      <Badge
                        variant="outline"
                        className="bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300"
                      >
                        Activo
                      </Badge>
                    </div>

                    <div className="flex items-center justify-between p-3 border rounded-md">
                      <div className="flex items-center gap-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-muted-foreground"
                        >
                          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                        </svg>
                        <div>
                          <p className="font-medium">PayPal</p>
                          <p className="text-sm text-muted-foreground">Pago online</p>
                        </div>
                      </div>
                      <Badge variant="outline" className="bg-muted text-muted-foreground">
                        Inactivo
                      </Badge>
                    </div>
                  </div>

                  <Button variant="outline" className="w-full mt-4">
                    <Plus className="mr-2 h-4 w-4" />
                    Añadir método de pago
                  </Button>
                </CardContent>
              </Card>

              <PaymentMethodForm />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

