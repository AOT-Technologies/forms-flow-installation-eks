"use strict";(self.webpackChunkchart_doc=self.webpackChunkchart_doc||[]).push([[3976],{619:(e,o,s)=>{s.r(o),s.d(o,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>t,toc:()=>c});var n=s(4848),a=s(8453);const r={sidebar_position:1},i="Kubernetes",t={id:"intro",title:"Kubernetes",description:"Helm Chart Version",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/forms-flow-installation-eks/docs/next/intro",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Linux / MAC",permalink:"/forms-flow-installation-eks/docs/next/linux"},next:{title:"formsflow.ai Premium (Kubernetes)",permalink:"/forms-flow-installation-eks/docs/next/eks"}},l={},c=[{value:"Installing Chart",id:"installing-chart",level:2},{value:"Custom Domain Setup",id:"custom-domain-setup",level:2},{value:"1. Retrieve Load Balancer Information / Custer-IP information",id:"1-retrieve-load-balancer-information--custer-ip-information",level:3},{value:"2. Configure DNS Records with Your Domain Provider",id:"2-configure-dns-records-with-your-domain-provider",level:3},{value:"1. forms-flow-ai",id:"1-forms-flow-ai",level:2},{value:"2. forms-flow-idm",id:"2-forms-flow-idm",level:2},{value:"3. forms-flow-bpm",id:"3-forms-flow-bpm",level:2},{value:"4. forms-flow-forms",id:"4-forms-flow-forms",level:2},{value:"5. forms-flow-api",id:"5-forms-flow-api",level:2},{value:"6. forms-flow-documents-api",id:"6-forms-flow-documents-api",level:2},{value:"7. forms-flow-web",id:"7-forms-flow-web",level:2},{value:"8. forms-flow-data-analysis (Optional)",id:"8-forms-flow-data-analysis-optional",level:2},{value:"9. forms-flow-analytics (Optional)",id:"9-forms-flow-analytics-optional",level:2},{value:"Conclusion",id:"conclusion",level:2}];function h(e){const o={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.header,{children:(0,n.jsx)(o.h1,{id:"kubernetes",children:"Kubernetes"})}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.img,{src:"https://img.shields.io/badge/Helm%20Chart%20Version-8.0.0-blue",alt:"Helm Chart Version"})}),"\n",(0,n.jsxs)(o.p,{children:["Let's discover Installation of ",(0,n.jsx)(o.a,{href:"https://formsflow.ai/",children:"formsflow.ai"})," using formsflow-ai-charts in AWS Elastic Kubernetes Service. Formsflow.ai is a Free, Open-Source, Low Code Development Platform for rapidly building powerful business applications. ",(0,n.jsx)(o.a,{href:"https://formsflow.ai/",children:"formsflow.ai"})," combines leading Open-Source applications including form.io forms, Camunda\u2019s workflow engine, Keycloak\u2019s security, and Redash\u2019s data analytics into a seamless, integrated platform."]}),"\n",(0,n.jsx)(o.h2,{id:"installing-chart",children:"Installing Chart"}),"\n",(0,n.jsx)(o.p,{children:"To install forms-flow-ai helm chart, You can obtain forms-flow-ai-chart repository Helm CLI using the following command,"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-bash",children:"helm repo add formsflow https://aot-technologies.github.io/forms-flow-ai-charts\r\nhelm repo update\n"})}),"\n",(0,n.jsx)(o.p,{children:"To install Helm chart you can use the following command"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-bash",children:"helm install release-name forms-flow\n"})}),"\n",(0,n.jsx)(o.p,{children:"If you wish to customize and configure the chart, clone the repository using following commands and do the necessary changes."}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-bash",children:"$ git clone https://github.com/AOT-Technologies/forms-flow-ai-charts\r\n$ cd charts\n"})}),"\n",(0,n.jsx)(o.h2,{id:"custom-domain-setup",children:"Custom Domain Setup"}),"\n",(0,n.jsx)(o.h3,{id:"1-retrieve-load-balancer-information--custer-ip-information",children:"1. Retrieve Load Balancer Information / Custer-IP information"}),"\n",(0,n.jsxs)(o.p,{children:["Look for the External IP address or DNS name associated with the Load Balancer. The exact label may vary based on the cloud provider (for example, it might be ",(0,n.jsx)(o.code,{children:"EXTERNAL-IP"}),", ",(0,n.jsx)(o.code,{children:"LoadBalancer Ingress"}),", or ",(0,n.jsx)(o.code,{children:"DNS name"})," depending on the platform you're using)."]}),"\n",(0,n.jsx)(o.h3,{id:"2-configure-dns-records-with-your-domain-provider",children:"2. Configure DNS Records with Your Domain Provider"}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsx)(o.li,{children:"Log in to your domain provider's console (e.g., AWS Route 53, Azure DNS, Google Cloud DNS, etc.)"}),"\n",(0,n.jsx)(o.li,{children:"Navigate to the DNS management or Hosted Zones section corresponding to your domain."}),"\n",(0,n.jsxs)(o.li,{children:["Add a new DNS record:","\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsx)(o.li,{children:"Record type: Choose CNAME or A depending on the provider and the type of Load Balancer (e.g., if you have a static IP, choose A, if you have a DNS name, choose CNAME)."}),"\n",(0,n.jsx)(o.li,{children:"Name: Set this to the desired subdomain (e.g., app, www)."}),"\n",(0,n.jsxs)(o.li,{children:["Value: Set the value to the External IP address or DNS name obtained from the Load Balancer.","\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsx)(o.li,{children:"For cloud providers with static IPs (e.g., AWS, GCP, Azure), use the IP address."}),"\n",(0,n.jsx)(o.li,{children:"For cloud providers that assign a DNS name to the Load Balancer (e.g., AWS ELB or GCP HTTP(S) Load Balancer), use the DNS name."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(o.li,{children:"Save the DNS record."}),"\n"]}),"\n",(0,n.jsx)(o.h2,{id:"1-forms-flow-ai",children:"1. forms-flow-ai"}),"\n",(0,n.jsxs)(o.p,{children:["The ",(0,n.jsx)(o.a,{href:"https://formsflow.ai/",children:"formsflow.ai"})," Helm chart is designed to deploy the core components of the ",(0,n.jsx)(o.a,{href:"https://formsflow.ai/",children:"formsflow.ai"})," application in your Kubernetes environment. This chart is highly configurable, providing flexibility to adapt to different database configurations and other key settings. Here's a breakdown of its features:"]}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:["\n",(0,n.jsx)(o.p,{children:"Common ConfigMap and Secrets:"}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsx)(o.li,{children:"This chart allows you to create essential ConfigMaps and Secrets required by the application, ensuring that sensitive information like API keys, database credentials, and other environment-specific configurations are securely managed."}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(o.li,{children:["\n",(0,n.jsx)(o.p,{children:"High Availability (HA) Database Configuration:"}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsx)(o.li,{children:"Local Database: If you're using a local database (like PostgreSQL and MongoDB), this chart will automatically set up the databases with high availability (HA) configurations. It ensures that your databases are fault-tolerant and can handle traffic without downtime."}),"\n",(0,n.jsx)(o.li,{children:"External Database: If you prefer to use an external database (e.g., an external managed PostgreSQL or MongoDB instance), you can configure the chart to connect to your external database by setting the appropriate database connection parameters such as host, port, username, and password"}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(o.li,{children:["\n",(0,n.jsx)(o.p,{children:"Customizable Domain"}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:["Replace ",(0,n.jsx)(o.code,{children:"domain"})," with your custom domain (e.g., app.yourdomain.com) to point to the application after deployment."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(o.li,{children:["\n",(0,n.jsx)(o.p,{children:"This chart ensures that Forms Flow AI is easily deployed with flexible database options (HA local or external) and secure configuration management, making it suitable for both development and production environments."}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-bash",children:"helm upgrade --install forms-flow-ai forms-flow-ai \\\r\n  --set Domain=<domain> \\\r\n  --set postgresql-ha.postgresql.podSecurityContext.enabled=true \\\r\n  --set mongodb.podSecurityContext.enabled=true \\\r\n  -n <namespace>\n"})}),"\n",(0,n.jsxs)(o.p,{children:["The list of customizable parameters for the ",(0,n.jsx)(o.code,{children:"forms-flow-ai"})," chart can be found ",(0,n.jsx)(o.a,{href:"https://github.com/AOT-Technologies/forms-flow-ai-charts/blob/staging/QA/charts/forms-flow-ai/README.md",children:"here"}),"."]}),"\n",(0,n.jsxs)(o.admonition,{type:"info",children:[(0,n.jsx)(o.p,{children:"If you are using keycloak as external, please do the necessary changes according to the existing keycloak configuration."}),(0,n.jsx)(o.p,{children:"To configure keycloak as external, update the following parameters."}),(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsx)(o.li,{children:"Hostname of keycloak"}),"\n",(0,n.jsx)(o.li,{children:"Forms-flow-bpm client secret"}),"\n",(0,n.jsx)(o.li,{children:"Keycloak realm name"}),"\n"]})]}),"\n",(0,n.jsx)(o.h2,{id:"2-forms-flow-idm",children:"2. forms-flow-idm"}),"\n",(0,n.jsxs)(o.p,{children:["The ",(0,n.jsx)(o.a,{href:"https://formsflow.ai/",children:"formsflow.ai"})," framework could be hooked up with any OpenID Connect compliant Identity Management Server. To date, we have only tested ",(0,n.jsx)(o.a,{href:"https://github.com/keycloak/keycloak",children:"Keycloak"}),"."]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-bash",children:"helm upgrade --install forms-flow-idm forms-flow-idm \\\r\n --set keycloak.ingress.hostname=<forms-flow-idm-hostname> \\\r\n --set postgresql-ha.postgresql.podSecurityContext.enabled=true \\ \r\n -n <namespace>\n"})}),"\n",(0,n.jsxs)(o.p,{children:["The list of customizable parameters for the ",(0,n.jsx)(o.code,{children:"forms-flow-idm"})," chart can be found ",(0,n.jsx)(o.a,{href:"https://github.com/AOT-Technologies/forms-flow-ai-charts/blob/staging/QA/charts/forms-flow-idm/README.md",children:"here"}),"."]}),"\n",(0,n.jsx)(o.admonition,{type:"info",children:(0,n.jsxs)(o.p,{children:["If you having an exinsting keycloak, no need to install this component.\r\nFor reference on records needed to support formsflow can be found ",(0,n.jsx)(o.a,{href:"https://github.com/AOT-Technologies/forms-flow-ai/blob/develop/forms-flow-idm/realm-exports/Group%20based%20auth.json",children:"here"}),"."]})}),"\n",(0,n.jsx)(o.h2,{id:"3-forms-flow-bpm",children:"3. forms-flow-bpm"}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.a,{href:"https://formsflow.ai/",children:"formsflow.ai"})," leverages ",(0,n.jsx)(o.a,{href:"https://camunda.com/",children:"Camunda"})," for workflow and decision automation."]}),"\n",(0,n.jsxs)(o.p,{children:["To know more about Camunda, visit ",(0,n.jsx)(o.a,{href:"https://camunda.com/",children:"Camunda"}),"."]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-bash",children:"helm upgrade --install forms-flow-bpm forms-flow-bpm \\ \r\n --set ingress.hostname=<forms-flow-bpm-hostname> \\\r\n --set camunda.websocket.securityOrigin=<forms-flow-web-hostname> \\\r\n -n <namespace>\n"})}),"\n",(0,n.jsxs)(o.p,{children:["The list of customizable parameters for the ",(0,n.jsx)(o.code,{children:"forms-flow-bpm"})," chart can be found ",(0,n.jsx)(o.a,{href:"https://github.com/AOT-Technologies/forms-flow-ai-charts/blob/staging/QA/charts/forms-flow-bpm/README.md",children:"here"}),"."]}),"\n",(0,n.jsx)(o.h2,{id:"4-forms-flow-forms",children:"4. forms-flow-forms"}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.a,{href:"https://formsflow.ai/",children:"formsflow.ai"}),' leverages form.io to build "serverless" data management applications using a simple drag-and-drop form builder interface.']}),"\n",(0,n.jsxs)(o.p,{children:["To know more about form.io, go to ",(0,n.jsx)(o.a,{href:"https://form.io",children:"https://form.io"}),"."]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-bash",children:"helm upgrade --install forms-flow-forms forms-flow-forms \\\r\n --set ingress.hostname=<forms-flow-forms-hostname> \\\r\n -n <namespace>\n"})}),"\n",(0,n.jsxs)(o.p,{children:["The list of customizable parameters for the ",(0,n.jsx)(o.code,{children:"forms-flow-forms"})," chart can be found ",(0,n.jsx)(o.a,{href:"https://github.com/AOT-Technologies/forms-flow-ai-charts/blob/staging/QA/charts/forms-flow-forms/README.md",children:"here"}),"."]}),"\n",(0,n.jsx)(o.h2,{id:"5-forms-flow-api",children:"5. forms-flow-api"}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.a,{href:"https://formsflow.ai/",children:"formsflow.ai"})," has built this adaptive tier for correlating form management, BPM and analytics together."]}),"\n",(0,n.jsx)(o.p,{children:"The goal of the REST API is to provide access to all relevant interfaces of the system."}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-bash",children:"helm upgrade --install forms-flow-api forms-flow-api \\\r\n --set ingress.hostname=<forms-flow-api-hostname> \\\r\n -n <namespace>\n"})}),"\n",(0,n.jsxs)(o.p,{children:["The list of customizable parameters for the ",(0,n.jsx)(o.code,{children:"forms-flow-api"})," chart can be found ",(0,n.jsx)(o.a,{href:"https://github.com/AOT-Technologies/forms-flow-ai-charts/blob/staging/QA/charts/forms-flow-api/README.md",children:"here"}),"."]}),"\n",(0,n.jsx)(o.h2,{id:"6-forms-flow-documents-api",children:"6. forms-flow-documents-api"}),"\n",(0,n.jsx)(o.p,{children:"The goal of the document API is to generate pdf with form submission data."}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-bash",children:"helm upgrade --install forms-flow-documents-api forms-flow-documents-api \\\r\n --set ingress.hostname=<forms-flow-documents-api-hostname> \\\r\n -n <namespace>\n"})}),"\n",(0,n.jsxs)(o.p,{children:["The list of customizable parameters for the ",(0,n.jsx)(o.code,{children:"forms-flow-documents-api"})," chart can be found ",(0,n.jsx)(o.a,{href:"https://github.com/AOT-Technologies/forms-flow-ai-charts/blob/staging/QA/charts/forms-flow-documents-api/README.md",children:"here"}),"."]}),"\n",(0,n.jsx)(o.h2,{id:"7-forms-flow-web",children:"7. forms-flow-web"}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.a,{href:"https://formsflow.ai/",children:"formsflow.ai"})," delivers progressive web application with React version 17.0.2 along with formio"]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-bash",children:"helm upgrade --install forms-flow-web forms-flow-web \\\r\n --set ingress.hostname=<forms-flow-web-hostname> \\\r\n -n <namespace>\n"})}),"\n",(0,n.jsxs)(o.p,{children:["The list of customizable parameters for the ",(0,n.jsx)(o.code,{children:"forms-flow-web"})," chart can be found ",(0,n.jsx)(o.a,{href:"https://github.com/AOT-Technologies/forms-flow-ai-charts/blob/staging/QA/charts/forms-flow-web/README.md",children:"here"}),"."]}),"\n",(0,n.jsx)(o.h2,{id:"8-forms-flow-data-analysis-optional",children:"8. forms-flow-data-analysis (Optional)"}),"\n",(0,n.jsx)(o.p,{children:"This module is intended to update forms based on specific topics mentioned by the designer during form creation."}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-bash",children:"helm upgrade --install forms-flow-data-analysis forms-flow-data-analysis \\\r\n --set ingress.hostname=<forms-flow-data-analysis-hostname> \\\r\n -n <namespace>\n"})}),"\n",(0,n.jsxs)(o.p,{children:["The list of customizable parameters for the ",(0,n.jsx)(o.code,{children:"forms-flow-data-analysis"})," chart can be found ",(0,n.jsx)(o.a,{href:"https://github.com/AOT-Technologies/forms-flow-ai-charts/blob/staging/QA/charts/forms-flow-data-analysis/README.md",children:"here"}),"."]}),"\n",(0,n.jsx)(o.h2,{id:"9-forms-flow-analytics-optional",children:"9. forms-flow-analytics (Optional)"}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.a,{href:"https://formsflow.ai/",children:"formsflow.ai"})," leverages ",(0,n.jsx)(o.a,{href:"https://github.com/getredash/redash",children:"Redash"})," to build interactive dashboards and gain insights. To create meaningful visualization for your use case with ",(0,n.jsx)(o.a,{href:"https://redash.io/help/",children:"Redash Knowledge base."})]}),"\n",(0,n.jsxs)(o.p,{children:["The ",(0,n.jsx)(o.strong,{children:"forms-flow-analytics"})," chart is optional and can be deployed if analytics functionality is required for your Forms Flow AI application. If you do not need analytics features, you can skip installing this chart."]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-bash",children:'helm upgrade --install forms-flow-analytics forms-flow-analytics \\\r\n --set ingress.hosts[0].host=<forms-flow-analytics-hostname> \\\r\n --set ingress.tls[0].secretName=<forms-flow-analytics-hostname-tls> \\\r\n --set ingress.tls[0].hosts[0]=<forms-flow-analytics-hostname> \\\r\n --set ingress.hosts[0].paths[0]="/" \\\r\n --set ingress.subFilterHost=<forms-flow-analytics-hostname> \\\r\n -n <namespace>\n'})}),"\n",(0,n.jsxs)(o.p,{children:["The list of customizable parameters for the ",(0,n.jsx)(o.code,{children:"forms-flow-analytics"})," chart can be found ",(0,n.jsx)(o.a,{href:"https://github.com/AOT-Technologies/forms-flow-ai-charts/blob/staging/QA/charts/forms-flow-analytics/README.md",children:"here"}),"."]}),"\n",(0,n.jsxs)(o.p,{children:["Once Analytics is deployed, obtain the correct Insight API key and redeploy the ",(0,n.jsx)(o.a,{href:"#1-forms-flow-ai",children:"forms-flow-ai"})," component to ensure proper integration"]}),"\n",(0,n.jsx)(o.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,n.jsxs)(o.p,{children:["In this guide, we walked through the process of installing ",(0,n.jsx)(o.a,{href:"https://formsflow.ai/",children:"formsflow.ai"})," on Kubernetes using ",(0,n.jsx)(o.code,{children:"formsflow-ai-charts"}),". We covered essential steps, including setting up the necessary tools (AWS CLI, Kubectl, and Helm), connecting to your EKS cluster, and deploying components of ",(0,n.jsx)(o.a,{href:"https://formsflow.ai/",children:"formsflow.ai"})," while ensuring secure communication and efficient traffic management through SSL certificates and an Nginx Ingress Controller."]}),"\n",(0,n.jsxs)(o.p,{children:["By following these instructions, you can leverage the power of ",(0,n.jsx)(o.a,{href:"https://formsflow.ai/",children:"formsflow.ai"})," to build powerful business applications with ease, benefiting from its integration of leading open-source technologies like form.io, Camunda, Keycloak, and Redash."]})]})}function d(e={}){const{wrapper:o}={...(0,a.R)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},8453:(e,o,s)=>{s.d(o,{R:()=>i,x:()=>t});var n=s(6540);const a={},r=n.createContext(a);function i(e){const o=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function t(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),n.createElement(r.Provider,{value:o},e.children)}}}]);