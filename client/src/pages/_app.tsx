import { UilGithubAlt } from '@iconscout/react-unicons';
import { UilLinkedinAlt } from '@iconscout/react-unicons';
import { UilTwitterAlt } from '@iconscout/react-unicons';
import { UilBagAlt } from '@iconscout/react-unicons';
import axios from "axios";

import "tailwindcss/tailwind.css";
import "../../styles/globals.css";

axios.defaults.baseURL = "<backend-url>";
function MyApp({ Component, pageProps }) {
  return (
    <div className="flex flex-col min-h-screen font-serif bg-purple-900 text-white">
      <div className="flex-grow">
        <Component {...pageProps} />
      </div>
      <footer className="py-4 bg-gray-900">
        <h2 className="text-center text-xl font-bold text-gray-400 mb-2">Contact Me</h2>
        <div className="flex justify-center space-x-4">
          <a href="https://github.com/iamshivanshyadav" target="_blank" rel="noopener noreferrer">
            <UilGithubAlt className="text-gray-300 hover:text-purple-300" size="24" />
          </a>
          <a href="https://www.linkedin.com/in/shivanshyadav27/" target="_blank" rel="noopener noreferrer">
            <UilLinkedinAlt className="text-gray-300 hover:text-purple-300" size="24" />
          </a>
          <a href="https://twitter.com/shivaayshivansh" target="_blank" rel="noopener noreferrer">
            <UilTwitterAlt className="text-gray-300 hover:text-purple-300" size="24" />
          </a>
          <a href="https://shivaay-portfolio.netlify.app/" target="_blank" rel="noopener noreferrer">
            <UilBagAlt className="text-gray-300 hover:text-purple-300" size="24" />
          </a>
        </div>
        <p className="text-center mt-2 text-sm text-gray-400">
          Developed by Shivansh Yadav
        </p>
      </footer>
    </div>
  );
}

export default MyApp;
