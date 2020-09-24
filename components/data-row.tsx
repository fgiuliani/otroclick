import Router from "next/router";

interface Props {
  title: string;
  user?: any;
  username: string;
  slug: string;
  url: string;
  description: string;
}

export default function DataRow({
  title,
  user,
  username,
  slug,
  url,
  description,
}: Props) {
  const onClick = async () => {
    try {
      const res = await fetch(`/api/${username}/${slug}/delete`, {
        method: "DELETE",
      });
      if (res.status === 200) {
        Router.push(`/${username}/`);
      } else {
        throw new Error(await res.text());
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <p>
        <a href={url} target="_blank">
          {title}
        </a>
      </p>
      <p>{description}</p>
      {user && user.nickname === username ? (
        <div>
          <button onClick={onClick}>Delete</button>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
