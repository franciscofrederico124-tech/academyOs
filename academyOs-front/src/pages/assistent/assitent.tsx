import { useState, FormEvent } from "react";
import style from "./assistent.module.css";

interface Message {
    id: number;
    sender: "user" | "ai";
    text: string;
}

export default function Assistent() {
    const [input, setInput] = useState<string>("");
    const [messages, setMessages] = useState<Message[]>([
        { id: 1, sender: "ai", text: "Olá, Francis. Como posso ajudar na gestão da AcademyOs hoje?" }
    ]);

    const handleSend = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        if (!input.trim()) return;

        setMessages((prev) => [...prev, { id: Date.now(), sender: "user", text: input }]);
        setInput("");
    };

    return (
        <div className={style.container}>
            <header className={style.header}>
                <h1>Assistente Virtual</h1>
                <p>Automação e suporte inteligente para a gestão escolar</p>
            </header>

            <div className={style.chatArea}>
                <div className={style.messagesList}>
                    {messages.map((msg) => (
                        <div
                            key={msg.id}
                            className={`${style.messageRow} ${msg.sender === "user" ? style.userRow : style.aiRow}`}
                        >
                            {msg.sender === "ai" && (
                                <div className={style.avatar}>
                                    <i className="bi bi-cpu"></i>
                                </div>
                            )}
                            <div className={style.bubble}>
                                {msg.text}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className={style.inputArea}>
                <form onSubmit={handleSend} className={style.inputWrapper}>
                    <input
                        type="text"
                        placeholder="Pergunte sobre turmas, faturamento ou relatórios..."
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <div className={style.actions}>
                        <button type="button" className={style.micBtn} title="Gravar mensagem">
                            <i className="bi bi-mic-fill"></i>
                        </button>
                        <button type="submit" className={style.sendBtn} disabled={!input.trim()} title="Enviar">
                            <i className="bi bi-arrow-up-short"></i>
                        </button>
                    </div>
                </form>
                <span className={style.disclaimer}>
                    O assistente pode cometer erros. Verifique informações importantes.
                </span>
            </div>
        </div>
    );
}
