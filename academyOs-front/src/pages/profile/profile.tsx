import { useState } from "react";
import style from "./profile.module.css";

interface UserProfile {
    name: string;
    role: string;
    email: string;
    phone: string;
    department: string;
    joinDate: string;
}

export default function Profile() {
    const [profile, setProfile] = useState<UserProfile>({
        name: "Francis",
        role: "Administrador Geral",
        email: "francis@academyos.com",
        phone: "+244 923 000 000",
        department: "Direção Executiva",
        joinDate: "Janeiro de 2025"
    });

    return (
        <div className={style.container}>
            <header className={style.header}>
                <h1>O Meu Perfil</h1>
                <p>Gerencie as suas informações pessoais e credenciais de acesso</p>
            </header>

            <div className={style.profileGrid}>
                <section className={style.mainCard}>
                    <div className={style.avatarSection}>
                        <div className={style.avatar}>
                            <h2>F</h2>
                        </div>
                        <h2>{profile.name}</h2>
                        <span>{profile.role}</span>
                    </div>

                    <div className={style.infoList}>
                        <div className={style.infoItem}>
                            <span className={style.label}>Departamento</span>
                            <span className={style.value}>{profile.department}</span>
                        </div>
                        <div className={style.infoItem}>
                            <span className={style.label}>Membro desde</span>
                            <span className={style.value}>{profile.joinDate}</span>
                        </div>
                    </div>
                </section>

                <section className={style.detailsCard}>
                    <h2>Informações de Contacto</h2>

                    <form className={style.form} onSubmit={(e) => e.preventDefault()}>
                        <div className={style.inputGroup}>
                            <label>Nome Completo</label>
                            <input
                                type="text"
                                value={profile.name}
                                onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                            />
                        </div>

                        <div className={style.inputGroup}>
                            <label>E-mail Corporativo</label>
                            <input
                                type="email"
                                value={profile.email}
                                onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                            />
                        </div>

                        <div className={style.inputGroup}>
                            <label>Telefone</label>
                            <input
                                type="text"
                                value={profile.phone}
                                onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                            />
                        </div>

                        <div className={style.actions}>
                            <button type="submit" className={style.saveBtn}>
                                Guardar Alterações
                            </button>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    );
}
