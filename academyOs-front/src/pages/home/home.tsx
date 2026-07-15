import style from "./home.module.css";

export default function Home() {
    return (
        <div className={style.container}>
            <header className={style.header}>
                <h1>Painel de Gestão</h1>
                <p>Visão geral da instituição para o administrador</p>
            </header>

            <section className={style.kpiGrid}>
                <div className={style.card}>
                    <div className={style.cardIcon} style={{ backgroundColor: 'rgb(220, 239, 255)', color: 'darkblue' }}>
                        <i className="bi bi-people-fill"></i>
                    </div>
                    <div className={style.cardData}>
                        <h3>Alunos Ativos</h3>
                        <h2>1.240</h2>
                        <span className={style.positive}>+12 este mês</span>
                    </div>
                </div>

                <div className={style.card}>
                    <div className={style.cardIcon} style={{ backgroundColor: 'rgb(220, 239, 255)', color: 'darkblue' }}>
                        <i className="bi bi-person-badge-fill"></i>
                    </div>
                    <div className={style.cardData}>
                        <h3>Corpo Docente</h3>
                        <h2>85</h2>
                        <span className={style.neutral}>Professores ativos</span>
                    </div>
                </div>

                <div className={style.card}>
                    <div className={style.cardIcon} style={{ backgroundColor: 'rgb(220, 239, 255)', color: 'darkblue' }}>
                        <i className="bi bi-calendar-check-fill"></i>
                    </div>
                    <div className={style.cardData}>
                        <h3>Frequência Geral</h3>
                        <h2>94.2%</h2>
                        <span className={style.positive}>Meta atingida</span>
                    </div>
                </div>

                <div className={style.card}>
                    <div className={style.cardIcon} style={{ backgroundColor: 'rgba(220, 239, 255, 0.5)', color: 'darkblue' }}>
                        <i className="bi bi-cash-stack"></i>
                    </div>
                    <div className={style.cardData}>
                        <h3>Inadimplência</h3>
                        <h2>5.2%</h2>
                        <span className={style.negative}>Atenção este mês</span>
                    </div>
                </div>
            </section>

            <section className={style.contentGrid}>
                <div className={style.panel}>
                    <h2>Solicitações Pendentes</h2>
                    <ul className={style.list}>
                        <li>
                            <span><i className="bi bi-file-earmark-plus"></i> 14 Novas Matrículas</span>
                            <button className={style.btn}>Validar</button>
                        </li>
                        <li>
                            <span><i className="bi bi-arrow-left-right"></i> 3 Transferências de Turma</span>
                            <button className={style.btn}>Analisar</button>
                        </li>
                        <li>
                            <span><i className="bi bi-exclamation-triangle"></i> 2 Justificações de Faltas</span>
                            <button className={style.btn}>Ver</button>
                        </li>
                    </ul>
                </div>

                <div className={style.panel}>
                    <h2>Alertas do Dia</h2>
                    <ul className={style.list}>
                        <li className={style.alertItem}>
                            <i className="bi bi-info-circle-fill" style={{ color: '#dc2626' }}></i>
                            <div>
                                <strong>Prof. Carlos (Matemática)</strong>
                                <p>Reportou ausência para o período da tarde.</p>
                            </div>
                        </li>
                        <li className={style.alertItem}>
                            <i className="bi bi-wrench" style={{ color: 'darkblue' }}></i>
                            <div>
                                <strong>Sala 10B</strong>
                                <p>Avaria no projetor reportada pelo docente.</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    );
}
