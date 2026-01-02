import { create } from "zustand";
import { persist } from "zustand/middleware";
import { userService } from "@/services/user.service";

interface Profile {
  id: string;
  email: string;
  phone: string;
  firstName: string;
  lastName: string;
  role?: string;
  avatar?: string | null;
  bio?: string | null;
  skills?: string[];
  latitude?: number | null;
  longitude?: number | null;
  locationRadius?: number | null;
  emailVerificationStatus?: string;
  phoneVerificationStatus?: string;
  idVerificationStatus?: string;
  twoFactorEnabled?: boolean;
  twoFactorSecret?: string | null;
  trustScore?: string;
  totalJobs?: number;
  completedJobs?: number;
  isActive?: boolean;
  lastLoginAt?: string | null;
  lastLocationUpdate?: string | null;
  community?: string | null;
  createdAt?: string;
  updatedAt?: string;
  [key: string]: any;
}

interface ProfileStore {
  profile: Profile | null;
  loading: boolean;
  error: string | null;
  fetchProfile: () => Promise<void>;
  setProfile: (profile: Profile | null) => void;
}

export const useProfileStore = create<ProfileStore>()(
  persist(
    (set) => ({
      profile: null,
      loading: false,
      error: null,
      setProfile: (profile) => set({ profile }),
      fetchProfile: async () => {
        set({ loading: true, error: null });
        try {
          const data = await userService.getProfile();
          set({ profile: data, loading: false });
        } catch (err: any) {
          set({ error: err?.message || "Failed to fetch profile", loading: false });
        }
      },
    }),
    {
      name: "profile-store",
      partialize: (state) => ({ profile: state.profile }),
    }
  )
); 