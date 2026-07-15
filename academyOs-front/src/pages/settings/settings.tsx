import { useState, ChangeEvent } from "react";
import style from "./settings.module.css";

export default function Definicoes() {
    const [notifications, setNotifications] = useState<boolean>(true);
    const [lightMode, setLightMode] = useState<boolean>(true);
    const [attendanceAlerts, setAttendanceAlerts] = useState<boolean>(true);
    const [notifyGuardians, setNotifyGuardians] = useState<boolean>(true);
    const [memberManagement, setMemberManagement] = useState<boolean>(false);
    const [enrollmentTarget, setEnrollmentTarget] = useState<string>("1500");

    const handleTargetChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setEnrollmentTarget(e.target.value);
    };

    return (
        <div className={style.container}>
            <header className={style.header}>
                <h1>Definições</h1>
                <p>Ajuste as preferências operacionais e operativas do ecossistema</p>
            </header>

            <div className={style.bentoGrid}>

                <div className={style.bentoBox} onClick={() => setLightMode(!lightMode)}>
                    <h2 className={style.boxTitle}>Preferências Visuais</h2>

                    <div className={style.controlRow}>
                        <div className={style.rowInfo}>
                            <div className={style.iconBadge}>
                                <i className="bi bi-brightness-high-fill"></i>
                            </div>
                            <div>
                                <h3>Modo Claro</h3>
                                <p>Alternar esquema cromático da plataforma</p>
                            </div>
                        </div>
                        <label className={style.switch} onClick={(e) => e.stopPropagation()}>
                            <input
                                type="checkbox"
                                checked={lightMode}
                                
                            />
                            <span className={style.slider}></span>
                        </label>
                    </div>

                    <div className={style.controlRow} onClick={(e) => { e.stopPropagation(); setNotifications(!notifications); }}>
                        <div className={style.rowInfo}>
                            <div className={style.iconBadge}>
                                <i className="bi bi-bell-fill"></i>
                            </div>
                            <div>
                                <h3>Notificações</h3>
                                <p>Alertas sonoros e visuais em tempo real</p>
                            </div>
                        </div>
                        <label className={style.switch} onClick={(e) => e.stopPropagation()}>
                            <input
                                type="checkbox"
                                checked={notifications}
                                onChange={(e) => setNotifications(e.target.checked)}
                            />
                            <span className={style.slider}></span>
                        </label>
                    </div>
                </div>

                <div className={`${style.bentoBox} ${style.metaBox}`}>
                    <h2 className={style.boxTitle}>Objetivos do Ano</h2>
                    <div className={style.metaContent}>
                        <div className={style.iconBadgeLarge}>
                            <i className="bi bi-people"></i>
                        </div>
                        <div className={style.inputWrapper}>
                            <label>Meta de Alunos Matriculados</label>
                            <input
                                type="number"
                                value={enrollmentTarget}
                                onChange={handleTargetChange}
                                placeholder="0"
                            />
                        </div>
                    </div>
                </div>

                <div className={style.bentoBox} onClick={() => setMemberManagement(!memberManagement)}>
                    <h2 className={style.boxTitle}>Políticas de Acesso</h2>
                    <div className={style.controlRow}>
                        <div className={style.rowInfo}>
                            <div className={style.iconBadge}>
                                <i className="bi bi-shield-lock-fill"></i>
                            </div>
                            <div>
                                <h3>Membros Normais</h3>
                                <p>Permitir gestão e alterações por utilizadores sem cargo executivo</p>
                            </div>
                        </div>
                        <label className={style.switch} onClick={(e) => e.stopPropagation()}>
                            <input
                                type="checkbox"
                                checked={memberManagement}
                                onChange={(e) => setMemberManagement(e.target.checked)}
                            />
                            <span className={style.slider}></span>
                        </label>
                    </div>
                </div>

                <div className={`${style.bentoBox} ${style.wideBox}`}>
                    <h2 className={style.boxTitle}>Automatizações Pedagógicas</h2>

                    <div className={style.gridSplit}>
                        <div className={style.controlRow} onClick={() => setAttendanceAlerts(!attendanceAlerts)}>
                            <div className={style.rowInfo}>
                                <div className={style.iconBadge}>
                                    <i className="bi bi-exclamation-triangle-fill"></i>
                                </div>
                                <div>
                                    <h3>Rastreio de Faltas</h3>
                                    <p>Sinalizar alunos com ausências consecutivas automaticamente</p>
                                </div>
                            </div>
                            <label className={style.switch} onClick={(e) => e.stopPropagation()}>
                                <input
                                    type="checkbox"
                                    checked={attendanceAlerts}
                                    onChange={(e) => setAttendanceAlerts(e.target.checked)}
                                />
                                <span className={style.slider}></span>
                            </label>
                        </div>

                        <div className={style.controlRow} onClick={() => setNotifyGuardians(!notifyGuardians)}>
                            <div className={style.rowInfo}>
                                <div className={style.iconBadge}>
                                    <i className="bi bi-envelope-fill"></i>
                                </div>
                                <div>
                                    <h3>Avisos aos Encarregados</h3>
                                    <p>Disparar relatórios de assiduidade e notas por e-mail</p>
                                </div>
                            </div>
                            <label className={style.switch} onClick={(e) => e.stopPropagation()}>
                                <input
                                    type="checkbox"
                                    checked={notifyGuardians}
                                    onChange={(e) => setNotifyGuardians(e.target.checked)}
                                />
                                <span className={style.slider}></span>
                            </label>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
