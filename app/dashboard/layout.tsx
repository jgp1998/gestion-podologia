import type React from "react"
import Sidebar from "@/components/sidebar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen">
        <Sidebar />
      <div className="flex-1 md:ml-[250px]">{children}</div>
 
    </div>
  )
}

