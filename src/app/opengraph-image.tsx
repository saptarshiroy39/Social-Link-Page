import { ImageResponse } from "next/og";
import { DATA } from "@/data/resume";

export const runtime = "edge";

export const alt = DATA.name;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

const getFontData = async () => {
  try {
    // Fetch Lexend font from Google Fonts
    const lexendRegular = await fetch(
      "https://fonts.gstatic.com/s/lexend/v21/wlpwgwvFAVdoq2_F94zlCfv0bz1WCzsX_LBte6KuGEo.woff",
    ).then((res) => res.arrayBuffer());

    const lexendSemibold = await fetch(
      "https://fonts.gstatic.com/s/lexend/v21/wlpwgwvFAVdoq2_F94zlCfv0bz1WC9MU_LBte6KuGEo.woff",
    ).then((res) => res.arrayBuffer());

    return { lexendRegular, lexendSemibold };
  } catch (error) {
    console.error("Failed to load fonts:", error);
    return null;
  }
};

const styles = {
  outerWrapper: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#ffffff",
    position: "relative",
  },
  middleWrapper: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#ffffff",
    position: "relative",
    padding: "40px",
  },
  wrapper: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#fafafa",
    position: "relative",
    padding: "40px",
    border: "1px solid #e5e5e5",
    borderRadius: "12px",
  },
  imageSection: {
    position: "absolute",
    top: "40px",
    left: "40px",
    display: "flex",
    alignItems: "center",
    zIndex: "2",
  },
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-end",
    height: "100%",
    width: "100%",
    position: "relative",
    zIndex: "1",
  },
  image: {
    width: "140px",
    height: "140px",
    borderRadius: "24px",
    border: "4px solid #e5e5e5",
    objectFit: "cover",
  },
  title: {
    fontFamily: "Lexend",
    fontSize: "48px",
    fontWeight: "600",
    lineHeight: "1.1",
    textAlign: "left",
    color: "#000000",
    marginBottom: "16px",
    letterSpacing: "-0.02em",
    maxWidth: "900px",
  },
  description: {
    fontSize: "20px",
    fontWeight: "400",
    lineHeight: "1.5",
    textAlign: "left",
    maxWidth: "800px",
    color: "#404040",
    marginBottom: "32px",
    textWrap: "balance",
  },
} as const;

export default async function Image() {
  try {
    const fontData = await getFontData();
    const imageUrl = DATA.avatarUrl
      ? new URL(DATA.avatarUrl, DATA.url).toString()
      : undefined;

    return new ImageResponse(
      <div style={styles.outerWrapper}>
        <div style={styles.middleWrapper}>
          <div style={styles.wrapper}>
            {imageUrl && (
              <div style={styles.imageSection}>
                <img src={imageUrl} alt={DATA.name} style={styles.image} />
              </div>
            )}
            <div style={styles.mainContainer}>
              <div style={styles.title}>{DATA.name}</div>
              {DATA.description && (
                <div style={styles.description}>{DATA.description}</div>
              )}
            </div>
          </div>
        </div>
      </div>,
      {
        ...size,
        fonts: fontData
          ? [
              {
                name: "Lexend",
                data: fontData.lexendRegular,
                weight: 400,
                style: "normal",
              },
              {
                name: "Lexend",
                data: fontData.lexendSemibold,
                weight: 600,
                style: "normal",
              },
            ]
          : undefined,
      },
    );
  } catch (error) {
    console.error("Error generating OpenGraph image:", error);
    return new Response(
      `Failed to generate image: ${error instanceof Error ? error.message : "Unknown error"}`,
      {
        status: 500,
      },
    );
  }
}
