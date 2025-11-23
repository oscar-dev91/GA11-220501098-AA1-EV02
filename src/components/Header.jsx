import React from 'react'

export default function Header(){
  return (
    <header className="max-w-6xl mx-auto p-6 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-md bg-indigo-600 flex items-center justify-center text-white font-bold">OP</div>
        <div>
          <h1 className="text-lg font-semibold">Buenas Prácticas — Calidad de Software</h1>
          <p className="text-sm text-slate-600">Instrumentos · Procesos · Documentación</p>
        </div>
      </div>
      <nav className="flex items-center gap-4">
        <a href="#instrumentos" className="text-sm hover:underline">Instrumentos</a>
        <a href="#practicas" className="text-sm hover:underline">Prácticas</a>
        <a href="#proceso" className="text-sm hover:underline">Proceso Personal</a>
        <a href="#fundamentos" className="text-sm hover:underline">Fundamentos</a>
      </nav>
    </header>
  )
}
