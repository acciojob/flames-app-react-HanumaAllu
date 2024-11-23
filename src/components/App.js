import React, { useState } from "react";
import '../styles/App.css';

const App = () => {
  const [name1, setName1] = useState("");  // State to hold the first name
  const [name2, setName2] = useState("");  // State to hold the second name
  const [result, setResult] = useState("");  // State to hold the result of the FLAMES game

  // Function to calculate the relationship status
  const calculateRelationship = () => {
    if (!name1 || !name2) {
      setResult("Please Enter valid input");  // Check if inputs are empty
      return;
    }

    let str1 = name1.toLowerCase().split("");  // Convert first name to array of characters
    let str2 = name2.toLowerCase().split("");  // Convert second name to array of characters

    // Remove common letters between both names
    str1.forEach((char, index) => {
      const charIndex = str2.indexOf(char);
      if (charIndex > -1) {
        str1.splice(index, 1);
        str2.splice(charIndex, 1);
      }
    });

    // Calculate the sum of the lengths of remaining characters
    const remainingCount = str1.length + str2.length;

    // Take modulus by 6 to get the result index
    const relationshipIndex = remainingCount % 6;

    // Determine the relationship based on the result index
    switch (relationshipIndex) {
      case 1:
        setResult("Friends");
        break;
      case 2:
        setResult("Love");
        break;
      case 3:
        setResult("Affection");
        break;
      case 4:
        setResult("Marriage");
        break;
      case 5:
        setResult("Enemy");
        break;
      case 0:
        setResult("Siblings");
        break;
      default:
        setResult("Please Enter valid input");
        break;
    }
  };

  // Function to clear the inputs and result
  const clearInputs = () => {
    setName1("");
    setName2("");
    setResult("");
  };

  return (
    <div id="main">
      {/* Input field for the first name */}
      <input
        type="text"
        data-testid="input1"
        value={name1}
        onChange={(e) => setName1(e.target.value)}
        placeholder="Enter First Name"
      />
      <br />
      
      {/* Input field for the second name */}
      <input
        type="text"
        data-testid="input2"
        value={name2}
        onChange={(e) => setName2(e.target.value)}
        placeholder="Enter Second Name"
      />
      <br />
      
      {/* Button to calculate the relationship */}
      <button
        data-testid="calculate_relationship"
        onClick={calculateRelationship}
      >
        Calculate Relationship
      </button>
      <br />

      {/* Button to clear the inputs and result */}
      <button
        data-testid="clear"
        onClick={clearInputs}
      >
        Clear
      </button>

      {/* Display the relationship result */}
      <h3 data-testid="answer">{result}</h3>
    </div>
  );
};

export default App;
