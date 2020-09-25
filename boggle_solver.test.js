//Marbella Daniel @02898856





const boggle_solver = require('/home/codio/workspace/Boggle_Testing/boggle_solver.js');

/** Lowercases a string array in-place. (Used for case-insensitive string array
 *  matching).
 * @param {string[]} stringArray - String array to be lowercase.
 */
function lowercaseStringArray(stringArray) {
  for (let i = 0; i < stringArray.length; i++)
    stringArray[i] = stringArray[i].toLowerCase();
}

describe('Boggle Solver tests suite:', () => {
  describe('Normal input', () => {
    
    test('4x4 Grid Works', () => { //Testing that iteration is correct throughout grid 

      const grid = [['J','S', 'L','E'],
                    ['E','N','P','Y'],
                    ['E','H','T','H'],
                    ['E','O','I','N']];
   
    const dictionary = ['else','espy','hen','high','hens','hint','hit','hitter','hoe','hot',
                        'hype','hyphen','hyphens','into','ley','lye','nee','neo','nit','one',
                        'phi','ply','see','seen','sent','slept','sly','spy','the','thee','then',
                        'thin','thy','tight','tin','toe','type','yep','yelp','yelps','tester'
                        ,'jsleypneehthnioe','je','eels'];
      
    const expected = ['else','espy','hen','hens','hint','hit','hoe','hot',
                        'hype','hyphen','hyphens','into','ley','lye','nee','neo','nit', 'phi',
                        'ply','see','seen','sent','slept','sly','spy','the','thee','then',
                        'thin','thy','tin','toe','type','yep','yelp','yelps','jsleypneehthnioe']; 

      let solutions = boggle_solver.findAllSolutions(grid, dictionary);
//    Lowercasing for case-insensitive string array matching.
      lowercaseStringArray(solutions);
      lowercaseStringArray(expected);
      expect(solutions.sort()).toEqual(expected.sort());
    });
    
  });
});

  
  describe('Problem contraints', () => {
    
    // Test that only Qx works iFF x == u
    test("Words contianing Qx, when x != u", ()=>{ 
      const grid = [['Qt','X'], ['R','L']];
      const dictionary = ["QtR"];
      const expected = [];
      
       let solutions = boggle_solver.findAllSolutions(grid,dictionary);
      solutions = solutions.sort();
      lowercaseStringArray(solutions);
      lowercaseStringArray(expected);
      expect(solutions.sort()).toEqual(expected.sort());
    });
    
    test('Makes sure that the list can end with just letter Q', ()=>{ 
      const grid = [['X','Y','Z'],['A','B','C'],['O','P','Q']];
      const dictionary = [""];
      const expected = [];
      
      let solutions = boggle_solver.findAllSolutions(grid,dictionary);
      solutions = solutions.sort();
      lowercaseStringArray(solutions);
      lowercaseStringArray(expected);
      expect(solutions.sort()).toEqual(expected.sort());
    });
    
    test('Double letters, aside from Qu exception case', ()=>{
      const grid = ["AB", "CD"];
      const dictionary = ["ABCD"];
      const expected = [];
      
       let solutions = boggle_solver.findAllSolutions(grid,dictionary);
      solutions = solutions.sort();
      lowercaseStringArray(solutions);
      lowercaseStringArray(expected);
      expect(solutions.sort()).toEqual(expected.sort());
    });
     
  });

  
  describe('Input edge cases', () => {

    // Test that when dictionary is empty it return nothing
      test('Dictionary is empty', () => {
      const grid = [['A', 'B', 'C', 'D'],
                    ['E', 'F', 'G', 'H'],
                    ['I', 'J', 'K', 'L'],
                    ['M', 'N', 'O', 'P']];
      const dictionary = [];
      const expected = [];

      let solutions = boggle_solver.findAllSolutions(grid, dictionary);
      lowercaseStringArray(solutions);
      lowercaseStringArray(expected);
      expect(solutions.sort()).toEqual(expected.sort());
    });
    
     //Test that double letters in grid should only work if Qu
     test('Double letters', ()=>{
      const grid = ["AB", "CA"];
      const dictionary = ["ABCA"];
      const expected = [];
      
      let solutions = boggle_solver.findAllSolutions(grid,dictionary);
      solutions = solutions.sort();
      lowercaseStringArray(solutions);
      lowercaseStringArray(expected);
      expect(solutions.sort()).toEqual(expected.sort());
    });
    
    //Test that Qu works
     test('Words with Qu are valid input', ()=>{ 
      const grid = [['Qu','A'], ['E','B']];
      const dictionary = ["QuE"];
      const expected = ["QUE"]; 
    });    
});
 