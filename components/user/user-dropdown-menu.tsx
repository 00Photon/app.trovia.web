import Link from "next/link";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { LogOut, LayoutDashboard } from "lucide-react";

interface UserDropdownMenuProps {
  user: any;
  profile: any;
  initials: string;
  logout: () => void;
}

export function UserDropdownMenu({ user, profile, initials, logout }: UserDropdownMenuProps) {
  const avatarSrc = profile?.avatar || user?.avatar;
  const firstName = profile?.firstName || user?.firstName;
  const lastName = profile?.lastName || user?.lastName;
  const email = profile?.email || user?.email;
  const role = profile?.role || user?.role;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="cursor-pointer">
          {avatarSrc ? (
            <AvatarImage src={avatarSrc} alt={firstName} />
          ) : (
            <AvatarFallback>{initials}</AvatarFallback>
          )}
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <div className="px-2 py-2">
          <div className="font-semibold text-sm">{firstName} {lastName}</div>
          <div className="text-xs text-gray-500 truncate">{email}</div>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href={role === "admin" ? "/admin" : "/account"}>
            <span className="flex items-center gap-2">
              <LayoutDashboard className="w-4 h-4" />
              {role === "admin" ? "Admin Dashboard" : "Account"}
            </span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={logout} className="text-red-600">
          <LogOut className="w-4 h-4 mr-2" /> Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
} 