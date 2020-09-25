/**
 * Given a Boggle board and a dictionary, returns a list of available words in
 * the dictionary present inside of the Boggle board.
 * @param {string[][]} grid - The Boggle game board.
 * @param {string[]} dictionary - The list of available words.
 * @returns {string[]} solutions - Possible solutions to the Boggle board.
 */
 

//Marbella Daniel  @02898856
//Collaboration with Solomon Lucas and Trie Implementation Inspirtation/Usage from GeeksforGeeks


//Create Trie Data Structure 
class Trie{
    constructor(){
      this.head = {
      key: "",
      children: {},
    }
    }
    add(key) {
    var curNode = this.head;
    var newNode = null;
    var curChar = key.slice(0, 1);
  
    key = key.slice(1);
  
    while (
      typeof curNode.children[curChar] !== "undefined" &&
      curChar.length > 0
    ) {
      curNode = curNode.children[curChar];
      curChar = key.slice(0, 1);
      key = key.slice(1);
    }
  
    while (curChar.length > 0) {
      newNode = {
        key: curChar,
        value: key.length === 0 ? null : undefined,
        children: {},
      };
      curNode.children[curChar] = newNode;
  
      curNode = newNode;
  
      curChar = key.slice(0, 1);
      key = key.slice(1);
    }
  }
    search(key) {
      var curNode = this.head;
      var curChar = key.slice(0, 1); 
      key = key.slice(1); 
  
      if (typeof curNode.children[curChar] === "undefined" && curChar.length == 1)
        return false;
  
      while (
        typeof curNode.children[curChar] !== "undefined" &&
        curChar.length > 0
      ) {
        curNode = curNode.children[curChar];
        curChar = key.slice(0, 1);
        if (typeof curNode.children[curChar] === "undefined" && curChar.length == 1)
          return false;
        key = key.slice(1);
      }
      return true;
    }
  }
  
  function solver(root, grid, i, j, visited, string, output, dictionary) {
    visited[i][j] = true;

  if(grid[i][j].length > 1){
    if(grid[i][j] != 'Qu'){
         visited[i][j] = false;
         return;
       }
     }

    string = string + grid[i][j].toUpperCase();
  
    if (root.search(string) === true) {
      if (root.search(string) && dictionary.includes(string.toLowerCase())) {
        if(string.length >= 3){
            output.push(string);
        }
      }
  
    } else {
      visited[i][j] = false;
      return;
    }
    visited[i][j] = true;
  
    if (i >= 0 && j + 1 >= 0 && i < grid.length && j + 1 < grid.length) {
      if (visited[i][j + 1] == false) {
        solver(root, grid, i, j + 1, visited, string, output, dictionary);
        visited[i][j] = false;
      }
    }
  
    if (i + 1 >= 0 && j + 1 >= 0 && i + 1 < grid.length && j < grid.length) {
  
      if (visited[i + 1][j + 1] == false) {
        solver(root, grid, i + 1, j + 1, visited, string, output, dictionary);
        visited[i][j] = false;
      }
    }
  
    if (i - 1 >= 0 && j + 1 >= 0 && i < grid.length && j + 1 < grid.length) {
      if (visited[i - 1][j + 1] == false) {
        solver(root, grid, i - 1, j + 1, visited, string, output, dictionary);
        visited[i][j] = false;
      }
    }
    if (i + 1 >= 0 && j >= 0 && i + 1 < grid.length && j < grid.length) {
      if (visited[i + 1][j] == false) {
        solver(root, grid, i + 1, j, visited, string, output, dictionary);
        visited[i][j] = false;
      }
    }
  
    if (i + 1 >= 0 && j - 1 >= 0 && i + 1 < grid.length && j < grid.length) {
      if (visited[i + 1][j - 1] == false) {
        solver(root, grid, i + 1, j - 1, visited, string, output, dictionary);
        visited[i][j] = false;
      }
    }
    if (i >= 0 && j - 1 >= 0 && i < grid.length && j < grid.length) {
      if (visited[i][j - 1] == false) {
        solver(root, grid, i, j - 1, visited, string, output, dictionary);
        visited[i][j] = false;
      }
    }
  
    if (i - 1 >= 0 && j - 1 >= 0 && i < grid.length && j < grid.length) {
      if (visited[i - 1][j - 1] == false) {
        solver(root, grid, i - 1, j - 1, visited, string, output, dictionary);
        visited[i][j] = false;
      }
    }
  
    if (i - 1 >= 0 && j >= 0 && i < grid.length && j < grid.length) {
      if (visited[i - 1][j] == false) {
        solver(root, grid, i - 1, j, visited, string, output, dictionary);
        visited[i][j] = false;
      }
    }
  }
  
  
 
  exports.findAllSolutions = function(grid, dictionary) {
    let solutions = [];
    const root = new Trie();
    var length = dictionary.length;
    for (var i = 0; i < length; i++) {
      root.add(dictionary[i].toUpperCase());
    }
    var visited = [];
    //var arr = [];
    for (var x = 0; x < grid.length; x++) {
      let arr = new Array(grid.length);
      arr.fill(false);
      visited.push(arr);
    }
    var explorer = root;
    var string = "";
  
    for (i = 0; i < grid.length; i++) {
      for (var j = 0; j < grid.length; j++) {
        solver(explorer, grid, i, j, visited, string, solutions, dictionary);
      }
    }
  
  
    return solutions;
  }
  //console.log(exports.findAllSolutions(grid, dictionary));
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
