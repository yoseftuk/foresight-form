function classNames(...classes: (string | false | null | undefined)[]) {
  return classes.filter((c) => !!c).join(' ');
}

export default classNames;
