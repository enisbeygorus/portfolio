import{r as a,j as e,e as s,f as n,m as i}from"./index-ade3604b.js";import{S as l,a as d}from"./SingleProjectContext-de355ed5.js";import"./real-estate-ce996bd7.js";const o=()=>{const{singleProjectData:t}=a.useContext(l);return e.jsxs("div",{children:[e.jsx("p",{className:"font-general-medium text-left text-3xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light mt-14 sm:mt-20 mb-7",children:t.ProjectHeader.title}),e.jsxs("div",{className:"flex",children:[t.ProjectHeader.publishDate?e.jsxs("div",{className:"flex items-center mr-10",children:[e.jsx(s,{className:"text-lg text-ternary-dark dark:text-ternary-light"}),e.jsx("span",{className:"font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light",children:t.ProjectHeader.publishDate})]}):null,e.jsxs("div",{className:"flex items-center  mr-10",children:[e.jsx(n,{className:"text-lg text-ternary-dark dark:text-ternary-light"}),e.jsx("span",{className:"font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light",children:t.ProjectHeader.tags})]}),t.Demo?e.jsx("div",{className:"flex items-center",children:e.jsx("a",{href:"/demo/"+t.Demo.pathName,className:"text-md font-general-medium bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm rounded-md px-5 py-1.5 duration-300",children:"Demo"})}):null,t.WebsiteLink?e.jsx("div",{className:"flex items-center",children:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",href:t.WebsiteLink.link,className:"mr-2 text-md font-general-medium bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm rounded-md px-5 py-1.5 duration-300",children:"Website"})}):null,t.SourceLink?e.jsx("div",{className:"flex items-center",children:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",href:t.SourceLink.link,className:"text-md font-general-medium bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm rounded-md px-5 py-1.5 duration-300",children:"Source Code"})}):null]})]})},c=()=>{const{singleProjectData:t}=a.useContext(l);return e.jsxs("div",{className:"block sm:flex gap-0 sm:gap-10 mt-14",children:[e.jsxs("div",{className:"w-full sm:w-1/3 text-left",children:[t.ProjectImages?e.jsx("div",{className:"mb-10 sm:mb-7 aspect-square",children:e.jsx("img",{src:t.ProjectImages[0].img,className:"w-full h-full rounded-xl shadow-lg sm:shadow-none object-cover",alt:t.ProjectImages[0].title},t.ProjectImages[0].id)},t.ProjectImages[0].id):null,e.jsxs("div",{className:"mb-7",children:[e.jsx("p",{className:"font-general-regular text-2xl font-semibold text-secondary-dark dark:text-secondary-light mb-2",children:t.ProjectInfo.ClientHeading}),e.jsx("ul",{className:"leading-loose",children:t.ProjectInfo.CompanyInfo.map(r=>e.jsxs("li",{className:"font-general-regular text-ternary-dark dark:text-ternary-light",children:[e.jsxs("span",{children:[r.title,": "]}),e.jsx("a",{href:"#",className:r.title==="Website"||r.title==="Phone"?"hover:underline hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer duration-300":"","aria-label":"Project Website and Phone",children:r.details})]},r.id))})]}),e.jsxs("div",{className:"mb-7",children:[e.jsx("p",{className:"font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2",children:t.ProjectInfo.ObjectivesHeading}),e.jsx("p",{className:"font-general-regular text-primary-dark dark:text-ternary-light",children:t.ProjectInfo.ObjectivesDetails})]}),e.jsxs("div",{className:"mb-7",children:[e.jsx("p",{className:"font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2",children:t.ProjectInfo.Technologies[0].title}),e.jsx("p",{className:"font-general-regular text-primary-dark dark:text-ternary-light",children:t.ProjectInfo.Technologies[0].techs.join(", ")})]}),e.jsxs("div",{children:[e.jsx("p",{className:"font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2",children:t.ProjectInfo.SocialSharingHeading}),e.jsx("div",{className:"flex items-center gap-3 mt-5",children:t.ProjectInfo.SocialSharing.map(r=>e.jsx("a",{href:r.url,target:"__blank","aria-label":"Share Project",className:"bg-ternary-light dark:bg-ternary-dark text-gray-400 hover:text-primary-dark dark:hover:text-primary-light p-2 rounded-lg shadow-sm duration-500",children:e.jsx("span",{className:"text-lg lg:text-2xl",children:r.icon})},r.id))})]})]}),e.jsxs("div",{className:"w-full sm:w-2/3 text-left mt-10 sm:mt-0",children:[e.jsx("p",{className:"font-general-regular text-primary-dark dark:text-primary-light text-2xl font-bold mb-7",children:t.ProjectInfo.ProjectDetailsHeading}),t.ProjectInfo.ProjectDetails.map(r=>e.jsx("p",{className:"font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light",children:r.details},r.id))]})]})},h=()=>e.jsx(i.div,{initial:{opacity:0},animate:{opacity:1,delay:1},transition:{ease:"easeInOut",duration:.6,delay:.15},className:"container mx-auto mt-5 sm:mt-10",children:e.jsxs(d,{children:[e.jsx(o,{}),e.jsx(c,{})]})});export{h as default};