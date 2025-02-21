"use client"
import {
  Bell,
  Book,
  Calendar,
  Clipboard,
  Cloud,
  Code,
  Database,
  FileText,
  Github,
  Group,
  HomeIcon,
  Info,
  Lock,
  Mail,
  Settings,
  Terminal,
  User,
} from "lucide-react"

import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarHeader } from "@/components/ui/sidebar"
import AppFooter from "./app-footer"
import type { Links } from "@/lib/interfaces"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"

type SidebarProps = {
  role: "ADMIN" | "TEACHER" | "STUDENT" | "DEVELOPER" | "PARENT"
}

const getSidebarLinks = (role: SidebarProps["role"]): Links[] => {
  switch (role) {
    case "ADMIN":
      return [
        { name: "Dashboard", icon: <HomeIcon />, href: "/admin" },
        { name: "Users", icon: <User />, href: "/admin/users" },
        { name: "Roles & Permissions", icon: <Lock />, href: "/admin/roles" },
        { name: "Reports", icon: <Clipboard />, href: "/admin/reports" },
        { name: "Settings", icon: <Settings />, href: "/admin/settings" },
        { name: "Notifications", icon: <Bell />, href: "/admin/notifications" },
        { name: "School Info", icon: <Info />, href: "/admin/school-info" },
      ]

    case "TEACHER":
      return [
        { name: "Dashboard", icon: <HomeIcon />, href: "/teacher" },
        { name: "Classes", icon: <Group />, href: "/teacher/classes" },
        { name: "Exams", icon: <Clipboard />, href: "/teacher/exams" },
        { name: "Assignments", icon: <Book />, href: "/teacher/assignments" },
        { name: "Gradebook", icon: <FileText />, href: "/teacher/gradebook" },
        { name: "Students", icon: <User />, href: "/teacher/students" },
        { name: "Resources", icon: <Cloud />, href: "/teacher/resources" },
      ]

    case "STUDENT":
      return [
        { name: "Dashboard", icon: <HomeIcon />, href: "/student" },
        { name: "My Classes", icon: <Group />, href: "/student/classes" },
        { name: "My Exams", icon: <Clipboard />, href: "/student/exams" },
        { name: "Assignments", icon: <Book />, href: "/student/assignments" },
        { name: "Grades", icon: <FileText />, href: "/student/grades" },
        { name: "Resources", icon: <Cloud />, href: "/student/resources" },
        { name: "Profile", icon: <User />, href: "/student/profile" },
      ]

    case "DEVELOPER":
      return [
        { name: "Dashboard", icon: <HomeIcon />, href: "/developer" },
        { name: "API Docs", icon: <Code />, href: "/developer/api" },
        { name: "Server Logs", icon: <Terminal />, href: "/developer/logs" },
        { name: "Settings", icon: <Settings />, href: "/developer/settings" },
        { name: "Database", icon: <Database />, href: "/developer/database" },
        { name: "GitHub", icon: <Github />, href: "https://github.com/your-repository" },
      ]

    case "PARENT":
      return [
        { name: "Dashboard", icon: <HomeIcon />, href: "/parent" },
        { name: "My Children", icon: <User />, href: "/parent/children" },
        { name: "Reports", icon: <Clipboard />, href: "/parent/reports" },
        { name: "Grades", icon: <FileText />, href: "/parent/grades" },
        { name: "Attendance", icon: <Calendar />, href: "/parent/attendance" },
        { name: "Messages", icon: <Mail />, href: "/parent/messages" },
        { name: "Settings", icon: <Settings />, href: "/parent/settings" },
      ]

    default:
      return []
  }
}

const AppSidebar = (props: SidebarProps) => {
  const sidebarLinks = getSidebarLinks(props.role)
  const pathname = usePathname()

  return (
    <Sidebar className="bg-custom-blue-midnight  dark:bg-custom-blue-midnight border-r-2 border-sidebar-border">
      <SidebarHeader className="text-sidebar-foreground">
        <h2 className="w-full text-4xl text-center my-6 font-bold text-custom-floralwhite">StudyIO</h2>
      </SidebarHeader>
      <SidebarContent>
        {sidebarLinks.map((link, index) => (
          <SidebarGroup key={index} className="text-custom-floralwhite">
            <Link
              href={link.href}
              className={cn(
                "flex flex-row gap-3 items-center p-3 rounded-lg transition-all  duration-300 hover:bg-custom-green-jade",
                pathname === link.href
                  ? "bg-sidebar-primary  font-semibold"
                  : "",
              )}
            >
              {link.icon}
              <span className="text-sm">{link.name}</span>
            </Link>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarFooter>
        <AppFooter />
      </SidebarFooter>
    </Sidebar>
  )
}

export default AppSidebar

