import React, { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

// 1. Define the interface to tell TypeScript what 'children' is
interface LayoutProps {
  children: ReactNode;
}

// 2. Pass { children } as a prop to the function
const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-white">
                {/* 3. Now 'children' is defined and can be rendered */}
                {children}
            </main>
            <Footer />
        </>
    )
}

export default Layout;