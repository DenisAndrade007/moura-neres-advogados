function Sobre() {
    return (
        <div className="bg-slate-50 min-h-screen">
            <section className="bg-[#0A1F3D] text-white py-16">
                <div className="max-w-6xl mx-auto px-6">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Sobre o Escritório</h1>
                    <p className="text-slate-300 text-lg">
                        Conheça nossa história, valores e compromisso com a justiça.
                    </p>
                </div>
            </section>

            <section className="py-16">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                        <div>
                            <h2 className="text-3xl font-bold text-[#0A1F3D] mb-4">Nossa História</h2>
                            <p className="text-slate-600 mb-4">
                                A Moura & Neres Advogados nasceu do compromisso de oferecer
                                assessoria jurídica de excelência, com atendimento humanizado
                                e foco em resultados.
                            </p>
                            <p className="text-slate-600 mb-4">
                                Com atuação destacada em Direito Trabalhista, o escritório
                                também atende nas áreas Civil, de Família e Empresarial,
                                sempre com estratégia sólida e transparência.
                            </p>
                            <p className="text-slate-600">
                                Nosso diferencial é tratar cada caso como único, ouvindo
                                o cliente e construindo a melhor solução jurídica possível.
                            </p>
                        </div>
                        <div className="bg-[#0A1F3D] rounded-lg p-8 text-center">
                            <div className="text-6xl text-[#C9A84C] mb-4">⚖️</div>
                            <p className="text-white text-lg font-semibold">
                                "Justiça com estratégia, atendimento com humanidade."
                            </p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                            <div className="text-4xl mb-4">🎯</div>
                            <h3 className="text-xl font-bold text-[#0A1F3D] mb-2">Missão</h3>
                            <p className="text-slate-600 text-sm">
                                Defender os direitos dos nossos clientes com ética,
                                estratégia e dedicação.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                            <div className="text-4xl mb-4">👁️</div>
                            <h3 className="text-xl font-bold text-[#0A1F3D] mb-2">Visão</h3>
                            <p className="text-slate-600 text-sm">
                                Ser referência em advocacia trabalhista e generalista
                                na região, reconhecida pela excelência.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                            <div className="text-4xl mb-4">🤝</div>
                            <h3 className="text-xl font-bold text-[#0A1F3D] mb-2">Valores</h3>
                            <p className="text-slate-600 text-sm">
                                Ética, transparência, compromisso, respeito e
                                atendimento humanizado.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Sobre