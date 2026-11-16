import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
    const [menuAberto, setMenuAberto] = useState(false)

    const linkBase = 'transition-colors duration-200'
    const linkAtivo = 'text-[#C9A84C] font-semibold'
    const linkInativo = 'text-slate-200 hover:text-[#C9A84C]'

    const links = [
        { to: '/', label: 'Home', end: true },
        { to: '/areas-de-atuacao', label: 'Áreas de Atuação' },
        { to: '/sobre', label: 'Sobre' },
        { to: '/blog', label: 'Blog' },
        { to: '/contato', label: 'Contato' },
    ]

    return (
        <header className="bg-[#0A1F3D] text-white sticky top-0 z-40 shadow-md">
            <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                <NavLink to="/" className="font-serif text-xl md:text-2xl font-bold text-[#C9A84C] tracking-wide">
                    Moura & Neres
                </NavLink>

                {/* Menu desktop */}
                <nav className="hidden md:flex gap-8 text-sm font-medium">
                    {links.map((link) => (
                        <NavLink
                            key={link.to}
                            to={link.to}
                            end={link.end}
                            className={({ isActive }) =>
                                `${linkBase} ${isActive ? linkAtivo : linkInativo}`
                            }
                        >
                            {link.label}
                        </NavLink>
                    ))}
                </nav>

                {/* Botão mobile */}
                <button
                    onClick={() => setMenuAberto(!menuAberto)}
                    className="md:hidden text-[#C9A84C] text-2xl"
                    aria-label="Abrir menu"
                >
                    {menuAberto ? '✕' : '☰'}
                </button>
            </div>

            {/* Menu mobile */}
            {menuAberto && (
                <nav className="md:hidden bg-[#0A1F3D] border-t border-white/10 px-6 py-4 flex flex-col gap-4 text-sm font-medium">
                    {links.map((link) => (
                        <NavLink
                            key={link.to}
                            to={link.to}
                            end={link.end}
                            onClick={() => setMenuAberto(false)}
                            className={({ isActive }) =>
                                `${linkBase} ${isActive ? linkAtivo : linkInativo}`
                            }
                        >
                            {link.label}
                        </NavLink>
                    ))}
                </nav>
            )}
        </header>
    )
}

export default Header