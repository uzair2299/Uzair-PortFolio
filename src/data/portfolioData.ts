export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'enterprise' | 'cti' | 'saas' | 'fullstack';
  summary: string;
  description: string;
  architectureDetails: string[];
  techStack: string[];
  features: string[];
  metrics?: string[];
  codeSnippet?: {
    language: string;
    code: string;
    description: string;
  };
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
  techStack: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  result: string;
}

export interface SkillItem {
  name: string;
  icon?: string;
}

export interface SkillCategory {
  name: string;
  skills: (string | SkillItem)[];
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  summary: string;
  content: string;
  date: string;
  readTime: string;
  tags: string[];
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export const profileData = {
  name: "Uzair",
  title: "Passionate Java Developer",
  tagline: "Passionate Java Developer with experience in Spring Boot, Hibernate, and Java Core. Looking for a role to build efficient, secure, and scalable backend systems while growing my skills in a collaborative environment.",
  location: "Lahore, Pakistan",
  email: "uzairanwar2299@gmail.com",
  linkedin: "https://www.linkedin.com/in/uzairanwar2299/",
  phone2: "+92 320 5500003",
  cvLink: "#",
};

export const skillsData: SkillCategory[] = [
  {
    name: "Languages",
    skills: [
      { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
      { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
      { name: "JavaScript (ES6+)", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
      { name: "C#", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" },
      { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg" },
      { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
      { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" }
    ]
  },
  {
    name: "Frameworks",
    skills: [
      { name: "Angular Material", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularmaterial/angularmaterial-original.svg" },
      { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" },
      { name: "Spring Boot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg" },
      { name: "Hibernate", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/hibernate/hibernate-original.svg" },
      { name: "Angular", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg" },
      { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
      { name: "ASP.NET", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg" },
      { name: "ASP.NET Core", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg" },
      { name: "ASP.NET MVC", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dot-net/dot-net-original.svg" },
      { name: "Windows Presentation Foundation (WPF)", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/windows8/windows8-original.svg" }
    ]
  },
  {
    name: "Databases",
    skills: [
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
      { name: "Microsoft SQL Server", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg" },
      { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg" },
      { name: "H2 Database", icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCI+PHJlY3Qgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIHJ4PSIyMCIgZmlsbD0iIzAwNTJjYyIvPjx0ZXh0IHg9IjUwJSIgeT0iNTUlIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iNDUiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjZmZmZmZmIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIj5IMjwvdGV4dD48L3N2Zz4=" }
    ]
  },
  {
    name: "Messaging & Integration",
    skills: [
      { name: "ActiveMQ", icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCI+PHJlY3Qgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIHJ4PSIyMCIgZmlsbD0iI0QzMkYyRiIvPjx0ZXh0IHg9IjUwJSIgeT0iNTUlIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjIiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjZmZmZmZmIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIj5BY3RpdmVNUTwvdGV4dD48L3N2Zz4=" },
      { name: "n8n", icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCI+PHJlY3Qgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIHJ4PSIyMCIgZmlsbD0iI0ZGNkI2QiIvPjx0ZXh0IHg9IjUwJSIgeT0iNTUlIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMzYiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjZmZmZmZmIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIj5uOG48L3RleHQ+PC9zdmc+" }
    ]
  },
  {
    name: "Tools & IDEs",
    skills: [
      { name: "IntelliJ IDEA", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/intellij/intellij-original.svg" },
      { name: "Eclipse", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/eclipse/eclipse-original.svg" },
      { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" },
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
      { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" },
      { name: "GitLab", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitlab/gitlab-original.svg" },
      { name: "Bitbucket", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bitbucket/bitbucket-original.svg" },
      { name: "Maven", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/maven/maven-original.svg" },
      { name: "Gradle", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gradle/gradle-original.svg" },
      { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" },
      { name: "Swagger", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swagger/swagger-original.svg" },
      { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
      "Docker Compose",
      { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original.svg" },
      { name: "Jenkins", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg" },
      "MySQL Workbench",
      { name: "DBeaver", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dbeaver/dbeaver-original.svg" },
      "pgAdmin",
      { name: "Jira", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg" },
      { name: "Confluence", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/confluence/confluence-original.svg" },
      { name: "SonarQube", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sonarqube/sonarqube-original.svg" },
      { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg" },
      { name: "Apache Kafka", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apachekafka/apachekafka-original.svg" },
      { name: "RabbitMQ", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rabbitmq/rabbitmq-original.svg" },
      { name: "NGINX", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nginx/nginx-original.svg" },
      { name: "Tomcat", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tomcat/tomcat-original.svg" }
    ]
  },
  {
    name: "Deployments & Cloud",
    skills: ["Docker", "Kubernetes"]
  }
];

export const experienceData: Experience[] = [
  {
    id: "exp1",
    role: "Software Engineer",
    company: "ExpertFlow - Software for Customer Care",
    location: "Lahore, Pakistan",
    period: "11/2021 - Present",
    highlights: [
      "Design and develop scalable backend services using Java Spring Boot, ensuring seamless system integration and high-performance application behavior.",
      "Utilize JavaScript technologies for backend development and integration tasks across various projects.",
      "Contribute to projects involving Computer Telephony Integration (CTI), enabling real-time communication between telephony systems and customer-facing applications.",
      "Enhance contact center capabilities such as screen pops, call routing, and agent desktop integration — improving customer service efficiency and operational workflows."
    ],
    techStack: ["Java", "Spring Boot", "JavaScript", "CTI", "APIs"]
  },
  {
    id: "exp2",
    role: "Software Engineer",
    company: "Xeven Solutions (Pvt) Ltd.",
    location: "Lahore, Pakistan",
    period: "04/2020 - 06/2021",
    highlights: [
      "Developed and maintained web applications using ASP.NET Core and C#.",
      "Collaborated with cross-functional teams to deliver scalable solutions, implement RESTful APIs, and optimize system performance."
    ],
    techStack: ["ASP.NET Core", "C#", "REST APIs"]
  },
  {
    id: "exp3",
    role: "Junior Software Engineer",
    company: "MDVision Pakistan",
    location: "Lahore, Pakistan",
    period: "08/2020 - 04/2021",
    highlights: [
      "Worked on MDVision EMR (Electronic Medical Records) system using ASP.NET Web Forms.",
      "Contributed to patient data management, appointment scheduling, and system enhancements."
    ],
    techStack: ["ASP.NET Web Forms", "C#"]
  },
  {
    id: "exp4",
    role: "Internship",
    company: "Dynovative Solution Pvt Ltd",
    location: "Lahore, Pakistan",
    period: "06/2020 - 08/2020",
    highlights: [
      "Gained hands-on experience in software development using C# and .NET technologies.",
      "Worked on building and maintaining backend services, developing web applications, and performing debugging and code optimization tasks."
    ],
    techStack: ["C#", ".NET"]
  }
];

export const projectsData: Project[] = [
  {
    id: "webex-zoho-crm",
    title: "Webex CC Integration with Zoho CRM",
    subtitle: "API Integration",
    category: "cti",
    summary: "Integrated Webex Contact Center with Zoho CRM for real-time communication.",
    description: "Successfully integrated Webex Contact Center with Zoho CRM, enabling real-time communication and seamless customer data synchronization between the platforms. Responsible for ensuring stability and performance through testing and troubleshooting.",
    architectureDetails: [],
    techStack: ["Webex CC", "Zoho CRM", "API Integration", "JavaScript"],
    features: [
      "Real-time communication and seamless customer data synchronization.",
      "Troubleshooting and performance optimization for reliable integration."
    ],
    metrics: []
  },
  {
    id: "expertflow-fnb-ocep",
    title: "Expertflow CC Integration with FNB Framework",
    subtitle: "Banking Sector Integration",
    category: "enterprise",
    summary: "Integrated Expertflow Contact Centre solution with the FNB framework (OCEP).",
    description: "Worked for 2 years on integrating Expertflow’s Contact Centre solution with the FNB framework OCEP, handling end-to-end development, customer coordination, and integration testing. Delivered seamless communication and data exchange by building scalable backend services with Spring Boot.",
    architectureDetails: [],
    techStack: ["Spring Boot", "Java", "Expertflow Chat", "FNB Framework (OCEP)"],
    features: [
      "End-to-end development and integration testing.",
      "Scalable backend services for seamless communication and data exchange."
    ],
    metrics: []
  },
  {
    id: "ufone-ticketing-system",
    title: "Ufone Customer Ticketing System",
    subtitle: "Frontend Development",
    category: "fullstack",
    summary: "Frontend Developer on Ufone’s customer ticketing system using Angular.",
    description: "Built responsive UI components, integrated RESTful APIs for real-time customer data, and implemented features to log interactions and assist agents with query handling. Focused on performance and cross-browser compatibility.",
    architectureDetails: [],
    techStack: ["Angular", "REST APIs"],
    features: [
      "Responsive UI components and real-time data integration.",
      "Interaction logging and query handling for agents."
    ],
    metrics: []
  },
  {
    id: "expertflow-usd-cti",
    title: "Expertflow USD CTI Connector",
    subtitle: "Middleware Solution",
    category: "enterprise",
    summary: "Enterprise-grade middleware integrating Cisco Contact Center platforms with Microsoft Dynamics USD.",
    description: "Developed and supported an enterprise-grade middleware solution integrating Cisco Contact Center platforms (UCCX, UCCE) with Microsoft Dynamics Unified Service Desk (USD). Enabled seamless telephony operations within the Dynamics CRM interface.",
    architectureDetails: [],
    techStack: [".NET/WPF", "CIF", "ActiveMQ", "Cisco Finesse", "Microsoft Unified Service Desk"],
    features: [
      "Seamless telephony operations within Dynamics CRM.",
      "Improved agent workflows and customer service efficiency."
    ],
    metrics: []
  },
  {
    id: "dynamics-genesys-integration",
    title: "Dynamics 365 & Genesys PureCloud Integration",
    subtitle: "R&D Project",
    category: "enterprise",
    summary: "R&D to develop seamless integration between Genesys PureCloud and Microsoft Dynamics 365.",
    description: "Conducted R&D to develop a seamless integration solution between Genesys PureCloud and Microsoft Dynamics 365 using the Genesys embeddable framework, enabling unified communication and improved workflow efficiency for agents.",
    architectureDetails: [],
    techStack: ["Dynamics 365", "Genesys PureCloud", "Embeddable Framework"],
    features: [
      "Unified communication and workflow efficiency.",
      "Seamless integration using the embeddable framework."
    ],
    metrics: []
  },
  {
    id: "mdvision-emr",
    title: "MDVision All-in-One PM EMR",
    subtitle: "Healthcare Solution",
    category: "saas",
    summary: "Healthcare solution integrating Electronic Medical Records (EMR) and Practice Management (PM).",
    description: "Team member responsible for maintenance and new feature development on the MDVision All-in-One PM EMR — a healthcare solution integrating Electronic Medical Records (EMR) and Practice Management (PM).",
    architectureDetails: [],
    techStack: ["ASP.NET WebForms", "C#", "SQL Server"],
    features: [
      "Maintenance and new feature development.",
      "Integrating EMR and PM solutions."
    ],
    metrics: []
  },
  {
    id: "auto-solution",
    title: "Auto Solution",
    subtitle: "FYP",
    category: "fullstack",
    summary: "Full-stack web application for buying, selling, and searching vehicles and auto parts.",
    description: "Developed a full-stack web application inspired by PakWheels for buying, selling, and searching vehicles and auto parts. Implemented key features including vehicle and parts listings, advanced filtering, user dashboards, image uploads, and role-based authentication.",
    architectureDetails: [],
    techStack: ["ASP.NET Core", "SQL Server", "HTML/CSS", "JavaScript", "Bootstrap"],
    features: [
      "Vehicle and parts listings with advanced filtering.",
      "User dashboards and image uploads.",
      "Role-based authentication with admin and user access controls."
    ],
    metrics: []
  }
];

export const blogData: BlogPost[] = [
  {
    id: "blog-angular-perf",
    title: "Angular Performance Optimization Tips for Enterprise Applications",
    slug: "angular-performance-enterprise",
    summary: "Explore advanced techniques to optimize heavy enterprise Angular dashboards, including ChangeDetectionStrategy.OnPush, trackBy, RxJS memory management, and code splitting.",
    date: "June 25, 2026",
    readTime: "6 min read",
    tags: ["Angular", "Performance", "Enterprise"],
    content: `Enterprise dashboards often struggle with performance due to high volume data updates, complex component trees, and sub-optimal change detection triggers. Below are five actionable steps to optimize your Angular applications:

### 1. Leverage OnPush Change Detection
By default, Angular uses the \`Default\` change detection strategy, which scans the entire component tree on any event. Switch to \`ChangeDetectionStrategy.OnPush\` for components that only depend on immutable inputs:

\`\`\`typescript
@Component({
  selector: 'app-enterprise-table',
  templateUrl: './table.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EnterpriseTableComponent {
  @Input() data$: Observable<ReportData[]>;
}
\`\`\`
Angular will now only run change detection when an \`@Input\` reference changes or an event originates inside the component.

### 2. Implement trackBy for ngFor
When rendering tables or lists that update dynamically, use \`trackBy\` to prevent Angular from destroying and recreating DOM nodes:

\`\`\`html
<tr *ngFor="let item of data; trackBy: trackById">
  <td>{{ item.id }}</td>
  <td>{{ item.value }}</td>
</tr>
\`\`\`
\`\`\`typescript
trackById(index: number, item: any): string {
  return item.id;
}
\`\`\`

### 3. Prevent RxJS Memory Leaks
Always unsubscribe from long-lived Observables. The cleanest approach is using \`takeUntil\` with a subject representing component destruction:

\`\`\`typescript
private destroy$ = new Subject<void>();

ngOnInit() {
  this.apiService.getMetrics()
    .pipe(takeUntil(this.destroy$))
    .subscribe(data => this.metrics = data);
}

ngOnDestroy() {
  this.destroy$.next();
  this.destroy$.complete();
}
\`\`\`
Or better, use the Angular \`async\` pipe in the HTML template, which manages unsubscription automatically!

### 4. Lazy Load Feature Routes
Break the vendor bundle apart. Ensure the landing page loads instantly, and route profiles/dashboards asynchronously:

\`\`\`typescript
const routes: Routes = [
  { path: '', component: LandingComponent },
  { 
    path: 'dashboard', 
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) 
  }
];
\`\`\`

Using these patterns guarantees a responsive experience even when rendering thousands of real-time records.`
  },
  {
    id: "blog-spring-security",
    title: "Spring Boot Best Practices: Securing Rest APIs in Multi-Tenant Environments",
    slug: "spring-boot-security-multitenant",
    summary: "A practical guide to implementing robust JWT-based authorization, request interceptors, and database schema isolation using Spring Security and Hibernate.",
    date: "May 18, 2026",
    readTime: "8 min read",
    tags: ["Spring Boot", "Security", "SaaS"],
    content: `Securing endpoints in a multi-tenant environment requires strict isolation of user contexts, preventing tenant cross-talk or privilege escalations.

### 1. Extract Tenant from JWT Claims
Do not rely on path parameters (e.g., \`/api/{tenantId}/users\`) for identifying the tenant. Instead, embed the \`tenant_id\` directly in the JWT claims generated at login.
When validation succeeds, extract the claim and set it in a thread-local context:

\`\`\`java
public class TenantContext {
    private static final ThreadLocal<String> currentTenant = new ThreadLocal<>();

    public static void setCurrentTenant(String tenantId) {
        currentTenant.set(tenantId);
    }

    public static String getCurrentTenant() {
        return currentTenant.get();
    }

    public static void clear() {
        currentTenant.remove();
    }
}
\`\`\`

### 2. Configure Filter Chain for Strict RBAC
Use Spring Security to enforce role-based access. Always configure secure defaults, enabling cors, csrf disabling (for stateless APIs), and restricting path permissions:

\`\`\`java
@Bean
public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
    http
        .csrf(csrf -> csrf.disable())
        .sessionManagement(sess -> sess.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
        .authorizeHttpRequests(auth -> auth
            .requestMatchers("/api/auth/**").permitAll()
            .requestMatchers("/api/admin/**").hasRole("SUPER_ADMIN")
            .anyRequest().authenticated()
        )
        .addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class);
    return http.build();
}
\`\`\`

### 3. Enforce Schema Isolation on Database level
Hibernate provides a connection routing interface. Intercept SQL queries and append the current \`TenantContext.getCurrentTenant()\` as the active schema. This guarantees that even if a developer forgets to filter by tenant in a repository query, the database itself confines the query to the tenant's isolated boundary.`
  },
  {
    id: "blog-sap-c4c-cti",
    title: "SAP C4C CTI Integration: The Ultimate Technical Guide",
    slug: "sap-c4c-cti-integration-guide",
    summary: "Learn how to build a reliable Computer Telephony Integration (CTI) connector inside SAP Cloud for Customer using Angular, IFrames, and postMessage APIs.",
    date: "April 02, 2026",
    readTime: "7 min read",
    tags: ["SAP C4C", "CTI", "Integration"],
    content: `Integrating third-party softphones inside SAP Cloud for Customer (C4C) requires navigating browser security sandbox policies. The standard method is implementing an Angular application embedded in a custom HTML Mashup inside SAP C4C.

### Architecture Overview
\`\`\`
[ C4C Host Page ] <---- (window.postMessage) ----> [ Angular CTI Widget ]
                                                           |
                                                  (Secure WebSockets)
                                                           v
                                                  [ Telephony Server ]
\`\`\`

### Step 1: Create the HTML Mashup
Configure an HTML Mashup in SAP C4C Administrator Settings:
- **Port Binding**: Choose \`CTI\` to receive telephony triggers from the platform.
- **URL**: Point to your deployed Angular application.
- **Sizing**: Configure as a side-pane or background card.

### Step 2: Establish Secure cross-iframe communication
The main SAP portal sends agent credentials and phone status via parameters. The Angular widget communicates user actions (click-to-call, answer) using window communication:

\`\`\`typescript
// Triggers outbound call in SAP C4C UI
export function makeOutboundCall(phoneNumber: string) {
  const message = {
    action: 'DIAL',
    parameter: {
      number: phoneNumber
    }
  };
  
  window.parent.postMessage(JSON.stringify(message), 'https://my-sap-tenant.crm.ondemand.com');
}
\`\`\`

### Step 3: Handle Inbound Call events (Screen Pop)
When your telephony server notifies the Angular app of an incoming call, fetch caller profiles via OData, then send the profile lookup request to SAP:

\`\`\`typescript
export function triggerScreenPop(callerId: string) {
  const message = {
    action: 'SCREEN_POP',
    parameter: {
      searchKey: 'PhoneNo',
      searchValue: callerId
    }
  };
  
  window.parent.postMessage(JSON.stringify(message), '*');
}
\`\`\`
*Note: In production environments, replace the '*' wildcard target origin with your explicit SAP tenant URL to prevent event sniffing.*`
  },
  {
    id: "blog-webex-events",
    title: "Handling Real-time Events in Cisco Webex Contact Center",
    slug: "webex-contact-center-events",
    summary: "A deep dive into Webex Contact Center event listeners, managing ringing states, and bridging event data with React widget interfaces.",
    date: "March 11, 2026",
    readTime: "5 min read",
    tags: ["Webex", "API", "WebSockets"],
    content: `Managing real-time telephony signals in a web application requires asynchronous event handling. In Cisco Webex Contact Center, telephony events are delivered via a secure socket bridge.

### The Lifecycle of a Webex Call
A call event has multiple transition states. An integration widget must handle:
1. \`Ringing\` (ANI, DNIS, and Call ID parameters are dispatched)
2. \`Connected\` (Agent answers, call recording triggers)
3. \`WrapUp\` (Agent inputs call reason/outcome)
4. \`Disconnected\` (Reset variables, clear cache)

### React Event Hook Pattern
Implement a custom React Hook to listen to socket events and update internal component state safely without memory leaks:

\`\`\`typescript
export function useWebexCallState(socketUrl: string) {
  const [callState, setCallState] = useState<string>('Idle');
  const [currentCall, setCurrentCall] = useState<any>(null);

  useEffect(() => {
    const ws = new WebSocket(socketUrl);
    
    ws.onmessage = (event) => {
      const signal = JSON.parse(event.data);
      switch(signal.type) {
        case 'CALL_RINGING':
          setCallState('Ringing');
          setCurrentCall(signal.payload);
          break;
        case 'CALL_CONNECTED':
          setCallState('Connected');
          break;
        case 'CALL_WRAPUP':
          setCallState('WrapUp');
          break;
        case 'CALL_ENDED':
          setCallState('Idle');
          setCurrentCall(null);
          break;
      }
    };

    return () => {
      ws.close();
    };
  }, [socketUrl]);

  return { callState, currentCall };
}
\`\`\`

By encapsulating event listeners inside custom hooks, you prevent double-binding when React re-renders components, maintaining stable connections to Cisco's event stream.`
  },
  {
    id: "blog-rbac-design",
    title: "Designing a Clean Multi-Tenant RBAC System",
    slug: "multi-tenant-rbac-design",
    summary: "How to architecture hierarchical role systems inside enterprise SaaS apps, mapping permissions dynamically at compile-time and runtime.",
    date: "February 15, 2026",
    readTime: "8 min read",
    tags: ["SaaS", "Database", "Design Systems"],
    content: `A common pitfall in SaaS design is hardcoding checks like \`if (user.role == 'ADMIN')\`. As the product grows, this breaks down. A robust design maps users to Roles, and Roles to Permissions.

### 1. Database Schema
For a multi-tenant environment, the roles table must include a \`tenant_id\` reference. This allows tenants to custom-define roles and permission thresholds independently.

\`\`\`
[ Tenants ]
     | 1
     v *
[ Users ] --*--*-- [ Roles ] --*--*-- [ Permissions ]
                         | 1
                         v * (scoped by tenant)
\`\`\`

### 2. Spring Boot Method-Level Security
Configure Spring Security to load permissions dynamically during authentication. Build a custom security evaluation context:

\`\`\`java
@Component("authEvaluator")
public class MethodSecurityEvaluator {
    public boolean hasPermission(Authentication auth, String permission) {
        return auth.getAuthorities().stream()
            .anyMatch(authority -> authority.getAuthority().equals(permission));
    }
}
\`\`\`

Then, annotate controllers/services using expressions:
\`\`\`java
@RestController
@RequestMapping("/api/reports")
public class ReportController {
    
    @GetMapping
    @PreAuthorize("@authEvaluator.hasPermission(authentication, 'READ_REPORTS')")
    public List<Report> getReports() {
        return reportService.loadAllForTenant();
    }
}
\`\`\`

### 3. Angular Route Guards and Directives
In the frontend, hide UI controls using a custom structural directive (\`*hasPermission="['WRITE_REPORTS']"\`). For route protection, use a dynamic functional route guard:

\`\`\`typescript
export const permissionGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const requiredPermissions = route.data['permissions'] as string[];
  
  return authService.hasAllPermissions(requiredPermissions);
};
\`\`\`

This creates a bulletproof authorization layer that protects data integrity both in transit and inside the browser.`
  }
];

export const achievementsData = [
  "Successfully integrated Webex Contact Center for enterprise clients with 1,000+ active agents.",
  "Designed a multi-tenant database routing framework currently used by 15+ tenant organizations.",
  "Optimized SAP CRM OData API payloads, reducing page rendering times by over 45%.",
  "Engineered lightweight Docker deployments using K3s clusters for high-availability enterprise environments.",
  "Created fully reusable npm wrapper libraries for cross-iframe window postMessage communications.",
  "Delivered complex Practice Management SaaS featuring calendar engines and advanced audit logging."
];

export const educationData: Education[] = [
  {
    id: "edu1",
    degree: "Bachelor of Science (Hons), Computer Science",
    institution: "NCBA&E, Lahore",
    period: "2016 - 2020",
    result: "CGPA: 3.7/4.0"
  },
  {
    id: "edu2",
    degree: "F.Sc Pre-Engineering",
    institution: "BISE, Bahawalpur",
    period: "2012 - 2014",
    result: "Result: 67%"
  },
  {
    id: "edu3",
    degree: "SSC in Science",
    institution: "BISE, Bahawalpur",
    period: "2012",
    result: "Result: 83%"
  }
];

export const certificationsData = [];

export const learningData = [
  "Advanced System Design (Microservices & Event-Driven Patterns)",
  "Amazon Web Services (AWS Architecture Associate)",
  "Kubernetes Administration (CKA Prep)",
  "Next.js App Router & Server Components for optimized SEO applications"
];

export const testimonialsData: Testimonial[] = [
  {
    quote: "Uzair's depth of knowledge in enterprise CTI integrations is outstanding. He seamlessly connected our Webex engine with SAP C4C, solving complex cross-origin sandbox restrictions and delivering a highly performant interface.",
    author: "Faisal Naeem",
    role: "Lead Project Manager",
    company: "ExpertFlow CTI Division"
  },
  {
    quote: "Uzair has an incredible ability to take complex requirements, like dynamic database schema isolation for multi-tenant SaaS, and design clean, maintainable Spring Boot and Angular architectures. He is a key asset to any high-profile engineering team.",
    author: "Zeeshan Khan",
    role: "Senior Solutions Architect",
    company: "Academic Systems Inc."
  }
];
