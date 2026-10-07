/* ==========================================================
   CONFIGURATION : coordonnées et réseaux sociaux
   Tout ce qui est vide ("") est masqué automatiquement sur le site.
   ========================================================== */
const CONFIG = {
  nom: "BSIC",

  // Adresse du siège (affichée dans le footer, la page Contact et la page Agences)
  adresse: {
    fr: "Avenue Noguès, Plateau, 01 BP 10323 Abidjan 01, Côte d'Ivoire",
    ar: "شارع نوغيس، بلاتو، 01 ص.ب 10323 أبيدجان 01، كوت ديفوار"
  },

  // Recherche utilisée pour la carte Google Maps
  mapQuery: "BSIC Avenue Noguès Plateau Abidjan Côte d'Ivoire",

  // Téléphone : format international sans espaces pour le lien, et format affiché
  telLien: "",        // ex : "+2252720000000"
  telAffiche: "",     // ex : "+225 27 20 00 00 00"

  // E-mail qui reçoit les messages du formulaire de contact (à confirmer avec la banque)
  email: "contact@bsicci.com",

  // Horaires d'ouverture (à fournir par la banque ; vide = masqué)
  horaires: { fr: "", ar: "" },

  // Liens des réseaux sociaux officiels (laisser vide pour masquer l'icône)
  social: {
    facebook: "",
    linkedin: "",
    youtube: "",
    instagram: ""
  }
};
