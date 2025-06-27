export const proofs = [
  'EMF 5',
  'Spirit box',
  'Temperature glaciale',
  'Ecriture fantomatique',
  'D.O.T.S.',
  'Orbe fantomatique',
  'Empreinte U.V.',
] as const;
export type Proof = typeof proofs[number];

export type Entity = {
  name: string;
  proofs: Proof[];
  hint: string;
  specifications: string[];
};

export const entities: Entity[] = [
  {
    name: 'Spectre',
    proofs: ['EMF 5', 'Spirit box', 'D.O.T.S.'],
    hint: 'Ne laisse jamais de trace de pas sur le sel',
    specifications: [
      'Santé mentale max. avant chasse : normale, 50%',
      'Vitesse en chasse : normale, 1.7 ~ 2.8',
    ],
  },
  {
    name: 'Esprit',
    proofs: ['EMF 5', 'Spirit box', 'Ecriture fantomatique'],
    hint:
      "Ne peux pas attaqué pendant 180 secondes après que de l'encens ait été brulé dans sa piece",
    specifications: [
      'Santé mentale max. avant chasse : normale, 50%',
      'Vitesse en chasse : normale, 1.7 ~ 2.8',
      'Efficacité de l’encens hors chasse : 180 secondes (valeur normale : 90 secondes)',
    ],
  },
  {
    name: 'Fantome',
    proofs: ['Spirit box', 'Empreinte U.V.', 'D.O.T.S.'],
    hint:
      'Le fantome se deplace entre vous et sa pièce favorite, en laissant un EMF 2',
    specifications: [
      ' Santé mentale max. avant chasse : normale, 50%',
      ' Vitesse en chasse : normale, 1.7 ~ 2.8',
      ' Durée d’invisibilité minimale (en chasse) : 0.7s (valeur normale : 0.1s)',
      ' Durée d’invisibilité maximale (en chasse) : 1.92s (valeur normale : 0.92s)',
      ' Durée entre deux clignotements : 1 à 2 secondes (valeur normale : 0.3 à 1 seconde)',
      ' Rayon de perte de santé mentale (quand visible avec ligne de vue dégagée) : 10m',
      ' Taux de perte de santé mentale (quand visible avec ligne de vue dégagée) : -0.5% par seconde',
    ],
  },
  {
    name: 'Spectre',
    proofs: ['EMF 5', 'Spirit box', 'D.O.T.S.'],
    hint: 'Ne laisse jamais de trace de pas sur le sel',
    specifications: [
      'Santé mentale max. avant chasse : normale, 50%',
      'Vitesse en chasse : normale, 1.7 ~ 2.8',
    ],
  },
  {
    name: 'Esprit',
    proofs: ['EMF 5', 'Spirit box', 'Ecriture fantomatique'],
    hint:
      "Ne peux pas attaqué pendant 180 secondes après que de l'encens ait été brulé dans sa piece",
    specifications: [
      'Santé mentale max. avant chasse : normale, 50%',
      'Vitesse en chasse : normale, 1.7 ~ 2.8',
      'Efficacité de l’encens hors chasse : 180 secondes (valeur normale : 90 secondes)',
    ],
  },
  {
    name: 'Fantome',
    proofs: ['Spirit box', 'Empreinte U.V.', 'D.O.T.S.'],
    hint:
      'Le fantome se deplace entre vous et sa pièce favorite, en laissant un EMF 2',
    specifications: [
      ' Santé mentale max. avant chasse : normale, 50%',
      ' Vitesse en chasse : normale, 1.7 ~ 2.8',
      ' Durée d’invisibilité minimale (en chasse) : 0.7s (valeur normale : 0.1s)',
      ' Durée d’invisibilité maximale (en chasse) : 1.92s (valeur normale : 0.92s)',
      ' Durée entre deux clignotements : 1 à 2 secondes (valeur normale : 0.3 à 1 seconde)',
      ' Rayon de perte de santé mentale (quand visible avec ligne de vue dégagée) : 10m',
      ' Taux de perte de santé mentale (quand visible avec ligne de vue dégagée) : -0.5% par seconde',
    ],
  },
  {
    name: 'Spectre',
    proofs: ['EMF 5', 'Spirit box', 'D.O.T.S.'],
    hint: 'Ne laisse jamais de trace de pas sur le sel',
    specifications: [
      'Santé mentale max. avant chasse : normale, 50%',
      'Vitesse en chasse : normale, 1.7 ~ 2.8',
    ],
  },
  {
    name: 'Esprit',
    proofs: ['EMF 5', 'Spirit box', 'Ecriture fantomatique'],
    hint:
      "Ne peux pas attaqué pendant 180 secondes après que de l'encens ait été brulé dans sa piece",
    specifications: [
      'Santé mentale max. avant chasse : normale, 50%',
      'Vitesse en chasse : normale, 1.7 ~ 2.8',
      'Efficacité de l’encens hors chasse : 180 secondes (valeur normale : 90 secondes)',
    ],
  },
  {
    name: 'Fantome',
    proofs: ['Spirit box', 'Empreinte U.V.', 'D.O.T.S.'],
    hint:
      'Le fantome se deplace entre vous et sa pièce favorite, en laissant un EMF 2',
    specifications: [
      ' Santé mentale max. avant chasse : normale, 50%',
      ' Vitesse en chasse : normale, 1.7 ~ 2.8',
      ' Durée d’invisibilité minimale (en chasse) : 0.7s (valeur normale : 0.1s)',
      ' Durée d’invisibilité maximale (en chasse) : 1.92s (valeur normale : 0.92s)',
      ' Durée entre deux clignotements : 1 à 2 secondes (valeur normale : 0.3 à 1 seconde)',
      ' Rayon de perte de santé mentale (quand visible avec ligne de vue dégagée) : 10m',
      ' Taux de perte de santé mentale (quand visible avec ligne de vue dégagée) : -0.5% par seconde',
    ],
  },
  {
    name: 'Spectre',
    proofs: ['EMF 5', 'Spirit box', 'D.O.T.S.'],
    hint: 'Ne laisse jamais de trace de pas sur le sel',
    specifications: [
      'Santé mentale max. avant chasse : normale, 50%',
      'Vitesse en chasse : normale, 1.7 ~ 2.8',
    ],
  },
  {
    name: 'Esprit',
    proofs: ['EMF 5', 'Spirit box', 'Ecriture fantomatique'],
    hint:
      "Ne peux pas attaqué pendant 180 secondes après que de l'encens ait été brulé dans sa piece",
    specifications: [
      'Santé mentale max. avant chasse : normale, 50%',
      'Vitesse en chasse : normale, 1.7 ~ 2.8',
      'Efficacité de l’encens hors chasse : 180 secondes (valeur normale : 90 secondes)',
    ],
  },
  {
    name: 'Fantome',
    proofs: ['Spirit box', 'Empreinte U.V.', 'D.O.T.S.'],
    hint:
      'Le fantome se deplace entre vous et sa pièce favorite, en laissant un EMF 2',
    specifications: [
      ' Santé mentale max. avant chasse : normale, 50%',
      ' Vitesse en chasse : normale, 1.7 ~ 2.8',
      ' Durée d’invisibilité minimale (en chasse) : 0.7s (valeur normale : 0.1s)',
      ' Durée d’invisibilité maximale (en chasse) : 1.92s (valeur normale : 0.92s)',
      ' Durée entre deux clignotements : 1 à 2 secondes (valeur normale : 0.3 à 1 seconde)',
      ' Rayon de perte de santé mentale (quand visible avec ligne de vue dégagée) : 10m',
      ' Taux de perte de santé mentale (quand visible avec ligne de vue dégagée) : -0.5% par seconde',
    ],
  },
  {
    name: 'Spectre',
    proofs: ['EMF 5', 'Spirit box', 'D.O.T.S.'],
    hint: 'Ne laisse jamais de trace de pas sur le sel',
    specifications: [
      'Santé mentale max. avant chasse : normale, 50%',
      'Vitesse en chasse : normale, 1.7 ~ 2.8',
    ],
  },
  {
    name: 'Esprit',
    proofs: ['EMF 5', 'Spirit box', 'Ecriture fantomatique'],
    hint:
      "Ne peux pas attaqué pendant 180 secondes après que de l'encens ait été brulé dans sa piece",
    specifications: [
      'Santé mentale max. avant chasse : normale, 50%',
      'Vitesse en chasse : normale, 1.7 ~ 2.8',
      'Efficacité de l’encens hors chasse : 180 secondes (valeur normale : 90 secondes)',
    ],
  },
  {
    name: 'Fantome',
    proofs: ['Spirit box', 'Empreinte U.V.', 'D.O.T.S.'],
    hint:
      'Le fantome se deplace entre vous et sa pièce favorite, en laissant un EMF 2',
    specifications: [
      ' Santé mentale max. avant chasse : normale, 50%',
      ' Vitesse en chasse : normale, 1.7 ~ 2.8',
      ' Durée d’invisibilité minimale (en chasse) : 0.7s (valeur normale : 0.1s)',
      ' Durée d’invisibilité maximale (en chasse) : 1.92s (valeur normale : 0.92s)',
      ' Durée entre deux clignotements : 1 à 2 secondes (valeur normale : 0.3 à 1 seconde)',
      ' Rayon de perte de santé mentale (quand visible avec ligne de vue dégagée) : 10m',
      ' Taux de perte de santé mentale (quand visible avec ligne de vue dégagée) : -0.5% par seconde',
    ],
  },
  {
    name: 'Spectre',
    proofs: ['EMF 5', 'Spirit box', 'D.O.T.S.'],
    hint: 'Ne laisse jamais de trace de pas sur le sel',
    specifications: [
      'Santé mentale max. avant chasse : normale, 50%',
      'Vitesse en chasse : normale, 1.7 ~ 2.8',
    ],
  },
  {
    name: 'Esprit',
    proofs: ['EMF 5', 'Spirit box', 'Ecriture fantomatique'],
    hint:
      "Ne peux pas attaqué pendant 180 secondes après que de l'encens ait été brulé dans sa piece",
    specifications: [
      'Santé mentale max. avant chasse : normale, 50%',
      'Vitesse en chasse : normale, 1.7 ~ 2.8',
      'Efficacité de l’encens hors chasse : 180 secondes (valeur normale : 90 secondes)',
    ],
  },
  {
    name: 'Fantome',
    proofs: ['Spirit box', 'Empreinte U.V.', 'D.O.T.S.'],
    hint:
      'Le fantome se deplace entre vous et sa pièce favorite, en laissant un EMF 2',
    specifications: [
      ' Santé mentale max. avant chasse : normale, 50%',
      ' Vitesse en chasse : normale, 1.7 ~ 2.8',
      ' Durée d’invisibilité minimale (en chasse) : 0.7s (valeur normale : 0.1s)',
      ' Durée d’invisibilité maximale (en chasse) : 1.92s (valeur normale : 0.92s)',
      ' Durée entre deux clignotements : 1 à 2 secondes (valeur normale : 0.3 à 1 seconde)',
      ' Rayon de perte de santé mentale (quand visible avec ligne de vue dégagée) : 10m',
      ' Taux de perte de santé mentale (quand visible avec ligne de vue dégagée) : -0.5% par seconde',
    ],
  },
  {
    name: 'Spectre',
    proofs: ['EMF 5', 'Spirit box', 'D.O.T.S.'],
    hint: 'Ne laisse jamais de trace de pas sur le sel',
    specifications: [
      'Santé mentale max. avant chasse : normale, 50%',
      'Vitesse en chasse : normale, 1.7 ~ 2.8',
    ],
  },
  {
    name: 'Esprit',
    proofs: ['EMF 5', 'Spirit box', 'Ecriture fantomatique'],
    hint:
      "Ne peux pas attaqué pendant 180 secondes après que de l'encens ait été brulé dans sa piece",
    specifications: [
      'Santé mentale max. avant chasse : normale, 50%',
      'Vitesse en chasse : normale, 1.7 ~ 2.8',
      'Efficacité de l’encens hors chasse : 180 secondes (valeur normale : 90 secondes)',
    ],
  },
  {
    name: 'Fantome',
    proofs: ['Spirit box', 'Empreinte U.V.', 'D.O.T.S.'],
    hint:
      'Le fantome se deplace entre vous et sa pièce favorite, en laissant un EMF 2',
    specifications: [
      ' Santé mentale max. avant chasse : normale, 50%',
      ' Vitesse en chasse : normale, 1.7 ~ 2.8',
      ' Durée d’invisibilité minimale (en chasse) : 0.7s (valeur normale : 0.1s)',
      ' Durée d’invisibilité maximale (en chasse) : 1.92s (valeur normale : 0.92s)',
      ' Durée entre deux clignotements : 1 à 2 secondes (valeur normale : 0.3 à 1 seconde)',
      ' Rayon de perte de santé mentale (quand visible avec ligne de vue dégagée) : 10m',
      ' Taux de perte de santé mentale (quand visible avec ligne de vue dégagée) : -0.5% par seconde',
    ],
  },
  {
    name: 'Spectre',
    proofs: ['EMF 5', 'Spirit box', 'D.O.T.S.'],
    hint: 'Ne laisse jamais de trace de pas sur le sel',
    specifications: [
      'Santé mentale max. avant chasse : normale, 50%',
      'Vitesse en chasse : normale, 1.7 ~ 2.8',
    ],
  },
  {
    name: 'Esprit',
    proofs: ['EMF 5', 'Spirit box', 'Ecriture fantomatique'],
    hint:
      "Ne peux pas attaqué pendant 180 secondes après que de l'encens ait été brulé dans sa piece",
    specifications: [
      'Santé mentale max. avant chasse : normale, 50%',
      'Vitesse en chasse : normale, 1.7 ~ 2.8',
      'Efficacité de l’encens hors chasse : 180 secondes (valeur normale : 90 secondes)',
    ],
  },
  {
    name: 'Fantome',
    proofs: ['Spirit box', 'Empreinte U.V.', 'D.O.T.S.'],
    hint:
      'Le fantome se deplace entre vous et sa pièce favorite, en laissant un EMF 2',
    specifications: [
      ' Santé mentale max. avant chasse : normale, 50%',
      ' Vitesse en chasse : normale, 1.7 ~ 2.8',
      ' Durée d’invisibilité minimale (en chasse) : 0.7s (valeur normale : 0.1s)',
      ' Durée d’invisibilité maximale (en chasse) : 1.92s (valeur normale : 0.92s)',
      ' Durée entre deux clignotements : 1 à 2 secondes (valeur normale : 0.3 à 1 seconde)',
      ' Rayon de perte de santé mentale (quand visible avec ligne de vue dégagée) : 10m',
      ' Taux de perte de santé mentale (quand visible avec ligne de vue dégagée) : -0.5% par seconde',
    ],
  },
];
