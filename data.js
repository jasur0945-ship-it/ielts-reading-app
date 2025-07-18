const passageText = `
<h2>Prosopagnosia</h2>
<p>Prosopagnosia, often called 'face blindness', is a cognitive disorder that affects facial recognition...</p>
`;

const questions = [
  {
    type: 'tfng',
    stem: 'Prosopagnosia is commonly referred to as face blindness.',
    options: ['True', 'False', 'Not Given'],
    answer: 'True',
    explanation: 'The text says “often called ‘face blindness’,” which confirms this.'
  },
  {
    type: 'tfng',
    stem: 'It is easy to identify prosopagnosia in babies.',
    options: ['True', 'False', 'Not Given'],
    answer: 'Not Given',
    explanation: 'The passage does not explicitly state this.'
  }
];
