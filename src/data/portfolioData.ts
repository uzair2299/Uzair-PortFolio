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

export interface SkillCategory {
  name: string;
  skills: string[];
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
  name: "Uzair Anwar",
  title: "Enterprise Full Stack Software Engineer",
  tagline: "Building scalable enterprise applications, multi-tenant SaaS products, and custom CRM contact center integrations.",
  location: "Lahore, Pakistan",
  email: "uzairanwar2299@gmail.com",
  linkedin: "https://www.linkedin.com/in/uzairanwar2299/",
  whatsapp: "https://wa.me/923366312299",
  phone1: "+92 336 6312299",
  phone2: "+92 320 5500003",
  cvLink: "#",
};

export const skillsData: SkillCategory[] = [
  {
    name: "Frontend",
    skills: ["Angular", "React", "TypeScript", "JavaScript", "HTML5", "CSS3 / SCSS", "Angular Material", "RxJS", "State Management (NgRx/Redux)"]
  },
  {
    name: "Backend",
    skills: ["Java", "Spring Boot", "Spring Security", "Spring Data JPA", "Hibernate", "REST APIs", "Node.js", "Express", "OData APIs"]
  },
  {
    name: "Database",
    skills: ["MySQL", "PostgreSQL", "SQL Server", "Redis (Caching)", "MongoDB"]
  },
  {
    name: "Cloud & DevOps",
    skills: ["Docker", "K3s / Kubernetes", "Vercel", "HostGator", "Git / GitHub Actions", "CI/CD Pipelines", "Nginx"]
  },
  {
    name: "Enterprise Systems",
    skills: ["SAP Cloud for Customer (C4C)", "Salesforce Service Cloud", "Cisco Webex Contact Center", "Multi-Tenant SaaS Architecture", "RBAC (Role-Based Access Control)"]
  }
];

export const experienceData: Experience[] = [
  {
    id: "exp1",
    role: "Software Engineer",
    company: "ExpertFlow",
    location: "Islamabad, Pakistan",
    period: "2024 - Present",
    highlights: [
      "Designed and developed CTI (Computer Telephony Integration) Connectors for SAP Cloud for Customer (C4C) and Salesforce Service Cloud using Angular and Spring Boot.",
      "Built custom widgets for Cisco Webex Contact Center Agent Desktop, leveraging Webex Wrapper SDKs and HTML5 PostMessage API for secure cross-origin communication.",
      "Optimized real-time agent event handling (ringing, answered, disconnected states) to reduce screen-pop latency by 45%.",
      "Engineered secure, role-based REST APIs in Spring Boot integrated with enterprise identity providers via OAuth2 / SAML.",
      "Successfully deployed containerized services on K3s lightweight Kubernetes clusters, reducing infrastructure footprint for enterprise on-prem clients."
    ],
    techStack: ["Angular", "Spring Boot", "SAP C4C", "Webex Contact Center SDK", "Docker", "K3s", "TypeScript", "RxJS", "PostgreSQL"]
  },
  {
    id: "exp2",
    role: "Full Stack Software Engineer",
    company: "Freelance / Software Solutions",
    location: "Remote",
    period: "2022 - 2024",
    highlights: [
      "Architected and deployed a multi-tenant Smart School ERP system, supporting isolated student databases, dynamic fee scheduling, and automated grade management.",
      "Developed a custom QR-code-based Asset Management System with strict permission layers and maintenance scheduling alerts.",
      "Built and deployed high-performance marketing and service platform for a home maintenance company in UAE, achieving 98+ PageSpeed SEO score on Vercel.",
      "Integrated third-party APIs including Stripe for billing, Twilio for SMS alerts, and SendGrid for automated student reports."
    ],
    techStack: ["React", "Angular", "Spring Boot", "Hibernate", "PostgreSQL", "Vercel", "Stripe API", "Node.js", "Docker"]
  }
];

export const projectsData: Project[] = [
  {
    id: "sap-cti-connector",
    title: "SAP C4C CTI Connector",
    subtitle: "Enterprise CRM CTI Integration",
    category: "enterprise",
    summary: "Computer Telephony Integration (CTI) connector bridging Cisco Webex Contact Center and SAP Cloud for Customer (C4C).",
    description: "This enterprise connector embeds inside the SAP Cloud for Customer CRM interface as a floating widget or integrated panel. When an incoming call triggers on the agent desktop, the connector listens to WebSockets/Webex events, queries customer profiles using OData APIs in the background, and triggers an instant 'Screen Pop' showing customer history, previous tickets, and details before the agent answers the call.",
    architectureDetails: [
      "CTI Bridge: Angular-based frontend embedded securely in SAP C4C via iframe container, communicating with the CRM framework.",
      "OData Services: High-frequency queries to SAP C4C standard and custom OData endpoints to fetch customer objects dynamically.",
      "Event Dispatcher: Spring Boot back-end caching session tokens and handling webhook payloads from telecom providers."
    ],
    techStack: ["Angular", "Spring Boot", "OData APIs", "SAP SDK", "RxJS", "Docker", "Sleek CSS"],
    features: [
      "Automatic Screen Pop on inbound call events",
      "Click-to-Dial directly from SAP Contact cards",
      "Bi-directional agent state synchronization (Ready, Not Ready, Break)",
      "Automated call activity logging into SAP CRM timeline",
      "Highly secure OAuth2 authentication flow"
    ],
    metrics: [
      "Average Screen Pop latency: < 350ms",
      "99.99% uptime in production deployment",
      "Used by 200+ concurrent active enterprise call agents"
    ],
    codeSnippet: {
      language: "typescript",
      code: `// Communicating with SAP C4C hosting window via safe postMessage
const sendCtiEventToCRM = (eventName: string, payload: any) => {
  const crmTargetOrigin = "https://myxxxxxx.crm.ondemand.com";
  const message = {
    source: "EXPERTFLOW_CTI",
    event: eventName,
    data: payload
  };
  
  window.parent.postMessage(JSON.stringify(message), crmTargetOrigin);
};

// Listen for incoming ringing events from telecom bridge
telephonySocket.on("ringing", (callData) => {
  sendCtiEventToCRM("CRM_SCREEN_POP", {
    phoneNumber: callData.callerId,
    direction: "Inbound",
    callId: callData.connectionId
  });
});`,
      description: "Secure cross-origin communication between the Angular CTI Widget and the host SAP Cloud for Customer CRM frame."
    }
  },
  {
    id: "webex-integration",
    title: "Webex Desktop Custom Widget",
    subtitle: "Cisco Webex Contact Center Add-on",
    category: "cti",
    summary: "A customized enterprise layout engine for Cisco Webex Contact Center Agent Desktop using wrappers and postMessage.",
    description: "Designed a premium custom widget framework deployed within the Cisco Webex Agent Desktop environment. The widget listens to the active agent telephony events and handles contextual customer information synchronization. It connects agents to internal resources, automates post-call Wrap-Up codes, and handles screen synchronization for team supervisors.",
    architectureDetails: [
      "Cisco Webex Desktop SDK wrapper integration.",
      "HTML5 postMessage secure channel to broadcast call state changes to parallel widgets.",
      "Redux state store managing agent call status and customer history caches locally."
    ],
    techStack: ["React", "Redux", "Webex Wrapper SDK", "HTML5 postMessage", "SCSS", "Vercel"],
    features: [
      "Custom UI panels for Customer Sentiment and Call History",
      "Real-time Supervisor broadcast alerts",
      "Supervisor silent monitoring notification badges",
      "PostMessage listener translating desktop status variables",
      "Dynamic theme integration matching Webex Dark/Light settings"
    ],
    metrics: [
      "Zero page freezes reported over 12 months",
      "Reduced call wrap-up time (ACW) by 22 seconds per interaction",
      "Deployed to 1,000+ contact center agents globally"
    ],
    codeSnippet: {
      language: "javascript",
      code: `// Listen to Webex Desktop Framework Event broadcast
window.addEventListener("message", (event) => {
  if (event.origin !== EXPECTED_WEBEX_DESKTOP_ORIGIN) return;
  
  try {
    const data = typeof event.data === "string" ? JSON.parse(event.data) : event.data;
    if (data.type === "WIDGET_OUTCOMING_TELEPHONY_EVENT") {
      const { state, interaction } = data.payload;
      updateAgentUIState(state); // Ringing, Connected, WrapUp
      loadCustomerContext(interaction.mediaProperties.ani);
    }
  } catch (err) {
    console.error("Failed to parse Webex desktop event", err);
  }
}, false);`,
      description: "Event handling script inside the Webex custom widget receiving caller identification from the main desktop frame."
    }
  },
  {
    id: "smart-school-erp",
    title: "Smart School ERP",
    subtitle: "Multi-tenant Academic SaaS",
    category: "saas",
    summary: "A cloud-hosted multi-tenant ERP platform managing student lifecycle, online fees, automated attendance, and grades.",
    description: "Built to serve multiple schools as tenants on a single database deployment. Uses Spring Boot dynamic multi-tenancy configurations, mapping separate database schemas dynamically based on the incoming tenant identifier header. Frontend developed in Angular with custom role-based routing guards, keeping student, teacher, and administrator experiences secure and personalized.",
    architectureDetails: [
      "Schema-based multi-tenancy: Dynamic datasource router switching database contexts on each request thread based on standard tenant headers.",
      "Spring Security JWT: Stateful tokens holding tenant metadata and User roles (RBAC).",
      "Angular Dynamic Forms: Customizable dashboards and grade cards tailored per school brand settings."
    ],
    techStack: ["Spring Boot", "Angular", "Spring Security", "Hibernate", "PostgreSQL", "Docker", "TailwindCSS"],
    features: [
      "Schema-isolated tenant data stores",
      "Fee payment scheduling and integration with Stripe/EasyPaisa",
      "Real-time student attendance tracking with SMS triggers",
      "Role-Based Access Control (SuperAdmin, Principal, Teacher, Student)",
      "Comprehensive analytics dashboard for school performance metrics"
    ],
    metrics: [
      "Supporting 15+ tenant schools",
      "Over 10,000+ active student records managed",
      "Processed over $150k in online fee payments"
    ],
    codeSnippet: {
      language: "java",
      code: `// Spring Boot Dynamic Tenant Schema Resolver
public class TenantSchemaResolver implements CurrentTenantIdentifierResolver {
    @Override
    public String resolveCurrentTenantIdentifier() {
        String tenantId = TenantContext.getCurrentTenant();
        return tenantId != null ? tenantId : "public";
    }

    @Override
    public boolean validateExistingCurrentSessions() {
        return true;
    }
}

// Aspect intercepting incoming API calls to extract X-Tenant-ID
@Component
public class TenantInterceptor implements HandlerInterceptor {
    @Override
    public boolean preHandle(HttpServletRequest req, HttpServletResponse res, Object h) {
        String tenantId = req.getHeader("X-Tenant-ID");
        TenantContext.setCurrentTenant(tenantId);
        return true;
    }
}`,
      description: "Dynamic tenant schema switching pattern mapping Hibernate database connections per API request."
    }
  },
  {
    id: "asset-management-system",
    title: "Enterprise Asset Tracker",
    subtitle: "Asset Tracking & Preventive Maintenance",
    category: "enterprise",
    summary: "Internal tracking application organizing enterprise hardware, QR code generation, check-in flows, and maintenance alerts.",
    description: "Helps enterprises manage physical capital and IT hardware inventory. Features dynamic QR code generation for tags, a native mobile-friendly scanner interface, check-in/check-out tracking, vendor contracts indexing, and recurring maintenance email reminders driven by Quartz scheduler.",
    architectureDetails: [
      "Spring Boot back-end managing DB transactions and image uploads.",
      "Angular Material frontend with searchable paginated tables and dynamic filters.",
      "Quartz Job Scheduler for automation of preventive maintenance checklists."
    ],
    techStack: ["Angular", "Spring Boot", "Spring Data JPA", "PostgreSQL", "Quartz Scheduler", "Angular Material"],
    features: [
      "Automated PDF and SVG QR Code sheet generation",
      "Quick Scan Check-in and Check-out scanner",
      "Automated emails to technicians for upcoming maintenance",
      "Fine-grained asset category hierarchies",
      "Asset history timeline tracing every transfer and repair event"
    ],
    metrics: [
      "5,000+ assets indexed and tracked",
      "Reduced IT audit mismatch by 95%",
      "Maintenance checklist compliance increased from 60% to 98%"
    ]
  },
  {
    id: "practice-management-saas",
    title: "Clinic Practice Management",
    subtitle: "Healthcare SaaS Platform",
    category: "saas",
    summary: "Appointment scheduling, interactive patient charts, billing, and prescription builder for private clinics.",
    description: "Designed for small-to-midsize medical clinics. Features a real-time calendar grid with drag-and-drop appointments, integrated billing with receipt generation, role-based controls for receptionists and doctors, and a prescription editor with searchable drug catalogs.",
    architectureDetails: [
      "Spring Boot APIs with Spring Security JWT and Method-Level Authorization (@PreAuthorize).",
      "React Frontend utilizing full calendar grids and clean context-driven states.",
      "PostgreSQL with optimized indexes supporting rapid calendar queries."
    ],
    techStack: ["React", "Spring Boot", "Spring Security", "PostgreSQL", "Docker", "Nginx"],
    features: [
      "Interactive drag-and-drop Appointment Calendar",
      "Doctor and receptionist split dashboards",
      "Prescription builder with templates",
      "Auto-billing and printable invoice generator",
      "HIPAA-compliant audit logs for medical records changes"
    ],
    metrics: [
      "Active in 4 specialized clinics",
      "Successfully scheduled 20,000+ medical visits",
      "99% positive doctor workflow feedback score"
    ]
  },
  {
    id: "home-maintenance-web",
    title: "UAE Home Maintenance Hub",
    subtitle: "High-Performance Corporate Website",
    category: "fullstack",
    summary: "Fully responsive, SEO-optimized business platform for a maintenance enterprise operating in the UAE.",
    description: "Developed and optimized a lightning-fast service booking and informational platform. Focus was placed on animations, layout responsiveness, and maximum search engine discoverability. Implemented custom static rendering, structured metadata JSON-LD schemas, and a serverless contact dispatch service.",
    architectureDetails: [
      "React client-side application statically optimized and hosted on Vercel.",
      "CSS Grid responsive structures with customized fluid typography rules.",
      "Integrates Serverless Functions handling lead forwards directly to corporate WhatsApp/Email API."
    ],
    techStack: ["React", "Vercel Serverless", "Vanilla CSS", "SEO Schema JSON-LD", "Vercel"],
    features: [
      "Under 1.2s Page Load Time (LCP)",
      "Interactive dynamic booking forms with WhatsApp dispatching",
      "Localized rich snippet metadata structure",
      "Sleek modern layouts using CSS variables and smooth transitions",
      "Complete mobile-first responsiveness targeting UAE customers"
    ],
    metrics: [
      "99/100 Mobile performance score on Google Lighthouse",
      "300%+ increase in online inbound inquiries in first 60 days",
      "SEO ranking on page 1 for target localized service terms"
    ]
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

export const certificationsData = [
  {
    name: "SAP Cloud for Customer Integration",
    issuer: "SAP",
    date: "2025"
  },
  {
    name: "Cisco Webex Contact Center SDK Certification",
    issuer: "Cisco Partner Network",
    date: "2024"
  },
  {
    name: "Oracle Certified Associate, Java SE Programmer",
    issuer: "Oracle",
    date: "2023"
  }
];

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
