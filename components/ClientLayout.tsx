"use client";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { GoogleTagManager } from "@next/third-parties/google";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <>
      <GoogleTagManager gtmId="GTM-5PVXPTWP" />
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.4 }}
        >
          <Header />
          <main className="mx-auto mb-20 min-h-screen">{children}</main>
          <Footer />
        </motion.div>
      </AnimatePresence>
    </>
  );
}
