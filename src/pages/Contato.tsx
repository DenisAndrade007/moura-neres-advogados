import { useState } from 'react';

function Contato() {
    const [form, setForm] = useState({
        nome: '',
        email: '',
        telefone: '',
        area: '',
        mensagem: '',
    })

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        alert('Formulário enviado! (em breve integração com e-mail)')
        console.log(form)
    }

    return (
        <div className="bg-slate-50 min-h-screen">
            <section className="bg-[#0A1F3D] text-white py-16">
                <div className="max-w-6xl mx-auto px-6">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Entre em Contato</h1>
                    <p className="text-slate-300 text-lg">
                        Estamos prontos para ouvir você. Agende uma consulta ou tire suas dúvidas.
                    </p>
                </div>
            </section>

            <section className="py-16">
                <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
                    {/* Formulário */}
                    <div className="bg-white p-8 rounded-lg shadow-sm">
                        <h2 className="text-2xl font-bold text-[#0A1F3D] mb-6">Envie uma mensagem</h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Nome completo *</label>
                                <input
                                    type="text"
                                    name="nome"
                                    value={form.nome}
                                    onChange={handleChange}
                                    required
                                    className="w-full border border-slate-300 rounded px-4 py-2 focus:outline-none focus:border-[#C9A84C]"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">E-mail *</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full border border-slate-300 rounded px-4 py-2 focus:outline-none focus:border-[#C9A84C]"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Telefone</label>
                                <input
                                    type="tel"
                                    name="telefone"
                                    value={form.telefone}
                                    onChange={handleChange}
                                    className="w-full border border-slate-300 rounded px-4 py-2 focus:outline-none focus:border-[#C9A84C]"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Área de interesse *</label>
                                <select
                                    name="area"
                                    value={form.area}
                                    onChange={handleChange}
                                    required
                                    className="w-full border border-slate-300 rounded px-4 py-2 focus:outline-none focus:border-[#C9A84C]"
                                >
                                    <option value="">Selecione...</option>
                                    <option value="trabalhista">Trabalhista</option>
                                    <option value="civil">Civil</option>
                                    <option value="familia">Família</option>
                                    <option value="empresarial">Empresarial</option>
                                    <option value="outro">Outro</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Mensagem *</label>
                                <textarea
                                    name="mensagem"
                                    value={form.mensagem}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    className="w-full border border-slate-300 rounded px-4 py-2 focus:outline-none focus:border-[#C9A84C]"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-[#C9A84C] text-[#0A1F3D] font-semibold py-3 rounded hover:bg-[#b8963f] transition-colors"
                            >
                                Enviar mensagem
                            </button>
                        </form>
                    </div>

                    {/* Informações */}
                    <div>
                        <h2 className="text-2xl font-bold text-[#0A1F3D] mb-6">Informações de contato</h2>
                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="w-12 h-12 bg-[#0A1F3D] text-[#C9A84C] rounded-full flex items-center justify-center shrink-0">
                                    📧
                                </div>
                                <div>
                                    <h3 className="font-semibold text-[#0A1F3D]">E-mail</h3>
                                    <p className="text-slate-600">contato@mouraneresadvogados.com.br</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-12 h-12 bg-[#0A1F3D] text-[#C9A84C] rounded-full flex items-center justify-center shrink-0">
                                    📞
                                </div>
                                <div>
                                    <h3 className="font-semibold text-[#0A1F3D]">Telefone</h3>
                                    <p className="text-slate-600">(61) 99999-9999</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-12 h-12 bg-[#0A1F3D] text-[#C9A84C] rounded-full flex items-center justify-center shrink-0">
                                    📍
                                </div>
                                <div>
                                    <h3 className="font-semibold text-[#0A1F3D]">Endereço</h3>
                                    <p className="text-slate-600">Brasília – DF</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-12 h-12 bg-[#0A1F3D] text-[#C9A84C] rounded-full flex items-center justify-center shrink-0">
                                    🕐
                                </div>
                                <div>
                                    <h3 className="font-semibold text-[#0A1F3D]">Horário</h3>
                                    <p className="text-slate-600">Segunda a sexta, 9h às 18h</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contato