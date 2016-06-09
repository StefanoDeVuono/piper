const quotes = [
  'One reason for making and exhibiting a work is to induce a reaction or change in the viewer.... In this sense, the work as such is nonexistent except when it functions as a medium of change between the artist and viewer.',
  'Racism is a visual pathology.',
  'My work is an act of communication, and it’s important to me the way what I assert lands, and where it lands within someone who sees it. On the other hand, I also recognize fully and live by the principle that once the work leaves my studio, I cannot control the effects it has.',
  '... my mom died in ‘94 and I took care of her for two years before she died, and she died of emphysema... she was very radically anti-smoking and my father also died of smoking-related diseases. And when she was dying, she kept urging me to make art out of it because she was in so much pain and she didn’t want for it to be for nothing. So my role was basically to give her death meaning, so I started taking all of these photographs and now I have thousands of photographs of her...',
  'I am black. What are you going to do about it?'
],
alone =
`Dear Friend,
   I am not here to pick anyone up, or to be picked up. I am here alone, because I want to be here, ALONE.
   This card is not intended as part of an extended flirtation.
   Thank you for respecting my privacy.`,
black =
`Dear Friend,
  I am black.
  I am sure you did not realize this wehn you made/laughed at/agreed with that racist remark. In the past I have attempted to alert white people to my racial identity in advance. Unfortunately, this invariabley cuases them to react to me as pushy, manipulative, or socially inappropriate. Therefore, my policy is to assume that white people do not make these remarks even when they believe there are no black people present, and to send you this text when they do.
  I regreat any discomfort my presence is causing you, just as I am sure you regret the discomfort your racism is causing me.`;

var selectQuote = function(){
  var index = Math.floor(Math.random() * quotes.length);
  return quotes[index];
};

exports.quotes = quotes;
exports.alone = alone;
exports.black = black;
exports.selectQuote = selectQuote;
