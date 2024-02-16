// import React from "react";

// const Navbar = () => {
//   return (
//     <div>
//     <nav className="container">
//     <div className='logo'>
//      <img src="C:\Users\HP\OneDrive\Desktop\WEBD PRACTICE\REACTPR\Project\vite-project\src\components\logo.jpg" alt="logo" /></div> 
//      <ul className="one">
//        <li href="#">Files</li>
//        <li href="#">Annotations</li>
//        <li href="#">Tags</li>
//        </ul>
//        <ul className="two">
//        <li href="#">ABOUT US</li>
//        <li href="#">Help & FAQ</li>
//      </ul>
//      <button>Login/signup</button>
//      <button>Logout</button>
//    </nav>
//    <textarea
//         className="container"
//         style={{ width: '100%', height: '200px', resize: 'none', overflow: 'auto' }}
//         placeholder="Type your text here..."
//       />
//     <nav className="container2">
    
//   <div class="progress-bar" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>

//      <button>Reset</button>
//      <button>Back</button>
//      <button>Next</button>
//      <button>save</button>
//    </nav>
//    <textarea
//         className="container"
//         style={{ width: '100%', height: '200px', resize: 'none', overflow: 'auto' }}
//         placeholder="Type your text here..."
//       />
//    </div>
   
   
//   );
// };

// export default Navbar;

import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulating progress for demonstration purposes
    const interval = setInterval(() => {
      setProgress((prevProgress) => (prevProgress < 100 ? prevProgress + 10 : 100));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="maincont">
      <nav className="container">
        <div className='logo'> 
          <img src="data:image/png;base64,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" alt="ANNOATAION" />
        </div>
        <ul className="one">
          <li href="#">Files</li>
          <li href="#">Annotations</li>
          <li href="#">Tags</li>
        </ul>
        <ul className="two">
          <li href="#">ABOUT US</li>
          <li href="#">Help & FAQ</li>
        </ul>
       <ul> <button>Login/signup</button>
        <button>Logout</button>
        </ul>
      </nav>
      <textarea
        className="container"
        style={{ width: '100%', height: '200px', resize: 'none', overflow: 'auto' }}
        placeholder="Type your text here..."
      />
      <nav className="container2">
        {/* Use className instead of class for React components */}
        <div className="progress-bar" role="progressbar" style={{ width: `${progress}%` }} aria-valuenow={progress} aria-valuemin="0" aria-valuemax="100"></div>
      <ul> <button>Reset</button>
        <button>Back</button>
        <button>Next</button>
        <button>Save</button>
        </ul> 
      </nav>
      <div className="butdiv">
      <textarea
        className="container"
        style={{ width: '100%', height: '200px', resize: 'none', overflow: 'auto' }}
        placeholder="Type your text here..."
      />
      <button className="add">Add label</button>
      <button className="edit">Edit label</button>
      </div>
    </div>
  );
};

export default Navbar;
