'use client'
import React, { useState } from "react";
import { Bell, CheckCircle, XCircle, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Notification {
  id: number;
  message: string;
  type: "info" | "success" | "error";
  time: string;
  read: boolean;
}

const AdminNotifications = () => {
  const [notifications, setNotifications] = useState<Notification[]>([
    { id: 1, message: "New student registered", type: "info", time: "2m ago", read: false },
    { id: 2, message: "Teacher submitted grades", type: "success", time: "1h ago", read: false },
    { id: 3, message: "Payment received from John Doe", type: "success", time: "3h ago", read: true },
    { id: 4, message: "System maintenance scheduled", type: "error", time: "1d ago", read: false },
  ]);

  const markAsRead = (id: number) => {
    setNotifications(notifications.map((n) => (n.id === id ? { ...n, read: true } : n)));
  };

  const getNotificationStyles = (type: Notification["type"], read: boolean) => {
    const baseStyles = "transition-all duration-300 ease-in-out";
    
    if (read) {
      return cn(
        baseStyles,
        "bg-muted/50 dark:bg-muted/20"
      );
    }

    switch (type) {
      case "success":
        return cn(
          baseStyles,
          "bg-custom-green-emerald/10 dark:bg-custom-green-emerald/20"
        );
      case "error":
        return cn(
          baseStyles,
          "bg-custom-alerts-danger/10 dark:bg-custom-alerts-danger/20"
        );
      default:
        return cn(
          baseStyles,
          "bg-custom-blue-dodger/10 dark:bg-custom-blue-dodger/20"
        );
    }
  };

  const getIconColor = (type: Notification["type"]) => {
    switch (type) {
      case "success":
        return "text-custom-alerts-success dark:text-custom-green-emerald";
      case "error":
        return "text-custom-alerts-danger dark:text-destructive";
      default:
        return "text-custom-blue-dodger dark:text-custom-blue-dodger";
    }
  };

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <div className="glass-card dark:bg-card/30 p-6 rounded-xl">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="bg-primary/10 dark:bg-primary/20 p-2 rounded-lg">
              <Bell className="w-5 h-5 text-primary dark:text-primary" />
            </div>
            <h2 className="text-xl font-semibold text-foreground">Notifications</h2>
          </div>
          <span className="text-sm text-muted-foreground">
            {notifications.filter(n => !n.read).length} unread
          </span>
        </div>

        <div className="space-y-3">
          {notifications.map((notif) => (
            <div
              key={notif.id}
              className={cn(
                "p-4 flex items-center justify-between rounded-lg shadow-sm border border-border/50",
                "hover:shadow-md transition-all duration-300",
                getNotificationStyles(notif.type, notif.read)
              )}
            >
              <div className="flex items-center gap-3">
                <div className={cn(
                  "rounded-full p-2",
                  "bg-background/80 dark:bg-background/50",
                  getIconColor(notif.type)
                )}>
                  {notif.type === "success" && <CheckCircle className="w-4 h-4" />}
                  {notif.type === "error" && <XCircle className="w-4 h-4" />}
                  {notif.type === "info" && <Info className="w-4 h-4" />}
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">{notif.message}</p>
                  <p className="text-xs text-muted-foreground">{notif.time}</p>
                </div>
              </div>
              {!notif.read && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => markAsRead(notif.id)}
                  className="text-custom-blue-dodger hover:text-custom-blue-dodger/90 dark:text-custom-blue-dodger/90 dark:hover:text-custom-blue-dodger"
                >
                  Mark as read
                </Button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminNotifications;