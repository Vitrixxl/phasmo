export const proofs = [
  'EMF 5',
  'Spirit box',
  'Temperature glaciale',
  'D.O.T.S.',
  'Ecriture fantomatique',
  'Orbe fantomatique',
  'Empreinte U.V.',
] as const;
export type Proof = typeof proofs[number];

export const huntSpeeds = [
  'Normale',
  'Variable',
] as const;
type HuntSpeed = typeof huntSpeeds[number];

export type Entity = {
  name: string;
  proofs: Proof[];
  hint: string;
  specifications: string[];
  healthBeforeHunt: number;
  huntSpeed: HuntSpeed;
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
    healthBeforeHunt: 50,
    huntSpeed: 'Normale',
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
    healthBeforeHunt: 50,
    huntSpeed: 'Normale',
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
    healthBeforeHunt: 50,
    huntSpeed: 'Normale',
  },
  {
    name: 'Poltergeist',
    proofs: ['Empreinte U.V.', 'Spirit box', 'Ecriture fantomatique'],
    hint:
      'Peut lancer les objets plus fort / plusieurs objets en une fois. Draine santé mentale (-2%) pour chaque objets',
    specifications: [
      'Santé mentale max. avant chasse : normale, 50%',
      'Vitesse en chasse : normale, 1.7 ~ 2.8',
      'Chances de lancer un objet toutes les 0.5s de chasse : 100% (valeur normale : 50%)',

      'Chances de lancer puissant : 20%',
    ],
    healthBeforeHunt: 50,
    huntSpeed: 'Normale',
  },
  {
    name: 'Banshee',
    proofs: ['Empreinte U.V.', 'D.O.T.S.', 'Orbe fantomatique'],
    hint:
      'Choisit un joueur pour cible. Palier de chasse selon la santé mentale de sa cible uniquement. Priorise les apparitions chantantes. Peut émettre un son particulier au microphone parabolique. Fait souvent des allers-retours entre sa pièce favorite et sa cible',
    specifications: [
      'Santé mentale max. avant chasse : normale, 50%',
      'Vitesse en chasse : normale, 1.7 ~ 2.8',
      'Baisse supplémentaire de santé mentale de sa cible sur une Apparition chantante (si sa cible touche la Banshee) : 5%',
    ],
    healthBeforeHunt: 50,
    huntSpeed: 'Normale',
  },
  {
    name: 'Djinn',
    proofs: ['EMF 5', 'Empreinte U.V.', 'Temperature glaciale'],
    hint:
      'Ne désactivera jamais le disjoncteur. Devient immédiatement plus rapide quand il vous repère de loin. (Variation de vitesse). Peut drainer la santé mentale des joueurs proches en laissant une trace EMF sur le disjoncteur',
    specifications: [
      'Santé mentale max. avant chasse : normale, 50%',
      'Vitesse fixe en chasse (Disjoncteur allumé + Joueur visible à plus de 3 mètres) : 2.5',
      'Vitesse en chasse (Pas de joueur visible / Joueur visible à moins de 3 mètres / Disjoncteur éteint ou cassé) : normale, 1.7 ~ 2.8',
      'Perte de santé mentale perdue à l’activation du drain de santé mentale : 25% (tous les joueurs à moins de 3 mètres OU dans la même pièce)',
    ],
    healthBeforeHunt: 50,
    huntSpeed: 'Variable',
  },
  {
    name: 'Cauchemar',

    proofs: ['Ecriture fantomatique', 'Spirit box', 'Orbe fantomatique'],
    hint:
      'A une probabilité d’éteindre immédiatement un interrupteur que le joueur vient d’allumer. Privilégie les apparitions qui cassent les ampoules. Peut chasser plus tôt que la normale si la pièce où il se trouve est éteinte. Chasse plus tard que la normale si la pièce où il se trouve est allumée.',
    specifications: [
      'Santé mentale max. avant chasse (lumière éteinte) : anticipée, 60%',

      'Santé mentale max. avant chasse (lumière allumée) : tardive, 40%',
      'Vitesse en chasse : normale, 1.7 ~ 2.8',
    ],
    healthBeforeHunt: 60,
    huntSpeed: 'Normale',
  },
  {
    name: 'Revenant',
    proofs: [
      'Temperature glaciale',
      'Orbe fantomatique',
      'Ecriture fantomatique',
    ],
    hint:
      'Très lent tant qu’il n’a repéré aucun joueur. Très rapide lorsqu’il repère un joueur. Lorsqu’il perd la trace du joueur, il se rend au dernier endroit où il l’a aperçue, puis sa vitesse diminue rapidement pour reprendre sa vitesse très lente',
    specifications: [
      'Santé mentale max. avant chasse : normale, 50%',
      'Vitesse fixe en chasse : 1.0',
      'Vitesse de poursuite (vitesse fixe en chasse quand joueur repéré) : 3.0',
      'Réduction de vitesse lorsqu’aucun joueur n’est visible (*) : -0.75 chaque seconde (minimum 1m/s)',
    ],
    healthBeforeHunt: 50,
    huntSpeed: 'Variable',
  },
  {
    name: 'Ombre',
    proofs: ['EMF 5', 'Ecriture fantomatique', 'Temperature glaciale'],
    hint:
      'Ne peut pas chasser, lancer d’objet, éteindre une bougie, et aucune apparition tant qu’un joueur est dans la même pièce. Chasse très tardivement. Privilégie très fortement les apparitions sous forme ombragée / translucide. Probabilité d’apparition très faible si santé mentale moyenne élevée. Niveau d’activité inférieur aux autres entités',
    specifications: [
      ' Santé mentale max. avant chasse : Très tardive, 35%',
      'Vitesse en chasse : normale, 1.7 ~ 2.8',
      'Chances d’apparition physique (*) – 100% de santé mentale moyenne : 0%',
      'Chances d’apparition physique (*) – 50% de santé mentale moyenne : normale',

      'Chances de lancer d’objet – aucun joueur dans la même pièce : normale',
      'Chances de lancer d’objet – au moins un joueur dans la même pièce : 0%',
    ],
    healthBeforeHunt: 35,
    huntSpeed: 'Variable',
  },
  {
    name: 'Démon',

    proofs: ['Temperature glaciale', 'Empreinte U.V.', 'Ecriture fantomatique'],
    hint:
      'Chasse plus fréquemment que les autres entités. Peut chasser plus tôt que les autres entités. Peut déclencher une chasse sans prendre en compte la santé mentale moyenne. Le crucifix a une portée plus grande contre lui.',
    specifications: [
      'Santé mentale max. avant chasse : Sans contrainte, 70% (valeur normale : 50%), 100% avec son pouvoir',
      'Vitesse en chasse : normale, 1.7 ~ 2.8',
      'Efficacité de l’encens hors chasse : 60 secondes (valeur normale : 90 secondes)',

      'Durée d’attente entre les chasses : 20 secondes (valeur normale : 25 secondes)',
      'Portée du crucifix : 1.5x la valeur normale de la portée normale du crucifix',
    ],
    healthBeforeHunt: 100,
    huntSpeed: 'Variable',
  },
  {
    name: 'Yurei',
    proofs: ['Temperature glaciale', 'D.O.T.S.', 'Orbe fantomatique'],
    hint:
      'Peut réduire la santé mentale des joueurs proches. Lorsqu’il le fait, l’une des portes à proximité se ferme entièrement (capacité non utilisé si aucune porte n’est à proximité). Se déplace beaucoup, change souvent de pièce favorite. L’encenser l’empêche de quitter sa pièce favorite durant 1m30 (90s)',
    specifications: [
      'Santé mentale max. avant chasse : normale, 50%',
      'Vitesse en chasse : normale, 1.7 ~ 2.8',
      'Durée de blocage dans sa pièce si utilisation d’un encens : 90s',
      'Perte de santé mentale à l’utilisation du pouvoir : 15%',
    ],
    healthBeforeHunt: 50,
    huntSpeed: 'Normale',
  },
  {
    name: 'Oni',
    proofs: ['EMF 5', 'D.O.T.S.', 'Temperature glaciale'],
    hint:
      'Plus actif quand plusieurs joueurs sont à proximité. Privilégie grandement sa forme complète lors de ses apparitions physiques. S’il est touché durant une apparition physique, draine deux fois plus de santé mentale. Ne peut pas faire d’événement paranormal sous forme de brume malsaine. Plus visible que les autres entités durant les chasses',
    specifications: [
      'Santé mentale max. avant chasse : normale, 50%',
      'Vitesse en chasse : normale, 1.7 ~ 2.8',
      'Santé mentale perdue (si le joueur touche l’Oni durant son apparition physique) : 20% (valeur normale : 10%)',
      'Niveau d’activité (minimum 2 joueurs à 3 mètres ou moins) : Doublé',
      'Durée de visibilité maximale (en chasse) : 0.5s (valeur normale : 0.3s)',
    ],
    healthBeforeHunt: 50,
    huntSpeed: 'Normale',
  },
  {
    name: 'Yokai',

    proofs: ['D.O.T.S.', 'Spirit box', 'Orbe fantomatique'],
    hint:
      'Parler à proximité augmente son activité et son palier d’attaque temporairement. En chasse, n’entend les voix et les objets électroniques proches',
    specifications: [
      'Santé mentale max. avant chasse : normale, 50%',
      'Santé mentale max. avant chasse si un joueur parle à proximité : anticipée, 80%',
      'Vitesse en chasse : normale, 1.7 ~ 2.8',
      'Distance d’écoute en chasse (objets électroniques) : 2.5 mètres (au lieu de 7 pour toutes les autres entités)',
    ],
    healthBeforeHunt: 50,
    huntSpeed: 'Normale',
  },
  {
    name: 'Goryo',
    proofs: ['Empreinte U.V.', 'D.O.T.S.', 'EMF 5'],
    hint:
      'Les DOTS ne sont pas visibles à l’oeil nu, et nécessitent une caméra vidéo. Les DOTS n’apparaîtront pas si un joueur est dans la même pièce que lui. Toujours preuve DOTS. Ne change jamais de pièce favorite. Ne se déplace jamais loin de sa pièce favorite (sauf apparitions)',
    specifications: [
      'Santé mentale max. avant chasse : normale, 50%',
      'Vitesse en chasse : normale, 1.7 ~ 2.8',
    ],
    healthBeforeHunt: 50,
    huntSpeed: 'Normale',
  },
  {
    name: 'Hantu',
    proofs: ['Orbe fantomatique', 'Empreinte U.V.', 'Temperature glaciale'],
    hint:
      ' Sa vitesse est fixée selon la température, en chasse = plus rapide dans les pièces froides, et plus lent dans les pièces chaudes. Lors de ses apparitions physiques et de ses chasses, peut produire un souffle glacial dans les pièces avec une température négative ou quand le disjoncteur est éteint. A tendance à éteindre le disjoncteur, mais ne peut pas l’allumer. Toujours preuve de Température Glaciale',
    specifications: [
      'Santé mentale max. avant chasse : normale, 50%',
      ' Vitesse fixe en chasse (22 – 15°C) : 1.4',
      'Vitesse fixe en chasse (15 – 12°C) : 1.75',
      'Vitesse fixe en chasse (6 – 3°C) : 2.4',
      'Vitesse fixe en chasse (0 – -10°C) : 2.7',
    ],
    healthBeforeHunt: 50,
    huntSpeed: 'Variable',
  },
  {
    name: 'Myling',
    proofs: ['EMF 5', 'Ecriture fantomatique', 'Empreinte U.V.'],
    hint:
      'Effectue plus souvent des sons paranormaux audibles au Microphone Parabolique. Silencieux en chasse, bruits de chasse audibles de moins loin',
    specifications: [
      'Santé mentale max. avant chasse : normale, 50%',
      'Vitesse en chasse : normale, 1.7 ~ 2.8',
      'Distance des pas audibles en chasse : 12m (valeur normale : 20m)',
      'Volume des bruits de pas en chasse : plus faible que la normale (ex. à 6m : 50% au lieu de 70%)',
    ],
    healthBeforeHunt: 50,
    huntSpeed: 'Normale',
  },
  {
    name: 'Onryo',
    proofs: ['Temperature glaciale', 'Spirit box', 'Orbe fantomatique'],
    hint:
      'Incapable d’initier une chasse à proximité d’une bougie allumée. Après avoir soufflé 3 flammes, peut tenter d’initier une chasse sans prendre en compte la santé mentale moyenne. Tendance accrue de souffler des bougies, briquets',
    specifications: [
      'Santé mentale max. avant chasse : anticipé, 60%',
      'Vitesse en chasse : normale, 1.7 ~ 2.8',
    ],
    healthBeforeHunt: 60,
    huntSpeed: 'Normale',
  },
  {
    name: 'Les jumeaux',
    proofs: ['EMF 5', 'Spirit box', 'Temperature glaciale'],
    hint:
      'Les Jumeaux ont la même pièce favorite, et la même apparence. 1 entité, avec deux portées d’interaction au lieu d’une. L’entité Jumeau qui hante dispose d’une d’interaction de 3m, mais également d’une autre portée de 16m. Seul la véritable entité peut répondre à la Spirit Box, Si chasse, soit il rester à sa position actuelle, ou il se téléporter à l’emplacement de la dernière interaction longue portée (faire attention crucifix)',
    specifications: [
      'Santé mentale max. avant chasse : normale, 50%',
      'Vitesse en chasse (emplacement principal) 50% : 1.5 ~ 2.28',

      'Vitesse en chasse (emplacement secondaire) 50% : 1.9 ~ 3.14',

      'Probabilité d’utiliser la portée principale : 50% / secondaire : 30%',

      'Probabilité de double interaction (principale PUIS secondaire) : 20%',
    ],
    healthBeforeHunt: 50,
    huntSpeed: 'Variable',
  },
  {
    name: 'Raiju',
    proofs: ['EMF 5', 'Orbe fantomatique', 'D.O.T.S.'],
    hint:
      'Chasse tôt lorsqu’au moins un équipement électronique est allumé, et suffisamment proche de lui. Sa vitesse en chasse est plus importante s’il y a des équipements électroniques à proximité de lui. Appareil : caméra frontale, les projecteur DOTS, le capteur sonore, le capteur de mouvements, tout équipement allumé pouvant dysfonctionner en chasse, lampe torche',
    specifications: [
      'Santé mentale max. avant chasse : normale, 50%',
      'Santé mentale max. avant chasse (objet électronique à proximité) : 65%',
      'Vitesse fixe en chasse (objet électronique à proximité) : 2.5',
    ],
    healthBeforeHunt: 60,
    huntSpeed: 'Variable',
  },
  {
    name: 'Obake',
    proofs: ['Empreinte U.V.', 'EMF 5', 'Orbe fantomatique'],
    hint:
      'Il est capable de camoufler temporairement ses preuves. Ex : toucher une porte sans laisser de trace EMF ou d’empreinte. Les empreintes digitales restent présentes deux fois moins longtemps que celles des autres entités. Peut laisser une empreinte à 6 doigts / sur les claviers d’ordinateur, 5 traces de doigt au lieu de 4. Sur les interrupteurs, peut laisser 2 traces de doigt. l’Obake peut se transformer une à plusieurs fois par chasse, changeant son skin d’entité durant un clignotement, au moins une fois par chasse',
    specifications: [
      'Santé mentale max. avant chasse : normale, 50%',
      'Vitesse en chasse : normale, 1.7 ~ 2.8',
      'Chances de laisser une empreinte spéciale : 16.67% (1 sur 6)',
      'Chance d’effectuer une transformation : 6.66% à chaque clignotement (au minimum 1 fois par chasse)',
    ],
    healthBeforeHunt: 50,
    huntSpeed: 'Normale',
  },
  {
    name: 'Mimic',
    proofs: ['Empreinte U.V.', 'Spirit box', 'Temperature glaciale'],
    hint:
      'Le Mimic est capable de changer de pouvoir au fil de la partie. Il dispose également d’une fausse Orbe Fantômatique dans sa pièce favorite.',
    specifications: [
      'Changement de pouvoir toutes les : 30 secondes à 2 minutes (30~120s)',
      'Vitesse en chasse : normale, 1.7 ~ 2.8 (note : le Mimic copiera les caractéristiques de vitesse de l’entité imitée)',
      'Santé mentale max. avant chasse : normale, 50% (note : le Mimic copiera les caractéristiques de chasse de l’entité imitée)',
    ],
    healthBeforeHunt: 100,
    huntSpeed: 'Variable',
  },
  {
    name: 'Moroi',
    proofs: ['Ecriture fantomatique', 'Spirit box', 'Temperature glaciale'],
    hint:
      'Place une malédiction sur tout joueur à qui il parle via la Spirit Box ou le Microphone Parabolique. Un joueur maudit perdra davantage de santé mentale (fin si pilule). Le Moroï accélère également quand la santé mentale moyenne des chasseurs diminue. Toujours spirit Box comme preuves.',
    specifications: [
      'Santé mentale max. avant chasse : normale, 50%',
      'Vitesse en chasse : 1.5 (augmente tous les 5% de perte de santé mentale moyenne de l’équipe, dès 45%)',
      'Vitesse entre 100 – 45% : 1.500 ~ 2.275',
      'Vitesse entre 29 – 25% : 1.832 ~ 3.025',
      'Vitesse entre 4 – 0% : 2.250 ~ 3.700',
    ],
    healthBeforeHunt: 50,
    huntSpeed: 'Variable',
  },
  {
    name: 'Deogen',
    proofs: ['Ecriture fantomatique', 'Spirit box', 'D.O.T.S.'],
    hint:
      'Le Deogen saura toujours où le joueur se trouve. NE PAS SE CACHER. Très rapide quand la cible est loin, très lent proche de sa cible. A une chance de répondre à la Spirit Box par un essoufflement caractéristique. Toujours spirit Box comme preuves',
    specifications: [
      'Santé mentale max. avant chasse : tardive, 40%',
      'Vitesse fixe en chasse (joueur ciblé à plus de 6 mètres) : 3.0 (valeur normale : 1.7)',
      'Vitesse fixe en chasse (joueur ciblé à moins de 2.5 mètres) : 0.4',
      'Probabilité de réponse essoufflement (Spirit Box) : 33%',
      'Durée de visibilité minimale (en chasse) : 0.2s (valeur normale : 0.08s)',
    ],
    healthBeforeHunt: 40,
    huntSpeed: 'Variable',
  },
  {
    name: 'Thayé',
    proofs: ['Ecriture fantomatique', 'Orbe fantomatique', 'D.O.T.S.'],
    hint:
      "Beaucoup plus actif que les autres entités, pourra chasser tôt (75%), et courir vite. Progressivement au fil de la partie, si les joueurs sont à proximité, le Thayé vieillira (si dans la même piece), abaissant son taux d’activité et sa menace, change d'âge au fur et à mesure de la partie",
    specifications: [
      'Santé mentale max. avant chasse : très anticipée, 75%',
      'Vitesse fixe en chasse : 2.75',
      'Perte de capacité par niveau de vieillissement : 6% (minimum atteint à 10 niveaux de vieillissement : 15%)',
    ],
    healthBeforeHunt: 75,
    huntSpeed: 'Variable',
  },
] as const;

type Equipement = {
  name: string;
  description: string;
  type: 'tool' | 'cursed';
  rateLabels: string[];
  tiers: string[][];
  img: string;
  proof?: Proof;

  relatedEntities: Entity[];
};
export const equipements: Equipement[] = [
  {
    name: 'Lampe de poche',
    description:
      'La lampe de poche est un objet permettant de vous éclairer sur le lieu d’enquête. Les meilleures lampes torche permettent d’encore mieux s’éclairer.',
    rateLabels: ['Luminosité'],
    tiers: [],
    type: 'tool',
    img:
      'https://www.phasmophobia-fr.com/wp-content/uploads/2021/08/Lampe-puissante-2.0-1024x576.png',
    proof: 'Empreinte U.V.',
    relatedEntities: entities.map((e) =>
      (e.proofs.includes('Empreinte U.V.') && e) || null
    ).filter((n) => n != null),
  },

  {
    name: 'Spirit Box',
    description:
      'La Spirit Box est une radio qui permet à l’entité de répondre à certaines questions en activant une radio. Les meilleures Spirit Box ont une bien meilleure portée et la réponse est généralement plus claire.',
    rateLabels: ['Qualité', 'Probabilité de réponse'],
    type: 'tool',
    tiers: [
      [
        'Absence de réponse : Diode rouge',
        'Présence de réponse : Diode blanche accompagnée de bruits de radio',
        'La qualité de réponse est faible et la probabilité de réponse également.',
        'Tant que vous avez cet équipement uniquement, il est assez difficile d’obtenir une réponse dans les pièces les plus larges.',
        'La stratégie la plus fiable est d’attendre une apparition, puis placez-vous proche de l’endroit où entité a fini son apparition. Demandez ensuite à l’entité la question qui vous intéresse. ',
        'Etant proche de l’entité, vous optimiserez vos chances d’avoir une réponse.',
      ],
      [
        'Temps de chargement des empreintes : 5s',
        'Le bâton lumineux permet d’avoir une lumière de zone permettant de révéler des empreintes proches.',
        'Il est nécessaire une fois par minute de le secouer afin de restaurer son pouvoir éclairant.',
        'Il vous faudra rester à côté des empreintes un certain temps afin de les charger suffisamment en lumière pour les prendre en photo.',
      ],
      [
        'Temps de chargement des empreintes : 1,5s.',
        'Objet électronique. Attire l’entité en chasse si tenu allumé proche.',
        'La lampe pro permet d’avoir un large cône de lumière UV qui révèle très rapidement les empreintes.',
        'Il ne faut qu’un instant pour suffisamment charger les empreintes pour les prendre en photo.',
        'Sa luminosité est suffisante pour remplacer partiellement une lampe torche classique sur les maps les moins grandes, cependant vous ne pourrez pas l’utiliser en tant que lampe mains-libres comme une lampe torche.',
      ],
    ],
    img:
      'https://www.phasmophobia-fr.com/wp-content/uploads/2021/08/Lampe-UV-2.0.png',
    proof: 'Spirit box',
    relatedEntities: entities.map((e) =>
      (e.proofs.includes('Spirit box') && e) || null
    ).filter((n) => n != null),
  },
];
