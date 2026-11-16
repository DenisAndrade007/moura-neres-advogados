import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            {/* Hero */}
            <section className="bg-[#0A1F3D] text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-10 right-10 text-[20rem] text-white">⚖️</div>
                </div>
                <div className="max-w-6xl mx-auto px-6 py-28 md:py-36 grid md:grid-cols-2 gap-12 items-center relative">
                    <div>
                        <p className="text-[#C9A84C] font-semibold mb-6 tracking-[0.2em] uppercase text-xs">
                            Advocacia Trabalhista e Generalista
                        </p>
                        <h1 className="font-serif text-4xl md:text-6xl font-bold leading-tight mb-6">
                            Defendendo seus direitos com <span className="text-[#C9A84C]">experiência e dedicação</span>
                        </h1>
                        <p className="text-slate-300 text-lg mb-10 leading-relaxed">
                            Assessoria jurídica personalizada para pessoas e empresas.
                            Atendimento humanizado, estratégia sólida e resultados.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link
                                to="/contato"
                                className="bg-[#C9A84C] text-[#0A1F3D] font-semibold px-8 py-4 rounded shadow-lg hover:bg-[#b8963f] hover:shadow-xl transition-all duration-200"
                            >
                                Fale com um advogado
                            </Link>
                            <Link
                                to="/areas-de-atuacao"
                                className="border border-white/30 text-white font-semibold px-8 py-4 rounded hover:bg-white/10 hover:border-[#C9A84C] transition-all duration-200"
                            >
                                Áreas de atuação
                            </Link>
                        </div>
                    </div>
                    <div className="hidden md:flex justify-center">
                        <div className="relative">
                            <div className="w-80 h-80 bg-[#C9A84C]/10 border border-[#C9A84C]/30 rounded-full flex items-center justify-center backdrop-blur-sm">
                                <span className="text-[#C9A84C] text-8xl">⚖️</span>
                            </div>
                            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#C9A84C]/20 rounded-full blur-2xl"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Áreas de Atuação */}
            <section className="bg-slate-50 py-20">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0A1F3D] mb-4">
                            Áreas de Atuação
                        </h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            Atuamos com foco em Direito Trabalhista, além de outras áreas
                            essenciais para pessoas e empresas.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-[#0A1F3D] text-white p-6 rounded-lg border-2 border-[#C9A84C] relative">
                            <span className="absolute -top-3 left-6 bg-[#C9A84C] text-[#0A1F3D] text-xs font-bold px-3 py-1 rounded">
                                FOCO PRINCIPAL
                            </span>
                            <div className="text-4xl mb-4">👷</div>
                            <h3 className="text-xl font-bold mb-2 text-[#C9A84C]">Trabalhista</h3>
                            <p className="text-sm text-slate-300">
                                Defesa de direitos do trabalhador e assessoria a empresas em
                                questões trabalhistas.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                            <div className="text-4xl mb-4">🏛️</div>
                            <h3 className="text-xl font-bold mb-2 text-[#0A1F3D]">Civil</h3>
                            <p className="text-sm text-slate-600">
                                Contratos, responsabilidade civil, indenizações e questões
                                patrimoniais.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                            <div className="text-4xl mb-4">👨‍👩‍👧</div>
                            <h3 className="text-xl font-bold mb-2 text-[#0A1F3D]">Família</h3>
                            <p className="text-sm text-slate-600">
                                Divórcio, guarda, pensão alimentícia e planejamento familiar.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                            <div className="text-4xl mb-4">💼</div>
                            <h3 className="text-xl font-bold mb-2 text-[#0A1F3D]">Empresarial</h3>
                            <p className="text-sm text-slate-600">
                                Assessoria jurídica para empresas, contratos e compliance.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Por que escolher */}
            <section className="bg-white py-20">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0A1F3D] mb-4">
                            Por que escolher a Moura & Neres Advogados
                        </h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            Compromisso com resultados e atendimento próximo em cada caso.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center p-6">
                            <div className="w-16 h-16 bg-[#0A1F3D] text-[#C9A84C] rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                                🎯
                            </div>
                            <h3 className="text-xl font-bold text-[#0A1F3D] mb-3">Atendimento personalizado</h3>
                            <p className="text-slate-600 text-sm">
                                Cada caso é único. Analisamos sua situação com atenção e
                                traçamos a melhor estratégia.
                            </p>
                        </div>

                        <div className="text-center p-6">
                            <div className="w-16 h-16 bg-[#0A1F3D] text-[#C9A84C] rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                                ⚖️
                            </div>
                            <h3 className="text-xl font-bold text-[#0A1F3D] mb-3">Experiência comprovada</h3>
                            <p className="text-slate-600 text-sm">
                                Atuação sólida em Direito Trabalhista e generalista, com
                                histórico de resultados.
                            </p>
                        </div>

                        <div className="text-center p-6">
                            <div className="w-16 h-16 bg-[#0A1F3D] text-[#C9A84C] rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                                🤝
                            </div>
                            <h3 className="text-xl font-bold text-[#0A1F3D] mb-3">Transparência total</h3>
                            <p className="text-slate-600 text-sm">
                                Comunicação clara sobre prazos, custos e andamento do
                                processo, sem surpresas.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Depoimentos */}
            <section className="bg-slate-50 py-20">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0A1F3D] mb-4">
                            O que nossos clientes dizem
                        </h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            Histórias de quem confiou no nosso trabalho.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <div className="text-[#C9A84C] text-3xl mb-4">"</div>
                            <p className="text-slate-600 mb-6 italic">
                                "Fui demitido de forma injusta e não sabia o que fazer.
                                A Moura & Neres Advogados me orientou em cada etapa e
                                conseguiu meus direitos."
                            </p>
                            <div className="border-t border-slate-200 pt-4">
                                <p className="font-semibold text-[#0A1F3D]">Carlos M.</p>
                                <p className="text-sm text-slate-500">Caso Trabalhista</p>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <div className="text-[#C9A84C] text-3xl mb-4">"</div>
                            <p className="text-slate-600 mb-6 italic">
                                "Precisava de orientação para um contrato da minha empresa.
                                Atendimento rápido, claro e muito profissional."
                            </p>
                            <div className="border-t border-slate-200 pt-4">
                                <p className="font-semibold text-[#0A1F3D]">Ana P.</p>
                                <p className="text-sm text-slate-500">Caso Empresarial</p>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <div className="text-[#C9A84C] text-3xl mb-4">"</div>
                            <p className="text-slate-600 mb-6 italic">
                                "No meu divórcio, o escritório foi humano e técnico ao mesmo
                                tempo. Me senti acolhida e bem representada."
                            </p>
                            <div className="border-t border-slate-200 pt-4">
                                <p className="font-semibold text-[#0A1F3D]">Juliana R.</p>
                                <p className="text-sm text-slate-500">Caso de Família</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA final */}
            <section className="bg-[#0A1F3D] text-white py-20">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
                        Precisa de orientação jurídica?
                    </h2>
                    <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
                        Entre em contato e converse com um advogado.
                        Atendimento rápido, humano e sem compromisso.
                    </p>
                    <Link
                        to="/contato"
                        className="inline-block bg-[#C9A84C] text-[#0A1F3D] font-semibold px-10 py-4 rounded hover:bg-[#b8963f] transition-colors"
                    >
                        Agendar consulta
                    </Link>
                </div>
            </section>
        </div>
    )
}

export default Home