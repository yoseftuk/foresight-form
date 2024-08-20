export enum Prefix {
  Mr = 'Mr.',
  Ms = 'Ms.',
  Mrs = 'Mrs',
}

export enum MoominCharachter {
  Moomin = 'moomin',
  MoominMama = 'moominmama',
  MoominPapa = 'moominpapa',
  Snork = 'snork',
  Snorkmaiden = 'snorkmaiden',
  Sniff = 'sniff',
  Snufkin = 'snufkin',
  LittleMy = 'little-my',
  Hemulens = 'hemulens',
}

export interface AppForm {
  prefix?: Prefix;
  firstName?: string;
  lastName?: string;
  moominCharachter?: MoominCharachter;
  favoriteMoominCharachters?: MoominCharachter[];
}
