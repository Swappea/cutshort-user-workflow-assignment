// TODO: write deepFreeze instead of object.freeze

export const STAGES = Object.freeze([
  { key: 1, label: '1' },
  { key: 2, label: '2' },
  { key: 3, label: '3' },
  { key: 4, label: '4' },
]);

export const USAGE_TYPES = Object.freeze([
  {
    key: 'myself',
    header: 'For myself',
    description: 'Write better. Think more clearly. Stay organized',
  },
  {
    key: 'myTeam',
    header: 'With my team',
    description: 'Wiki, docs, tasks & projects, all in one place.',
  },
]);
