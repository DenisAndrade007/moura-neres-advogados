import { Link, useParams } from 'react-router-dom';

const artigos = [
    {
        id: '1',
        titulo: 'Meus direitos foram violados no trabalho. O que fazer?',
        categoria: 'Trabalhista',
        data: '10 de novembro de 2026',
        conteudo: [
            'Se você acredita que seus direitos trabalhistas foram violados, o primeiro passo é reunir provas. Documentos, e-mails, mensagens, testemunhas e registros de ponto são fundamentais.',
            'Em seguida, procure orientação jurídica especializada. Um advogado trabalhista vai analisar seu caso e indicar as melhores estratégias, seja por meio de negociação, acordo ou reclamação trabalhista.',
            'Lembre-se: o prazo para reclamar direitos trabalhistas é de até 2 anos após o término do contrato de trabalho. Não deixe para depois.',
        ],
    },
    {
        id: '2',
        titulo: 'Demissão sem justa causa: entenda seus direitos',
        categoria: 'Trabalhista',
        data: '05 de novembro de 2026',
        conteudo: [
            'Na demissão sem justa causa, o trabalhador tem direito a uma série de verbas rescisórias: saldo de salário, aviso prévio, férias vencidas e proporcionais, 13º salário proporcional, FGTS e multa de 40% sobre o FGTS.',
            'Além disso, o trabalhador pode sacar o FGTS e solicitar o seguro-desemprego, desde que cumpra os requisitos previstos em lei.',
            'É importante conferir se todos os valores foram pagos corretamente. Em caso de dúvida, procure um advogado trabalhista.',
        ],
    },
    {
        id: '3',
        titulo: 'Como funciona a guarda compartilhada na prática?',
        categoria: 'Família',
        data: '28 de outubro de 2026',
        conteudo: [
            'A guarda compartilhada é o modelo em que ambos os pais participam ativamente das decisões e da rotina dos filhos, mesmo que a criança resida com um deles na maior parte do tempo.',
            'Na prática, a guarda compartilhada exige diálogo e cooperação entre os pais. O objetivo é garantir o bem-estar da criança e o convívio com ambos.',
            'O juiz pode definir a guarda compartilhada mesmo que um dos pais não concorde, desde que seja o melhor para a criança. Em casos de violência ou risco, a guarda pode ser unilateral.',
        ],
    },
]

function Artigo() {
    const { id } = useParams()
    const artigo = artigos.find((a) => a.id === id)

    if (!artigo) {
        return (
            <div className="max-w-3xl mx-auto px-6 py-24 text-center">
                <h1 className="text-3xl font-bold text-[#0A1F3D] mb-4">Artigo não encontrado</h1>
                <Link to="/blog" className="text-[#C9A84C] font-semibold hover:underline">
                    ← Voltar para o Blog
                </Link>
            </div>
        )
    }

    return (
        <div className="bg-slate-50 min-h-screen">
            <section className="bg-[#0A1F3D] text-white py-16">
                <div className="max-w-3xl mx-auto px-6">
                    <Link to="/blog" className="text-[#C9A84C] text-sm font-semibold hover:underline">
                        ← Voltar para o Blog
                    </Link>
                    <span className="block text-[#C9A84C] text-xs font-bold uppercase mt-4 mb-2">
                        {artigo.categoria}
                    </span>
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">{artigo.titulo}</h1>
                    <p className="text-slate-400 text-sm">{artigo.data}</p>
                </div>
            </section>

            <section className="py-16">
                <div className="max-w-3xl mx-auto px-6">
                    <div className="bg-white p-8 rounded-lg shadow-sm space-y-6">
                        {artigo.conteudo.map((paragrafo, index) => (
                            <p key={index} className="text-slate-700 leading-relaxed">
                                {paragrafo}
                            </p>
                        ))}
                    </div>

                    <div className="mt-8 bg-[#0A1F3D] p-8 rounded-lg text-center">
                        <p className="text-white mb-4">Precisa de ajuda com um caso parecido?</p>
                        <Link
                            to="/contato"
                            className="inline-block bg-[#C9A84C] text-[#0A1F3D] font-semibold px-8 py-3 rounded hover:bg-[#b8963f] transition-colors"
                        >
                            Fale com um advogado
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Artigo