import { FormInput } from "lucide-react";
import { ThemeBtn } from "./ThemeBtn";

export default function Header() {
    return (
        <header className="px-14 py-4 flex items-center justify-between">
            <FormInput className="text-primary w-8 h-8" />
            <ThemeBtn />
        </header>
    )
}
