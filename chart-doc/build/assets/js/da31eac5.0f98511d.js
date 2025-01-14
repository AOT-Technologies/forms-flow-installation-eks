"use strict";(self.webpackChunkchart_doc=self.webpackChunkchart_doc||[]).push([[352],{2454:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var s=t(4848),r=t(8453);const i={title:"Hidden Page",sidebar_position:-1},a="Tenant Creation",o={id:"tenant-creation",title:"Hidden Page",description:"This guide provides step-by-step instructions on how to generate a bearer token and create a tenant in a multi-tenant environment using Postman.",source:"@site/versioned_docs/version-v7.0.0/tenant-creation.md",sourceDirName:".",slug:"/tenant-creation",permalink:"/forms-flow-installation-eks/docs/tenant-creation",draft:!1,unlisted:!1,tags:[],version:"v7.0.0",sidebarPosition:-1,frontMatter:{title:"Hidden Page",sidebar_position:-1}},d={},l=[{value:"Create a Tenant",id:"create-a-tenant",level:2},{value:"Step 1: Generate Bearer Token",id:"step-1-generate-bearer-token",level:3},{value:"POST Request to Get Bearer Token",id:"post-request-to-get-bearer-token",level:4},{value:"Request Body",id:"request-body",level:4},{value:"Send the Request",id:"send-the-request",level:4},{value:"Step 2: Create the Tenant",id:"step-2-create-the-tenant",level:3},{value:"POST Request to Create Tenant",id:"post-request-to-create-tenant",level:4},{value:"Set Authorization Header",id:"set-authorization-header",level:4},{value:"Request Body",id:"request-body-1",level:4},{value:"Send the Request",id:"send-the-request-1",level:4},{value:"Conclusion",id:"conclusion",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"tenant-creation",children:"Tenant Creation"})}),"\n",(0,s.jsx)(n.p,{children:"This guide provides step-by-step instructions on how to generate a bearer token and create a tenant in a multi-tenant environment using Postman."}),"\n",(0,s.jsx)(n.p,{children:"Prerequisites\r\nBefore proceeding, ensure you have:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Postman installed on your machine. If not, download it here."}),"\n",(0,s.jsx)(n.li,{children:"Valid API credentials (client ID and client secret) to generate the bearer token."}),"\n",(0,s.jsx)(n.li,{children:"The API endpoint for creating tenants and authenticating the API requests."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"create-a-tenant",children:"Create a Tenant"}),"\n",(0,s.jsx)(n.h3,{id:"step-1-generate-bearer-token",children:"Step 1: Generate Bearer Token"}),"\n",(0,s.jsx)(n.p,{children:"First, we need to authenticate and obtain a bearer token, which will be used in the header of the request to create a tenant."}),"\n",(0,s.jsx)(n.h4,{id:"post-request-to-get-bearer-token",children:"POST Request to Get Bearer Token"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["URL: ",(0,s.jsx)(n.code,{children:"<forms-flow-idm-url>"}),"/auth/realms/",(0,s.jsx)(n.code,{children:"<realm-name>"}),"/protocol/openid-connect/token"]}),"\n",(0,s.jsxs)(n.li,{children:["Method: ",(0,s.jsx)(n.code,{children:"POST"})]}),"\n"]}),"\n",(0,s.jsxs)(n.admonition,{type:"info",children:[(0,s.jsx)(n.p,{children:"Where:"}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"<forms-flow-idm-url>"})," is the ",(0,s.jsx)(n.strong,{children:"base URL"})," for your Identity Management (IDM) system."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"<realm-name>"})," is the ",(0,s.jsx)(n.strong,{children:"name of the realm"}),' you want to use (in this case, it could be "multitenant", but users can replace it with any other valid realm name).']}),"\n"]})]}),"\n",(0,s.jsxs)(n.p,{children:["For example, if your IDM base URL is ",(0,s.jsx)(n.code,{children:"https://idm.example.com"})," and the realm name is ",(0,s.jsx)(n.code,{children:"multitenant"}),", the URL would look like:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"https://idm.example.com/auth/realms/multitenant/protocol/openid-connect/token"})}),"\n",(0,s.jsx)(n.h4,{id:"request-body",children:"Request Body"}),"\n",(0,s.jsx)(n.p,{children:"In Postman, go to the Body tab and select x-www-form-urlencoded. Then, add the following key-value pairs:"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Key"}),(0,s.jsx)(n.th,{children:"Value"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"grant_type"}),(0,s.jsx)(n.td,{children:"client_credentials"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"client_id"}),(0,s.jsx)(n.td,{children:"forms-flow-bpm"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"client_secret"}),(0,s.jsx)(n.td,{children:"your-client-secret"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"send-the-request",children:"Send the Request"}),"\n",(0,s.jsx)(n.p,{children:"Click Send to make the request. If successful, you should receive a JSON response with the access token. The response will look like this:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'{\r\n  "access_token": "<bearer-token>",\r\n  "token_type": "bearer",\r\n  "expires_in": 3600,\r\n  "scope": "openid"\r\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Copy the value of ",(0,s.jsx)(n.code,{children:"access_token"}),"  this is your bearer token, which will be used in the next step."]}),"\n",(0,s.jsx)(n.h3,{id:"step-2-create-the-tenant",children:"Step 2: Create the Tenant"}),"\n",(0,s.jsx)(n.p,{children:"Now that we have the bearer token, we can use it to create a new tenant in the multi-tenant system."}),"\n",(0,s.jsx)(n.h4,{id:"post-request-to-create-tenant",children:"POST Request to Create Tenant"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["URL: ",(0,s.jsx)(n.code,{children:"<forms-flow-admin-url>"}),"/api/v1/tenants"]}),"\n",(0,s.jsxs)(n.li,{children:["Method: ",(0,s.jsx)(n.code,{children:"POST"})]}),"\n"]}),"\n",(0,s.jsxs)(n.admonition,{type:"info",children:[(0,s.jsx)(n.p,{children:"Where:"}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"<forms-flow-admin-url>"})}),": This placeholder represents the ",(0,s.jsx)(n.strong,{children:"base URL"})," of the ",(0,s.jsx)(n.code,{children:"Forms Flow Admin API"}),". The user should replace it with their actual Forms Flow Admin base URL."]}),"\n"]})]}),"\n",(0,s.jsx)(n.h4,{id:"set-authorization-header",children:"Set Authorization Header"}),"\n",(0,s.jsx)(n.p,{children:"In Postman, go to the Authorization tab and select Bearer Token. Paste the access_token you obtained from the previous step."}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Key"}),(0,s.jsx)(n.th,{children:"Value"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Authorization"}),(0,s.jsx)(n.td,{children:"Bearer your-access-token"})]})})]}),"\n",(0,s.jsx)(n.h4,{id:"request-body-1",children:"Request Body"}),"\n",(0,s.jsx)(n.p,{children:"Next, in the Body tab of Postman, choose raw and select JSON. Then, add the following JSON request body:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'{\r\n    "key": "sampletenant",\r\n    "name": "sampletenant",\r\n    "details": {\r\n        "applicationTitle": "sampletenant",\r\n        "createDefaultUsers": true,\r\n        "skipAnalytics": true,\r\n        "userEmail": "",\r\n        "roles": []\r\n    }\r\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"This JSON object includes the key, name, and details for the new tenant. You can modify these values to match the tenant information you wish to create."}),"\n",(0,s.jsx)(n.h4,{id:"send-the-request-1",children:"Send the Request"}),"\n",(0,s.jsxs)(n.p,{children:["How to Create a Tenant To create a new tenant, follow the instructions detailed in the ",(0,s.jsx)(n.a,{href:"/docs/next/tenant-creation",children:"Create Tenant"})," page."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"{}\n"})}),"\n",(0,s.jsx)(n.p,{children:"This indicates that the tenant was successfully created in the system."}),"\n",(0,s.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,s.jsxs)(n.p,{children:["This guide walks you through the process of generating a bearer token and creating a tenant in a multi-tenant environment using Postman. By following these steps, you can easily manage tenants within your system using the ",(0,s.jsx)(n.code,{children:"forms-flow-admin"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>o});var s=t(6540);const r={},i=s.createContext(r);function a(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);