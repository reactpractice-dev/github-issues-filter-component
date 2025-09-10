import octokit from "../api/github-api";
import GithubFilter from "./GithubFilter";
import { useQuery } from "@tanstack/react-query";

const LabelFilter = () => {
  const { data: labels } = useQuery({
    queryKey: ["labels"],
    queryFn: async () => {
      const { data } = await octokit.request(
        "GET /repos/{owner}/{repo}/labels",
        {
          owner: "facebook",
          repo: "react",
        }
      );
      return data;
    },
  });

  console.log("labels", labels);

  return (
    <GithubFilter
      title="Label"
      items={labels}
      renderItem={(label) => label.name}
    />
  );
};

export default LabelFilter;
