
const passageText = `
<h2>Prosopagnosia</h2>
<p>Prosopagnosia, often called ‘face blindness’, is a cognitive disorder that affects facial recognition. ... (to‘liq matnni shu yerga qo‘ying, paragraflar bilan)</p>
`;

const questions = [
  {
    type: 'tfng',
    stem: 'Prosopagnosia is a condition that makes it difficult for people to remember names.',
    options: ['True', 'False', 'Not Given'],
    answer: 'False',
    explanation: 'The condition affects recognition of faces, not names.'
  },
  {
    type: 'tfng',
    stem: 'Jacob Hodes intentionally ignored a fellow student for a year.',
    options: ['True', 'False', 'Not Given'],
    answer: 'False',
    explanation: 'It wasn’t intentional – he couldn’t recognize the student’s face.'
  },
  {
    type: 'tfng',
    stem: 'All cases of prosopagnosia are caused by brain injury.',
    options: ['True', 'False', 'Not Given'],
    answer: 'False',
    explanation: 'The passage describes developmental prosopagnosia as not caused by injury.'
  },
  {
    type: 'tfng',
    stem: 'Recent studies show that face blindness may be more common than previously thought.',
    options: ['True', 'False', 'Not Given'],
    answer: 'True',
    explanation: 'Studies show 2–2.5% of people may have it.'
  },
  {
    type: 'tfng',
    stem: 'People with prosopagnosia are always aware they have a problem.',
    options: ['True', 'False', 'Not Given'],
    answer: 'False',
    explanation: 'They often don’t realize others recognize faces more easily.'
  },
  {
    type: 'tfng',
    stem: 'All prosopagnosics cannot recognize family members.',
    options: ['True', 'False', 'Not Given'],
    answer: 'False',
    explanation: 'They can use other clues like hair, voice, or clothing.'
  },
  {
    type: 'tfng',
    stem: 'Some scientists believe studying prosopagnosia could reveal how the brain processes faces.',
    options: ['True', 'False', 'Not Given'],
    answer: 'True',
    explanation: 'The passage states this explicitly.'
  },
  {
    type: 'tfng',
    stem: 'The studies mentioned in the passage were all conducted in Germany.',
    options: ['True', 'False', 'Not Given'],
    answer: 'False',
    explanation: 'Studies were conducted in the US, UK, and Germany.'
  },
  {
    type: 'tfng',
    stem: 'Some people with face blindness develop coping strategies.',
    options: ['True', 'False', 'Not Given'],
    answer: 'True',
    explanation: 'They use clothing, voice, and hair to identify people.'
  },
  {
    type: 'tfng',
    stem: 'All people with developmental prosopagnosia are born with the condition.',
    options: ['True', 'False', 'Not Given'],
    answer: 'Not Given',
    explanation: 'It says they are either born with it or develop it early in life.'
  },
  {
    type: 'tfng',
    stem: 'The researchers expected such a high percentage of people to be affected.',
    options: ['True', 'False', 'Not Given'],
    answer: 'False',
    explanation: 'The results took everyone by surprise.'
  },
  {
    type: 'tfng',
    stem: 'There is a cure for prosopagnosia.',
    options: ['True', 'False', 'Not Given'],
    answer: 'Not Given',
    explanation: 'The passage does not discuss treatment or cure.'
  },
  {
    type: 'tfng',
    stem: 'People with face blindness can usually recognize people in familiar situations.',
    options: ['True', 'False', 'Not Given'],
    answer: 'True',
    explanation: 'Unless the person is out of context, they can manage.'
  }
];
