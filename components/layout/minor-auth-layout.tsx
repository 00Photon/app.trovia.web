import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import WithMinorLayoutContainer from "@/components/layout/with-minor-layout";
import type { ReactNode } from "react";

interface MinorAuthLayoutProps {
  title: string;
  description?: string;
  children: ReactNode;
}

export default function MinorAuthLayout({ title, description, children }: MinorAuthLayoutProps) {
  return (
    <WithMinorLayoutContainer>
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto">
          <Card className="shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold text-teal-800">{title}</CardTitle>
              {description && <CardDescription>{description}</CardDescription>}
            </CardHeader>
            <CardContent>
              {children}
            </CardContent>
          </Card>
        </div>
      </main>
    </WithMinorLayoutContainer>
  );
} 