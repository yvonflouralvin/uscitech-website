// app/inscription/page.tsx (Next.js 13+ avec App Router)
"use client";

import { useState } from "react";

export default function InscriptionForm() {
  const [formData, setFormData] = useState({
    anneeAcademique: "2025 - 2026",
    promotion: "",
    faculte1: "",
    faculte2: "",
    option1: "",
    option2: "",
    nom: "",
    postnom: "",
    prenom: "",
    sexe: "",
    naissance: "",
    nationalite: "Congolaise",
    contact: "",
    email: "",
    adresse: "",
    ecole: "",
    pourcentage: "",
    telEcole: "",
    adresseEcole: "",
    emailEcole: "",
    pereNom: "",
    pereTel: "",
    pereEmail: "",
    pereAdresse: "",
    mereNom: "",
    mereTel: "",
    mereEmail: "",
    mereAdresse: "",
    confirmation: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type, checked }  : any = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/inscription", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
  
      const result = await res.json();
      if (result.success) {
        alert("Inscription envoyée avec succès ✅");
      } else {
        alert("Erreur: " + result.error);
      }
    } catch (err) {
      alert("Impossible d’envoyer le formulaire 😢");
      console.error(err);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">Formulaire d’inscription ASCITECH 2025-2026</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        
        {/* Partie Académique */}
        <fieldset className="border p-4 rounded-lg">
          <legend className="font-semibold">Informations Académiques</legend>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
            <input name="promotion" onChange={handleChange} value={formData.promotion} placeholder="Promotion d’inscription (ex: Bac 1)" className="border p-2 rounded w-full" />
            <input name="faculte1" onChange={handleChange} value={formData.faculte1} placeholder="Faculté - 1er choix" className="border p-2 rounded w-full" />
            <input name="faculte2" onChange={handleChange} value={formData.faculte2} placeholder="Faculté - 2ème choix" className="border p-2 rounded w-full" />
            <input name="option1" onChange={handleChange} value={formData.option1} placeholder="Option - 1er choix" className="border p-2 rounded w-full" />
            <input name="option2" onChange={handleChange} value={formData.option2} placeholder="Option - 2ème choix" className="border p-2 rounded w-full" />
          </div>
        </fieldset>

        {/* Infos Étudiant */}
        <fieldset className="border p-4 rounded-lg">
          <legend className="font-semibold">A propos de l’académicien</legend>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
            <input name="nom" onChange={handleChange} value={formData.nom} placeholder="Nom" className="border p-2 rounded w-full" />
            <input name="postnom" onChange={handleChange} value={formData.postnom} placeholder="Post-Nom" className="border p-2 rounded w-full" />
            <input name="prenom" onChange={handleChange} value={formData.prenom} placeholder="Prénom" className="border p-2 rounded w-full" />
            <select name="sexe" onChange={handleChange} value={formData.sexe} className="border p-2 rounded w-full">
              <option value="">Sexe</option>
              <option value="M">Masculin</option>
              <option value="F">Féminin</option>
            </select>
            <input type="date" name="naissance" onChange={handleChange} value={formData.naissance} className="border p-2 rounded w-full" />
            <input name="nationalite" onChange={handleChange} value={formData.nationalite} placeholder="Nationalité" className="border p-2 rounded w-full" />
            <input name="contact" onChange={handleChange} value={formData.contact} placeholder="Numéro de contact" className="border p-2 rounded w-full" />
            <input type="email" name="email" onChange={handleChange} value={formData.email} placeholder="Email" className="border p-2 rounded w-full" />
            <textarea name="adresse" onChange={handleChange} value={formData.adresse} placeholder="Adresse de domicile" className="border p-2 rounded col-span-2" />
          </div>
        </fieldset>

        {/* Infos École */}
        <fieldset className="border p-4 rounded-lg">
          <legend className="font-semibold">École de provenance</legend>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
            <input name="ecole" onChange={handleChange} value={formData.ecole} placeholder="École" className="border p-2 rounded w-full" />
            <input name="pourcentage" onChange={handleChange} value={formData.pourcentage} placeholder="% obtenu" className="border p-2 rounded w-full" />
            <input name="telEcole" onChange={handleChange} value={formData.telEcole} placeholder="Téléphone école" className="border p-2 rounded w-full" />
            <input name="emailEcole" onChange={handleChange} value={formData.emailEcole} placeholder="Email école" className="border p-2 rounded w-full" />
            <textarea name="adresseEcole" onChange={handleChange} value={formData.adresseEcole} placeholder="Adresse école" className="border p-2 rounded col-span-2" />
          </div>
        </fieldset>

        {/* Infos Parents */}
        <fieldset className="border p-4 rounded-lg">
          <legend className="font-semibold">Parents / Responsables</legend>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
            <input name="pereNom" onChange={handleChange} value={formData.pereNom} placeholder="Nom du Père" className="border p-2 rounded w-full" />
            <input name="pereTel" onChange={handleChange} value={formData.pereTel} placeholder="Téléphone Père" className="border p-2 rounded w-full" />
            <input type="email" name="pereEmail" onChange={handleChange} value={formData.pereEmail} placeholder="Email Père" className="border p-2 rounded w-full" />
            <textarea name="pereAdresse" onChange={handleChange} value={formData.pereAdresse} placeholder="Adresse Père" className="border p-2 rounded col-span-2" />

            <input name="mereNom" onChange={handleChange} value={formData.mereNom} placeholder="Nom de la Mère" className="border p-2 rounded w-full" />
            <input name="mereTel" onChange={handleChange} value={formData.mereTel} placeholder="Téléphone Mère" className="border p-2 rounded w-full" />
            <input type="email" name="mereEmail" onChange={handleChange} value={formData.mereEmail} placeholder="Email Mère" className="border p-2 rounded w-full" />
            <textarea name="mereAdresse" onChange={handleChange} value={formData.mereAdresse} placeholder="Adresse Mère" className="border p-2 rounded col-span-2" />
          </div>
        </fieldset>

        {/* Confirmation */}
        <div className="flex items-center">
          <input type="checkbox" name="confirmation" checked={formData.confirmation} onChange={handleChange} className="mr-2" />
          <span>Je confirme que toutes les informations sont correctes et je m’engage à respecter les règlements de ASCITECH.</span>
        </div>

        <div>
        <button type="submit" className="bg-primary text-black py-2 px-[20px] rounded-[1000px] font-semibold">
          Soumettre l’inscription
        </button>
        </div>
      </form>
    </div>
  );
}
