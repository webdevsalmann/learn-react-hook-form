import { ThemeProvider } from "@/context/ThemeContext";
import Header from "./components/Header";
import UserProfileForm from "./UserProfileForm";

export default function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Header />
      <UserProfileForm />
    </ThemeProvider>
  )
}