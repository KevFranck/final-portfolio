import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          background:
            "radial-gradient(circle at top, rgba(56,189,248,0.25), transparent 32%), linear-gradient(180deg, #06101c 0%, #07111b 40%, #030712 100%)",
          color: "#e2e8f0",
          padding: "56px",
          fontFamily: "Avenir Next, Segoe UI, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "32px",
            padding: "40px",
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(15,23,42,0.52))",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              fontSize: 20,
              color: "#bae6fd",
              letterSpacing: "0.24em",
              textTransform: "uppercase",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 52,
                height: 52,
                borderRadius: 999,
                border: "1px solid rgba(125,211,252,0.2)",
                background: "rgba(56,189,248,0.08)",
              }}
            >
              KO
            </div>
            Kevin Owona
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "24px", maxWidth: 920 }}>
            <div
              style={{
                fontSize: 72,
                lineHeight: 1,
                letterSpacing: "-0.05em",
                fontWeight: 700,
                color: "#ffffff",
              }}
            >
              Web Developer, Cloud & DevOps Enthusiast, Automation Engineer
            </div>
            <div
              style={{
                fontSize: 28,
                lineHeight: 1.5,
                color: "#cbd5e1",
              }}
            >
              Building web applications, cloud-ready systems, and AI-powered workflows for real
              operational use.
            </div>
          </div>

          <div
            style={{
              display: "flex",
              gap: "16px",
              flexWrap: "wrap",
            }}
          >
            {["React & Next.js", "Python & APIs", "Cloud", "DevOps", "Automation"].map(
              (item) => (
                <div
                  key={item}
                  style={{
                    display: "flex",
                    padding: "10px 18px",
                    borderRadius: 999,
                    border: "1px solid rgba(125,211,252,0.2)",
                    background: "rgba(56,189,248,0.08)",
                    color: "#e0f2fe",
                    fontSize: 20,
                  }}
                >
                  {item}
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
