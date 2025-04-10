
const WHO = ['The dog', 'My grandma', 'The mailman', 'My bird'];
const ACTION = ['ate', 'peed', 'crushed', 'broke'];
const WHAT = ['my homework', 'my phone', 'the car', 'the computer'];
const WHEN = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

const randomIndex = (list) => Math.floor(Math.random() * list.length);
const phrase = (list, index) => list[index];
const excuseGenerator = () => {
    const who = phrase(WHO, randomIndex(WHO));
    const action = phrase(ACTION, randomIndex(ACTION));
    const what = phrase(WHAT, randomIndex(WHAT));
    const when = phrase(WHEN, randomIndex(WHEN));
    return `${who} ${action} ${what} ${when}`;
}

const PRONOUN = ['the', 'our'];
const ADJ = ['great', 'big'];
const NOUN = ['jogger', 'racoon'];
const TERN = ['.com', '.es'];

const domainGenerate = () => {
  let domains = [];
  PRONOUN.forEach(pronoun => {
    ADJ.forEach(adj => {
      NOUN.forEach(noun => {
        TERN.forEach(tern => {
          domains.push(pronoun + adj + noun + tern)
        });
      });
    });
  });
  return domains;
};

const generators = {
  excuse : excuseGenerator,
  domain : domainGenerate,
}

const identifyGenerator = (generator) => {
  const typoGenerator = generators[generator];
  if(!typoGenerator) return;
  return typoGenerator();
} 

console.log(identifyGenerator("domain"));
console.log(identifyGenerator("excuse"));



