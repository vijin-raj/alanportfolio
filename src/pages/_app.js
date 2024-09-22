import { Layout } from "@/components/Layout";
import { ThemeContextProvider } from "@/theme/fontheme";
import { Container, CssBaseline } from "@mui/material";
import '../styles/globals.css';
import '../styles/Home.module.css';
import "../styles/responsive.css"


export default function App({ Component, pageProps }) {
  return (
    <ThemeContextProvider>
      <CssBaseline />
      <Layout>
      
          <Component {...pageProps} />
       
      </Layout>
    </ThemeContextProvider>
  );
}
