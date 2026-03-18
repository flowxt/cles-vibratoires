"use client";

import { useState, type FormEvent } from "react";

const SUBJECT_OPTIONS = [
  "Numérologie — Thème Adulte",
  "Numérologie — Thème Enfant",
  "Numérologie — Thème Couple",
  "Numérologie — Suivi Annuel",
  "Soin Énergétique",
  "Accompagnement — Boussole Parentale",
  "Accompagnement — Relation Parents-Enfant",
  "Accompagnement — Compréhension de Soi",
  "Tarologie",
  "Question générale",
  "Autre",
];

type FormStatus = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const json = await res.json();
        throw new Error(json.error || "Une erreur est survenue.");
      }

      setStatus("success");
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Une erreur est survenue."
      );
    }
  }

  if (status === "success") {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-semibold text-[#3A2F25] mb-2">
          Message envoyé !
        </h3>
        <p className="text-[#7D7068] mb-6">
          Merci pour votre message. Je vous répondrai dans les meilleurs délais.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="text-[#8B6F47] hover:text-[#6B5535] font-medium text-sm inline-flex items-center gap-1"
        >
          Envoyer un autre message
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    );
  }

  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-[#E8E0D6] bg-[#FDFBF8] text-[#3A2F25] placeholder:text-[#b0a89e] focus:outline-none focus:ring-2 focus:ring-[#8B6F47]/30 focus:border-[#8B6F47] transition-all text-sm";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-[#3A2F25] mb-1.5">
            Nom complet <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Votre nom"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-[#3A2F25] mb-1.5">
            Email <span className="text-red-400">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="votre@email.com"
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-[#3A2F25] mb-1.5">
            Téléphone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="06 00 00 00 00"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-[#3A2F25] mb-1.5">
            Sujet
          </label>
          <select id="subject" name="subject" className={inputClass}>
            <option value="">Sélectionnez un sujet</option>
            {SUBJECT_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-[#3A2F25] mb-1.5">
          Message <span className="text-red-400">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Décrivez votre demande..."
          className={inputClass + " resize-none"}
        />
      </div>

      {status === "error" && (
        <div className="flex items-center gap-2 text-red-600 bg-red-50 px-4 py-3 rounded-xl text-sm">
          <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {errorMessage}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full px-8 py-3.5 bg-gradient-to-r from-[#8B6F47] to-[#6B5535] text-white rounded-full hover:shadow-lg transition-all duration-300 font-medium text-sm disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {status === "loading" ? (
          <>
            <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            Envoi en cours...
          </>
        ) : (
          <>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Envoyer mon message
          </>
        )}
      </button>
    </form>
  );
}
