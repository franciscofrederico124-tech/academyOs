import { NavLink } from 'react-router-dom';
import style from './nav.module.css';

export default function Nav() {
    return (
        <aside className={style.aside}>
            <div className={style.title}>
                <h1>AcademyOs</h1>
            </div>
            <ul>
                <li>
                    <NavLink
                        to="/inicio"
                        className={({ isActive }) => (isActive ? style.active : '')}
                    >
                        <i className="bi bi-house"></i> Início
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/assistente"
                        className={({ isActive }) => (isActive ? style.active : '')}
                    >
                        <i className="bi bi-robot"></i> Assistente
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/gestão"
                        className={({ isActive }) => (isActive ? style.active : '')}
                    >
                        <i className="bi bi-bell"></i> Gestão
                    </NavLink>
                </li>
                {/*
                <li>
                    <NavLink
                        to="/notas"
                        className={({ isActive }) => (isActive ? style.active : '')}
                    >
                        <i className="bi bi-check"></i> Notas
                    </NavLink>
                </li>
                */}
                <li>
                    <NavLink
                        to="/perfil"
                        className={({ isActive }) => (isActive ? style.active : '')}
                    >
                        <i className="bi bi-person"></i> Perfil
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/definições"
                        className={({ isActive }) => (isActive ? style.active : '')}
                    >
                        <i className="bi bi-gear"></i> Definições
                    </NavLink>
                </li>
            </ul>
            <div className={style.profileInfo}>
                <span>
                    <h2 className={style.letter}>F</h2> Francis
                </span>
            </div>
        </aside>
    );
}
