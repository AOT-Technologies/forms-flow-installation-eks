"use strict";(self.webpackChunkchart_doc=self.webpackChunkchart_doc||[]).push([[4579],{5933:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>o,contentTitle:()=>t,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var a=n(4848),i=n(8453);const r={sidebar_position:1},t="Installation on AWS Elastic Kubernetes Service",l={id:"intro",title:"Installation on AWS Elastic Kubernetes Service",description:"Let's discover Installation of formsflow.ai using formsflow-ai-charts in AWS Elastic Kubernetes Service. Formsflow.ai is a Free, Open-Source, Low Code Development Platform for rapidly building powerful business applications. formsflow.ai combines leading Open-Source applications including form.io forms, Camunda\u2019s workflow engine, Keycloak\u2019s security, and Redash\u2019s data analytics into a seamless, integrated platform.",source:"@site/versioned_docs/version-7.0.1/intro.md",sourceDirName:".",slug:"/intro",permalink:"/forms-flow-installation-eks/docs/7.0.1/intro",draft:!1,unlisted:!1,tags:[],version:"7.0.1",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar"},o={},c=[{value:"Prerequisite",id:"prerequisite",level:2},{value:"Step 1: Clone the GitHub Repository",id:"step-1-clone-the-github-repository",level:2},{value:"Step 2: Connect to the EKS Cluster",id:"step-2-connect-to-the-eks-cluster",level:2},{value:"Step 3: Create a Namespace in the Cluster",id:"step-3-create-a-namespace-in-the-cluster",level:2},{value:"Step 4: Install Nginx Ingress Controller in EKS using Helm",id:"step-4-install-nginx-ingress-controller-in-eks-using-helm",level:2},{value:"Add the Nginx Ingress Helm Repository:",id:"add-the-nginx-ingress-helm-repository",level:3},{value:"Update the Helm Repository:",id:"update-the-helm-repository",level:3},{value:"Install Nginx Ingress Controller using Helm:",id:"install-nginx-ingress-controller-using-helm",level:3},{value:"Step 5: Pointing Ingress Loadbalancer in Domain Name Provider to access the App using Domain Name",id:"step-5-pointing-ingress-loadbalancer-in-domain-name-provider-to-access-the-app-using-domain-name",level:2},{value:"Step 6: Installing ACM (AWS Certificate Manager)",id:"step-6-installing-acm-aws-certificate-manager",level:2},{value:"Step 7: Installing EBS-CSI driver",id:"step-7-installing-ebs-csi-driver",level:2},{value:"Step 8: Create SSL Certificates for Each Domain",id:"step-8-create-ssl-certificates-for-each-domain",level:2},{value:"Step 8: Deploy each Components",id:"step-8-deploy-each-components",level:2},{value:"1. forms-flow-ai",id:"1-forms-flow-ai",level:3},{value:"2. forms-flow-analytics",id:"2-forms-flow-analytics",level:3},{value:"3. forms-flow-idm",id:"3-forms-flow-idm",level:3},{value:"4. forms-flow-bpm",id:"4-forms-flow-bpm",level:3},{value:"5. forms-flow-forms",id:"5-forms-flow-forms",level:3},{value:"6. forms-flow-api",id:"6-forms-flow-api",level:3},{value:"7. forms-flow-documents-api",id:"7-forms-flow-documents-api",level:3},{value:"8. forms-flow-data-analysis",id:"8-forms-flow-data-analysis",level:3},{value:"9. forms-flow-web",id:"9-forms-flow-web",level:3},{value:"10. forms-flow-admin",id:"10-forms-flow-admin",level:3}];function d(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.header,{children:(0,a.jsx)(s.h1,{id:"installation-on-aws-elastic-kubernetes-service",children:"Installation on AWS Elastic Kubernetes Service"})}),"\n",(0,a.jsx)(s.p,{children:"Let's discover Installation of formsflow.ai using formsflow-ai-charts in AWS Elastic Kubernetes Service. Formsflow.ai is a Free, Open-Source, Low Code Development Platform for rapidly building powerful business applications. formsflow.ai combines leading Open-Source applications including form.io forms, Camunda\u2019s workflow engine, Keycloak\u2019s security, and Redash\u2019s data analytics into a seamless, integrated platform."}),"\n",(0,a.jsx)(s.h2,{id:"prerequisite",children:"Prerequisite"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:["AWS CLI: A command line tool for working with AWS services, including Amazon EKS. For more information, see ",(0,a.jsx)(s.a,{href:"https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html",children:"Installing AWS CLI"})]}),"\n",(0,a.jsxs)(s.li,{children:["Kubectl: A command line tool for working with Kubernetes clusters. For more information, see ",(0,a.jsx)(s.a,{href:"https://docs.aws.amazon.com/eks/latest/userguide/install-kubectl.html",children:"Installing or Updating Kubectl"})]}),"\n",(0,a.jsxs)(s.li,{children:["Helm: Helps to manage Kubernetes applications , for more information see ",(0,a.jsx)(s.a,{href:"https://helm.sh/docs/intro/install",children:"Installing and Updating the helm"})]}),"\n"]}),"\n",(0,a.jsx)(s.h2,{id:"step-1-clone-the-github-repository",children:"Step 1: Clone the GitHub Repository"}),"\n",(0,a.jsx)(s.p,{children:"In this initial step, clone the Forms Flow AI Charts GitHub repository using the following commands:"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"$ git clone https://github.com/AOT-Technologies/forms-flow-ai-charts\n$ cd charts\n"})}),"\n",(0,a.jsx)(s.h2,{id:"step-2-connect-to-the-eks-cluster",children:"Step 2: Connect to the EKS Cluster"}),"\n",(0,a.jsx)(s.p,{children:"After cloning the GitHub repository, use the command below to connect to your Kubernetes cluster. Replace cluster-name with your actual cluster name:"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{children:"$ aws eks update-kubeconfig --region ca-central-1 --name <cluster-name>\n"})}),"\n",(0,a.jsxs)(s.p,{children:["This command updates your \u201c",(0,a.jsx)(s.strong,{children:"kubeconfig"}),"\u201d file, enabling seamless communication with your Amazon EKS (Elastic Kubernetes Service) cluster located in the specified AWS region. Establishing this connection is essential for managing and deploying applications within the Kubernetes environment."]}),"\n",(0,a.jsx)(s.h2,{id:"step-3-create-a-namespace-in-the-cluster",children:"Step 3: Create a Namespace in the Cluster"}),"\n",(0,a.jsxs)(s.p,{children:["After connecting to the Kubernetes cluster, the next step is to create a dedicated namespace. Execute the following command, replacing ",(0,a.jsx)(s.strong,{children:"namespace"})," with the desired name for your namespace:"]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"$ kubectl craete ns namesapce\n"})}),"\n",(0,a.jsx)(s.p,{children:"This command establishes an isolated namespace within the cluster, allowing you to organize and manage resources effectively"}),"\n",(0,a.jsx)(s.h2,{id:"step-4-install-nginx-ingress-controller-in-eks-using-helm",children:"Step 4: Install Nginx Ingress Controller in EKS using Helm"}),"\n",(0,a.jsx)(s.p,{children:"Following the namespace creation, proceed to install the Nginx Ingress Controller in your EKS cluster using Helm. Perform the following steps:"}),"\n",(0,a.jsx)(s.h3,{id:"add-the-nginx-ingress-helm-repository",children:"Add the Nginx Ingress Helm Repository:"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"$ helm repo add ingress-nginx https://kubernetes.github.io/ingress-nginx\n"})}),"\n",(0,a.jsx)(s.h3,{id:"update-the-helm-repository",children:"Update the Helm Repository:"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"$ helm repo update\n"})}),"\n",(0,a.jsx)(s.h3,{id:"install-nginx-ingress-controller-using-helm",children:"Install Nginx Ingress Controller using Helm:"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"helm install ingress-nginx-<namespace> ingress-nginx/ingress-nginx --set controller.ingressClass=<ingress-classname> --set controller.ingressClassResource.name=<ingress-classname> -n <namespace> \n"})}),"\n",(0,a.jsxs)(s.p,{children:["Customize the ingress class and associated resources by replacing ",(0,a.jsx)(s.strong,{children:"ingress-classname"}),' (default is "nginx"). This step sets up efficient external traffic management within Kubernetes.']}),"\n",(0,a.jsx)(s.h2,{id:"step-5-pointing-ingress-loadbalancer-in-domain-name-provider-to-access-the-app-using-domain-name",children:"Step 5: Pointing Ingress Loadbalancer in Domain Name Provider to access the App using Domain Name"}),"\n",(0,a.jsxs)(s.ol,{children:["\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.strong,{children:"Get the loadbalancer"})}),"\n",(0,a.jsx)(s.p,{children:"Use the following command to retrieve information about the Load Balancer associated with your Ingress Controller in the specified namespace:"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"$ kubectl get svc -n <namespace>\n"})}),"\n",(0,a.jsx)(s.p,{children:"Identify the External IP address or DNS name associated with the Load Balancer."}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.strong,{children:"Configure AWS Route 53"})}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:"Log in to the AWS Management Console and navigate to Route53"}),"\n",(0,a.jsx)(s.li,{children:"Select the hosted Zone corresponding to your domain"}),"\n",(0,a.jsx)(s.li,{children:"Add a new record"}),"\n",(0,a.jsx)(s.li,{children:'Set the "Name" field to the desired subdomain (eg:- app)'}),"\n",(0,a.jsx)(s.li,{children:'Choose "CNAME" as the record type'}),"\n",(0,a.jsx)(s.li,{children:"set the value to the External IP address or DNS name obtained from the Load Balancer."}),"\n",(0,a.jsx)(s.li,{children:"Save the changes."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(s.p,{children:"Once the DNS settings propagate, users can access your application using the custom domain (e.g., app.yourdomain.com). This setup establishes a CNAME record pointing to the Ingress Load Balancer, ensuring a direct connection between your custom domain and the application."}),"\n",(0,a.jsx)(s.h2,{id:"step-6-installing-acm-aws-certificate-manager",children:"Step 6: Installing ACM (AWS Certificate Manager)"}),"\n",(0,a.jsx)(s.p,{children:"Execute the following command to deploy AWS Certificate Manager (ACM) components in your Kubernetes cluster:"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"$ kubectl apply --validate=false -f https://github.com/jetstack/cert-manager/releases/download/v1.11.0/cert-manager.yaml \n"})}),"\n",(0,a.jsx)(s.p,{children:"This step installs Cert-Manager, a Kubernetes add-on for managing SSL/TLS certificates."}),"\n",(0,a.jsx)(s.h2,{id:"step-7-installing-ebs-csi-driver",children:"Step 7: Installing EBS-CSI driver"}),"\n",(0,a.jsxs)(s.p,{children:["Generate a Kubernetes secret named aws-secret in the kube-system namespace by providing your AWS access key ID and secret access key. Make sure to replace ",(0,a.jsx)(s.strong,{children:"access-key-id"})," and ",(0,a.jsx)(s.strong,{children:"secret-access-key"})," with your actual AWS credentials."]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{children:'$ kubectl create secret generic aws-secret  --namespace kube-system --from-literal "key_id=<access-key-id>"  --from-literal "access_key=<secret-access-key>"\n'})}),"\n",(0,a.jsx)(s.p,{children:"This secret is crucial for secure communication between the Kubernetes cluster and AWS services, ensuring proper authentication."}),"\n",(0,a.jsx)(s.p,{children:"Add the aws-ebs-csi-driver Helm repository."}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"$ helm repo add aws-ebs-csi-driver https://kubernetes-sigs.github.io/aws-ebs-csi-driver\n\n$ helm repo update\n"})}),"\n",(0,a.jsx)(s.p,{children:"Then install a release of the driver using the chart."}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"$ helm upgrade --install aws-ebs-csi-driver  --namespace kube-system  aws-ebs-csi-driver/aws-ebs-csi-driver\n"})}),"\n",(0,a.jsx)(s.p,{children:"This step is essential for accessing and deploying the AWS EBS CSI driver, enabling seamless integration of AWS Elastic Block Store volumes within your Kubernetes cluster"}),"\n",(0,a.jsx)(s.h2,{id:"step-8-create-ssl-certificates-for-each-domain",children:"Step 8: Create SSL Certificates for Each Domain"}),"\n",(0,a.jsx)(s.p,{children:"Execute the following Helm command to generate SSL certificates for each domain in your specified namespace:"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"$ helm install ssl-<component> forms-flow-ssl/forms-flow-<component> --set Domain=<domain> --set issuer.acmeEmail=<valid-email>  --set issuer.ingressClass=<ingress-classname> -n <namespace>\n"})}),"\n",(0,a.jsxs)(s.p,{children:["Generate SSL certificates for a specific component in the designated namespace using Helm. Customize the command by replacing ",(0,a.jsx)(s.strong,{children:"component"}),", ",(0,a.jsx)(s.strong,{children:"domain"}),", ",(0,a.jsx)(s.strong,{children:"valid-email"}),", and ",(0,a.jsx)(s.strong,{children:"ingress-classname"})," with the actual component name, domain, a valid email for ACME registration, and the ingress class name, respectively. This step enhances the security of your applications by enabling HTTPS access."]}),"\n",(0,a.jsx)(s.p,{children:"Check the status of SSL certificates in the specified namespace using the command:"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"kubectl get certificates -n <namespace>\n"})}),"\n",(0,a.jsx)(s.p,{children:"This command provides an overview of the current status and details of SSL certificates, ensuring a quick verification of successful certificate issuance and proper configuration within the Kubernetes environment"}),"\n",(0,a.jsx)(s.h2,{id:"step-8-deploy-each-components",children:"Step 8: Deploy each Components"}),"\n",(0,a.jsx)(s.h3,{id:"1-forms-flow-ai",children:"1. forms-flow-ai"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"$ helm upgrade --install forms-flow-ai forms-flow-ai --set domain=<domain> --set postgresql-ha.postgresql.podSecurityContext.enabled=true --set mongodb.podSecurityContext.enabled=true --set forms-flow-auth.imagesecret=<Image-secret> --set insight_api_key=<insight-api-key> -n <namespace>\n"})}),"\n",(0,a.jsxs)(s.p,{children:["Initiate the deployment of the Forms Flow AI component using Helm. Customize the command by replacing ",(0,a.jsx)(s.strong,{children:"domain"}),", ",(0,a.jsx)(s.strong,{children:"Image-secret"}),", ",(0,a.jsx)(s.strong,{children:"insight-api-key"}),", and ",(0,a.jsx)(s.strong,{children:"namespace"})," with the actual domain, Docker image secret, Insight API key, and namespace respectively. This step ensures the seamless deployment of the Forms Flow AI component in your Kubernetes environment."]}),"\n",(0,a.jsxs)(s.p,{children:["Initially, set the ",(0,a.jsx)(s.strong,{children:"insight-api-key"})," to 'test.' Once Analytics is deployed, obtain the correct Insight API key and redeploy the Forms Flow AI component to ensure proper integration"]}),"\n",(0,a.jsx)(s.h3,{id:"2-forms-flow-analytics",children:"2. forms-flow-analytics"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:'$ helm upgrade --install forms-flow-analytics forms-flow-analytics --set domain=<domain> --set ingress.ingressClassName=<ingress-classname> --set ingress.annotations."cert-manager\\.io/cluster-issuer"=ssl-analytics -n <namespace>\n'})}),"\n",(0,a.jsx)(s.h3,{id:"3-forms-flow-idm",children:"3. forms-flow-idm"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:'$ helm upgrade --install forms-flow-idm forms-flow-idm  --set keycloak.ingress.hostname=forms-flow-idm-<namespace>.<domain> --set postgresql-ha.postgresql.podSecurityContext.enabled=true --set keycloak.ingress.ingressClassName=<ingress-classname> --set keycloak.ingress.annotations."cert-manager\\.io/cluster-issuer"=ssl-idm -n <namespace>\n'})}),"\n",(0,a.jsx)(s.h3,{id:"4-forms-flow-bpm",children:"4. forms-flow-bpm"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:'$ helm upgrade --install forms-flow-idm forms-flow-idm  --set keycloak.ingress.hostname=forms-flow-idm-<namespace>.<domain> --set postgresql-ha.postgresql.podSecurityContext.enabled=true --set keycloak.ingress.ingressClassName=<ingress-classname> --set keycloak.ingress.annotations."cert-manager\\.io/cluster-issuer"=ssl-idm -n <namespace>\n'})}),"\n",(0,a.jsx)(s.h3,{id:"5-forms-flow-forms",children:"5. forms-flow-forms"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:'$ helm upgrade --install forms-flow-forms forms-flow-forms --set domain=<domain> --set ingress.ingressClassName=<ingress-classname> --set ingress.annotations."cert-manager\\.io/cluster-issuer"=ssl-forms -n <namespace>\n'})}),"\n",(0,a.jsx)(s.h3,{id:"6-forms-flow-api",children:"6. forms-flow-api"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:'$ helm upgrade --install forms-flow-api forms-flow-api --set domain=<domain>  --set ingress.ingressClassName=<ingress-classname> --set ingress.annotations."cert-manager\\.io/cluster-issuer"=ssl-api -n <namespace>\n'})}),"\n",(0,a.jsx)(s.h3,{id:"7-forms-flow-documents-api",children:"7. forms-flow-documents-api"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:'$ helm upgrade --install forms-flow-documents-api forms-flow-documents-api --set domain=<domain> --set ingress.ingressClassName=<ingress-classname> --set ingress.annotations."cert-manager\\.io/cluster-issuer"=ssl-documents-api -n <namespace>\n'})}),"\n",(0,a.jsx)(s.h3,{id:"8-forms-flow-data-analysis",children:"8. forms-flow-data-analysis"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:'$ helm upgrade --install forms-flow-data-analysis forms-flow-data-analysis --set domain=<domain>  --set ingress.ingressClassName=<ingress-classname> --set ingress.annotations."cert-manager\\.io/cluster-issuer"=ssl-data-analysis -n <namespace>\n'})}),"\n",(0,a.jsx)(s.h3,{id:"9-forms-flow-web",children:"9. forms-flow-web"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:'$ helm upgrade --install forms-flow-web forms-flow-web --set domain=<domain> --set ingress.ingressClassName=<ingress-classname> --set ingress.annotations."cert-manager\\.io/cluster-issuer"=ssl-web -n <namespace>\n'})}),"\n",(0,a.jsx)(s.h3,{id:"10-forms-flow-admin",children:"10. forms-flow-admin"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:'$ helm upgrade --install forms-flow-admin forms-flow-admin --set Domain=<domain> --set ingress.ingressClassName=<ingress-classname> --set ingress.annotations."cert-manager\\.io/cluster-issuer"=ssl-admin --set ingress.hostname=admin-<namespace>.<domain> -n <namespace>\n'})})]})}function m(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>t,x:()=>l});var a=n(6540);const i={},r=a.createContext(i);function t(e){const s=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),a.createElement(r.Provider,{value:s},e.children)}}}]);