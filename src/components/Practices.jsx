import React from 'react'

const practices = [
  { title: 'Revisión de Código', desc: 'Checklist, owner y métricas (defectos/KLOC). Marco: PSP/TSP' },
  { title: 'Pruebas Automatizadas', desc: 'Unitarias, integracion y contract tests. Marco: Agile / ISO 25000' },
  { title: 'Documentación Técnica', desc: 'Plantillas para API, arquitectura y procesos. Marco: ISO / CMMI' },
  { title: 'Integración Continua', desc: 'Pipelines que ejecutan pruebas y reportes. Marco: Agile / XP' },
  { title: 'Métricas y KPIs', desc: 'Defect density, MTTR, cobertura. Marco: ISO/25000, CMMI' },
]

export default function Practices(){
  return (
    <section id="practicas" className="py-12">
      <h3 className="text-2xl font-bold mb-4">Prácticas sugeridas y su referente</h3>
      <div className="grid md:grid-cols-2 gap-4">
        {practices.map((p, i) => (
          <article key={i} className="p-4 bg-white rounded-lg shadow">
            <h4 className="font-semibold">{p.title}</h4>
            <p className="text-sm text-slate-600 mt-1">{p.desc}</p>
          </article>
        ))}
      </div>

      
    </section>
  )
}
