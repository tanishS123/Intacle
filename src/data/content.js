import {
  BarChart3,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  CircleDollarSign,
  CloudCog,
  Factory,
  GraduationCap,
  HeartPulse,
  Landmark,
  Layers3,
  LineChart,
  LockKeyhole,
  Network,
  Rocket,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Truck,
  UsersRound,
} from "lucide-react";

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Solutions", href: "#solutions" },
  { label: "Industries", href: "#industries" },
  { label: "Careers", href: "#careers" },
  { label: "Contact", href: "#contact" },
];

export const stats = [
  { value: "S/4HANA", label: "transformation focus" },
  { value: "US-led", label: "enterprise delivery" },
  { value: "24/7", label: "SAP continuity mindset" },
];

export const principles = [
  "Architecture before acceleration",
  "Controls embedded in delivery",
  "Outcome ownership beyond go-live",
];

export const services = [
  {
    icon: Rocket,
    title: "SAP Integration Suite",
    body: "End-to-end integration design, API management, event mesh, and middleware modernization for connected enterprise landscapes.",
  },
  {
    icon: ShieldCheck,
    title: "Data Integration",
    body: "Unified data pipelines, real-time synchronization, ETL/ELT design, and cross-system data consistency for reliable business operations.",
  },
  {
    icon: CloudCog,
    title: "SAP S/4HANA",
    body: "Greenfield and brownfield implementations, migration strategy, process harmonization, and post-go-live stabilization for S/4HANA transformation.",
  },
  {
    icon: BarChart3,
    title: "SAP BTP",
    body: "Business Technology Platform setup, extension development, low-code/no-code enablement, and cloud-native application delivery on BTP.",
  },
  {
    icon: Network,
    title: "Implementation & Rollout",
    body: "Structured project delivery, stakeholder alignment, change management, and go-live support across your SAP program.",
  },
  {
    icon: LockKeyhole,
    title: "SAP Support & Operations",
    body: "Post-implementation support, system monitoring, patch management, and continuous improvement for your SAP landscape.",
  },
];

export const solutions = [
  {
    title: "Transformation Office",
    eyebrow: "Control tower",
    body: "A senior SAP command center that connects decisions, delivery health, dependencies, risks, and value realization.",
  },
  {
    title: "Clean-Core Accelerator",
    eyebrow: "Modernization",
    body: "A pragmatic framework for extension governance, simplification, integration, and upgrade-safe SAP architecture.",
  },
  {
    title: "Data Readiness Studio",
    eyebrow: "Migration",
    body: "A structured path to ownership, quality gates, conversion rehearsals, reconciliation, and trusted go-live data.",
  },
  {
    title: "Hypercare Command",
    eyebrow: "Continuity",
    body: "A post-launch operating model for defect triage, business adoption, stabilization, and executive transparency.",
  },
];

export const industries = [
  { icon: Factory, title: "Manufacturing", body: "Plan-to-produce, maintenance, quality, and plant-level execution." },
  { icon: Truck, title: "Logistics", body: "Distribution, warehousing, transportation, and network visibility." },
  { icon: ShoppingBag, title: "Retail", body: "Merchandising, inventory, commerce, and customer operations." },
  { icon: HeartPulse, title: "Healthcare", body: "Finance, supply chain, compliance, and service continuity." },
  { icon: Landmark, title: "Public sector", body: "Transparent programs with controls, governance, and measurable delivery." },
  { icon: CircleDollarSign, title: "Financial services", body: "Risk-aware modernization for complex finance and reporting estates." },
];

export const caseStudies = [
  {
    metric: "32%",
    title: "Reduced SAP release risk",
    body: "Built a transformation office for a national distributor, improving dependency clarity and cutover readiness.",
  },
  {
    metric: "18 mo",
    title: "S/4HANA roadmap unlocked",
    body: "Defined phased modernization for a manufacturer with clean-core controls and business-led value cases.",
  },
  {
    metric: "99.8%",
    title: "Operational continuity",
    body: "Stabilized production support after go-live with a command model spanning IT, finance, and supply chain.",
  },
];

export const roles = [
  "SAP Solution Architect",
  "S/4HANA Program Lead",
  "SAP Data Migration Consultant",
  "SAP BTP Integration Specialist",
];

export const blogPosts = [
  {
    title: "Why clean-core governance belongs in the first steering meeting",
    tag: "Architecture",
    date: "Insight",
  },
  {
    title: "The executive dashboard every S/4HANA program needs",
    tag: "Delivery",
    date: "Point of view",
  },
  {
    title: "Hypercare is an operating model, not a calendar window",
    tag: "Operations",
    date: "Field note",
  },
];

export const faqs = [
  {
    question: "Does Intacle only support SAP S/4HANA programs?",
    answer:
      "S/4HANA is a major focus, but Intacle also supports SAP operations, data readiness, integration, analytics, process design, program assurance, and post-go-live stabilization.",
  },
  {
    question: "How does Intacle work with internal teams and system integrators?",
    answer:
      "Intacle is built to complement enterprise teams and SI delivery groups by adding senior governance, architecture discipline, risk control, and executive clarity.",
  },
  {
    question: "Can Intacle help before a transformation starts?",
    answer:
      "Yes. The advisory model is designed for early-stage planning, readiness assessment, business case framing, roadmap design, vendor alignment, and board-level decision support.",
  },
  {
    question: "What makes the delivery model different?",
    answer:
      "Intacle emphasizes experienced SAP leadership, transparent controls, practical decision making, and measurable outcomes over slide-heavy consulting theater.",
  },
];

export const differentiators = [
  { icon: BriefcaseBusiness, title: "Executive narrative", body: "Clear stories for boards, steering committees, and program teams." },
  { icon: Layers3, title: "Architecture discipline", body: "Future-ready patterns without losing sight of delivery reality." },
  { icon: UsersRound, title: "Delivery partnership", body: "Senior operators who work shoulder-to-shoulder with your teams." },
  { icon: LineChart, title: "Value visibility", body: "Metrics, milestones, and adoption signals leaders can act on." },
];

export const contactOptions = [
  { icon: CheckCircle2, label: "Transformation advisory" },
  { icon: Building2, label: "Enterprise SAP programs" },
  { icon: Sparkles, label: "Clean-core modernization" },
  { icon: GraduationCap, label: "SAP talent and careers" },
];
