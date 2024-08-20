import {SelectOption} from './form/Select/Select.types';
import {MoominCharachter, Prefix} from './App.types';

const prefixOptions: SelectOption<Prefix>[] = [
  {
    label: 'Mr.',
    value: Prefix.Mr,
  },
  {
    label: 'Ms.',
    value: Prefix.Ms,
  },
  {
    label: 'Mrs.',
    value: Prefix.Mrs,
  },
];

const moominCharachterOptions: SelectOption<MoominCharachter>[] = [
  {
    label: 'Moomin',
    value: MoominCharachter.Moomin,
  },
  {
    label: 'Moominmama',
    value: MoominCharachter.MoominMama,
  },
  {
    label: 'Moominpapa',
    value: MoominCharachter.MoominPapa,
  },
  {
    label: 'Snorkmaiden',
    value: MoominCharachter.Snorkmaiden,
  },
  {
    label: 'Snork',
    value: MoominCharachter.Snork,
  },
  {
    label: 'Sniff',
    value: MoominCharachter.Sniff,
  },
  {
    label: 'Snufkin',
    value: MoominCharachter.Snufkin,
  },
  {
    label: 'Little My',
    value: MoominCharachter.LittleMy,
  },
  {
    label: 'Hemulens',
    value: MoominCharachter.Hemulens,
  },
];

export {prefixOptions, moominCharachterOptions};
