import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #2a1d16 0%, #3b2a21 55%, #b6893f 100%)",
          color: "#faf6ef",
          fontFamily: "serif",
        }}
      >
        <div style={{ fontSize: 28, letterSpacing: 8, textTransform: "uppercase", opacity: 0.8 }}>
          Etihad Plaza · Khalifa City · Abu Dhabi
        </div>
        <div style={{ fontSize: 96, marginTop: 24, display: "flex" }}>{site.name}</div>
        <div style={{ fontSize: 32, marginTop: 16, opacity: 0.85, display: "flex" }}>
          Specialty Coffee &amp; Dessert Café
        </div>
      </div>
    ),
    { ...size }
  );
}
