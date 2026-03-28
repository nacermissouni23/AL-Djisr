"use client";

import { usePathname } from "next/navigation";
import Script from "next/script";
import { useEffect } from "react";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

function trackEvent(eventName: string, params: Record<string, unknown> = {}) {
  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, params);
  }
}

export function AnalyticsProvider() {
  const pathname = usePathname();

  useEffect(() => {
    trackEvent("page_view", {
      page_path: pathname,
    });
  }, [pathname]);

  useEffect(() => {
    const reachedDepth = new Set<number>();
    const thresholds = [25, 50, 75, 100];

    const onScroll = () => {
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (documentHeight <= 0) {
        return;
      }

      const currentDepth = Math.round((window.scrollY / documentHeight) * 100);
      thresholds.forEach((threshold) => {
        if (currentDepth >= threshold && !reachedDepth.has(threshold)) {
          reachedDepth.add(threshold);
          trackEvent("scroll_depth", {
            percent: threshold,
          });
        }
      });
    };

    const onClick = (event: MouseEvent) => {
      const target = (event.target as HTMLElement | null)?.closest("[data-track]");
      if (!target) {
        return;
      }

      const eventName = target.getAttribute("data-track") ?? "interaction";
      const label = target.textContent?.trim() ?? "unknown";

      trackEvent(eventName, {
        label,
        page_path: pathname,
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("click", onClick);

    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("click", onClick);
    };
  }, [pathname]);

  if (!GA_ID) {
    return null;
  }

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', '${GA_ID}', { send_page_view: false });
        `}
      </Script>
    </>
  );
}
