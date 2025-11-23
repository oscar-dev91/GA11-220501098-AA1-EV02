import React from 'react'

export default function Fundamentos(){
  return (
    <section id="fundamentos" className="py-12 bg-white rounded-2xl p-6">
      <h3 className="text-2xl font-bold mb-3">Fundamentos de la Calidad de Software</h3>
      <p className="text-slate-700">
        La calidad se asegura mediante procesos estandarizados (ISO/IEC 25000, CMMI), metodologías (cascada, agile, XP),
        y prácticas como revisiones de diseño, pruebas y documentación. El enfoque debe incluir tanto calidad del proceso como del producto.
      </p>
      <ul className="mt-4 text-sm text-slate-700 list-disc pl-5">
        <li>Modelos: ISO/IEC 25000 (SQuaRE), CMMI, McCall, FURPS.</li>
        <li>Metodologías: SCRUM, TSP/PSP, XP.</li>
        <li>Mediciones: defect density, cobertura, MTTR, tiempo medio entre fallos.</li>
      </ul>
    </section>
  )
}
