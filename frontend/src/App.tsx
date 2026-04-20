import { AppRouter } from "@/routes/app-router";
import { ThemeProvider } from "@/context/theme-context";

export default function App() {
  return (
    <ThemeProvider>
      <AppRouter />
    </ThemeProvider>
  );
}
