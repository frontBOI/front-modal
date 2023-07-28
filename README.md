# Gestion des modales

Le contexte ici présent centralise la gestion des modales. Celles-ci sont des composants
à part entière déclarés dans le dossier `/views`, et qui profitent des types déclarés dans
ce fichier.
Ainsi, une vue modale pourra jouir de plusieurs propriétés qui seront
renseignées au moment de son appel:

- **callback**: fonction exécutée lorsqu'on veut faire passer à la fonction appelante des
  valeurs depuis la modale. Par exemple, la modale sert à créer un nouveau
  lien, et on va passer ce nouveau lien à l'appelante pour qu'elle l'envoie
  au backend. Cela permet de respecter la separation of concerns.
- **onError**: lorsqu'une erreur se déclare durant l'exécution du callback, cette fonction
  est exécutée dans la modale.
- **data**: données à faire passer à la modale pour son bon fonctionnement. Ces données sont
  typées par inférence de type: en effet, le type passe par l'intermédiaire de
  l'object Feeds[] déclaré dans ce fichier, qui recense l'ensemble des
  types de données pour chaque modale. Ainsi, on profite de Typescript au moment
  de l'appel de la modale, pour passer les données attendues.

# Créer une nouvelle modale

Pour créer une nouvelle vue, rien de plus simple: il suffit de créer un nouveau composant
dans le dossier `/views`. Il faut ensuite ajouter cette nouvelle modale à 1) l'énumération
Modal et 2) à l'objet Modals. De là, on peut appeler sa modale.
