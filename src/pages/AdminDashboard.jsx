import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Calendar,
  Users,
  UserCog,
  MessageSquare,
  CreditCard,
  Settings,
  LogOut,
  Menu,
  X,
  Bell,
  Search,
  ChevronDown,
  CheckCircle,
  XCircle,
  Clock,
  TrendingUp,
  DollarSign,
  Activity,
  FileText,
  Shield,
  Building,
  Image,
  BarChart3,
  Database,
  Key,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

// Sample data
const appointments = [
  { id: 1, patient: "John Smith", doctor: "Dr. Sarah Johnson", specialty: "Cardiology", date: "2024-01-15", time: "10:00 AM", status: "pending" },
  { id: 2, patient: "Emily Davis", doctor: "Dr. Michael Chen", specialty: "Orthopedics", date: "2024-01-15", time: "11:30 AM", status: "approved" },
  { id: 3, patient: "Robert Brown", doctor: "Dr. Emily Williams", specialty: "Pediatrics", date: "2024-01-16", time: "09:00 AM", status: "pending" },
  { id: 4, patient: "Sarah Wilson", doctor: "Dr. James Anderson", specialty: "Neurology", date: "2024-01-16", time: "02:00 PM", status: "completed" },
  { id: 5, patient: "Michael Lee", doctor: "Dr. Sarah Johnson", specialty: "Cardiology", date: "2024-01-17", time: "10:30 AM", status: "rejected" },
];

const enquiries = [
  { id: 1, name: "Alice Johnson", email: "alice@example.com", type: "General Inquiry", status: "unread", date: "2024-01-14" },
  { id: 2, name: "Bob Wilson", email: "bob@example.com", type: "Billing", status: "replied", date: "2024-01-13" },
  { id: 3, name: "Carol Davis", email: "carol@example.com", type: "Appointment", status: "unread", date: "2024-01-12" },
];

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState("dashboard");
  const [appointmentList, setAppointmentList] = useState(appointments);

  useEffect(() => {
    const storedUser = localStorage.getItem("adminUser");
    if (!storedUser) {
      navigate("/admin/login");
      return;
    }
    setUser(JSON.parse(storedUser));
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("adminUser");
    navigate("/admin/login");
  };

  const handleAppointmentAction = (id, action) => {
    setAppointmentList((prev) =>
      prev.map((apt) =>
        apt.id === id ? { ...apt, status: action } : apt
      )
    );
  };

  const isSuperAdmin = user?.role === "superadmin";

  const adminMenuItems = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "appointments", label: "Appointments", icon: Calendar },
    { id: "doctors", label: "Doctors", icon: UserCog },
    { id: "patients", label: "Patients", icon: Users },
    { id: "enquiries", label: "Enquiries", icon: MessageSquare },
    { id: "payments", label: "Payments", icon: CreditCard },
  ];

  const superAdminMenuItems = [
    { id: "users", label: "User Management", icon: Shield },
    { id: "settings", label: "System Settings", icon: Settings },
    { id: "content", label: "Content Management", icon: FileText },
    { id: "analytics", label: "Analytics", icon: BarChart3 },
  ];

  const stats = [
    { label: "Total Appointments", value: "1,234", change: "+12%", icon: Calendar, color: "bg-primary/10 text-primary" },
    { label: "Today's Appointments", value: "28", change: "+5%", icon: Activity, color: "bg-accent/10 text-accent" },
    { label: "Total Patients", value: "8,456", change: "+8%", icon: Users, color: "bg-secondary/10 text-secondary" },
    { label: "Revenue (This Month)", value: "$124,500", change: "+15%", icon: DollarSign, color: "bg-healthcare-gold/10 text-healthcare-gold" },
  ];

  if (!user) return null;

  return (
    <div className="min-h-screen bg-muted/30 flex">
      {/* Sidebar */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-healthcare-navy text-white transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0 lg:w-20"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-4 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                <span className="text-secondary font-bold">M+</span>
              </div>
              {isSidebarOpen && (
                <div>
                  <h2 className="font-bold">MediCare</h2>
                  <p className="text-xs text-white/60">Admin Panel</p>
                </div>
              )}
            </div>
          </div>

          {/* Menu */}
          <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
            <p className="text-xs text-white/40 uppercase tracking-wider mb-2 px-3">
              {isSidebarOpen ? "Main Menu" : ""}
            </p>
            {adminMenuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                  activeTab === item.id
                    ? "bg-white/10 text-secondary"
                    : "text-white/70 hover:bg-white/5 hover:text-white"
                }`}
              >
                <item.icon className="w-5 h-5 flex-shrink-0" />
                {isSidebarOpen && <span className="text-sm">{item.label}</span>}
              </button>
            ))}

            {isSuperAdmin && (
              <>
                <p className="text-xs text-white/40 uppercase tracking-wider mt-6 mb-2 px-3">
                  {isSidebarOpen ? "Super Admin" : ""}
                </p>
                {superAdminMenuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                      activeTab === item.id
                        ? "bg-white/10 text-secondary"
                        : "text-white/70 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    <item.icon className="w-5 h-5 flex-shrink-0" />
                    {isSidebarOpen && <span className="text-sm">{item.label}</span>}
                  </button>
                ))}
              </>
            )}
          </nav>

          {/* Logout */}
          <div className="p-4 border-t border-white/10">
            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-white/70 hover:bg-white/5 hover:text-white transition-colors"
            >
              <LogOut className="w-5 h-5" />
              {isSidebarOpen && <span className="text-sm">Logout</span>}
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* Top Bar */}
        <header className="sticky top-0 z-40 bg-white border-b border-border px-4 lg:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            >
              <Menu className="w-5 h-5" />
            </button>
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search..."
                className="pl-9 w-64 bg-muted border-0"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="relative p-2 rounded-lg hover:bg-muted transition-colors">
              <Bell className="w-5 h-5 text-muted-foreground" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-destructive rounded-full" />
            </button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-2 p-2 rounded-lg hover:bg-muted transition-colors">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-semibold text-sm">
                      {user.email.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <div className="hidden md:block text-left">
                    <p className="text-sm font-medium">{user.email}</p>
                    <p className="text-xs text-muted-foreground capitalize">{user.role}</p>
                  </div>
                  <ChevronDown className="w-4 h-4 text-muted-foreground" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem>Profile Settings</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout} className="text-destructive">
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-4 lg:p-6">
          {activeTab === "dashboard" && (
            <div className="space-y-6">
              <div>
                <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
                <p className="text-muted-foreground">Welcome back! Here's what's happening today.</p>
              </div>

              {/* Stats Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {stats.map((stat, idx) => (
                  <div key={idx} className="card-healthcare">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground">{stat.label}</p>
                        <p className="text-2xl font-bold text-foreground mt-1">{stat.value}</p>
                        <div className="flex items-center gap-1 mt-1">
                          <TrendingUp className="w-4 h-4 text-accent" />
                          <span className="text-sm text-accent">{stat.change}</span>
                        </div>
                      </div>
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${stat.color}`}>
                        <stat.icon className="w-6 h-6" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Recent Appointments */}
              <div className="card-healthcare">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold text-foreground">Recent Appointments</h2>
                  <Button variant="outline" size="sm" onClick={() => setActiveTab("appointments")}>
                    View All
                  </Button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Patient</th>
                        <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Doctor</th>
                        <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Date & Time</th>
                        <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Status</th>
                        <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {appointmentList.slice(0, 5).map((apt) => (
                        <tr key={apt.id} className="border-b border-border/50 hover:bg-muted/30">
                          <td className="py-3 px-4">
                            <p className="font-medium text-foreground">{apt.patient}</p>
                          </td>
                          <td className="py-3 px-4">
                            <p className="text-foreground">{apt.doctor}</p>
                            <p className="text-xs text-muted-foreground">{apt.specialty}</p>
                          </td>
                          <td className="py-3 px-4">
                            <p className="text-foreground">{apt.date}</p>
                            <p className="text-xs text-muted-foreground">{apt.time}</p>
                          </td>
                          <td className="py-3 px-4">
                            <Badge
                              className={
                                apt.status === "approved"
                                  ? "badge-status-approved"
                                  : apt.status === "rejected"
                                  ? "badge-status-rejected"
                                  : apt.status === "completed"
                                  ? "bg-blue-100 text-blue-800"
                                  : "badge-status-pending"
                              }
                            >
                              {apt.status}
                            </Badge>
                          </td>
                          <td className="py-3 px-4">
                            {apt.status === "pending" && (
                              <div className="flex items-center gap-2">
                                <Button
                                  size="sm"
                                  variant="ghost"
                                  className="h-8 w-8 p-0 text-accent hover:text-accent hover:bg-accent/10"
                                  onClick={() => handleAppointmentAction(apt.id, "approved")}
                                >
                                  <CheckCircle className="w-4 h-4" />
                                </Button>
                                <Button
                                  size="sm"
                                  variant="ghost"
                                  className="h-8 w-8 p-0 text-destructive hover:text-destructive hover:bg-destructive/10"
                                  onClick={() => handleAppointmentAction(apt.id, "rejected")}
                                >
                                  <XCircle className="w-4 h-4" />
                                </Button>
                              </div>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Pending Enquiries */}
                <div className="card-healthcare">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-semibold text-foreground">Pending Enquiries</h2>
                    <Badge variant="secondary">{enquiries.filter(e => e.status === "unread").length} New</Badge>
                  </div>
                  <div className="space-y-3">
                    {enquiries.map((enquiry) => (
                      <div key={enquiry.id} className="flex items-start justify-between p-3 rounded-lg bg-muted/30">
                        <div>
                          <p className="font-medium text-foreground">{enquiry.name}</p>
                          <p className="text-sm text-muted-foreground">{enquiry.type}</p>
                        </div>
                        <Badge
                          className={
                            enquiry.status === "unread"
                              ? "bg-primary/10 text-primary"
                              : "bg-muted text-muted-foreground"
                          }
                        >
                          {enquiry.status}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Appointment Status */}
                <div className="card-healthcare">
                  <h2 className="text-lg font-semibold text-foreground mb-4">Appointment Status</h2>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 rounded-full bg-amber-500" />
                        <span className="text-foreground">Pending</span>
                      </div>
                      <span className="font-semibold">{appointmentList.filter(a => a.status === "pending").length}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 rounded-full bg-accent" />
                        <span className="text-foreground">Approved</span>
                      </div>
                      <span className="font-semibold">{appointmentList.filter(a => a.status === "approved").length}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 rounded-full bg-blue-500" />
                        <span className="text-foreground">Completed</span>
                      </div>
                      <span className="font-semibold">{appointmentList.filter(a => a.status === "completed").length}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 rounded-full bg-destructive" />
                        <span className="text-foreground">Rejected</span>
                      </div>
                      <span className="font-semibold">{appointmentList.filter(a => a.status === "rejected").length}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "appointments" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-2xl font-bold text-foreground">Appointment Management</h1>
                  <p className="text-muted-foreground">Manage and review all appointment requests</p>
                </div>
              </div>

              <div className="card-healthcare">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">ID</th>
                        <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Patient</th>
                        <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Doctor</th>
                        <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Specialty</th>
                        <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Date & Time</th>
                        <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Status</th>
                        <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {appointmentList.map((apt) => (
                        <tr key={apt.id} className="border-b border-border/50 hover:bg-muted/30">
                          <td className="py-3 px-4 text-sm text-muted-foreground">#{apt.id}</td>
                          <td className="py-3 px-4">
                            <p className="font-medium text-foreground">{apt.patient}</p>
                          </td>
                          <td className="py-3 px-4 text-foreground">{apt.doctor}</td>
                          <td className="py-3 px-4 text-foreground">{apt.specialty}</td>
                          <td className="py-3 px-4">
                            <p className="text-foreground">{apt.date}</p>
                            <p className="text-xs text-muted-foreground">{apt.time}</p>
                          </td>
                          <td className="py-3 px-4">
                            <Badge
                              className={
                                apt.status === "approved"
                                  ? "badge-status-approved"
                                  : apt.status === "rejected"
                                  ? "badge-status-rejected"
                                  : apt.status === "completed"
                                  ? "bg-blue-100 text-blue-800"
                                  : "badge-status-pending"
                              }
                            >
                              {apt.status}
                            </Badge>
                          </td>
                          <td className="py-3 px-4">
                            {apt.status === "pending" ? (
                              <div className="flex items-center gap-2">
                                <Button
                                  size="sm"
                                  className="bg-accent hover:bg-accent/90 text-white"
                                  onClick={() => handleAppointmentAction(apt.id, "approved")}
                                >
                                  <CheckCircle className="w-4 h-4 mr-1" />
                                  Approve
                                </Button>
                                <Button
                                  size="sm"
                                  variant="destructive"
                                  onClick={() => handleAppointmentAction(apt.id, "rejected")}
                                >
                                  <XCircle className="w-4 h-4 mr-1" />
                                  Reject
                                </Button>
                              </div>
                            ) : apt.status === "approved" ? (
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => handleAppointmentAction(apt.id, "completed")}
                              >
                                Mark Complete
                              </Button>
                            ) : null}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeTab === "doctors" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-2xl font-bold text-foreground">Doctor Management</h1>
                  <p className="text-muted-foreground">Manage doctor profiles and schedules</p>
                </div>
                <Button className="btn-healthcare">Add New Doctor</Button>
              </div>
              <div className="card-healthcare text-center py-12">
                <UserCog className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">Doctor management features will be displayed here</p>
              </div>
            </div>
          )}

          {activeTab === "patients" && (
            <div className="space-y-6">
              <div>
                <h1 className="text-2xl font-bold text-foreground">Patient Management</h1>
                <p className="text-muted-foreground">View and manage patient records</p>
              </div>
              <div className="card-healthcare text-center py-12">
                <Users className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">Patient management features will be displayed here</p>
              </div>
            </div>
          )}

          {activeTab === "enquiries" && (
            <div className="space-y-6">
              <div>
                <h1 className="text-2xl font-bold text-foreground">Enquiry Management</h1>
                <p className="text-muted-foreground">Respond to patient enquiries</p>
              </div>
              <div className="card-healthcare">
                <div className="space-y-4">
                  {enquiries.map((enquiry) => (
                    <div key={enquiry.id} className="flex items-start justify-between p-4 rounded-lg border border-border">
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="font-medium text-foreground">{enquiry.name}</p>
                          {enquiry.status === "unread" && (
                            <span className="w-2 h-2 rounded-full bg-primary" />
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground">{enquiry.email}</p>
                        <Badge variant="secondary" className="mt-2">{enquiry.type}</Badge>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-muted-foreground">{enquiry.date}</p>
                        <Button size="sm" variant="outline" className="mt-2">Reply</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === "payments" && (
            <div className="space-y-6">
              <div>
                <h1 className="text-2xl font-bold text-foreground">Payment Tracking</h1>
                <p className="text-muted-foreground">Monitor and manage payments</p>
              </div>
              <div className="card-healthcare text-center py-12">
                <CreditCard className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">Payment tracking features will be displayed here</p>
              </div>
            </div>
          )}

          {/* Super Admin Only Sections */}
          {isSuperAdmin && activeTab === "users" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-2xl font-bold text-foreground">User Management</h1>
                  <p className="text-muted-foreground">Manage admin accounts and permissions</p>
                </div>
                <Button className="btn-healthcare">Add Admin User</Button>
              </div>
              <div className="card-healthcare text-center py-12">
                <Shield className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">User management features (Super Admin only)</p>
              </div>
            </div>
          )}

          {isSuperAdmin && activeTab === "settings" && (
            <div className="space-y-6">
              <div>
                <h1 className="text-2xl font-bold text-foreground">System Settings</h1>
                <p className="text-muted-foreground">Configure system-wide settings</p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="card-healthcare">
                  <div className="flex items-center gap-3 mb-4">
                    <Building className="w-6 h-6 text-primary" />
                    <h3 className="font-semibold">Hospital Information</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">Configure hospital details, address, and contact info</p>
                </div>
                <div className="card-healthcare">
                  <div className="flex items-center gap-3 mb-4">
                    <Key className="w-6 h-6 text-primary" />
                    <h3 className="font-semibold">Security Settings</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">Manage security policies and access controls</p>
                </div>
                <div className="card-healthcare">
                  <div className="flex items-center gap-3 mb-4">
                    <CreditCard className="w-6 h-6 text-primary" />
                    <h3 className="font-semibold">Payment Gateway</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">Configure payment processing settings</p>
                </div>
                <div className="card-healthcare">
                  <div className="flex items-center gap-3 mb-4">
                    <Database className="w-6 h-6 text-primary" />
                    <h3 className="font-semibold">Backup & Restore</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">Manage database backups and restoration</p>
                </div>
              </div>
            </div>
          )}

          {isSuperAdmin && activeTab === "content" && (
            <div className="space-y-6">
              <div>
                <h1 className="text-2xl font-bold text-foreground">Content Management</h1>
                <p className="text-muted-foreground">Manage website content and media</p>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="card-healthcare cursor-pointer hover:shadow-healthcare-hover">
                  <FileText className="w-8 h-8 text-primary mb-3" />
                  <h3 className="font-semibold">Homepage Sections</h3>
                  <p className="text-sm text-muted-foreground mt-1">Edit hero, about, services</p>
                </div>
                <div className="card-healthcare cursor-pointer hover:shadow-healthcare-hover">
                  <MessageSquare className="w-8 h-8 text-primary mb-3" />
                  <h3 className="font-semibold">Testimonials</h3>
                  <p className="text-sm text-muted-foreground mt-1">Manage patient reviews</p>
                </div>
                <div className="card-healthcare cursor-pointer hover:shadow-healthcare-hover">
                  <Image className="w-8 h-8 text-primary mb-3" />
                  <h3 className="font-semibold">Gallery</h3>
                  <p className="text-sm text-muted-foreground mt-1">Manage images and media</p>
                </div>
              </div>
            </div>
          )}

          {isSuperAdmin && activeTab === "analytics" && (
            <div className="space-y-6">
              <div>
                <h1 className="text-2xl font-bold text-foreground">Analytics & Reports</h1>
                <p className="text-muted-foreground">Comprehensive business analytics</p>
              </div>
              <div className="card-healthcare text-center py-12">
                <BarChart3 className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">Advanced analytics and reporting (Super Admin only)</p>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
