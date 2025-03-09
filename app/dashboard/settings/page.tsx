import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { User, Building2, Bell, Lock, Palette, LinkIcon, Save, Upload } from "lucide-react"

export default function SettingsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <div className="container py-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Configuración</h1>
              <p className="text-muted-foreground">Gestiona tus preferencias y ajustes de la aplicación</p>
            </div>
          </div>

          <Tabs defaultValue="profile" className="space-y-4">
            <TabsList className="grid grid-cols-2 md:grid-cols-6 gap-2">
              <TabsTrigger value="profile" className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span className="hidden md:inline">Perfil</span>
              </TabsTrigger>
              <TabsTrigger value="clinic" className="flex items-center gap-2">
                <Building2 className="h-4 w-4" />
                <span className="hidden md:inline">Clínica</span>
              </TabsTrigger>
              <TabsTrigger value="notifications" className="flex items-center gap-2">
                <Bell className="h-4 w-4" />
                <span className="hidden md:inline">Notificaciones</span>
              </TabsTrigger>
              <TabsTrigger value="security" className="flex items-center gap-2">
                <Lock className="h-4 w-4" />
                <span className="hidden md:inline">Seguridad</span>
              </TabsTrigger>
              <TabsTrigger value="appearance" className="flex items-center gap-2">
                <Palette className="h-4 w-4" />
                <span className="hidden md:inline">Apariencia</span>
              </TabsTrigger>
              <TabsTrigger value="integrations" className="flex items-center gap-2">
                <LinkIcon className="h-4 w-4" />
                <span className="hidden md:inline">Integraciones</span>
              </TabsTrigger>
            </TabsList>

            {/* Perfil */}
            <TabsContent value="profile">
              <Card>
                <CardHeader>
                  <CardTitle>Información de perfil</CardTitle>
                  <CardDescription>Actualiza tu información personal y preferencias de cuenta</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex flex-col items-center gap-4">
                      <div className="w-32 h-32 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-4xl font-bold text-primary">JP</span>
                      </div>
                      <Button variant="outline" size="sm" className="w-full">
                        <Upload className="mr-2 h-4 w-4" />
                        Cambiar foto
                      </Button>
                    </div>
                    <div className="flex-1 space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">Nombre</Label>
                          <Input id="firstName" defaultValue="Juan" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Apellidos</Label>
                          <Input id="lastName" defaultValue="Pérez" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input id="email" type="email" defaultValue="juan.perez@Gestión Podologia.com" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Teléfono</Label>
                          <Input id="phone" type="tel" defaultValue="+34 612 345 678" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="bio">Biografía profesional</Label>
                        <Textarea
                          id="bio"
                          className="min-h-[100px]"
                          defaultValue="Podólogo especializado en biomecánica y tratamiento de pie diabético con más de 10 años de experiencia."
                        />
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Preferencias personales</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="language">Idioma</Label>
                        <Select defaultValue="es">
                          <SelectTrigger id="language">
                            <SelectValue placeholder="Seleccionar idioma" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="es">Español</SelectItem>
                            <SelectItem value="en">English</SelectItem>
                            <SelectItem value="ca">Català</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="timezone">Zona horaria</Label>
                        <Select defaultValue="europe-madrid">
                          <SelectTrigger id="timezone">
                            <SelectValue placeholder="Seleccionar zona horaria" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="europe-madrid">Europa/Madrid (GMT+1)</SelectItem>
                            <SelectItem value="europe-london">Europa/Londres (GMT+0)</SelectItem>
                            <SelectItem value="america-new_york">América/Nueva York (GMT-5)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button>
                    <Save className="mr-2 h-4 w-4" />
                    Guardar cambios
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            {/* Clínica */}
            <TabsContent value="clinic">
              <Card>
                <CardHeader>
                  <CardTitle>Información de la clínica</CardTitle>
                  <CardDescription>Gestiona los datos de tu clínica y horarios de atención</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="clinicName">Nombre de la clínica</Label>
                      <Input id="clinicName" defaultValue="Gestión Podologia Centro Podológico" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="taxId">CIF/NIF</Label>
                      <Input id="taxId" defaultValue="B12345678" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="clinicEmail">Email de contacto</Label>
                      <Input id="clinicEmail" type="email" defaultValue="info@Gestión Podologia.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="clinicPhone">Teléfono</Label>
                      <Input id="clinicPhone" type="tel" defaultValue="+34 912 345 678" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address">Dirección</Label>
                    <Input id="address" defaultValue="Calle Principal 123" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="city">Ciudad</Label>
                      <Input id="city" defaultValue="Madrid" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="postalCode">Código postal</Label>
                      <Input id="postalCode" defaultValue="28001" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="country">País</Label>
                      <Select defaultValue="es">
                        <SelectTrigger id="country">
                          <SelectValue placeholder="Seleccionar país" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="es">España</SelectItem>
                          <SelectItem value="pt">Portugal</SelectItem>
                          <SelectItem value="fr">Francia</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Horario de atención</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Lunes a Viernes</Label>
                        <div className="flex gap-2">
                          <Input placeholder="Hora inicio" defaultValue="09:00" />
                          <Input placeholder="Hora fin" defaultValue="20:00" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label>Sábados</Label>
                        <div className="flex gap-2">
                          <Input placeholder="Hora inicio" defaultValue="10:00" />
                          <Input placeholder="Hora fin" defaultValue="14:00" />
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch id="closed-sundays" defaultChecked />
                      <Label htmlFor="closed-sundays">Cerrado los domingos</Label>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button>
                    <Save className="mr-2 h-4 w-4" />
                    Guardar cambios
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            {/* Notificaciones */}
            <TabsContent value="notifications">
              <Card>
                <CardHeader>
                  <CardTitle>Preferencias de notificaciones</CardTitle>
                  <CardDescription>Configura cómo y cuándo quieres recibir notificaciones</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Notificaciones por email</h3>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="email-appointments">Citas</Label>
                          <p className="text-sm text-muted-foreground">
                            Recibe notificaciones sobre nuevas citas, cambios y cancelaciones
                          </p>
                        </div>
                        <Switch id="email-appointments" defaultChecked />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="email-patients">Pacientes</Label>
                          <p className="text-sm text-muted-foreground">
                            Recibe notificaciones sobre nuevos pacientes y actualizaciones de historiales
                          </p>
                        </div>
                        <Switch id="email-patients" defaultChecked />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="email-billing">Facturación</Label>
                          <p className="text-sm text-muted-foreground">
                            Recibe notificaciones sobre pagos, facturas y asuntos financieros
                          </p>
                        </div>
                        <Switch id="email-billing" defaultChecked />
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Notificaciones SMS</h3>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="sms-appointments">Citas</Label>
                          <p className="text-sm text-muted-foreground">
                            Recibe SMS sobre nuevas citas, cambios y cancelaciones
                          </p>
                        </div>
                        <Switch id="sms-appointments" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="sms-urgent">Mensajes urgentes</Label>
                          <p className="text-sm text-muted-foreground">
                            Recibe SMS para comunicaciones urgentes de pacientes
                          </p>
                        </div>
                        <Switch id="sms-urgent" defaultChecked />
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Recordatorios para pacientes</h3>
                    <div className="space-y-2">
                      <Label htmlFor="reminder-time">Tiempo de antelación para recordatorios</Label>
                      <Select defaultValue="24">
                        <SelectTrigger id="reminder-time">
                          <SelectValue placeholder="Seleccionar tiempo" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="48">48 horas antes</SelectItem>
                          <SelectItem value="24">24 horas antes</SelectItem>
                          <SelectItem value="12">12 horas antes</SelectItem>
                          <SelectItem value="2">2 horas antes</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="reminder-method">Método de recordatorio</Label>
                      <Select defaultValue="email">
                        <SelectTrigger id="reminder-method">
                          <SelectValue placeholder="Seleccionar método" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="email">Email</SelectItem>
                          <SelectItem value="sms">SMS</SelectItem>
                          <SelectItem value="both">Email y SMS</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button>
                    <Save className="mr-2 h-4 w-4" />
                    Guardar cambios
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            {/* Seguridad */}
            <TabsContent value="security">
              <Card>
                <CardHeader>
                  <CardTitle>Seguridad de la cuenta</CardTitle>
                  <CardDescription>Gestiona tu contraseña y opciones de seguridad</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Cambiar contraseña</h3>
                    <div className="grid grid-cols-1 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="current-password">Contraseña actual</Label>
                        <Input id="current-password" type="password" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="new-password">Nueva contraseña</Label>
                        <Input id="new-password" type="password" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="confirm-password">Confirmar nueva contraseña</Label>
                        <Input id="confirm-password" type="password" />
                      </div>
                    </div>
                    <Button className="mt-2">Actualizar contraseña</Button>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Autenticación de dos factores</h3>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label>Autenticación de dos factores (2FA)</Label>
                          <p className="text-sm text-muted-foreground">
                            Añade una capa adicional de seguridad a tu cuenta
                          </p>
                        </div>
                        <Switch id="2fa" />
                      </div>
                    </div>
                    <Button variant="outline" disabled>
                      Configurar 2FA
                    </Button>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Sesiones activas</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <p className="font-medium">Este dispositivo</p>
                          <p className="text-sm text-muted-foreground">Windows • Chrome • Madrid, España</p>
                          <p className="text-xs text-muted-foreground">Última actividad: Ahora mismo</p>
                        </div>
                        <Button variant="outline" size="sm" disabled>
                          Actual
                        </Button>
                      </div>
                      <div className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <p className="font-medium">iPhone 13</p>
                          <p className="text-sm text-muted-foreground">iOS • Safari • Madrid, España</p>
                          <p className="text-xs text-muted-foreground">Última actividad: Hace 2 horas</p>
                        </div>
                        <Button variant="outline" size="sm">
                          Cerrar sesión
                        </Button>
                      </div>
                    </div>
                    <Button variant="outline">Cerrar todas las sesiones</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Apariencia */}
            <TabsContent value="appearance">
              <Card>
                <CardHeader>
                  <CardTitle>Apariencia</CardTitle>
                  <CardDescription>Personaliza la apariencia de la aplicación</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Tema</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="border rounded-lg p-4 cursor-pointer hover:border-primary">
                        <div className="h-20 bg-background border rounded-md mb-2 flex items-center justify-center">
                          <span className="text-foreground">Claro</span>
                        </div>
                        <div className="flex items-center">
                          <input type="radio" id="theme-light" name="theme" className="mr-2" />
                          <Label htmlFor="theme-light">Tema claro</Label>
                        </div>
                      </div>
                      <div className="border rounded-lg p-4 cursor-pointer hover:border-primary">
                        <div className="h-20 bg-black border rounded-md mb-2 flex items-center justify-center">
                          <span className="text-white">Oscuro</span>
                        </div>
                        <div className="flex items-center">
                          <input type="radio" id="theme-dark" name="theme" className="mr-2" />
                          <Label htmlFor="theme-dark">Tema oscuro</Label>
                        </div>
                      </div>
                      <div className="border rounded-lg p-4 cursor-pointer hover:border-primary">
                        <div className="h-20 bg-gradient-to-b from-background to-black border rounded-md mb-2 flex items-center justify-center">
                          <span>Sistema</span>
                        </div>
                        <div className="flex items-center">
                          <input type="radio" id="theme-system" name="theme" className="mr-2" defaultChecked />
                          <Label htmlFor="theme-system">Usar tema del sistema</Label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Personalización</h3>
                    <div className="space-y-2">
                      <Label htmlFor="accent-color">Color de acento</Label>
                      <Select defaultValue="blue">
                        <SelectTrigger id="accent-color">
                          <SelectValue placeholder="Seleccionar color" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="blue">Azul</SelectItem>
                          <SelectItem value="green">Verde</SelectItem>
                          <SelectItem value="purple">Morado</SelectItem>
                          <SelectItem value="orange">Naranja</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="font-size">Tamaño de fuente</Label>
                      <Select defaultValue="medium">
                        <SelectTrigger id="font-size">
                          <SelectValue placeholder="Seleccionar tamaño" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="small">Pequeño</SelectItem>
                          <SelectItem value="medium">Mediano</SelectItem>
                          <SelectItem value="large">Grande</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Diseño</h3>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="compact-mode">Modo compacto</Label>
                          <p className="text-sm text-muted-foreground">Reduce el espaciado y tamaño de los elementos</p>
                        </div>
                        <Switch id="compact-mode" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="animations">Animaciones</Label>
                          <p className="text-sm text-muted-foreground">
                            Habilita o deshabilita las animaciones de la interfaz
                          </p>
                        </div>
                        <Switch id="animations" defaultChecked />
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button>
                    <Save className="mr-2 h-4 w-4" />
                    Guardar cambios
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            {/* Integraciones */}
            <TabsContent value="integrations">
              <Card>
                <CardHeader>
                  <CardTitle>Integraciones</CardTitle>
                  <CardDescription>Conecta Gestión Podologia con otros servicios y aplicaciones</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Pasarelas de pago</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 bg-[#0070BA] rounded-md flex items-center justify-center text-white font-bold">
                            P
                          </div>
                          <div>
                            <p className="font-medium">PayPal</p>
                            <p className="text-sm text-muted-foreground">Procesa pagos online</p>
                          </div>
                        </div>
                        <Button variant="outline">Conectar</Button>
                      </div>
                      <div className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 bg-[#6772E5] rounded-md flex items-center justify-center text-white font-bold">
                            S
                          </div>
                          <div>
                            <p className="font-medium">Stripe</p>
                            <p className="text-sm text-muted-foreground">Procesa pagos con tarjeta</p>
                          </div>
                        </div>
                        <Button variant="outline">Conectar</Button>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Calendario</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 bg-[#4285F4] rounded-md flex items-center justify-center text-white font-bold">
                            G
                          </div>
                          <div>
                            <p className="font-medium">Google Calendar</p>
                            <p className="text-sm text-muted-foreground">Sincroniza tus citas con Google Calendar</p>
                          </div>
                        </div>
                        <Button variant="outline">Conectar</Button>
                      </div>
                      <div className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 bg-[#0078D4] rounded-md flex items-center justify-center text-white font-bold">
                            O
                          </div>
                          <div>
                            <p className="font-medium">Outlook Calendar</p>
                            <p className="text-sm text-muted-foreground">Sincroniza tus citas con Outlook</p>
                          </div>
                        </div>
                        <Button variant="outline">Conectar</Button>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Comunicación</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 bg-[#25D366] rounded-md flex items-center justify-center text-white font-bold">
                            W
                          </div>
                          <div>
                            <p className="font-medium">WhatsApp Business</p>
                            <p className="text-sm text-muted-foreground">Envía recordatorios y mensajes por WhatsApp</p>
                          </div>
                        </div>
                        <Button variant="outline">Conectar</Button>
                      </div>
                      <div className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 bg-[#E01E5A] rounded-md flex items-center justify-center text-white font-bold">
                            T
                          </div>
                          <div>
                            <p className="font-medium">Twilio SMS</p>
                            <p className="text-sm text-muted-foreground">Envía SMS automatizados a tus pacientes</p>
                          </div>
                        </div>
                        <Button variant="outline">Conectar</Button>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Almacenamiento</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 bg-[#0061FF] rounded-md flex items-center justify-center text-white font-bold">
                            D
                          </div>
                          <div>
                            <p className="font-medium">Dropbox</p>
                            <p className="text-sm text-muted-foreground">Almacena y sincroniza documentos e imágenes</p>
                          </div>
                        </div>
                        <Button variant="outline">Conectar</Button>
                      </div>
                      <div className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 bg-[#0F9D58] rounded-md flex items-center justify-center text-white font-bold">
                            G
                          </div>
                          <div>
                            <p className="font-medium">Google Drive</p>
                            <p className="text-sm text-muted-foreground">Almacena y comparte archivos en la nube</p>
                          </div>
                        </div>
                        <Button variant="outline">Conectar</Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button>
                    <Save className="mr-2 h-4 w-4" />
                    Guardar cambios
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}

