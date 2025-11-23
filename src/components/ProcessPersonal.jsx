import React from 'react'

export default function ProcessPersonal(){
  return (
    <section id="proceso" className="py-12">
      <h3 className="text-2xl font-bold mb-3">Proceso Personal de Desarrollo (PSP)</h3>
      <p className="text-slate-700 mb-4">
        El PSP organiza tu trabajo individual con: planificación, registro de tiempo, registro de defectos, análisis y mejora.
        Implementa: (1) plan de tareas, (2) registro diario de tiempo, (3) registro de defectos por fase, (4) análisis de causa raíz y ajustes.
      </p>

      <ol className="list-decimal pl-5 text-slate-700">
        <li>Planificar: definir tareas y estimaciones.</li>
        <li>Registrar: tiempo y defectos (formato mínimo).</li>
        <li>Analizar: defect density por fase, MTTR.</li>
        <li>Mejorar: acciones correctivas documentadas y revisadas en retros.</li>
      </ol>

    </section>
  )
}
