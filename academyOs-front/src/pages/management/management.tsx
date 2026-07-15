import { useState } from "react";
import style from "./management.module.css";

interface CardModulo {
  id: string;
  title: string;
  description: string;
  icon: string;
  badge?: string;
}

export default function Management() {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const modulos: CardModulo[] = [
    {
      id: "matricula",
      title: "Matrículas",
      description: "Efetuar novas inscrições, validar documentos e emitir comprovativos.",
      icon: "bi bi-person-plus-fill",
      badge: "14 pendentes"
    },
    {
      id: "actualizacao",
      title: "Atualizações",
      description: "Renovar anos letivos, alterar dados de encarregados e atualizar turmas.",
      icon: "bi bi-arrow-repeat"
    },
    {
      id: "pautas",
      title: "Lançamento de Pautas",
      description: "Lançar classificações, pautas de avaliação trimestrais e consolidar notas finais.",
      icon: "bi bi-journal-check"
    },
    {
      id: "busca",
      title: "Busca Avançada",
      description: "Localizar registos de alunos, professores e históricos escolares.",
      icon: "bi bi-search"
    }
  ];

  const filteredModulos = modulos.filter(modulo =>
    modulo.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    modulo.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={style.container}>
      <header className={style.header}>
        <div className={style.headerText}>
          <h1>Gestão Escolar</h1>
          <p>Selecione o módulo operacional que deseja gerir</p>
        </div>
        <div className={style.searchBar}>
          <i className="bi bi-funnel"></i>
          <input 
            type="text" 
            placeholder="Filtrar módulos..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </header>

      <section className={style.cardsGrid}>
        {filteredModulos.map((modulo) => (
          <div key={modulo.id} className={style.card}>
            <div className={style.cardTop}>
              <div className={style.cardIcon}>
                <i className={modulo.icon}></i>
              </div>
              {modulo.badge && <span className={style.badge}>{modulo.badge}</span>}
            </div>
            <div className={style.cardContent}>
              <h2>{modulo.title}</h2>
              <p>{modulo.description}</p>
            </div>
            <button className={style.actionBtn}>
              Aceder Módulo <i className="bi bi-chevron-right"></i>
            </button>
          </div>
        ))}
        {filteredModulos.length === 0 && (
          <div className={style.noResults}>
            <i className="bi bi-exclamation-circle"></i>
            <p>Nenhum módulo operacional encontrado.</p>
          </div>
        )}
      </section>
    </div>
  );
}
