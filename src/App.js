import logo from './logo.svg';
import './App.css';

function App() {

    /** algorithm
     * define a variable
     * use a variable
     */

  const heading = "profiles";
  const age = "17";
  const verified = false;

  /** Algorithm
   * return name
   */

    // type 1
    function printName () {
      //console.log("Rumana")
    }
    printName()
  
    // type 2
  function getName(){
    const name = "Rumana"
    return name;
  }

  // type 3
  function printPassedName(name){
    console.log(name);
  }
  // printPassedName("Rumana")

  // type 4
  function add(a,b){
    const result = a+b;
    return result;
  }

  // ternary operator
  // syntax (condition) ? statement1 : statement2

  // Map
  //numbers
  const numbers =[1,2,3,4,5]
  numbers.map((i) =>{
    console.log(i)
  });

  // string
  const names = ["saad","prince","rumana","basheer"];
  names.map((name) =>{
    console.log(name)
  });

  // objects
  const profiles = [
    {name:  "saad",
      age: 29
    },
    {name: "prince",
      age:35
    },
    {name:  "rumana",
      age:17
    },
    {name:  "bashir",
      age:20
    },
  ]

  profiles.map((profile)=>{
    console.log(profile.name,profile.age)
  })

  function add (a,b){
  const result = a+b ;
  return result 
  }
  
  function sub (a,b){
    const result = a-b ;
    return result 
    }

    function mul (a,b){
      const result = a*b ;
      return result 
      }

      function div (a,b){
        const result = a/b ;
        return result 
        }
  return (
    <div className="App">
      <h1>{heading}</h1>
      <p>Name:{getName()}</p>
      <p>Age: {age}</p>
      <p>Verified {verified ==true   ? "yes" :"no"} </p>
      <p>result {add(10,10)}</p>
      <p>result {add(20,20)}</p>
      <p>result {sub(20,10)}</p>
      <p>result {mul(20,20)}</p>
      <p>result {div(20,30)}</p>
      
    </div>
  )
  ;
}
export default App;

