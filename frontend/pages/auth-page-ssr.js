import { tokenService } from "../src/services/auth/tokenService";
import nookies from "nookies";

function AuthPageSSR(props) {
  return (
    <div>
      <h1>Auth Page Server Side Render</h1>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </div>
  );
}

export default AuthPageSSR;

export async function getServerSideProps(ctx) {
  console.log(tokenService.get(ctx));

  const cookies = nookies.get(ctx);
  console.log("cookies", cookies);

  return {
    props: {
      token: tokenService.get(ctx),
    },
  };
}
