import { Link } from 'react-router-dom';

function Blog() {
    const artigos = [
        {
            id: '1',
            titulo: 'Meus direitos foram violados no trabalho. O que fazer?',
            resumo: 'Saiba quais são os primeiros passos ao identificar uma violação de direitos trabalhistas e como buscar seus direitos.',
            data: '10 de novembro de 2026',
            categoria: 'Trabalhista',
        },
        {
            id: '2',
            titulo: 'Demissão sem justa causa: entenda seus direitos',
            resumo: 'Conheça as verbas rescisórias, prazos e direitos garantidos por lei em casos de demissão sem justa causa.',
            data: '05 de novembro de 2026',
            categoria: 'Trabalhista',
        },
        {
            id: '3',
            titulo: 'Como funciona a guarda compartilhada na prática?',
            resumo: 'Entenda como a guarda compartilhada funciona, quais são os direitos dos pais e o que a lei garante à criança.',
            data: '28 de outubro de 2026',
            categoria: 'Família',
        },
    ]

    return (
        <div className="bg-slate-50 min-h-screen">
            <section className="bg-[#0A1F3D] text-white py-16">
                <div className="max-w-6xl mx-auto px-6">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
                    <p className="text-slate-300 text-lg">
                        Artigos e informações sobre seus direitos.
                    </p>
                </div>
            </section>

            <section className="py-16">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {artigos.map((artigo) => (
                            <article key={artigo.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                                <div className="h-40 bg-[#0A1F3D] flex items-center justify-center">
                                    <span className="text-[#C9A84C] text-5xl">📄</span>
                                </div>
                                <div className="p-6">
                                    <span className="text-xs font-bold text-[#C9A84C] uppercase">
                                        {artigo.categoria}
                                    </span>
                                    <h2 className="text-xl font-bold text-[#0A1F3D] mt-2 mb-2">
                                        {artigo.titulo}
                                    </h2>
                                    <p className="text-slate-600 text-sm mb-4">
                                        {artigo.resumo}
                                    </p>
                                    <div className="flex items-center justify-between text-xs text-slate-500">
                                        <span>{artigo.data}</span>
                                        <Link
                                            to={`/blog/${artigo.id}`}
                                            className="text-[#C9A84C] font-semibold hover:underline"
                                        >
                                            Ler mais →
                                        </Link>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <p className="text-slate-600">
                            Mais artigos em breve. Acompanhe nossas atualizações.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Blog