const weakness = {
  1:'Normal',
  2:'Fire',
  3:'Water',
  4:'Electric',
  5:'Grass',
  6:'Ice',
  7:'Fighting',
  8:'Poison',
  9:'Ground',
  10:'Flying',
  11:'Psychic',
  12:'Bug',
  13:'Rock',
  14:'Ghost',
  15:'Dragon',
  16:'Dark',
  17:'Steel',
  18:'Fairy'
}

//Fill the object with Pokemon weakness...
export const pokeWeakness: {} = {
    1:[weakness[2],weakness[11],weakness[10],weakness[6]],
    2:[weakness[2],weakness[11],weakness[10],weakness[6]],
    3:[weakness[2],weakness[11],weakness[10],weakness[6]],
    4:[weakness[3],weakness[9],weakness[13]],
    5:[weakness[3],weakness[9],weakness[13]],
    6:[weakness[3],weakness[4],weakness[13]],
    7:[weakness[5],weakness[4]],
    8:[weakness[5],weakness[4]],
    9:[weakness[5],weakness[4]],
    10:[weakness[2],weakness[10],weakness[13]],
    11:[weakness[2],weakness[10],weakness[13]],
    12:['Fire','Flying','Electric','Ice','Rock']
  };