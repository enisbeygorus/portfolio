import{j as e,m as h,L as j,r as o,d as y}from"./index-ade3604b.js";import{I as u,a as b,b as P,c as k,d as f,e as N,f as v,g as A}from"./real-estate-ce996bd7.js";const m=({title:a,category:r,image:i,projectPath:s})=>e.jsx(h.div,{initial:{opacity:0},animate:{opacity:1,delay:1},transition:{ease:"easeInOut",duration:.7,delay:.15},children:e.jsx(j,{to:`/projects/${s}`,"aria-label":"Single Project",children:e.jsxs("div",{className:"flex  sm:block p-4 sm:p-0 rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark",children:[e.jsx("div",{className:"flex justify-center items-center w-1/4 sm:w-auto",style:{aspectRatio:"1 / 1"},children:e.jsx("img",{src:i,className:"w-full h-full rounded-md border-none object-cover",alt:"Single Project"})}),e.jsxs("div",{className:"h-auto flex-1 text-center px-4 py-6 sm:h-40 ",children:[e.jsx("p",{className:"font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2",children:a}),e.jsx("span",{className:"text-lg text-ternary-dark dark:text-ternary-light",children:r})]})]})})}),S=[{id:7,title:"Next.js Blog App",category:"Web Application",img:u,projectPath:"nextjs-blog-app",ProjectHeader:{title:"Next.js Blog App",publishDate:"Jul 26, 2021",tags:"UI / Frontend"}},{id:8,title:"Fun Games Social Web App",category:"Web Application",img:b,projectPath:"fun-games-social",ProjectHeader:{title:"Fun Games Social Web App",publishDate:"Jul 26, 2021",tags:"UI / Frontend"}},{id:1,title:"Visualize Dijkstra Algorithm",category:"Web Application",img:P,projectPath:"visualize-dijkstra-algorithm",ProjectHeader:{title:"Visualize Dijkstra Algorithm",publishDate:"Jul 26, 2021",tags:"UI / Frontend"}},{id:2,title:"Games",category:"Web Application",img:k,projectPath:"games",ProjectHeader:{title:"Games",publishDate:"Jul 26, 2021",tags:"UI / Frontend"}},{id:3,title:"Game Server",category:"Web Application",img:f,projectPath:"game-server",ProjectHeader:{title:"Game Server",tags:"WebSocket / Backend"}},{id:4,title:"E-Commerce",category:"Web Application",img:N,projectPath:"e-commerce",ProjectHeader:{title:"E-Commerce",tags:"UI / Frontend"}},{id:5,title:"Microsoft Teams and Slack Bot",category:"Web Application",img:v,projectPath:"microsoft-teams-and-slack-bot",ProjectHeader:{title:"Microsoft Teams Bot",tags:"Backend"}},{id:6,title:"Real Estate API",category:"Web Application",img:A,projectPath:"real-estate-api",ProjectHeader:{title:"Real Estate API",tags:"Backend"}}],g=o.createContext(),B=a=>{const[r,i]=o.useState(S),[s,l]=o.useState(""),[c,d]=o.useState(""),t=r.filter(n=>n.title.toLowerCase().includes(s.toLowerCase())||s===""?n:""),p=r.filter(n=>(n.category.charAt(0).toUpperCase()+n.category.slice(1)).includes(c));return e.jsx(g.Provider,{value:{projects:r,setProjects:i,searchProject:s,setSearchProject:l,searchProjectsByTitle:t,selectProject:c,setSelectProject:d,selectProjectsByCategory:p},children:a.children})},I=["Web Application","Mobile Application"],C=({setSelectProject:a})=>e.jsxs("select",{onChange:r=>{a(r.target.value)},className:`font-general-medium \r
                px-4\r
                sm:px-6\r
                py-2\r
                border\r
                dark:border-secondary-dark\r
                rounded-lg\r
                text-sm\r
                sm:text-md\r
                dark:font-medium\r
                bg-secondary-light\r
                dark:bg-ternary-dark\r
                text-primary-dark\r
                dark:text-ternary-light\r
            `,children:[e.jsx("option",{value:"",className:"text-sm sm:text-md",children:"All Projects"}),I.map(r=>e.jsx("option",{className:"text-normal sm:text-md",children:r},r))]}),F=()=>{const{projects:a,searchProject:r,setSearchProject:i,searchProjectsByTitle:s,selectProject:l,setSelectProject:c,selectProjectsByCategory:d}=o.useContext(g);return e.jsxs("section",{className:"py-5 sm:py-10 mt-5 sm:mt-10",children:[e.jsx("div",{className:"text-center",children:e.jsx("p",{className:"font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light",children:"Projects portfolio"})}),e.jsxs("div",{className:"mt-10 sm:mt-16",children:[e.jsx("h3",{className:`font-general-regular \r
                        text-center text-secondary-dark\r
                        dark:text-ternary-light\r
                        text-md\r
                        sm:text-xl\r
                        mb-3\r
                        `,children:"Search projects by title or filter by category"}),e.jsxs("div",{className:`\r
                        flex\r
                        justify-between\r
                        border-b border-primary-light\r
                        dark:border-secondary-dark\r
                        pb-3\r
                        gap-3\r
                        `,children:[e.jsxs("div",{className:"flex justify-between gap-2",children:[e.jsx("span",{className:`\r
                                hidden\r
                                sm:block\r
                                bg-primary-light\r
                                dark:bg-ternary-dark\r
                                p-2.5\r
                                shadow-sm\r
                                rounded-xl\r
                                cursor-pointer\r
                                `,children:e.jsx(y,{className:"text-ternary-dark dark:text-ternary-light w-5 h-5"})}),e.jsx("input",{onChange:t=>{i(t.target.value)},className:`font-general-medium \r
                                pl-3\r
                                pr-1\r
                                sm:px-4\r
                                py-2\r
                                border \r
                            border-gray-200\r
                                dark:border-secondary-dark\r
                                rounded-lg\r
                                text-sm\r
                                sm:text-md\r
                                bg-secondary-light\r
                                dark:bg-ternary-dark\r
                                text-primary-dark\r
                                dark:text-ternary-light\r
                                `,id:"name",name:"name",type:"search",required:"",placeholder:"Search Projects","aria-label":"Name"})]}),e.jsx(C,{setSelectProject:c})]})]}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10",children:l?d.map(t=>e.jsx(m,{title:t.title,category:t.category,image:t.img,projectPath:t.projectPath},t.id)):r?s.map(t=>e.jsx(m,{title:t.title,category:t.category,image:t.img,projectPath:t.projectPath},t.id)):a.map(t=>e.jsx(m,{title:t.title,category:t.category,image:t.img,projectPath:t.projectPath},t.id))})]})};export{B as P,F as a};
