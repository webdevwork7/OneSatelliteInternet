import type React from "react"
import "@/app/globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { siteConfig } from "@/lib/constants"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
  
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
  
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="relative flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
        </ThemeProvider>

        <Script id="trackwiser-analytics" strategy="afterInteractive">
      {`
        (function() {
          var trackingCode = 's1y9dxtwsgdt799673npa';
          var apiUrl = 'https://ltluebewuhheisbbjcss.supabase.co/functions/v1/track-event';
          var heatmapApiUrl = 'https://ltluebewuhheisbbjcss.supabase.co/functions/v1/track-heatmap';
          
          function getVisitorId() {
            var visitorId = localStorage.getItem('tw_visitor_id');
            if (!visitorId) {
              visitorId = 'visitor_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
              localStorage.setItem('tw_visitor_id', visitorId);
            }
            return visitorId;
          }
          
          function getSessionId() {
            var sessionId = sessionStorage.getItem('tw_session_id');
            if (!sessionId) {
              sessionId = 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
              sessionStorage.setItem('tw_session_id', sessionId);
            }
            return sessionId;
          }
          
          function sendEvent(eventType, eventData) {
            var data = {
              tracking_code: trackingCode,
              event_type: eventType || 'page_view',
              visitor_id: getVisitorId(),
              session_id: getSessionId(),
              page_url: window.location.href,
              referrer: document.referrer || '',
              user_agent: navigator.userAgent,
              timestamp: new Date().toISOString(),
              data: eventData || {}
            };
            
            console.log('TrackWiser: Sending event', eventType, data);
            
            fetch(apiUrl, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(data)
            }).then(res => res.json())
            .then(result => {
              if (result.success) {
                console.log('TrackWiser: Event sent successfully', result);
              } else {
                console.error('TrackWiser: Failed to send event', result);
              }
            }).catch(err => console.error('TrackWiser: Error sending event:', err));
          }
          
          if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => sendEvent('page_view'));
          } else {
            sendEvent('page_view');
          }
          
          function sendHeatmapEvent(eventType, element, x, y) {
            var elementInfo = '';
            var elementText = '';
            if (element) {
              elementText = element.textContent?.trim().substring(0, 100) || element.innerText?.trim().substring(0, 100) || '';
              var selector = element.tagName.toLowerCase();
              if (element.id) selector += '#' + element.id;
              else if (element.className) {
                var classes = element.className.split(' ').filter(c => c.length > 0 && !c.includes('bg-') && !c.includes('text-') && !c.includes('border-') && !c.includes('rounded-'));
                if (classes.length > 0) selector += '.' + classes.slice(0, 3).join('.');
              }
              elementInfo = (elementText.length > 0 && elementText.length < 50) ? elementText : selector;
            }
            var data = {
              tracking_code: trackingCode,
              event_type: eventType,
              page_url: window.location.href,
              x_position: x,
              y_position: y,
              element_selector: elementInfo,
              element_text: elementText,
              session_id: getSessionId(),
              visitor_id: getVisitorId()
            };
            console.log('TrackWiser: Sending heatmap event', eventType, data);
            fetch(heatmapApiUrl, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(data)
            }).catch(err => console.error('TrackWiser: Error sending heatmap event', err));
          }
          
          document.addEventListener('click', e => {
            var target = e.target;
            if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.classList.contains('trackable')) {
              sendEvent('click', {
                element: target.tagName,
                text: target.textContent || target.innerText || '',
                href: target.href || '',
                class: target.className || ''
              });
            }
            sendHeatmapEvent('click', target, e.clientX, e.clientY);
          });
          
          document.addEventListener('submit', e => {
            var form = e.target;
            if (form.tagName === 'FORM') {
              sendEvent('form_submit', {
                form_id: form.id || '',
                form_name: form.name || '',
                action: form.action || ''
              });
              sendHeatmapEvent('form_submit', form, 0, 0);
            }
          });
          
          var maxScroll = 0, lastScrollTime = 0;
          window.addEventListener('scroll', () => {
            var scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
            if (scrollPercent > maxScroll && scrollPercent % 25 === 0) {
              maxScroll = scrollPercent;
              sendEvent('scroll', { depth: scrollPercent });
            }
            var now = Date.now();
            if (now - lastScrollTime > 1000) {
              sendHeatmapEvent('scroll', null, 0, window.scrollY);
              lastScrollTime = now;
            }
          });
          
          var hoverTimeout;
          document.addEventListener('mouseover', e => {
            clearTimeout(hoverTimeout);
            hoverTimeout = setTimeout(() => {
              sendHeatmapEvent('hover', e.target, e.clientX, e.clientY);
            }, 500);
          });
          
          var startTime = Date.now();
          window.addEventListener('beforeunload', () => {
            var timeSpent = Math.round((Date.now() - startTime) / 1000);
            sendEvent('time_on_page', { seconds: timeSpent });
          });
          
          window.trackWiser = {
            track: sendEvent,
            getVisitorId: getVisitorId,
            getSessionId: getSessionId
          };
          
          console.log('TrackWiser Analytics initialized for One Satellite');
        })();
      `}
    </Script>
    </body>
    </html>
  )
}
