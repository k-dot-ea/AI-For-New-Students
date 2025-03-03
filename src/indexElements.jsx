// import React, { useState } from "react"

// const IndexElements = () => {
//     const [menuActive, setMenuActive] = useState(false);

//     const toggleMenu = () => {
//         setMenuActive(!menuActive);
//     };

//     return (
//         <div>
//             <nav id="logo_navbar">
//                 <div id="homepage">
//                     <a href="https://www.hull.ac.uk/">
//                         <img class="homepageimg" src="https://www.hull.ac.uk/assets/developer/static-templates/header/images/new/uoh-white.svg"
//                             alt="The University of Hull" width="150" height="95" />
//                     </a>
//                 </div>
//                 <LogoNavbar />
//                 <div id="navbar">
//                     <button type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:r0:" data-state="closed" id="menu" class="menu" onClick={toggleMenu}>
//                         <h2 id="hidden">menu</h2>
//                         <svg xmlns="http://www.w3.org/2000/svg" height="35" width="35" viewBox="0 0 48 48">
//                             <title>Main menu</title>
//                             <g stroke-linecap="square" stroke-width="3" fill="white" stroke="white" stroke-linejoin="miter" stroke-miterlimit="10">
//                                 <g class="js-nc-int-icon nc-int-menu">
//                                     <line x1="24" y1="10" x2="46" y2="10" stroke="white"></line>
//                                     <line x1="2" y1="24" x2="46" y2="24" stroke="white"></line>
//                                     <line x1="2" y1="38" x2="24" y2="38" stroke="white"></line>
//                                 </g>
//                             </g></svg></button>
//                 </div>
//                 {menuActive && (
//                     <div role="dialog" id="radix-:R32l5:" aria-describedby="radix-:R32l5H2:" aria-labelledby="radix-:R32l5H1:" data-state="open" class="fixed gap-4 transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500 dark:bg-slate-950 inset-y-0 left-0 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm md:max-w-[450px] z-[51] h-[100vh] w-full max-w-[100vw] border-none bg-blue-d p-0 pt-16 text-white shadow-none data-[state=closed]:ease-in sm:pt-20" title="menu panel" tabindex="-1">
//                         <div class="flex h-full flex-col overflow-y-scroll">
//                             <ul class="group/list m-4 flex grow flex-col gap-3 sm:gap-4 md:m-10">
//                                 <li>
//                                     <button type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:r1m:" data-state="closed" class="opacity-100 group-hover/list:opacity-60 false group/item flex w-full cursor-pointer items-center gap-2 text-[21px] font-bold transition-opacity duration-500 hover:!opacity-100 sm:text-h3" value="Study" title="Study">
//                                         <h2 id="radix-:r1n:" class="text-slate-950 dark:text-slate-50 text-lg font-semibold hidden">Study</h2>
//                                         Study
//                                         <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" class="false h-[36px] w-[36px] transition-transform duration-300 group-hover/item:translate-x-[10px] md:h-[48px] md:w-[48px]">
//                                             <title>right arrow</title>
//                                             <g stroke-linecap="square" stroke-width="4" fill="none" stroke="white" stroke-linejoin="miter" stroke-miterlimit="10">
//                                                 <polyline points="20,16 28,24 20,32 " stroke="white"></polyline>
//                                             </g></svg></button></li>
//                                 <li>
//                                     <button type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:r1p:" data-state="closed" class="opacity-100 group-hover/list:opacity-60 false group/item flex w-full cursor-pointer items-center gap-2 text-[21px] font-bold transition-opacity duration-500 hover:!opacity-100 sm:text-h3" value="Life at Hull" title="Life at Hull">
//                                         <h2 id="radix-:r1q:" class="text-slate-950 dark:text-slate-50 text-lg font-semibold hidden">Life at Hull</h2>
//                                         Life at Hull
//                                         <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" class="false h-[36px] w-[36px] transition-transform duration-300 group-hover/item:translate-x-[10px] md:h-[48px] md:w-[48px]">
//                                             <title>right arrow</title>
//                                             <g stroke-linecap="square" stroke-width="4" fill="none" stroke="white" stroke-linejoin="miter" stroke-miterlimit="10">
//                                                 <polyline points="20,16 28,24 20,32 " stroke="white"></polyline>
//                                             </g></svg></button></li>
//                                 <li>
//                                     <button type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:r1s:" data-state="closed" class="opacity-100 group-hover/list:opacity-60 false group/item flex w-full cursor-pointer items-center gap-2 text-[21px] font-bold transition-opacity duration-500 hover:!opacity-100 sm:text-h3" value="Research" title="Research">
//                                         <h2 id="radix-:r1t:" class="text-slate-950 dark:text-slate-50 text-lg font-semibold hidden">Research</h2>
//                                         Research
//                                         <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" class="false h-[36px] w-[36px] transition-transform duration-300 group-hover/item:translate-x-[10px] md:h-[48px] md:w-[48px]">
//                                             <title>right arrow</title>
//                                             <g stroke-linecap="square" stroke-width="4" fill="none" stroke="white" stroke-linejoin="miter" stroke-miterlimit="10">
//                                                 <polyline points="20,16 28,24 20,32 " stroke="white"></polyline>
//                                             </g></svg></button></li>
//                                 <li>
//                                     <button type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:r1v:" data-state="closed" class="opacity-100 group-hover/list:opacity-60 false group/item flex w-full cursor-pointer items-center gap-2 text-[21px] font-bold transition-opacity duration-500 hover:!opacity-100 sm:text-h3" value="International" title="International">
//                                         <h2 id="radix-:r20:" class="text-slate-950 dark:text-slate-50 text-lg font-semibold hidden">International</h2>
//                                         International
//                                         <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" class="false h-[36px] w-[36px] transition-transform duration-300 group-hover/item:translate-x-[10px] md:h-[48px] md:w-[48px]">
//                                             <title>right arrow</title>
//                                             <g stroke-linecap="square" stroke-width="4" fill="none" stroke="white" stroke-linejoin="miter" stroke-miterlimit="10">
//                                                 <polyline points="20,16 28,24 20,32 " stroke="white"></polyline>
//                                             </g></svg></button></li>
//                                 <li>
//                                     <button type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:r22:" data-state="closed" class="opacity-100 group-hover/list:opacity-60 false group/item flex w-full cursor-pointer items-center gap-2 text-[21px] font-bold transition-opacity duration-500 hover:!opacity-100 sm:text-h3" value="Work with us" title="Work with us">
//                                         <h2 id="radix-:r23:" class="text-slate-950 dark:text-slate-50 text-lg font-semibold hidden">Work with us</h2>
//                                         Work with us
//                                         <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" class="false h-[36px] w-[36px] transition-transform duration-300 group-hover/item:translate-x-[10px] md:h-[48px] md:w-[48px]">
//                                             <title>right arrow</title>
//                                             <g stroke-linecap="square" stroke-width="4" fill="none" stroke="white" stroke-linejoin="miter" stroke-miterlimit="10">
//                                                 <polyline points="20,16 28,24 20,32 " stroke="white"></polyline>
//                                             </g></svg></button></li>
//                                 <li>
//                                     <button type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:r25:" data-state="closed" class="opacity-100 group-hover/list:opacity-60 false group/item flex w-full cursor-pointer items-center gap-2 text-[21px] font-bold transition-opacity duration-500 hover:!opacity-100 sm:text-h3" value="News and events" title="News and events">
//                                         <h2 id="radix-:r26:" class="text-slate-950 dark:text-slate-50 text-lg font-semibold hidden">News and events</h2>
//                                         News and events
//                                         <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" class="false h-[36px] w-[36px] transition-transform duration-300 group-hover/item:translate-x-[10px] md:h-[48px] md:w-[48px]">
//                                             <title>right arrow</title>
//                                             <g stroke-linecap="square" stroke-width="4" fill="none" stroke="white" stroke-linejoin="miter" stroke-miterlimit="10"><
//                                                 polyline points="20,16 28,24 20,32 " stroke="white"></polyline>
//                                             </g></svg></button></li>
//                             </ul>
//                             <div class="p-4 md:px-10 md:py-6">
//                                 <p class="mb-6 text-[14px] uppercase leading-[21px] tracking-[1.6px] opacity-80 md:text-[16px]">Quick links</p>
//                                 <ul class="mb-3 flex flex-col gap-3 md:mb-0 md:gap-4">
//                                     <li>
//                                         <a href="/choose-hull/study-at-hull/visit-us/how-to-find-us.aspx" title="Find us" target="" rel="" class="flex items-center gap-3 underline hover:no-underline">
//                                             <img class="w-4" src="/assets/icon-library/standard/pin-3.x30400367.svg" alt="location pin" />
//                                             Find us
//                                         </a></li>
//                                     <li>
//                                         <a href="/study/order-or-download-a-prospectus/index.aspx" title="Download a prospectus" target="" rel="" class="flex items-center gap-3 underline hover:no-underline">
//                                             <img class="w-4" src="/assets/icon-library/standard/data-download.x7676577f.svg" alt="download file" />
//                                             Download a prospectus
//                                         </a></li>
//                                     <li>
//                                         <a href="/staff-and-students/index.aspx" title="Staff and students" target="" rel="" class="flex items-center gap-3 underline hover:no-underline">
//                                             <img class="w-4" src="/assets/icon-library/standard/profile.xd7e8de56.svg" alt="profile" />
//                                             Staff and students
//                                         </a></li>
//                                     <li>
//                                         <a href="/choose-hull/study-at-hull/library/index.aspx" title="Library" target="" rel="" class="flex items-center gap-3 underline hover:no-underline">
//                                             <img class="w-4" src="/assets/icon-library/standard/book.xa05b630b.svg" alt="book" />
//                                             Library
//                                         </a></li>
//                                     <li>
//                                         <a href="https://london.hull.ac.uk/" title="London campus" target="_blank" rel="noopener referrer" class="flex items-center gap-3 underline hover:no-underline">
//                                             <img class="w-4" src="/assets/icon-library/standard/map-pin.xfd7424ee.svg" alt="map-pin" />
//                                             London campus
//                                         </a></li>
//                                 </ul>
//                             </div>
//                             <div class="bg-blue-d-80 p-4 md:px-10 md:py-6">
//                                 <ul class="flex gap-4">
//                                     <li>
//                                         <a href="https://www.instagram.com/universityofhull/" class="block h-4 w-4">
//                                             <img class="w-4" src="/assets/icon-library/social/logo-instagram.x1772c8ed.svg" alt="Instagram logo" title="Instagram" />
//                                         </a></li>
//                                     <li>
//                                         <a href="https://www.tiktok.com/@uniofhull" class="block h-4 w-4">
//                                             <img class="w-4" src="/assets/icon-library/social/tiktok.xc6d139da.svg" alt="Tiktok logo" title="TikTok" />
//                                         </a></li>
//                                     <li>
//                                         <a href="https://twitter.com/UniOfHull" class="block h-4 w-4">
//                                             <img class="w-4" src="/assets/icon-library/social/x.x299f4922.svg" alt="Twitter logo" title="Twitter" />
//                                         </a></li>
//                                     <li>
//                                         <a href="https://www.facebook.com/UniversityOfHull" class="block h-4 w-4">
//                                             <img class="w-4" src="/assets/icon-library/social/logo-facebook.x2735543b.svg" alt="Facebook logo" title="Facebook" />
//                                         </a></li>
//                                     <li>
//                                         <a href="https://www.youtube.com/@uniofhull" class="block h-4 w-4">
//                                             <img class="w-4" src="/assets/icon-library/social/logo-youtube.x750cb10f.svg" alt="Youtube logo" title="YouTube" />
//                                         </a></li>
//                                     <li>
//                                         <a href="https://www.linkedin.com/edu/the-university-of-hull-12668" class="block h-4 w-4">
//                                             <img class="w-4" src="/assets/icon-library/social/logo-linkedin.x53bb0ea6.svg" alt="LinkedIn logo" title="LinkedIn" />
//                                         </a></li>
//                                 </ul>
//                             </div>
//                         </div>
//                     </div>
//                 )}
//             </nav>

//             <h1>University of Hull</h1>
//             <p>University of Hull is a public research university located in Kingston upon Hull, East Riding
//                 of Yorkshire, England.</p>
//         </div>
//     );
// };

// export { IndexElements };


import React from "react"
import { Navbar } from './components/navbar/navbar'
import { Body } from './components/body/body'

const IndexElements = () => {

    return (
        <div id="mainContainer">
            <Navbar />
            <Body />
        </div>
    );
};

export { IndexElements };