function Footer() {
    return (
        <footer className="bg-[#0A1F3D] text-white mt-auto">
            <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
                <div>
                    <h3 className="font-serif text-xl font-bold text-[#C9A84C] mb-3">Moura & Neres Advogados</h3>
                    <p className="text-sm text-slate-300 leading-relaxed">
                        Advocacia trabalhista e generalista com atendimento personalizado e compromisso com resultados.
                    </p>
                </div>
                <div>
                    <h4 className="font-semibold mb-3 text-[#C9A84C] text-sm uppercase tracking-wider">Navegação</h4>
                    <ul className="text-sm text-slate-300 space-y-2">
                        <li>Home</li>
                        <li>Áreas de Atuação</li>
                        <li>Sobre</li>
                        <li>Blog</li>
                        <li>Contato</li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold mb-3 text-[#C9A84C] text-sm uppercase tracking-wider">Contato</h4>
                    <ul className="text-sm text-slate-300 space-y-2">
                        <li>contato@mouraneresadvogados.com.br</li>
                        <li>(61) 99999-9999</li>
                        <li>Brasília – DF</li>
                    </ul>
                </div>
            </div>
            <div className="border-t border-white/10 text-center text-xs text-slate-400 py-5">
                © 2026 Moura & Neres Advogados. Todos os direitos reservados.
            </div>
        </footer>
    )
}

export default Footer