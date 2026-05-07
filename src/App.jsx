// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <section id="center">
//         <div className="hero">
//           <img src={heroImg} className="base" width="170" height="179" alt="" />
//           <img src={reactLogo} className="framework" alt="React logo" />
//           <img src={viteLogo} className="vite" alt="Vite logo" />
//         </div>
//         <div>
//           <h1>Get started</h1>
//           <p>
//             Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
//           </p>
//         </div>
//         <button
//           type="button"
//           className="counter"
//           onClick={() => setCount((count) => count + 1)}
//         >
//           Count is {count}
//         </button>
//       </section>

//       <div className="ticks"></div>

//       <section id="next-steps">
//         <div id="docs">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#documentation-icon"></use>
//           </svg>
//           <h2>Documentation</h2>
//           <p>Your questions, answered</p>
//           <ul>
//             <li>
//               <a href="https://vite.dev/" target="_blank">
//                 <img className="logo" src={viteLogo} alt="" />
//                 Explore Vite
//               </a>
//             </li>
//             <li>
//               <a href="https://react.dev/" target="_blank">
//                 <img className="button-icon" src={reactLogo} alt="" />
//                 Learn more
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div id="social">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#social-icon"></use>
//           </svg>
//           <h2>Connect with us</h2>
//           <p>Join the Vite community</p>
//           <ul>
//             <li>
//               <a href="https://github.com/vitejs/vite" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#github-icon"></use>
//                 </svg>
//                 GitHub
//               </a>
//             </li>
//             <li>
//               <a href="https://chat.vite.dev/" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#discord-icon"></use>
//                 </svg>
//                 Discord
//               </a>
//             </li>
//             <li>
//               <a href="https://x.com/vite_js" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#x-icon"></use>
//                 </svg>
//                 X.com
//               </a>
//             </li>
//             <li>
//               <a href="https://bsky.app/profile/vite.dev" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#bluesky-icon"></use>
//                 </svg>
//                 Bluesky
//               </a>
//             </li>
//           </ul>
//         </div>
//       </section>

//       <div className="ticks"></div>
//       <section id="spacer"></section>
//     </>
//   )
// }

// export default App

// import { useState } from "react";

// function App() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = (e) => {
//     e.preventDefault();

//     if (email === "admin@gmail.com" && password === "12345") {
//       alert("Login Successful");
//     } else {
//       alert("Wrong Email or Password");
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <form style={styles.form} onSubmit={handleLogin}>
//         <h1>Login Page</h1>

//         <input
//           type="email"
//           placeholder="Enter Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           style={styles.input}
//         />

//         <input
//           type="password"
//           placeholder="Enter Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           style={styles.input}
//         />

//         <button type="submit" style={styles.button}>
//           Login
//         </button>
//       </form>
//     </div>
//   );
// }

// const styles = {
//   container: {
//     height: "100vh",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#f0f2f5",
//   },

//   form: {
//     backgroundColor: "white",
//     padding: "30px",
//     borderRadius: "10px",
//     width: "300px",
//     boxShadow: "0px 0px 10px rgba(0,0,0,0.2)",
//   },

//   input: {
//     width: "100%",
//     padding: "10px",
//     marginBottom: "15px",
//     borderRadius: "5px",
//     border: "1px solid gray",
//   },

//   button: {
//     width: "100%",
//     padding: "10px",
//     backgroundColor: "blue",
//     color: "white",
//     border: "none",
//     borderRadius: "5px",
//     cursor: "pointer",
//   },
// };

// export default App;
import { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === "admin@gmail.com" && password === "12345") {
      alert("Login Successful");
    } else {
      alert("Wrong Email or Password");
    }
  };

  return (
    <div style={styles.container}>
      <form style={styles.form} onSubmit={handleLogin}>
        <h1>Login Page</h1>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />

        <button type="submit" style={styles.button}>
          Login
        </button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f2f5",
  },

  form: {
    backgroundColor: "white",
    padding: "30px",
    borderRadius: "10px",
    width: "300px",
    boxShadow: "0px 0px 10px rgba(0,0,0,0.2)",
  },

  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    borderRadius: "5px",
    border: "1px solid gray",
  },

  button: {
    width: "100%",
    padding: "10px",
    backgroundColor: "blue",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default App;