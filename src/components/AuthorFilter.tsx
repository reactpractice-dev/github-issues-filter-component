import octokit from "../api/github-api";
import GithubFilter from "./GithubFilter";
import { useQuery } from "@tanstack/react-query";

const AuthorFilter = () => {
  const { data: authors } = useQuery({
    queryKey: ["authors"],
    queryFn: async () => {
      const { data } = await octokit.request(
        "GET /repos/{owner}/{repo}/contributors",
        {
          owner: "facebook",
          repo: "react",
        }
      );
      return data;
    },
  });

  console.log("authors", authors);

  // todo - render authors
  return <GithubFilter title="Author" />;
};
export default AuthorFilter;
