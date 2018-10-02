export const scenesArr = [
  {
    id: 1,
    name: 'Room',
    text: 'There is a passage north.',
    go: ['1', false, false, false]
  },
  {
    id: 2,
    name: 'Passage',
    text: 'The passage goes north and south.',
    go: [false, '0', false, false]
  },
  {
    id: 3,
    name: 'Dead End',
    text: 'There is a passage south.',
    go: [false, '1', false, false]
  }
];
