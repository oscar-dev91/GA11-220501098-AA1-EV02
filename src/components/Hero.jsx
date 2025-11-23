import React from 'react'

export default function Hero(){
  return (
    <section className="grid lg:grid-cols-2 gap-12 items-center py-12">
      <div>
        <h2 className="text-4xl font-extrabold leading-tight">Aplicación de buenas prácticas de calidad documentadas</h2>
        <p className="mt-4 text-lg text-slate-700">
          Diseña instrumentos, selecciona buenas prácticas, aplica tu proceso personal (PSP/TSP) y documenta el aseguramiento de la calidad.
          Esta landing responde directamente a los objetivos del componente formativo.
        </p>

        <ul className="mt-6 space-y-3">
          <li className="flex gap-3 items-start">
            <div className="w-9 h-9 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">✓</div>
            <div>
              <strong>Diseñar instrumentos de calidad</strong>
              <div className="text-sm text-slate-600">Plantillas, listas de verificación, matrices de trazabilidad.</div>
            </div>
          </li>
        </ul>

        <div className="mt-8 flex gap-3">
          <a href="#practicas" className="rounded-md px-5 py-3 bg-indigo-600 text-white font-medium shadow">Ver prácticas</a>
          <a href="#instrumentos" className="rounded-md px-5 py-3 border border-slate-200 text-sm">Ver instrumentos</a>
        </div>
      </div>

      <div className="rounded-2xl p-8 bg-gradient-to-br from-white via-slate-50 to-sky-50 shadow-lg">
        <h3 className="text-xl font-semibold mb-4">Checklist — Indicadores</h3>
        <p className="text-sm text-slate-600">Diseñado para evidenciar cumplimiento según los criterios de evaluación del componente formativo.</p>
      </div>
    </section>
  )
}
