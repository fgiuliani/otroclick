import auth0 from "../lib/auth0";
import Layout from "../components/layout";
import { GetServerSideProps } from "next";

export default function Profile({ user }) {
  return (
    <Layout user={user}>
      <h1>Profile</h1>

      <div>
        <p>username: {user.nickname}</p>
        <p>name: {user.name}</p>
      </div>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await auth0.getSession(context.req);

  if (!session || !session.user) {
    context.res.writeHead(302, {
      Location: "/api/login",
    });
    context.res.end();
    return;
  }

  return { props: { user: session.user } };
};
