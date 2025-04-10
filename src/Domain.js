
const PRONOUN = ['the', 'our'];
const ADJ = ['great', 'big'];
const NOUN = ['jogger', 'racoon'];
const TERN = ['.com', '.es'];

const generateDomain = () => {
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
console.log(generateDomain());
