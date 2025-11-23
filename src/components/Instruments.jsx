import React from 'react'

export default function Instruments(){
  return (
    <section id="instrumentos" className="py-12 bg-gray-50 rounded-2xl p-6">
      <h3 className="text-2xl font-bold mb-3">Instrumentos de Calidad (plantillas)</h3>

      <ul className="list-disc pl-5 space-y-2 text-lg">
        <li><strong>Matriz de trazabilidad</strong> — ID requisito → caso de prueba → evidencia.</li>
        <li><strong>Plantilla Plan de Pruebas</strong> — Alcance, criterios de entrada/salida, recursos, riesgos.</li>
        <li><strong>Formato de Caso de Prueba</strong> — ID, prereq, pasos, resultado esperado.</li>
        <li><strong>Registro de Defectos</strong> — ID, severidad, reproducibilidad, responsables.</li>
        <li><strong>Checklist de Revisión de Código</strong> — Estándares, seguridad, pruebas unitarias requeridas.</li>
      </ul>

    </section>
  )
}
