"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MoreHorizontal, Download, Send, Eye, CreditCard, Trash2 } from "lucide-react"
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

interface Invoice {
  id: string
  patientName: string
  patientId: string
  date: string
  dueDate: string
  amount: number
  status: "paid" | "pending" | "overdue"
  service: string
}

interface InvoiceListProps {
  filter?: "all" | "pending" | "paid" | "overdue"
}

export default function InvoiceList({ filter = "all" }: InvoiceListProps) {
  const [selectedInvoice, setSelectedInvoice] = useState<Invoice | null>(null)
  const [paymentDialogOpen, setPaymentDialogOpen] = useState(false)
  const [viewInvoiceDialogOpen, setViewInvoiceDialogOpen] = useState(false)

  // Datos de ejemplo
  const invoices: Invoice[] = [
    {
      id: "INV-001",
      patientName: "Ana García",
      patientId: "P001",
      date: "2025-03-01",
      dueDate: "2025-03-15",
      amount: 80,
      status: "pending",
      service: "Tratamiento de uña encarnada",
    },
    {
      id: "INV-002",
      patientName: "Carlos Rodríguez",
      patientId: "P002",
      date: "2025-03-02",
      dueDate: "2025-03-16",
      amount: 45,
      status: "paid",
      service: "Consulta de seguimiento",
    },
    {
      id: "INV-003",
      patientName: "María López",
      patientId: "P003",
      date: "2025-02-15",
      dueDate: "2025-03-01",
      amount: 120,
      status: "overdue",
      service: "Estudio biomecánico",
    },
    {
      id: "INV-004",
      patientName: "José Martínez",
      patientId: "P004",
      date: "2025-03-03",
      dueDate: "2025-03-17",
      amount: 60,
      status: "pending",
      service: "Consulta inicial",
    },
    {
      id: "INV-005",
      patientName: "Laura Sánchez",
      patientId: "P005",
      date: "2025-02-28",
      dueDate: "2025-03-14",
      amount: 150,
      status: "paid",
      service: "Plantillas personalizadas",
    },
  ]

  // Filtrar facturas según el filtro seleccionado
  const filteredInvoices = () => {
    if (filter === "all") return invoices
    return invoices.filter((invoice) => invoice.status === filter)
  }

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr)
    return date.toLocaleDateString("es-ES", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const getStatusBadge = (status: Invoice["status"]) => {
    switch (status) {
      case "paid":
        return (
          <Badge variant="outline" className="bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300">
            Pagada
          </Badge>
        )
      case "pending":
        return (
          <Badge variant="outline" className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300">
            Pendiente
          </Badge>
        )
      case "overdue":
        return (
          <Badge variant="outline" className="bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300">
            Vencida
          </Badge>
        )
    }
  }

  const handleProcessPayment = () => {
    if (selectedInvoice) {
      // Aquí iría la lógica para procesar el pago
      toast({
        title: "Pago procesado",
        description: `Se ha procesado el pago de la factura ${selectedInvoice.id}.`,
      })
      setPaymentDialogOpen(false)
      setSelectedInvoice(null)
    }
  }

  const handleSendInvoice = (invoice: Invoice) => {
    // Aquí iría la lógica para enviar la factura por email
    toast({
      title: "Factura enviada",
      description: `La factura ${invoice.id} ha sido enviada a ${invoice.patientName}.`,
    })
  }

  return (
    <div className="space-y-4">
      {filteredInvoices().length === 0 ? (
        <div className="text-center py-8 text-muted-foreground">
          No hay facturas que coincidan con los criterios de búsqueda.
        </div>
      ) : (
        filteredInvoices().map((invoice) => (
          <div
            key={invoice.id}
            className="flex flex-col md:flex-row md:items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors"
          >
            <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4 md:mb-0">
              <div>
                <h3 className="font-medium">{invoice.id}</h3>
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-sm text-muted-foreground">
                  <span>{invoice.patientName}</span>
                  <span>{formatDate(invoice.date)}</span>
                </div>
                <p className="text-sm mt-1">{invoice.service}</p>
              </div>
            </div>
            <div className="flex items-center gap-4 ml-0 md:ml-4">
              <div className="flex flex-col items-end">
                <span className="font-bold">{invoice.amount}€</span>
                <span className="text-sm text-muted-foreground">Vence: {formatDate(invoice.dueDate)}</span>
              </div>
              {getStatusBadge(invoice.status)}
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
                      setSelectedInvoice(invoice)
                      setViewInvoiceDialogOpen(true)
                    }}
                  >
                    <Eye className="mr-2 h-4 w-4" />
                    Ver factura
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => handleSendInvoice(invoice)}>
                    <Send className="mr-2 h-4 w-4" />
                    Enviar por email
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Download className="mr-2 h-4 w-4" />
                    Descargar PDF
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  {invoice.status !== "paid" && (
                    <DropdownMenuItem
                      onClick={() => {
                        setSelectedInvoice(invoice)
                        setPaymentDialogOpen(true)
                      }}
                    >
                      <CreditCard className="mr-2 h-4 w-4" />
                      Procesar pago
                    </DropdownMenuItem>
                  )}
                  <DropdownMenuItem className="text-destructive focus:text-destructive">
                    <Trash2 className="mr-2 h-4 w-4" />
                    Eliminar factura
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        ))
      )}

      {/* Diálogo de pago */}
      <Dialog open={paymentDialogOpen} onOpenChange={setPaymentDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Procesar pago</DialogTitle>
            <DialogDescription>Selecciona un método de pago para procesar la factura.</DialogDescription>
          </DialogHeader>
          {selectedInvoice && (
            <div className="py-4">
              <div className="flex justify-between mb-4">
                <div>
                  <p className="font-medium">{selectedInvoice.id}</p>
                  <p className="text-sm text-muted-foreground">{selectedInvoice.patientName}</p>
                </div>
                <p className="font-bold">{selectedInvoice.amount}€</p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <input type="radio" id="card" name="payment" className="h-4 w-4" defaultChecked />
                  <label htmlFor="card" className="text-sm font-medium">
                    Tarjeta de crédito/débito
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="radio" id="transfer" name="payment" className="h-4 w-4" />
                  <label htmlFor="transfer" className="text-sm font-medium">
                    Transferencia bancaria
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="radio" id="cash" name="payment" className="h-4 w-4" />
                  <label htmlFor="cash" className="text-sm font-medium">
                    Efectivo
                  </label>
                </div>
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setPaymentDialogOpen(false)}>
              Cancelar
            </Button>
            <Button onClick={handleProcessPayment}>Procesar pago</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Diálogo de vista de factura */}
      <Dialog open={viewInvoiceDialogOpen} onOpenChange={setViewInvoiceDialogOpen}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>Factura {selectedInvoice?.id}</DialogTitle>
            <DialogDescription>Detalles de la factura</DialogDescription>
          </DialogHeader>
          {selectedInvoice && (
            <div className="py-4">
              <div className="flex justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold">Gestión Podología</h3>
                  <p className="text-muted-foreground">Clínica Podológica</p>
                  <p className="text-muted-foreground">Calle Principal 123</p>
                  <p className="text-muted-foreground">28001 Madrid</p>
                </div>
                <div className="text-right">
                  <p className="text-xl font-bold">FACTURA</p>
                  <p className="text-muted-foreground">Nº: {selectedInvoice.id}</p>
                  <p className="text-muted-foreground">Fecha: {formatDate(selectedInvoice.date)}</p>
                  <p className="text-muted-foreground">Vencimiento: {formatDate(selectedInvoice.dueDate)}</p>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-bold mb-2">Cliente</h4>
                <p>{selectedInvoice.patientName}</p>
                <p className="text-muted-foreground">ID: {selectedInvoice.patientId}</p>
              </div>

              <div className="mb-6">
                <h4 className="font-bold mb-2">Detalles</h4>
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2">Descripción</th>
                      <th className="text-right py-2">Importe</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-2">{selectedInvoice.service}</td>
                      <td className="text-right py-2">{selectedInvoice.amount}€</td>
                    </tr>
                    <tr>
                      <td className="py-2 font-bold">Total</td>
                      <td className="text-right py-2 font-bold">{selectedInvoice.amount}€</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mb-6">
                <h4 className="font-bold mb-2">Estado</h4>
                <div>{getStatusBadge(selectedInvoice.status)}</div>
              </div>

              <div>
                <h4 className="font-bold mb-2">Métodos de pago</h4>
                <p className="text-muted-foreground">Transferencia bancaria: ES12 3456 7890 1234 5678 9012</p>
                <p className="text-muted-foreground">
                  Tarjeta de crédito/débito: Aceptamos Visa, Mastercard y American Express
                </p>
                <p className="text-muted-foreground">Efectivo: Pago en clínica</p>
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setViewInvoiceDialogOpen(false)}>
              Cerrar
            </Button>
            <Button>
              <Download className="mr-2 h-4 w-4" />
              Descargar PDF
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

