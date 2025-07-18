
const passageText = `
<h2>Prosopagnosia</h2>
<p>Prosopagnosia, often called ‘face blindness’, is a cognitive disorder that affects facial recognition. People with this condition find it difficult to recognize familiar faces, including those of friends, family members, and even themselves in mirrors or photographs. The severity of the disorder can vary, with some people being completely unable to distinguish one face from another, while others may only have trouble recognizing faces out of context. Prosopagnosia is not related to memory dysfunction, impaired vision, or learning disabilities. It can result from brain damage (acquired prosopagnosia), but more commonly it is a developmental disorder (developmental prosopagnosia), which appears to be present from birth and not associated with any apparent brain damage.</p>

<p>Jacob Hodes, a college student who has prosopagnosia, explains his experience: “There was a fellow student who sat next to me in the dining hall nearly every day for a year. Then one day he shaved off his beard — and I had absolutely no idea who he was.” People like Hodes often rely on clothing, hairstyles, voices, and other cues to identify those around them.</p>

<p>Until recently, prosopagnosia was thought to be extremely rare. However, recent studies suggest that as many as 2 to 2.5 percent of the population may suffer from some form of face blindness. Many people may not even be aware that they have the condition. They might simply believe that they are bad at remembering faces, not realizing that others have an easier time with this task.</p>

<p>Scientists are studying prosopagnosia not only to help those affected by it, but also to gain a better understanding of how the brain processes facial information. Some believe that the disorder can provide insights into the specific brain mechanisms involved in face recognition. Studies conducted in the United States, the United Kingdom, and Germany are exploring how people with prosopagnosia compensate for their deficits and how the condition might be inherited genetically.</p>
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
