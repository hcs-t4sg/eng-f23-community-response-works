// import { createServerSupabaseClient } from "@/lib/server-utils";
import '../assets/styles.css';
import crw from "../assets/crw-stacked.png";
export default function Footer() {
  // Create supabase server component client and obtain user session from stored cookie
  // const supabase = createServerSupabaseClient();
  // const {
  //   data: { session },
  // } = await supabase.auth.getSession();
  return (
    <nav className="footer">
      <div className="left">
        <a href="https://www.communityresponse.works/">
          <img src={crw} className="crw-container"/>
        </a>
      </div>
      <div></div>
      <div className="right">
          <a href="/contactUs" className="nav-link">
            Contact Us!
          </a>
      </div>
      
    </nav>
  );
}
