function AreasAtuacao() {
    return (
        <div className="bg-slate-50 min-h-screen">
            <section className="bg-[#0A1F3D] text-white py-16">
                <div className="max-w-6xl mx-auto px-6">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Áreas de Atuação</h1>
                    <p className="text-slate-300 text-lg">
                        Conheça as áreas em que atuamos e como podemos ajudar você.
                    </p>
                </div>
            </section>

            <section className="py-16">
                <div className="max-w-6xl mx-auto px-6 space-y-8">
                    {/* Trabalhista */}
                    <div className="bg-white p-8 rounded-lg shadow-sm border-l-4 border-[#C9A84C]">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="text-4xl">👷</div>
                            <div>
                                <h2 className="text-2xl font-bold text-[#0A1F3D]">Direito Trabalhista</h2>
                                <span className="text-xs font-bold text-[#C9A84C] uppercase">Foco principal</span>
                            </div>
                        </div>
                        <p className="text-slate-600 mb-4">
                            Atuamos na defesa dos direitos do trabalhador e na assessoria a empresas
                            em questões trabalhistas, com experiência em:
                        </p>
                        <ul className="grid md:grid-cols-2 gap-2 text-slate-600">
                            <li>• Reclamações trabalhistas</li>
                            <li>• Rescisões e verbas rescisórias</li>
                            <li>• Horas extras e adicional noturno</li>
                            <li>• Assédio moral e sexual</li>
                            <li>• Acidentes de trabalho</li>
                            <li>• Acordos e negociações coletivas</li>
                        </ul>
                    </div>

                    {/* Civil */}
                    <div className="bg-white p-8 rounded-lg shadow-sm">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="text-4xl">🏛️</div>
                            <h2 className="text-2xl font-bold text-[#0A1F3D]">Direito Civil</h2>
                        </div>
                        <p className="text-slate-600 mb-4">
                            Assessoria em questões civis do dia a dia, com foco na resolução
                            de conflitos e proteção patrimonial:
                        </p>
                        <ul className="grid md:grid-cols-2 gap-2 text-slate-600">
                            <li>• Contratos e revisões</li>
                            <li>• Responsabilidade civil</li>
                            <li>• Indenizações por danos</li>
                            <li>• Questões imobiliárias</li>
                            <li>• Cobranças e execuções</li>
                            <li>• Direito do consumidor</li>
                        </ul>
                    </div>

                    {/* Família */}
                    <div className="bg-white p-8 rounded-lg shadow-sm">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="text-4xl">👨‍👩‍👧</div>
                            <h2 className="text-2xl font-bold text-[#0A1F3D]">Direito de Família</h2>
                        </div>
                        <p className="text-slate-600 mb-4">
                            Atendimento humanizado em questões familiares delicadas,
                            com sigilo e respeito:
                        </p>
                        <ul className="grid md:grid-cols-2 gap-2 text-slate-600">
                            <li>• Divórcio e separação</li>
                            <li>• Guarda compartilhada</li>
                            <li>• Pensão alimentícia</li>
                            <li>• Inventário e sucessões</li>
                            <li>• União estável</li>
                            <li>• Planejamento familiar</li>
                        </ul>
                    </div>

                    {/* Empresarial */}
                    <div className="bg-white p-8 rounded-lg shadow-sm">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="text-4xl">💼</div>
                            <h2 className="text-2xl font-bold text-[#0A1F3D]">Direito Empresarial</h2>
                        </div>
                        <p className="text-slate-600 mb-4">
                            Assessoria jurídica para empresas, com foco em segurança
                            jurídica e crescimento sustentável:
                        </p>
                        <ul className="grid md:grid-cols-2 gap-2 text-slate-600">
                            <li>• Constituição de empresas</li>
                            <li>• Contratos empresariais</li>
                            <li>• Compliance e governança</li>
                            <li>• Recuperação judicial</li>
                            <li>• Propriedade intelectual</li>
                            <li>• Consultoria preventiva</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AreasAtuacao