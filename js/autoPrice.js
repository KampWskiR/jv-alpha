function shortnumber(number) {
  let formattedNumber;
  if (number >= 1000000000000) {
    formattedNumber = (number / 1000000000).toFixed(1) + 'T';
  } else if (number >= 1000000000) {
    formattedNumber = (number / 1000000000).toFixed(1) + 'B';
  } else if (number >= 1000000) {
    formattedNumber = (number / 1000000).toFixed(1) + 'M';
  } else if (number >= 1000) {
    formattedNumber = (number / 1000).toFixed(1) + 'K';
  } else {
    Math.floor(number)
    if (number != null) {
      formattedNumber = Math.floor(number)
    }
  }
  return formattedNumber;
}
function value() {
  document.querySelectorAll('p').forEach((paragraph) => {
    const number = paragraph.getAttribute('value');
    let formattedNumber;

    if (!number) return;
    paragraph.setAttribute('a5', number*1.1); // coin
    paragraph.setAttribute('a10', number*1.3);
    paragraph.setAttribute('a15', number*1.5);
    paragraph.setAttribute('a20', number*1.75);
    paragraph.setAttribute('a25', number*2);
    paragraph.setAttribute('b20', parseInt(number)+360000); // gem
    paragraph.setAttribute('b25', parseInt(number)+500000);

    paragraph.setAttribute('c20', parseInt(number)+260000); // exp
    paragraph.setAttribute('c25', parseInt(number)+500000);

    paragraph.setAttribute('d20', parseInt(number)+500000); // luck
    paragraph.setAttribute('d25', parseInt(number)+1000000);

    paragraph.setAttribute('e8', number*1.274+78400+58800+147000); // all
    paragraph.setAttribute('e10', number*1.3+80000+60000+150000);

    
    formattedNumber = shortnumber(paragraph.getAttribute('min'));
    paragraph.setAttribute('min-dfn', formattedNumber) 

    formattedNumber = shortnumber(paragraph.getAttribute('max'));
    paragraph.setAttribute('max-dfn', formattedNumber) 

    
    formattedNumber = shortnumber(paragraph.getAttribute('value'));
    paragraph.setAttribute('data-formatted-number', formattedNumber) 
    formattedNumber = shortnumber(paragraph.getAttribute('a5'));
    paragraph.setAttribute('a5', formattedNumber);
    formattedNumber = shortnumber(paragraph.getAttribute('a10'));
    paragraph.setAttribute('a10', formattedNumber);
    formattedNumber = shortnumber(paragraph.getAttribute('a15'));
    paragraph.setAttribute('a15', formattedNumber);
    formattedNumber = shortnumber(paragraph.getAttribute('a20'));
    paragraph.setAttribute('a20', formattedNumber);
    formattedNumber = shortnumber(paragraph.getAttribute('a25'));
    paragraph.setAttribute('a25', formattedNumber);

    formattedNumber = shortnumber(paragraph.getAttribute('b20'));
    paragraph.setAttribute('b20', formattedNumber);
    formattedNumber = shortnumber(paragraph.getAttribute('b25'));
    paragraph.setAttribute('b25', formattedNumber);

    formattedNumber = shortnumber(paragraph.getAttribute('c20'));
    paragraph.setAttribute('c20', formattedNumber);
    formattedNumber = shortnumber(paragraph.getAttribute('c25'));
    paragraph.setAttribute('c25', formattedNumber);

    formattedNumber = shortnumber(paragraph.getAttribute('d20'));
    paragraph.setAttribute('d20', formattedNumber);
    formattedNumber = shortnumber(paragraph.getAttribute('d25'));
    paragraph.setAttribute('d25', formattedNumber);

    formattedNumber = shortnumber(paragraph.getAttribute('e8'));
    paragraph.setAttribute('e8', formattedNumber);
    formattedNumber = shortnumber(paragraph.getAttribute('e10'));
    paragraph.setAttribute('e10', formattedNumber);
  
  });
}