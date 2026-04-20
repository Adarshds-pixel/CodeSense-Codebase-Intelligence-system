import { Navigate, Route, Routes } from "react-router-dom";
import { AppLayout } from "@/layouts/app-layout";
import { AuthLayout } from "@/layouts/auth-layout";
import { LandingPage } from "@/pages/landing-page";
import { LoginPage } from "@/pages/login-page";
import { RegisterPage } from "@/pages/register-page";
import { ForgotPasswordPage } from "@/pages/forgot-password-page";
import { DashboardPage } from "@/pages/dashboard-page";
import { RepositoryListPage } from "@/pages/repository-list-page";
import { RepositoryUploadPage } from "@/pages/repository-upload-page";
import { GithubConnectionPage } from "@/pages/github-connection-page";
import { RepositoryDetailsPage } from "@/pages/repository-details-page";
import { FileExplorerPage } from "@/pages/file-explorer-page";
import { AiChatPage } from "@/pages/ai-chat-page";
import { DocumentationPage } from "@/pages/documentation-page";
import { DependencyGraphPage } from "@/pages/dependency-graph-page";
import { AnalyticsPage } from "@/pages/analytics-page";
import { SettingsPage } from "@/pages/settings-page";

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      </Route>
      <Route element={<AppLayout />}>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/repositories" element={<RepositoryListPage />} />
        <Route path="/upload" element={<RepositoryUploadPage />} />
        <Route path="/github" element={<GithubConnectionPage />} />
        <Route path="/repositories/:id" element={<RepositoryDetailsPage />} />
        <Route path="/explorer" element={<FileExplorerPage />} />
        <Route path="/chat" element={<AiChatPage />} />
        <Route path="/documentation" element={<DocumentationPage />} />
        <Route path="/dependency-graph" element={<DependencyGraphPage />} />
        <Route path="/analytics" element={<AnalyticsPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
