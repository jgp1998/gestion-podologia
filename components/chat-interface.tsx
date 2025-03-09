"use client"

import { useState, useEffect, useRef } from "react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

interface Message {
  id: string
  sender: "user" | "patient"
  text: string
  timestamp: Date
}

export default function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      sender: "patient",
      text: "Hola doctor, tengo una consulta sobre mi próxima cita.",
      timestamp: new Date("2025-03-09T10:15:00"),
    },
    {
      id: "2",
      sender: "user",
      text: "Hola Ana, dime en qué puedo ayudarte.",
      timestamp: new Date("2025-03-09T10:18:00"),
    },
    {
      id: "3",
      sender: "patient",
      text: "¿A qué hora es mi cita mañana? No recuerdo si era a las 10:00 o a las 11:00.",
      timestamp: new Date("2025-03-09T10:20:00"),
    },
    {
      id: "4",
      sender: "user",
      text: "Tu cita está programada para mañana a las 10:30. Te esperamos en la clínica.",
      timestamp: new Date("2025-03-09T10:22:00"),
    },
    {
      id: "5",
      sender: "patient",
      text: "Perfecto, muchas gracias. ¿Debo llevar algo en particular?",
      timestamp: new Date("2025-03-09T10:25:00"),
    },
    {
      id: "6",
      sender: "user",
      text: "Solo trae tu tarjeta de identificación. Recuerda que es una revisión de seguimiento para el tratamiento de uña encarnada.",
      timestamp: new Date("2025-03-09T10:28:00"),
    },
    {
      id: "7",
      sender: "patient",
      text: "¿A qué hora es mi cita mañana?",
      timestamp: new Date("2025-03-09T10:30:00"),
    },
  ])

  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("es-ES", {
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  return (
    <div className="p-4 space-y-4">
      {messages.map((message) => (
        <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
          <div className={`flex gap-2 max-w-[80%] ${message.sender === "user" ? "flex-row-reverse" : "flex-row"}`}>
            {message.sender === "patient" && (
              <Avatar className="h-8 w-8">
                <AvatarFallback className="bg-primary/20 text-primary">AG</AvatarFallback>
              </Avatar>
            )}
            {message.sender === "user" && (
              <Avatar className="h-8 w-8">
                <AvatarFallback className="bg-secondary text-secondary-foreground">JP</AvatarFallback>
              </Avatar>
            )}
            <div>
              <div
                className={`rounded-lg px-4 py-2 ${
                  message.sender === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
                }`}
              >
                <p>{message.text}</p>
              </div>
              <p
                className={`text-xs text-muted-foreground mt-1 ${
                  message.sender === "user" ? "text-right" : "text-left"
                }`}
              >
                {formatTime(message.timestamp)}
              </p>
            </div>
          </div>
        </div>
      ))}
      <div ref={messagesEndRef} />
    </div>
  )
}

