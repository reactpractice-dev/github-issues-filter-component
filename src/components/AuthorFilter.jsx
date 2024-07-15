import { useEffect, useState } from "react";
import octokit from "../api/github-api";
import GithubFilter from "./GithubFilter";

const AuthorFilter = () => {
  const [authors, setAuthors] = useState([]);
  useEffect(() => {
    const fetchAuthors = async () => {
      const { data } = await octokit.request(
        "GET /repos/{owner}/{repo}/contributors",
        {
          owner: "facebook",
          repo: "react",
        }
      );
      setAuthors(data);
    };
    fetchAuthors();
  }, []);

  // todo - render authors
  return (
    <GithubFilter
      name="Author"
      header="Filter by author"
      placeholder="Filter authors"
      items={authors}
      renderItem={(author) => author.login}
    />
  );
};
export default AuthorFilter;
