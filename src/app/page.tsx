import Image from "next/image";
import LocalizedFileNames from "../../public/kjkl.png";
// import { FontAwesomeIcon } from "../../node_modules/font-awesome/fonts/fontawesome-webfont.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebook } from 'react-icons/fa';
import { faFacebook, faInstagram, faTiktok, faTwitter, faXTwitter } from '@fortawesome/free-brands-svg-icons';



export default function Home() {
  return (
    <>
   <div className="flex items-center justify-between bg-sky-500">
      <div className="xl:text-4xl xl:px-36 lg:text-3xl lg:px-32 md:text-2xl md:px-28 py-5 font-bold text-white text-xl px-8">
        Discord
      </div>
  <ul className="lg:gap-6 md:gap-4 lg:px-10 md:px-8 xl:gap-8 xl:px-12 font-semibold md:flex hidden gap-2 px-2">
    <li className="hover:underline">Download</li>
    <li className="hover:underline">Download</li>
    <li className="hover:underline">Download</li>
    <li className="hover:underline">Download</li>
    <li className="hover:underline">Download</li>
    </ul>      
   </div>
    <div className="py-32 px-36 bg-sky-500">
      <h2 className="lg:text-5xl text-3xl flex justify-center font-bold">Imagine A Place</h2>
      <div className="flex justify-center">
      <p className="py-5 text-white">
      where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde incidunt facere ipsa deserunt illo voluptatem quo magnam similique, odit odio? Obcaecati veritatis laborum culpa sapiente laudantium temporibus rerum, libero sunt!
      </p>
      </div>
      <br />
      <div className="flex justify-around">
        <button className="w-1/3 bg-slate-200 text-black hover:transition ease-in-out duration-700 hover:duration-700 hover:bg-black hover:text-white lg:text-xl md:text-base sm:text-sm text-xs rounded-full py-3 px-auto flex justify-around"><svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-12 fill-current text-black-500" viewBox="0 -960 960 960"><path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"/></svg>Download for Windows</button>
        <button className="w-1/3 bg-black text-white hover:transition ease-in-out duration-700 hover:duration-700 hover:bg-slate-200 hover:text-black lg:text-xl md:text-base sm:text-sm text-xs rounded-full py-3 px-auto">Open Discord in your browser</button>
      </div>
      </div>
      <div className="flex justify-center gap-28">
        <div className="w-1/3 h-1/3 py-14">
          <img src="kjko.png" alt="Pic" />
        </div>
        <div className="w-1/3 h-1/3 py-14">
          <p className="text-sm md:text-2xl lg:text-4xl xl:text-5xl font-bold">
          Create an invite-only place where you belong
          </p>
          <p className="py-5 text-sm md:text-lg lg:text-xl xl:text-2xl">
          Discord servers are organized into topic-based channels where you can collaborate, share, and just talk about your day without clogging up a group chat.
          </p>
        </div>
      </div>
      <div className="flex justify-center gap-28" style={{ backgroundColor: 'rgb(246,246,246)' }}>
      <div className="w-1/3 h-1/3 py-14">
          <p className="text-sm md:text-2xl lg:text-4xl xl:text-5xl font-bold">
          Where hanging out is easy          </p>
          <p className="py-5 text-sm md:text-lg lg:text-xl xl:text-2xl">
          Grab a seat in a voice channel when youre free. Friends in your server can see youre around and instantly pop in to talk without having to call.          </p>
        </div>
        <div className="w-1/3 h-1/3 py-14">
          <img src="kjki.png" alt="Pic" />
        </div>
        </div>
        <div className="flex justify-center gap-28">
        <div className="w-1/3 h-1/3 py-14">
          <img src="kjkp.png" alt="Pic" />
        </div>
        <div className="w-1/3 h-1/3 py-14">
          <p className="text-sm md:text-2xl lg:text-4xl xl:text-5xl font-bold">
          From few to a fandom          </p>
          <p className="py-5 text-sm md:text-lg lg:text-xl xl:text-2xl">
          Get any community running with moderation tools and custom member access. Give members special powers, set up private channels, and more.          </p>
        </div>
      </div>
      <div style={{ backgroundColor: 'rgb(246,246,246)' }}>
      <div className="w-full h-1/3 py-8">
        <p className="lg:text-5xl text-3xl flex justify-center font-bold px-16">RELIABLE TECH FOR STAYING CLOSE</p>
        </div>
        <div className=" flex px-20 py-2">
          <p>Low-latency voice and video feels like youre in the same room. Wave hello over video, watch friends stream their games, or gather up and have a drawing session with screen share.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum eveniet et aspernatur, ad minima facere, deleniti iure quibusdam enim perspiciatis repellat, accusantium officia quaerat placeat dolorum architecto voluptate illum tempora?
          </p>
        </div>
        <div>
          <img src="kjku.png" alt="Pic" />
        </div>
        <div className="flex justify-center">
        <img src="kjky.png" alt="Pic" className="py-2 mt-1" />
        </div>
        <div className="flex justify-center">
        <button style={{ backgroundColor: 'rgb(88,101,242)' }} className=" px-6 text-white lg:text-xl md:text-base sm:text-sm text-xs rounded-full py-3 mb-12 flex justify-around hover:shadow-lg hover:shadow-gray-500 hover:duration-700  duration-500"><svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-12 fill-current text-white" viewBox="0 -960 960 960"><path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"/></svg>Download for Windows</button>
      </div>
      </div>
      <footer style={{ backgroundColor: 'rgb(35,39,42)' }} className="w-full flex">
        <div className="px-60 py-20">
          <button data-dropdown-toggle="dropdown" className="text-white flex">English<svg className="w-2.5 h-2.5 ms-3 my-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
</svg></button>

        <div className="py-6">
          <ul className="flex gap-3">
            <li className="text-white w-10 h-8"><FontAwesomeIcon icon={faFacebook} className="fa-brands fa-facebook" />
</li>
            <li className="text-white w-10 h-8"><FontAwesomeIcon icon={faXTwitter} className="fa-brands fa-x-twitter" /></li>
            <li className="text-white w-10 h-8"><FontAwesomeIcon icon={faInstagram} className="fa-brands fa-instagram" /></li>
            <li><img className="w-10 h-8" src="YouTubeActivity.png" alt="YouTube" /></li>
            <li className="text-white w-10 h-8"><FontAwesomeIcon icon={faTiktok} className="fa-brands fa-tiktok" /></li>
          </ul>
        </div>
        </div>
        <div className="flex px-20 gap-8  py-20 ">
        <div>
        <ul style={{ color: 'rgb(88,101,242)' }} className="">
          <li>Products</li>
        </ul>
        </div>
        <div>
        <ul style={{ color: 'rgb(88,101,242)' }} className="">
          <li>Company</li>
        </ul>
        </div>
        <div>
        <ul style={{ color: 'rgb(88,101,242)' }} className="">
          <li>Resources</li>
        </ul>
        </div>
        <div>
        <ul style={{ color: 'rgb(88,101,242)' }} className="">
          <li>Policies</li>
        </ul>
        </div>
        </div>
        <script src="https://kit.fontawesome.com/1f48a0d62b.js" crossOrigin="anonymous"></script>
      </footer>
   </>
  );
}