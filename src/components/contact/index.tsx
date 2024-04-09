import { useState } from "react";

export default function ContactForm({ recipientEmail = "" }) {
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = () => {
    const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <section
      id="contact"
      className=" flex flex-col items-center h-full p-10 gap-10 bg-gradient-to-b from-cyan-300"
    >
      <h2 className="text-center font-bold text-2xl">Contact</h2>
      <div className="box-shadow shadow-2xl border border-black rounded-3xl p-3 h-full w-96 m-10">
        <form onSubmit={handleSubmit} className="gap-10">
          <div className="flex flex-col w-full">
            <label htmlFor="subject">Titulo:</label>
            <input
              className="h-10 pl-2 rounded-md"
              type="text"
              id="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col mb-5 ">
            <label htmlFor="body">Mensagem:</label>
            <textarea
              className="h-40 pl-2 rounded-md min-h-10"
              id="body"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              required
            />
          </div>
          <button
            className="w-full border bg-cyan-200 border-black rounded-md hover:bg-cyan-950 hover:text-white"
            type="submit"
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
}
