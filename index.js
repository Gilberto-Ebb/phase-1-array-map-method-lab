const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

//const rollCall = tutorials.map(student => student + " the wizard");

const titleCased = () => tutorials.map(tutor => {
  let i = 0;
  //tutorials[0].toUpperCase();
  for(i = 0; i < tutorials.length; i++)
  {
    const chars = tutorials[i].split('');
    chars[0].toUpperCase();
    
    let j = 0;

    for(j = 1; j < chars.length; j++)
    {
      if(chars[i] === " " && chars[i] != "=")
      {
        chars[i+1].toUpperCase();
        j++;
      }
    
    }
    
  }


  return tutorials
});