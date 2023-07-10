function linearSearch(arr, valueToSearch) {
  const searchValue = valueToSearch.toLowerCase(); 
  
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i].toLowerCase(); 
    
    if (element === searchValue) {
      return i;
    }
  }
  
  return -1;
}
function binarySearch(arr, valueToSearch) {
  const searchValue = valueToSearch.toLowerCase()  
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === searchValue) {
      return mid;
    } else if (arr[mid] < searchValue) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}
function searchValue() {
  const searchInput = document.getElementById("searchInput");
  const valueToSearch = searchInput.value;
    const arr = ["long", "lâm", "phương"];
  const result = document.getElementById("result");

  const index = binarySearch(arr, valueToSearch);

  if (index !== -1) {
    result.textContent = `Phần tử ${valueToSearch} được tìm thấy tại vị trí ${index}.`;
  } else {
    result.textContent = `Phần tử ${valueToSearch} không được tìm thấy trong mảng.`;
  }
}
//?Sắp xếp nổi bọt
function bubbleSort(arr){
var len = arr.length
for(var i=0 ; i < len; ++i)
  for(var j=0; j < len-i; j++)
      if(parseInt(arr[j]) > parseInt(arr[j + 1])){
        var temp = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = temp;
      }
return arr;
}
function displayArray() {
  var inputArray = document.getElementById("inputArray").value;
  var arr = inputArray.split(","); 
  if(inputArray == ""){
    alert("Vui lòng chọn ít nhất một tùy chọn");  
  }else{
  var input = bubbleSort(arr)
  var result = document.getElementById("result")
  result.innerHTML = "Sắp Xếp:" +" "+ input
  }
}
 //?tìm kiếm nhị phân
function binarySearch(arr, valueToSearch) {
    const searchValue = valueToSearch;  
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
  
      if (arr[mid] === searchValue) {
        return mid;
      } else if (arr[mid] < searchValue) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  
    return -1;  
  }
 
  function searchValue() {
    var inputArray = document.getElementById("inputArray").value;
    var arr = inputArray.split(","); 
    var arr = bubbleSort(arr)
    const searchInput = document.getElementById("searchInput");
    const valueToSearch = searchInput.value;
    if(searchInput.value == ""){
      alert("Vui lòng chọn ít nhất một tùy chọn");  
    }else{
    const result1 = document.getElementById("result");
  
    const index = binarySearch(arr, valueToSearch);
  
    if (index !== -1) {
      result1.textContent = `Phần tử ${valueToSearch} được tìm thấy tại vị trí ${index}.`;
    } else {
      result1.textContent = `Phần tử ${valueToSearch} không được tìm thấy trong mảng.`;
    }
  }
  }
  //?CheckBox
  document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Ngăn chặn việc gửi form mặc định
    var checkbox1 = document.getElementById("checkbox1").checked;
    var checkbox2 = document.getElementById("checkbox2").checked;
    var checkbox3 = document.getElementById("checkbox3").checked;
    
    if (!checkbox1 && !checkbox2 && !checkbox3) {
      alert("Vui lòng chọn ít nhất một tùy chọn");
      return;
    }
    
    // Tiếp tục xử lý logic khi checkbox được chọn
    
    alert("Các tùy chọn đã được chọn thành công!");
  }); 
  //?Duyệt theo DFS
  class Graph { 
    constructor() { 
      this.vertices = []; // tạo danh sách đỉnh rỗng
      this.adjList = new Map(); // lữu trữ danh sách liền kề
    } 
   
    addVertex(v) { 
      this.vertices.push(v);  //Thêm một đỉnh mới vào danh sách đỉnh
      this.adjList.set(v, []); //khởi tạo danh sách kề của đỉnh đó là một mảng rỗng. 
    } 
   
    addEdge(v, w) { 
      this.adjList.get(v).push(w); 
      this.adjList.get(w).push(v); 
      //Thêm một cạnh nối giữa hai đỉnh v và w bằng cách thêm w vào danh sách kề của v và ngược lại. 
    } 
   
    dfs(startingNode) { //: Duyệt đồ thị theo chiều sâu bắt đầu từ đỉnh startingNode.
      const visited = {}; // tạo đối tượng visited theo dõi các đỉnh
      for (let i = 0; i < this.vertices.length; i++) { 
        visited[this.vertices[i]] = false; 
      } // duyệt lần lượt lần lượt các đỉnh 
      // this.vertices[i]  là tên của một đỉnh trong đồ thị. Dòng này đặt giá trị  false  cho đỉnh đó trong đối tượng  visited ,
      // tức là đỉnh đó chưa được duyệt. 
      //Việc sử dụng đối tượng  visited  giúp đảm bảo rằng mỗi đỉnh chỉ được duyệt một lần duy nhất trong quá trình BFS. 
      //Khi một đỉnh được duyệt, giá trị tương ứng của nó trong đối tượng  
      //visited  sẽ được đánh dấu là  true .
   
      this._dfsUtil(startingNode, visited); //gọi phương thức _dfsUtil để thực hiện duyệt đồ thị. 
    } 
   
    _dfsUtil(v, visited) { //Duyệt đồ thị theo chiều sâu bắt đầu từ đỉnh v.
      visited[v] = true; //Đầu tiên, đánh dấu đỉnh v đã được duyệt
      var jet = document.getElementById("jet")
      jet.innerHTML += "<li>" + v + "<br>";
   
      const neighbors = this.adjList.get(v);//lấy danh sách kề của v và duyệt qua từng đỉnh láng giềng 
      for (let i = 0; i < neighbors.length; i++) { 
        const neighbor = neighbors[i]; //duyệt đỉnh láng giềng
        if (!visited[neighbor]) { // nếu đỉnh láng giềng chưa duyệt thì gọi đệ quy lại để duyệt từ làng giềng
          this._dfsUtil(neighbor, visited); 
        } 
      } 
    } 
  } 
   
  // Example usage: 
  const graph = new Graph(); //tạo một đối tượng graph
  const vertices = ['A', 'B', 'C', 'D', 'E', 'F']; 
  for (let i = 0; i < vertices.length; i++) { 
    graph.addVertex(vertices[i]); 
  } 
   
  graph.addEdge('A', 'B'); 
  graph.addEdge('A', 'C'); 
  graph.addEdge('B', 'D'); 
  graph.addEdge('B', 'E'); 
  graph.addEdge('C', 'F'); 
   
  // console.log('DFS traversal starting from vertex A:'); 
  var row = document.getElementById("row");
  row.innerHTML = "DFS traversal starting from vertex A:"
  graph.dfs('A')
  //?Duyệt theo BFS
  //? Tìm đường đi ngắn nhất dijkstra
  class DJA{
constructor(){
  this.dist = [];
  this.visited = []
  var min =  INT_MAX,min_idex
    for(var v = 0 ; v < 9; v++){
      if(this.visited[v] ==0 && this.dist[v]<=min){
        min = this.dist[v]
        min_idex = v;
    }
  }
  return min_idex;
}
printSolution(){
  this.dist = [];
  var ron = document.getElementById[ron]
  ron.innerHTML = "Đỉnh \t\t Khoảng cách từ nguồn\n";
  for(var i = 0; i<V ; i++){
    ron.innerHTML = i + this.dist[i]
  }
}
dijkstra(){
  var graph1 =[9][9]
  var source;
  this.dist = [9]
  this.visited = [9]
  for(var i = 0 ; i < 9 ; i++){
    dist[i] = INT_MAX;
    this.visited[i] = 0
  }
  dist[source] = 0
  for (var count = 0; count < 9 - 1; count++) {
    var u = minDistance(dist, visited);
    visited[u] = 1;

    for (var v = 0; v < 9; v++) {
        if (!visited[v] && graph1[u][v] && dist[u] != INT_MAX && dist[u] + graph1[u][v] < dist[v]) {
            dist[v] = dist[u] + graph1[u][v];
        }
    }
}
printSolution(dist)
}
  }
  const graph1 = new DJA();
 