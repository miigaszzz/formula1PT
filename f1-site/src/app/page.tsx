export default function Home() {
  return (
    <section className="text-center">
      <h1 className="text-4xl font-bold mb-4">Bem-vindo ao portal Formula1 Portugal</h1>
      <p className="text-gray-600 mb-6">Projeto em desenvolvimento — setup inicial com Navbar e layout.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="p-4 border rounded-lg">Pistas (em breve)</div>
        <div className="p-4 border rounded-lg">Calendário (em breve)</div>
        <div className="p-4 border rounded-lg">Pilotos (em breve)</div>
        <div className="p-4 border rounded-lg">Equipas (em breve)</div>
        <div className="p-4 border rounded-lg">Classificações (em breve)</div>
      </div>
    </section>
  )
}
