"use client"

import { useEffect } from "react"
import { usePathname, useSearchParams } from "next/navigation"
import nProgress from "nprogress"
import "nprogress/nprogress.css"

// Configuración de la barrita
nProgress.configure({ showSpinner: false, speed: 400, minimum: 0.2 })

export const LoaderProvider = () => {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    // Cuando la ruta cambia, terminamos la animación de la barra
    nProgress.done()
    
    return () => {
      // Cuando empieza a cambiar, iniciamos la barra
      nProgress.start()
    }
  }, [pathname, searchParams])

  return null
}