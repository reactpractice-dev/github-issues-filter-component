import octokit from "../api/github-api";
import GithubFilter from "./GithubFilter";
import { useQuery } from "@tanstack/react-query";

const MilestoneFilter = () => {
  const { data: milestones } = useQuery({
    queryKey: ["milestones"],
    queryFn: async () => {
      const { data } = await octokit.request(
        "GET /repos/{owner}/{repo}/milestones",
        {
          owner: "facebook",
          repo: "react",
        }
      );
      return data;
    },
  });

  return (
    <GithubFilter
      title="Milestones"
      items={milestones}
      renderItem={(milestone) => milestone.title}
      filterFn={(milestone, query) =>
        new RegExp(query, "i").test(milestone.title)
      }
    />
  );
};

export default MilestoneFilter;
